export default function Header() {
  return (
    <section className="flex flex-row justify-between px-20 py-6  bg-[#FFF2E1] rounded ">
      <div className="relative flex-1">
        <h1 className="absolute font-[Poppins] font-bold text-[32px] tracking-[4%] z-10 top-[5px] left-[20px]">Skilline</h1>
        <img src="/logo.png" alt="Skilline" className="absolute z-0 w-[83px] h-[83px] top-[-12px]"/>
      </div>
      
      <div className="flex gap-11">
        
        <ul className="list-non flex gap-11 font-[Poppins] font-normal text-[22px] tracking-[2%] mt-3.5">
        <li className="">Home</li>
        <li className="">Careers</li>
        <li className="">Blog</li>
        <li className="">About US</li>
        </ul>
        
        <div className="flex gap-6 font-[Poppins] font-normal text-[22px]">
        <button className="bg-white hover:bg-black hover:text-white w-[160px] h-[60px] rounded-[80px]">Login</button>
        <button className="bg-[#F48C06] hover:bg-black hover:text-[#F48C06] w-[160px] h-[60px] rounded-[80px]">Signup</button>
        </div>
      </div>
        
    </section>
  )
}