export default function Hero() {
  return (
    <section className="flex px-28 bg-[#FFF2E1] pt-10 gap-10 rounded-bl-[20%] rounded-br-[20%]">
        <div className="flex flex-col gap-10 ">
          <h1 className="max-w-[681px] font-[Poppins] font-bold text-[48px] text-[#2F327D] pt-48"><span className="text-[#F48C06]">Studying</span> Online is now much easier </h1>
          <p className="max-w-[523px] font-[Nunito Sans] font-normal text-[20px]">Skilline is an interesting platform that will teach you in more an interactive way</p>
          <div className="flex max-w-[681px] gap-8">
            <button className="w-[320px] h-[80px] rounded-[80px] bg-[#F48C06] hover:bg-white hover:text-[#F48C06] font-[Poppins] font-semibold text-[22px] text-white">Join for free</button>
            <button className=""><img src="/play.png" alt="" className="" /></button>
            <p className="font-[Poppins] font-normal text-[18px] text-[#252641] pt-5">Watch how it works</p>
          </div>
        </div>
        <div className="flex ">
          <img src="/hero.png" alt="Hero" className="max-w-[711px] max-h-[692px]" />
        </div>
    </section>
  )
}