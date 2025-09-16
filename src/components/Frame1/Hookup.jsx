export default function Hookup() {
  return (
    <section className="flex gap-10 justify-center px-20 my-16">
        <div className="flex flex-col gap-5 text-start p-11">
          <h1 className="font-[Poppins] font-medium text-[32px] max-w-[730px] text-[#2F327D]">Everything you can do in a physical classroom, <span className="text-[#F48C06]">you can do with Skilline</span></h1>
          <p className="font-[Poppins] font-normal text-[20px] max-w-[730px] text-[#696984]">Skilline’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
          <a href="#" className="font-[Poppins] font-normal text-[18px] text-[#696984]">Learn more</a>
        </div>
        <div className="p-14">
        <video src="/vid.mp4" className="w-full max-w-[605px] max-h-[571px] rounded-4xl" controls autoPlay muted loop />
      </div>

    </section>
  )
}