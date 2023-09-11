import { createUploadthing, type FileRouter } from "uploadthing/next";
// import { UserAuth } from "../../context/AuthContext";
 
const f = createUploadthing();
// const { user } = UserAuth();
 
const auth = (req: Request) => ({ id: "fakeId" }); // Fake auth function
 
// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 10 } })
    // Set permissions and file types for this FileRoute
    .middleware(async ({ req }) => {
      // This code runs on your server before upload
      const user = await auth(req);
 
      // If you throw, the user will not be able to upload
      if (!user) throw new Error("Unauthorized");
 
      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userId:", metadata.userId);
 
      console.log("file url", file.url);
    }),

    // Takes a 4 2mb images and/or 1 256mb video
  mediaPost: f({
    image: { maxFileSize: "2MB", maxFileCount: 10 },
    video: { maxFileSize: "256MB", maxFileCount: 1 },
  })
  .middleware(({ req }) => auth(req))
  .onUploadComplete((data) => console.log("file", data)),

    // Define a new FileRoute for PDF files with a unique routeSlug
    pdfUploader: f({ pdf: { maxFileSize: "32MB", maxFileCount: 5 } }) // Adjust maxFileSize and maxFileCount as needed
    .middleware(async ({ req }) => {
      // This code runs on your server before upload
      const user = await auth(req);

      // If you throw, the user will not be able to upload
      if (!user) throw new Error("Unauthorized");

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userId:", metadata.userId);

      console.log("file url", file.url);
    }),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;