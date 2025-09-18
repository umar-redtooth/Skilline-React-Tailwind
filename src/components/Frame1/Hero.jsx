export default function Hero() {
  return (
    <section className="flex px-28 bg-[#FFF2E1] gap-10 rounded-bl-[30%] rounded-br-[30%] overflow-hidden">
        <div className="flex flex-col gap-10 relative pt-24">
          <h1 className="max-w-[681px] font-[Poppins] font-bold text-[44px] text-[#2F327D] "><span className="text-[#F48C06]">Studying</span> Online is now much easier </h1>
          <p className="max-w-[523px] font-[Nunito Sans] font-normal text-[18px]">Skilline is an interesting platform that will teach you in more an interactive way</p>
          <div className="flex max-w-[681px] gap-40">
           <button className="w-[250px] h-[60px] rounded-[80px] bg-[#F48C06] hover:bg-white hover:text-[#F48C06] font-[Poppins] font-semibold text-[19px] text-white animate-pulse">Join for free</button>
            <button className="absolute left-[253px] top-[380px] z-10"><img src="/play.png" alt="" className="" /></button>
            <div className="absolute left-[230px] w-[60px] h-[60px] bg-white rounded-[40px] z-0"></div>
            <p className="font-[Poppins] font-normal text-[18px] text-[#252641] pt-5">Watch how it works</p>
          </div>
        </div>
        <div className="relative flex items-start justify-start">
          <img src="/hero1.png" alt="Hero" className="" />
          <img src="hero2.png" alt="" className="absolute left-[100px] top-[110px] max-w-[200px] max-h-[80px] animate-[wiggle_1s_ease-in-out_infinite]" />
          <img src="hero3.png" alt="" className="absolute left-[100px] top-[300px] max-w-[250px] max-h-[157px]" />
          <img src="hero4.png" alt="" className="absolute right-[150px] top-[80px] w-[100px] h-[100px]" />
          <img src="hero5.png" alt="" className="absolute right-[120px] top-[230px] max-w-[270px] max-h-[70px]" />
          
        </div>
    </section>
  )
}