import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"
import {RxDotFilled} from "react-icons/rx";
import img7 from "../assets/images/slider/img7.jpg";
import img8 from "../assets/images/slider/img8.jpg";
import img9 from "../assets/images/slider/img9.jpg";
import img10 from "../assets/images/slider/img10.jpg";
import img11 from "../assets/images/slider/img11.jpg";
import img12 from "../assets/images/slider/img12.jpg";
function Carousel() {
  const slides = [
    img7, img8, img9, img10, img11, img12
  ];
  const [currentIndex,setCurrentIndex] = useState(0);
  const prevSlide=()=>{
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1 ;
    setCurrentIndex(newIndex);
  }

  const nextSlide=()=>{
    const isLastSlide =  currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);   
  }
  const goToSlide=(slideIndex)=>{
    setCurrentIndex(slideIndex);
  }
  return (
    <div className='max-w-[1400px] h-[700px] w-full m-auto mt-6 py-16 px-4 relative group carousel '>
      <div style={{backgroundImage:`url(${slides[currentIndex]})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30}/>
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
      {slides.map((slide, slideIndex)=>(
        <div key={slideIndex} onClick={()=>goToSlide(slideIndex)} className="text-2xl cursor-pointer">
          <RxDotFilled/>
        </div>
      ))}
      </div>
    </div>
  )
}
export default Carousel;