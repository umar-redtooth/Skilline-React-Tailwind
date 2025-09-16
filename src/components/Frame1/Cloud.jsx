export default function Cloud() {
  const cloud=[
  {
    image:"/cloud1.png",
    head:"Online Billing, Invoicing, & Contracts",
    content:"Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts",
  },
  {
    image:"/cloud2.png",
    head:"Easy Scheduling & Attendance Tracking",
    content:"Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
  },
  {
    image:"/cloud3.png",
    head:"Customer Tracking",
    content:"Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization ",
  },
]
  return (
    <section className="flex flex-col justify-center text-center items-center my-24">
      
        <h2 className="font-[Poppins] font-bold text-[36px] text-[#2F327D] my-7">All-In-One <span className="text-[#F48C06]">Cloud Software</span></h2>
        <p className="font-[Poppins] font-normal text-[24px] text-[#696984] max-w-[837px]">Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.</p>
        <div className="flex justify-center gap-11 my-24">
          {
            cloud.map((cloud,index) => (
              <div className="flex flex-col justify-center items-center relative w-[420px] max-h-[430px] rounded-lg bg-white shadow-lg ">
              <img src={cloud.image} className="absolute left-[160px] top-[-40px] max-w-[100px] max-h-[100px]" />
              <h2 className="font-[Poppins] font-medium mt-16  text-[30px] max-w-[343px] text-[#2F327D]">{cloud.head}</h2>
              <p className="font-[Poppins] font-normal my-6 text-[20px] max-w-[341px] text-[#696984]">{cloud.content}</p>
              </div>
          )
          )
          }
        </div>
    </section>
  )
}