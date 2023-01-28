import openPositions from "@/data/openPositions"
import Link from "next/link"

export default function Page() {
  return (
    <main className="flex flex-col">
      <h1 className="text-3xl font-bold m-4">Open positions:</h1>
      
      <ul className="flex flex-col divide-y">
        {openPositions.map((position, id) => (
          <Link href="./apply">
            <div key={id} className="p-4">
              <div className="flex">
                <h1>{position.title}</h1>
                <span> </span>
                <h1>{position.season}</h1>
              </div>
              <p>{position.description}</p>
            </div>
          </Link>
        ))}
      </ul>
    </main>
  )
}