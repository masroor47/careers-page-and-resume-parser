import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    
    <main className='flex flex-col items-center'>
      
      <h1 className='text-3xl font-bold m-4'>Welcome to our Careers page!</h1>

      <h1 className='text-2xl font-bold m-4'>Are you:</h1>

      <div className='flex flex-col md:flex-row justify-center'>

        <div className='max-w-sm md:w-1/3 border-black border-2 rounded-xl p-4 flex flex-col items-center justify-between m-4 bg-red-200'>
          <div className='flex flex-col items-center'>
            <h1 className='text-xl font-bold p-2'>Student</h1>
            <p className='text-center font-semibold'>Get rich quick. Go through the leetcode grind, stress because of the interviews, and then get emotional damage as a result of rejection.</p>
          </div>
          <div className='mt-4'>
            <Link className='border-black border-2 rounded-lg bg-blue-400 p-2 text-white' href='./jobs'>Student</Link>
          </div>
        </div>

        <div className='max-w-sm md:w-1/3 border-black border-2 rounded-xl p-4 flex flex-col items-center justify-between m-4 bg-red-200'>
          <div className='flex flex-col items-center'>
            <h1 className='text-xl font-bold p-2'>Recruiter</h1>
            <p className='text-center font-semibold'>Go through an incredible journey of resume review. Check out the new applicants, see if you like any of these... Yikes.</p>
          </div>
          <div className='mt-4'>
            <Link className='border-black border-2 rounded-lg bg-blue-400 p-2 text-white' href='./dashboard'>Bro, I work here smh</Link>
          </div>
        </div>
      </div>
      
    </main>
    </>
  )
}
