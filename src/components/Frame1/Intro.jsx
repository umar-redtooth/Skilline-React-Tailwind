export default function Intro() {
   return (
    <section className="flex flex-col justify-center text-center items-center">
      <h1 className="font-[Poppins] font-semibold text-[44px] text-[#2F327D]">What is <span className="text-[#F48C06]">SKilline</span>?</h1>
      <p className="font-[Poppins font-normal text-[24px] text-[#696984] max-w-[1100px] my-6">Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
      <div className="flex gap-14 mt-10">
        
          <div className="flex flex-col w-[600px] h-[400px] items-center bg-[url(/intro1.png)]">
            <h1 className="font-[Poppins] font-semibold text-[32px] pt-32 text-white">FOR INSTRUCTORS</h1>
            <button className="font-[Poppins] w-[283px] h-[80px] mt-4 font-medium text-[22px] border border-white rounded-[80px] hover:bg-[#23BDEEE5] text-white">Start a class today</button>
          </div>
        
        <div className="flex flex-col items-center w-[600px] h-[400px]  bg-[url(/intro2.png)]">
            <h1 className="font-[Poppins] font-semibold text-[32px] pt-32 text-white">FOR STUDENTS</h1>
            <button className="font-[Poppins] w-[283px] h-[80px] mt-4 font-medium text-[22px] border border-white rounded-[80px] hover:bg-[#23BDEEE5] text-white">Enter access code</button>
          </div>
      </div>
        
    </section>
  )
}