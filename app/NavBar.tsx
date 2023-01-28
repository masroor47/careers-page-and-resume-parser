import Link from "next/link"

export default function NavBar() {

  return (
    <nav className="flex justify-between items-center h-10 bg-green-200">
      
      <div className='ml-2'>
        <Link href='./'>Cool Company</Link>
      </div>

      <ul className="flex items-center h-full mr-2">
        <li className='h-full flex items-center p-2'><Link href='./apply'>Apply</Link></li>
        <li className='h-full flex items-center p-2'><Link href='./dashboard'>Dashboard</Link></li>
      </ul>
      
    </nav>
  )
}