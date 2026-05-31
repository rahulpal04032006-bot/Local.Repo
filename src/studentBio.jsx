function StudentBio() {
  const students = [
    {
      name: "Rahul",
      course: "B.Tech CSE",
      email: "rahul@gmail.com",
      mobile: "9876543210",
      year: "2nd Year",
    },
    {
      name: "Raj",
      course: "BCA",
      email: "raj@gmail.com",
      mobile: "9876543211",
      year: "1st Year",
    },
    {
      name: "Rohan",
      course: "MCA",
      email: "rohan@gmail.com",
      mobile: "9876543212",
      year: "3rd Year",
    },
    {
      name: "Amit",
      course: "B.Tech ECE",
      email: "amit@gmail.com",
      mobile: "9876543213",
      year: "4th Year",
    },
  ];

  return (
    <>
      <h1>Student Biodata</h1>

      {students.map((student, index) => (
        <div
          key={index}
          style={{
            border: "2px solid black",
            padding: "10px",
            margin: "10px",
            width: "300px",
          }}
        >
          <h3>Name: {student.name}</h3>
          <p>Course: {student.course}</p>
          <p>Email: {student.email}</p>
          <p>Mobile: {student.mobile}</p>
          <p>Year: {student.year}</p>
        </div>
      ))}
    </>
  );
}

export default StudentBio;