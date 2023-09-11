"use client";

import "@uploadthing/react/styles.css";
import { UploadDropzone } from "@uploadthing/react";
import { OurFileRouter } from "../api/uploadthing/core";
import { useState } from "react";
import Link from "next/link";

export default function UploadButtonPage() {
  const [images, setImages] = useState<
    {
      fileUrl: string;
      fileKey: string;
    }[]
  >([]);

  const [pdfs, setPDFs] = useState<
    {
      fileUrl: string;
      fileKey: string;
    }[]
  >([]);

  const titleImages = images.length ? (
    <>
      <p>Image Upload Complete</p>
      <p className="mt-2">{images.length} Files Uploaded</p>
    </>
  ) : null;

  const titlePDFs = pdfs.length ? (
    <>
      <p>PDF Upload Complete</p>
      <p className="mt-2">{pdfs.length} Files Uploaded</p>
    </>
  ) : null;

  const imgList = (
    <>
      {titleImages}
      <ul>
        {images.map((image) => (
          <li key={image.fileUrl} className="mt-2">
            <Link href={image.fileUrl} target="_blank">
              {image.fileUrl}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );

  const pdfList = (
    <>
      {titlePDFs}
      <ul>
        {pdfs.map((pdf) => (
          <li key={pdf.fileUrl} className="mt-2">
            <Link href={pdf.fileUrl} target="_blank">
              {pdf.fileUrl}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <main className="flex min-h-screen flex-row items-start justify-center p-24">
      <div>
        <UploadDropzone<OurFileRouter>
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            if (res) {
              setImages(res);
              const json = JSON.stringify(res);
              console.log(json);
            }
          }}
          onUploadError={(error: Error) => {
            alert(`ERROR! ${error.message}`);
          }}
        />
        {imgList}
      </div>
      <div className="ml-10">
        <UploadDropzone<OurFileRouter>
          endpoint="pdfUploader" // Use the appropriate endpoint for PDF files
          onClientUploadComplete={(res) => {
            if (res) {
              setPDFs(res);
              const json = JSON.stringify(res);
              console.log(json);
            }
          }}
          onUploadError={(error: Error) => {
            alert(`ERROR! ${error.message}`);
          }}
        />
        {pdfList}
      </div>
    </main>
  );
}
