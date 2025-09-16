export default function Footer() {
  return (
    <section className="flex  flex-col gap-36 justify-center text-center items-center bg-[#252641] py-18">
        <div className="flex gap-14">
          <img src="footlogo.png" alt="" className="" />
          <div className="w-[2px] h-[83px] bg-[#626381]"></div>
          <p className="font-[Poppins] font-semibold text-[22px] tracking-[4%] text-white max-w-[156px] text-left pt-2">Virtual Class for Zoom</p>
        </div>
        <div className="flex flex-col gap-5">
          <p className="font-[Poppins] font-medium text-[24px] text-[#B2B3CF] tracking-[4%]">Subscribe to get our Newsletter</p>
          <div className="flex gap-4 justify-center">
            <input type="email" placeholder="Your Email" className="w-[400px] h-[70px] rounded-[80px] border border-[#83839A] font-[Poppins] font-normal text-[20px] text-[#83839A] text-left pl-5 tracking-[4%]" />
            <button type="submit" className="w-[190px] h-[70px] bg-gradient-to-r from-[#545AE7] to-[#393FCF] rounded-[60px] text-white text-center font-[Poppins] font-medium text-[24px]">Subscribe</button>
          </div>
        </div>
        <div className="flex flex-col text-center items-center">
          <div className="flex gap-3">
            <a href="#" className="font-[Poppins] font-normal text-[22px] text-[#B2B3CF] tracking-[4%]">Careers</a>
            <div className="w-[2px] h-[25px] bg-[#626381] mt-1"></div>
            <a href="#" className="font-[Poppins] font-normal text-[22px] text-[#B2B3CF] tracking-[4%]">Privacy Policy</a>
            <div className="w-[2px] h-[25px] bg-[#626381] mt-1"></div>
            <a href="#" className="font-[Poppins] font-normal text-[22px] text-[#B2B3CF] tracking-[4%]">Terms & Conditions</a>
          </div>
          <p className="font-[Poppins] font-normal text-[22px] text-[#B2B3CF] tracking-[4%]">© 2021 Class Technologies Inc.</p>


        </div>
    </section>
  )
}