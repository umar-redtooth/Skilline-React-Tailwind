export default function Integrations() {
  return (
   <section className="flex gap-60 justify-center">
        <div className="flex flex-col gap-14 justify-center pt-40">
        <div className="relative flex gap-24">
          <img src="onedrive.png" alt="" className="" />
          <img src="dropbox.png" alt="" className="max-h-[120px] mt-8" />
        </div>
        <div className="relative flex gap-32">
          <img src="drive.png" alt="" className="max-h-[120px] ml-8" />
          <img src="teams.png" alt="" className="" />
        </div>
        </div>
        <div className="flex flex-col text-left pt-24 gap-10">
          <div className="flex flex-wrap">
            
            <div className="pt-3"><hr className="w-[60px]"/></div>
            <div><p className="font-[Nunito Sans] font-normal text-[16px] text-[#525596] tracking-widest">&nbsp;&nbsp;&nbsp;&nbsp;INTEGRATIONS</p></div>
          </div>
          
          <h1 className="font-[Poppins] font-semibold text-[36px] text-[#2F327D] max-w-[530px]">200+ educational tools and platform <span className="text-[#F48C06]">integrations</span></h1>
          <p className="font-[Poppins] font-normal text-[19px] text-[#696984] max-w-[666px]">Schoology has every tool your classroom needs and comes pre-integrated with more than 200+ tools, student information systems (SIS), and education platforms.</p>
          <button className="w-[280px] h-[80px] border border-[#F48C06] text-[#F48C06] hover:text-white hover:bg-[#F48C06] text-[24px] font-[Nunito Sans] font-normal text-center rounded-[80px]">See all Integrations</button>
        </div>
    </section>
  )
}