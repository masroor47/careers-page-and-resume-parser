'use client';

import ApplicationForm from "./ApplicationForm"
import { useState } from "react";



export default function Page() {

  const [submitted, setSubmitted] = useState(false);
  const [applicantName, setApplicantName] = useState("");
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
    }

    const JSONdata = JSON.stringify(data)

    const endpoint = "/api/form"

    const options = {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }

    const response = await fetch(endpoint, options)

    if (response.status === 200) {
      setSubmitted(true);
    }

    console.log(response)

    const result = await response.json()
    setApplicantName(result.data)
    console.log(result)

    // console.log(result.data)
  }

  return (
    <main className="flex flex-col items-center">

      { submitted ? (
        <div>
          <h1 className="text-3xl font-bold m-4 text-center">Tanks for submitting, {applicantName}</h1>
          <div className="">
            <p className="text-center">Our HR team will carefully review your application, and will get back to you in the coming weeks.</p>
            <p className="text-center">There is also a possibility that your application is so awful that we will ghost you. Faliure.</p>
          </div>
        </div>
      ) : (
        <div>
          <div className="md:w-[32rem]">
            <h1 className="text-3xl font-semibold py-4">Fill out the application:</h1>
          </div>

          <form className="md:w-[32rem]" onSubmit={handleSubmit}>
          
            <div className="flex my-4">
              <div className="w-52 py-1">
                <label >Resume</label>
              </div>
                <input className="ml-4" type="file" /> 
                {/* <input className="border-2 border-blue-300 rounded-sm px-2" type="text" name="" id="" />     */}
            </div>

            <div className="flex my-4 w-full">
              <div className="w-52 py-1">
                <label htmlFor="name">Full Name</label>
              </div>

                <input className="block border-2 border-blue-300 rounded-sm px-2" type="text" required name="name" id="name" />    
            </div>

            <div className="flex my-4 w-full">
              <div className="w-52 py-1">   
                <label htmlFor="email">Email</label>
              </div>

                <input className="border-2 border-blue-300 rounded-sm px-2" type="email" required name="email" id="email" />        
            </div>

            <div className="flex my-4 w-full">
              <div className="w-52 py-1">
                <label htmlFor="phone">Phone Number</label>
              </div>

                <input className="border-2 border-blue-300 rounded-sm px-2" type="number" required name="phone" id="phone" />
            </div>


            <div className="flex justify-center">
              <button className="bg-green-500 p-2 rounded-md" type="submit">Submit</button>
              
            </div>

          </form>
        </div>
      )}
    </main>
  )
}