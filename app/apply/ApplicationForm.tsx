



export default function ApplicationForm() {

  return (
    <form className="w-[32rem]">
      <label >Resume</label>
      <input type="file" />

      <div className="flex my-4">
        <div className="w-48 py-1">
          <label htmlFor="">Full Name</label>
        </div>

          <input className="border-2 border-blue-300 rounded-sm" type="text" name="" id="" />    
      </div>

      <div className="flex my-4">
        <div className="w-48 py-1">   
          <label htmlFor="">Email</label>
        </div>

          <input className="border-2 border-blue-300 rounded-sm" type="text" name="" id="" />        
      </div>

      <div className="flex my-4">
        <div className="w-48 py-1">
          <label htmlFor="">Phone Number</label>
        </div>

          <input className="border-2 border-blue-300 rounded-sm" type="text" name="" id="" />
      </div>

    </form>
  )
}