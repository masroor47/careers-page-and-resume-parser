



export default function ApplicationForm() {

  return (
    <form className="md:w-[32rem]" action="/api/form" method="post">

      
      
      <div className="flex my-4">
        <div className="w-52 py-1">
          <label >Resume</label>
        </div>
          <input className="ml-4" type="file" id="resume"/> 
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
  )
}