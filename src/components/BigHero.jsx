import img1 from "../assets/images/BigHero/img1.jpg";
import img2 from "../assets/images/BigHero/img2.jpg"

const BigHero=()=>{
    return(
        <div className="grid grid-cols-2 gap-2 mx-10 mt-10">
            <div>
        <img src={img1} alt="AR INTERIORS" className="rounded border-2" />
            <div className="text-justify px-4">
                <h1 className="text-center font-bold text-xl text-emerald-700">AR INTERIRORS IS THE BEST PLACE TO GET WORK DONE</h1>
                <p>Step into the enchanting world of interior design excellence, 
                    where every space is transformed into a masterpiece of unparalleled beauty and functionality. 
                    At AR INTERIORS, we pride ourselves on being more than just a design firm; 
                    we are creators of dreams, sculptors of ambiance, and curators of refined living.
                </p>
                <p>With an unwavering commitment to perfection, we craft interiors that transcend mere aesthetics, elevating the very essence of space to new heights. 
                From opulent residences to chic corporate environments, our portfolio stands as a testament to our unwavering dedication to excellence.
                What sets us apart is not just our keen eye for design, but our ability to truly understand and embody the vision of our clients. 
                Each project is approached with a blend of creativity, innovation, and meticulous attention to detail, ensuring that every element harmonizes 
                seamlessly to create a symphony of beauty and functionality.
                </p>
            </div>
            </div>
            <div>
        <div className="text-justify px-4">
                <h1 className="text-center font-bold text-xl text-emerald-700">WE BELEIVE IN QUALITY & TRUST</h1>
                <p>Step into a realm where quality and trust are not just buzzwords but the very pillars upon which our interior design business stands. 
                At AR INTERIORS, we believe in creating spaces that not only dazzle the eye but also stand the test of time, 
                enriching the lives of our clients for years to come.
                Quality is not just a checkbox on a list for us; it's a commitment ingrained in every fiber of our being. 
                From the selection of the finest materials to the precision of our craftsmanship, 
                we spare no effort in ensuring that every aspect of our work reflects the highest standards of excellence. 
                Each project is meticulously planned, executed, and inspected to ensure that it not only meets but exceeds the expectations of our discerning clientele.
                </p>
            </div>
            <img src={img2} alt="AR INTERIORS" className="rounded border-2" />
            </div>
            
        </div>
    )
}
export default BigHero;