import ApplicationForm from "./ApplicationForm"


export default function Page() {
  return (
    <main className="flex flex-col items-center">
      <div className="w-[32rem]">
        <h1 className="text-3xl font-semibold py-4">Fill out the application:</h1>
      </div>
      
      <ApplicationForm />
    </main>
  )
}