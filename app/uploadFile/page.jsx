import Link from "next/link"

const page = () => {
  return (
    <div className="pl-10 pt-5">
      <div className="flex justify-evenly w-full">
        <Link href="/upload-button" className="bg-cyan-200">Upload Image and PDF</Link>
        <Link href="/upload-dnd" className="bg-cyan-200">Drag n Drop Image and PDF</Link>
      </div>
    </div>
  )
}

export default page
