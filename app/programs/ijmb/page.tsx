import Image from "next/image"

export default function IJMBPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-5">IJMB Program</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src="https://i.ibb.co/VWRjhxjZ/Ijmb.png"
            alt="IJMB Program"
            width={400}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
        <div>
          <p className="text-gray-700">
            The Interim Joint Matriculation Board (IJMB) program is a 9-month intensive program designed to prepare
            students for direct entry admission into 200 level in Nigerian universities. It is a nationally recognized
            program and accepted by most universities in Nigeria.
          </p>
          <p className="text-gray-700 mt-4">
            During the program, students will study a combination of subjects relevant to their desired course of study
            in the university. The IJMB examination is conducted annually, and successful candidates are awarded IJMB
            certificates, which they can use to gain admission into 200 level in Nigerian universities.
          </p>
          <p className="text-gray-700 mt-4">
            This program provides an excellent alternative route to university education for students who may not have
            performed well in UTME or who are seeking admission into competitive courses.
          </p>
        </div>
      </div>
    </div>
  )
}
