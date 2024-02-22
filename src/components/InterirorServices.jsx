import img1 from "../assets/images/serviceCards/img1.jpg"
import img2 from "../assets/images/serviceCards/img2.jpg"
import img3 from "../assets/images/serviceCards/img3.jpg"
import img4 from "../assets/images/serviceCards/img4.jpg"
import img5 from "../assets/images/serviceCards/img5.jpg"
import img6 from "../assets/images/serviceCards/img6.jpg"
const InteriorServices=()=>{
    return(
        <div>
            <h1 className="text-center text-2xl my-3 font-semibold text-emerald-700">OUR INTERIOR DESIGN SERVICES</h1>
            <div className="cards-block grid grid-cols-3 justify-around gap-2 mx-20 mb-3">
                <div className="serviceCard max-w-80 shadow-2xl p-5 rounded">
                    <img src={img1} alt="ar interiros" />
                    <h2 className="my-3 font-bold text-xl text-emerald-700">Kitchen Interiors</h2>
                    <p className="text-slate-500">Experience heavenly bedrooms designed by our expert interior designers, 
                    offering comfort and soulful ambiance. Transform your master, kids, and guest bedrooms with designs that caress your soul.
                    </p>
                </div>
                <div className="serviceCard max-w-80 shadow-2xl p-5 rounded ">
                    <img src={img2} alt="ar interiros" />
                    <h2 className="my-3 font-bold text-xl text-emerald-700">Bedroom Interiors</h2>
                    <p className="text-slate-500">The bedroom is the place that makes a “Home” complete. Our interior designers
                     are specialized in creating functional and trendy modular bedroom interiors that make your life easier and sweeter.
                    </p>
                </div>
                <div className="serviceCard max-w-80 shadow-2xl p-5 rounded">
                    <img src={img3} alt="ar interiros" />
                    <h2 className="my-3 font-bold text-xl text-emerald-700">Living Romm Interiors</h2>
                    <p className="text-slate-500">There is a reason people call it a ‘living’ room. It is the liveliest place in your home. 
                    Our interior designers design your living room interiors with an ounce of comfort, class, positivity, and more style.
                    </p>
                </div>
                <div className="serviceCard max-w-80 shadow-2xl p-5 rounded">
                    <img src={img4} alt="ar interiros" />
                    <h2 className="my-3 font-bold text-xl text-emerald-700">Kids Personal Room Interiors</h2>
                    <p className="text-slate-500">Experience the transformative power of our kids personal room designs and discover the pleasure of coming home to a
                     space that reflects your personality, elevates your lifestyle, and envelops you in a sense of tranquility and grace.
                    </p>
                </div>
                <div className="serviceCard max-w-80 shadow-2xl p-5 rounded">
                    <img src={img5} alt="ar interiros" />
                    <h2 className="my-3 font-bold text-xl text-emerald-700">Living Room Interiors</h2>
                    <p className="text-slate-500">Elevate your living experience with our masterfully designed spaces, tailored to reflect your unique tastes and lifestyle. From luxurious seating arrangements and statement-making 
                    furnishings to captivating decor accents and lighting solutions, every detail is thoughtfully considered to evoke a sense of harmony and sophistication..
                    </p>
                </div>
                <div className="serviceCard max-w-80 shadow-2xl p-5 rounded">
                    <img src={img6} alt="ar interiros" />
                    <h2 className="my-3 font-bold text-xl text-emerald-700">Bedroom Interiors</h2>
                    <p className="text-slate-500">Indulge in the tranquility of our heavenly bedroom designs meticulously crafted by our expert interior designers. 
                    Whether you're seeking to transform your master retreat into a haven of relaxation, infuse your kids' bedrooms with creativity and comfort.
                    </p>
                </div>
            </div>
            <div className="text-justify text-cyan-950 px-4 leading-10">
                <p>As you embark on the journey of transforming your space into something truly extraordinary, we understand the importance of finding a partner you can trust implicitly. That's why we're here—to offer you not just our expertise in interior design but also our unwavering commitment to quality, integrity, and client satisfaction.

At AR INTERIORS, we believe that every space has the potential to become a masterpiece—a reflection of your personality, style, and aspirations. Our mission is to help you unlock that potential and turn your dreams into reality, one meticulously crafted detail at a time.

What sets us apart is our relentless dedication to excellence. From the moment you entrust us with your project to the final reveal, we strive for perfection in every aspect of our work. Our team of skilled designers, craftsmen, and artisans brings decades of experience and expertise to the table, ensuring that your vision is not just realized but surpassed beyond your expectations.

But beyond our technical prowess, it's our commitment to building meaningful relationships with our clients that truly sets us apart. We understand that every project is unique, and we take the time to listen attentively to your needs, preferences, and concerns. We're here to guide you, support you, and collaborate with you every step of the way, ensuring that the journey is as rewarding and enjoyable as the destination.

When you choose to partner with us, you're not just investing in a service; you're investing in a relationship built on trust, respect, and shared values. We're here to be your advocates, your confidants, and your creative partners, dedicated to bringing your vision to life in a way that surpasses your wildest dreams.

So, as you consider who to trust with the transformation of your space, we invite you to take the first step with us. Let's embark on this journey together, and together, let's create something truly extraordinary.</p>
            </div>
        </div>
    )
}
export default InteriorServices;