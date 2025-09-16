import {useState} from "react";
export default function Testimonials() {
  const reviews = [
  {
    image: "test1.png",
    quote: `"Skilline is exactly what our business has been lacking. It really saves me time and effort."`,
    name: "Gloria Rose",
  },
  {
    image: "test2.jpg",
    quote: `"I love using Skilline. It's intuitive, fast, and has helped me organize my teaching better."`,
    name: "Daniel Smith",
  },
  {
    image: "test3.jpg",
    quote: `"It just amazed me"`,
    name: "Daniel Daffo",
  },
];
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);

  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
      setFade(false);
    }, 300); // fade duration
  };

  return (
    <section className="flex gap-52 justify-center my-36">
        <div className="flex flex-col gap-7 justify-start">
          <div className="flex flex-wrap">
            <div className="pt-3"><hr className="w-[60px]"/></div>
            <div><p className="font-[Nunito Sans] font-normal text-[16px] text-[#525596] tracking-widest">&nbsp;&nbsp;&nbsp;&nbsp;TESTIMONIAL</p></div>
          </div>
          
          <h1 className="font-[Nunito Sans] font-bold text-[50px] text-[#2F327D] max-w-[530px]">What They Say?</h1>
          <p className="font-[Poppins] font-normal text-[19px] text-[#696984] max-w-[426px]">Skilline has got more than 100k positive ratings from our users around the world.</p>
          <p className="font-[Poppins] font-normal text-[19px] text-[#696984] max-w-[426px]">Some of the students and teachers were greatly helped by the Skilline.</p>
          <p className="font-[Poppins] font-normal text-[19px] text-[#696984] max-w-[426px]">Are you too? Please give your assessment</p>
          <button className="w-[280px] h-[80px] border border-[#F48C06] text-[#F48C06] hover:text-white hover:bg-[#F48C06] text-[24px] font-[Nunito Sans] font-normal text-center rounded-[80px]">Write your assessment </button>
        </div>
         <div className="relative flex justify-start pr-32">
          <img src={reviews[current].image} alt="" className="max-h-[600px]" />

          <button onClick={handleNext} className="absolute top-[150px] right-[20px] z-20 cursor-pointer">
          <img src="testnext.png" alt="Next review" className="max-h-[220px] hover:scale-105 transition duration-300" />
          </button>

          <img src="testline.png" alt="" className="absolute bottom-[-40px] left-[80px] max-h-[120px] z-20" />
          <img src="testrec.png" alt="" className="absolute bottom-[-200px] max-h-[364px] z-20" />
          <p className={`absolute bottom-[-10px] left-[150px] font-[Nunito Sans] font-normal text-[16px] max-w-[360px] text-[#5F5F7E] z-20 transition-opacity duration-300 ${fade ? "opacity-0" : "opacity-100"}`}>{reviews[current].quote}</p>
          <p className={`absolute bottom-[-100px] left-[150px] font-[Nunito Sans] font-semibold text-[16px] max-w-[360px] text-[#5F5F7E] z-20 transition-opacity duration-300 ${fade ? "opacity-0" : "opacity-100"}`}>{reviews[current].name}</p>
          <img src="stars.png" alt="" className="absolute bottom-[-85px] left-[420px] max-h-[20px] z-20" />
          <p className="absolute bottom-[-110px] left-[410px] font-[Nunito Sans] font-semibold text-[15px] max-w-[160px] text-[#80819A] z-20">12 reviews at Yelp</p>
          <img src="testrev.png" alt="" className="absolute bottom-[-200px] max-w-[650px] z-10"/>
        </div>
    </section>
  )
}