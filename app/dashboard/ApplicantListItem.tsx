

type ApplicantProps = {
  applicant: {
    name: string;
    email: string;
    phone: string;
  }
}

const ApplicantListItem = (applicantProp: ApplicantProps) => {
  const { applicant } = applicantProp;
  // console.log(applicant)

  return (
    <div className="p-2">
      <h1>{applicant.name}</h1>
      <div className="flex justify-between">
        <p>{applicant.email}</p>
        <p>{applicant.phone}</p>
      </div>
    </div>
  )
}

export default ApplicantListItem