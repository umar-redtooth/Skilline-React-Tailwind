export default function News() {
  return (
    <section className="flex flex-col gap-10 justify-center text-center items-center my-44">
          <h1 className="font-[Nunito Sans] font-medium text-[36px] text-[#2F327D] max-w-[456px]">Latest News and Resources</h1>
          <p className="font-[Nunito Sans] font-normal text-[20px] text-[#696984] max-w-[656px] mb-8">See the developments that have occurred to Skillines in the world</p>
      <div className="flex gap-32">
        <div className="flex flex-col gap-5 text-left">
          <img src="news1.png" alt="" className="max-w-[600px]" />
          <p className="font-[Poppins] font-medium text-[#252641] text-[22px] bg-[#F4C467] py-3 rounded-[80px] max-w-[130px] text-center">News</p>
          <h1 className="font-[Poppins] font-medium text-[24px] max-w-[570px] text-left">Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h1>
          <p className="font-[Poppins] font-normal text-[20px] max-w-[550px] text-left text-[#696984]">Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
          <a href="#" className="font-[Poppins] font-normal text-[20px] text-[#696984] underline">Read more</a>
        </div>


        <div className="flex flex-col gap-9">
          <div className="flex gap-6">
            <div className="relative">
            <img src="news2.png" alt="" className="" />
            <p className="absolute font-[Poppins] bottom-5 right-5 font-normal text-[#252641] text-[22px] bg-[#F4C467] py-2 rounded-[80px] w-[170px] text-center">Press release</p>
            </div>
            <div className="flex flex-col gap-6 pt-2">
              <h1 className="font-[Poppins] font-medium text-[20px] max-w-[430px] text-[#252641] text-left">Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand</h1>
              <p className="font-[Poppins] font-normal text-[18px] max-w-[400px] text-[#696984] text-left">Class Technologies Inc., the company that created Class,...</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="relative">
            <img src="news3.png" alt="" className="" />
             <p className="absolute font-[Poppins] bottom-5 right-5 font-normal text-[#252641] text-[22px] bg-[#F4C467] py-2 rounded-[80px] w-[100px] text-center">News</p>
            </div>
            <div className="flex flex-col gap-6 pt-2">
              <h1 className="font-[Poppins] font-medium text-[20px] max-w-[430px] text-[#252641] text-left">Zoom’s earliest investors are betting millions on a better Zoom for schools</h1>
              <p className="font-[Poppins] font-normal text-[18px] max-w-[400px] text-[#696984] text-left">Zoom was never created to be a consumer product. Nonetheless, the...</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="relative">
            <img src="news4.png" alt="" className="" />
            <p className="absolute font-[Poppins] bottom-5 right-5 font-normal text-[#252641] text-[22px] bg-[#F4C467] py-2 rounded-[80px] w-[100px] text-center">News</p>
            </div>
            <div className="flex flex-col gap-6 pt-2">
              <h1 className="font-[Poppins] font-medium text-[20px] max-w-[430px] text-[#252641] text-left">Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms</h1>
              <p className="font-[Poppins] font-normal text-[18px] max-w-[400px] text-[#696984] text-left">This year, investors have reaped big financial returns from betting on Zoom...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}