export default function Feature1() {
  return (
    <section className="flex gap-11 justify-center mt-24">
        <div className="relative">
          <img src="fea1.png" alt="" className="" />
        
        </div>
        <div className="flex flex-col text-start gap-10">
          <h1 className="font-[Poppins] font-semibold text-[36px] text-[#2F327D] max-w-[542px]">A <span className="text-[#F48C06]">user interface</span> designed for the classroom</h1>
          <div className="flex gap-7 text-start">
            <img src="feaicon11.png" alt="" className=" bg-white p-4 rounded-[50px] shadow-2xl" />
            <p className="font-[Poppins] font-normal text-[19px] text-[#696984] max-w-[400px] text-left">Teachers don’t get lost in the grid view and have a dedicated Podium space.</p>
          </div>
          <div className="flex gap-7 text-start">
            <img src="feaicon12.png" alt="" className="bg-white p-4 rounded-[50px] shadow-2xl" />
            <p className="font-[Poppins] font-normal text-[19px] text-[#696984] max-w-[400px] text-left">TA’s and presenters can be moved to the front of the class.</p>
          </div>
          <div className="flex gap-7 text-start">
            <img src="feaicon13.png" alt="" className="bg-white p-4 rounded-[50px] shadow-2xl" />
            <p className="font-[Poppins] font-normal text-[19px] text-[#696984] max-w-[400px] text-left">Teachers can easily see all students and class data at one time.</p>
          </div>
        </div>
    </section>
  )
}