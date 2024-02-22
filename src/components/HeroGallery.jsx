import img1 from "../assets/images/hero/img1.jpg"
import img2 from "../assets/images/hero/img2.jpg"
import img3 from "../assets/images/hero/img3.jpg"
import img4 from "../assets/images/hero/img4.jpg"
import img5 from "../assets/images/hero/img5.jpg"
import img6 from "../assets/images/hero/img6.jpg"
import img7 from "../assets/images/hero/img7.jpg"
import img8 from "../assets/images/hero/img8.jpg"
const HeroGallery=()=>{
    return(
        <div className="grid mx-10 grid-cols-4 gap-4">
            <img src={img1} alt="AR Interiors" className="hover:drop-shadow-2xl" />
            <img src={img2} alt="AR Interiors" className="hover:drop-shadow-2xl" />
            <img src={img3} alt="AR Interiors" className="hover:drop-shadow-2xl" />
            <img src={img4} alt="AR Interiors" className="hover:drop-shadow-2xl" />
            <img src={img5} alt="AR Interiors" className="hover:drop-shadow-2xl" />
            <img src={img6} alt="AR Interiors" className="hover:drop-shadow-2xl" />
            <img src={img7} alt="AR Interiors" className="hover:drop-shadow-2xl" />
            <img src={img8} alt="AR Interiors" className="hover:drop-shadow-2xl" />
        </div>
    )
}
export default HeroGallery;