import sampleApplicants from "@/data/sampleApplicants"
import ApplicantListItem from "./ApplicantListItem"


export default function Page() {

  return (
    <main className="flex justify-center">
      <div className="md:w-[32rem]">
        <h1 className="text-3xl font-bold m-4">All applicants: </h1>

        <ul>
          {sampleApplicants.map((applicant, id) => (
            <ApplicantListItem applicant={applicant} key={id} />
          ))}
        </ul>
      </div>
    </main>
  )
}