import Link from "next/link"

const page = () => {
  return (
    <div className="pl-10 pt-5">
      <div className="flex justify-evenly w-full">
        <Link href="/upload-button" className="bg-yellow-200">Upload Image</Link>
        <Link href="/upload-dnd" className="bg-yellow-200">Drag n Drop Image</Link>
      </div>
    </div>
  )
}

export default page
