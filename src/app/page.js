import Link from "next/link"
import { prisma } from "../../prisma/client"
import { TrashIcon } from '@heroicons/react/24/outline'

export default async function Home() {
  const codeBins = await prisma.codeBin.findMany()
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="p-2 flex justify-between">
        <h2 className="text-2xl font-extrabold">CodeBin{"</>"}</h2>
        <Link href="/codebin/create" className="text-xl text-blue-600 font-bold">+ Add Bin</Link>
      </div>
      {codeBins.length === 0 && <h1 className="text-2xl font-bold mb-4">No bins available</h1>}
      {codeBins.map(item => {
        return (
          <div
            className="flex justify-between bg-white border border-gray-300 rounded-md p-4 mb-4"
            key={item.id}>
            <Link
              href={`/codebin/${item.id}`}
              className="text-lg font-semibold"
            >{item.title}
            </Link>
            <form>
              <button
                type="submit"
                className="hover:cursor-pointer">
                <TrashIcon
                  className="h-6 w-6 text-rose-600"
                />
              </button>
            </form>

          </div>
        )
      })}
    </div>
  )
}