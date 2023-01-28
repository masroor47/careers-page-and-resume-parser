



export default function ApplicationForm() {

  return (
    <form className="">
      <label >Resume</label>
      <input type="file" />

      <div>
        <label htmlFor="">First Name</label>
        <input className="border-2 border-blue-300 rounded-lg" type="text" name="" id="" />

        <label htmlFor="">Last Name</label>
        <input className="border-2 border-blue-300 rounded-lg" type="text" name="" id="" />
      </div>

      <div>
        <label htmlFor="">Email</label>
        <input className="border-2 border-blue-300 rounded-lg" type="text" name="" id="" />

        <label htmlFor="">Phone Number</label>
        <input className="border-2 border-blue-300 rounded-lg" type="text" name="" id="" />
      </div>
      
    </form>
  )
}