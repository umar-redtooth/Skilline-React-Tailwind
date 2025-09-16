import Feature1 from './Feature1'
import Feature2 from './Feature2'
import Feature3 from './Feature3'
import Feature4 from './Feature4'
import Feature5 from './Feature5'
export default function FeatureLayout() {
  return (
    <section className="flex flex-col gap-4 text-center justify-center items-center  mx-10">
        <h1 className='font-[Poppins] font-bold text-[36px] text-[#2F327D]'>Our <span className="text-[#F48C06]">Features</span></h1>
        <p className="font-[Poppins] font-normal text-[24px] text-[#696984] text-center">This very extraordinary feature, can make learning activities more efficient</p>
        {
          <>
          <Feature1/>
          <Feature2/>
          <Feature3/>
          <Feature4/>
          <Feature5/>
          </>
        }
        <button className='w-[280px] h-[80px] border border-[#F48C06] text-[#F48C06] hover:text-white hover:bg-[#F48C06] text-[24px] font-[Nunito Sans] font-normal text-center rounded-[80px]'>See more features</button>
    </section>
  )
}