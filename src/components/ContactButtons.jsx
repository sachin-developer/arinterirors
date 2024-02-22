import { useState } from "react";
import { IoMdMail } from "react-icons/io";
import { FaPhoneSquare } from "react-icons/fa";
function ContactButtons() {
  const [ismailHover,setMailHover] = useState(false);
  const [isPhoneHover, setPhoneHover] = useState(false);
  const mailDisplay = {
    opacity: ismailHover ? '1':'0'
  }
  const phoneDisplay = {
    opacity: isPhoneHover ? '1':'0'
  }
  const displayContact=(contact)=>{
    if(contact === 'mail'){
      setMailHover(true);
    }else{
      setPhoneHover(true);
    }
  }
   const hideContact=(contact)=>{
    if(contact === 'mail'){
      setMailHover(false);
    }else{
      setPhoneHover(false);
    }
  }
  return (
      <div className="absolute top-[12%] right-4">

        <ul className="text-2xl text-emerald-700">
          <li className="pb-2">
            <span className="flex justify-between">
            <span style={mailDisplay} 
            className="transition duration-300 ease-in-out">azmal@arinterirors.com
            </span> 
            <IoMdMail className="mailGroup" 
            onMouseEnter={()=>displayContact('mail')}
            onMouseLeave={()=>hideContact('mail')}/>
            </span>
           
          </li>
          <li className="pb-2">
            <span className="flex justify-between">
             <span style={phoneDisplay} 
            className="transition duration-300 ease-in-out">+91-000-000-0000
            </span> 
            <FaPhoneSquare className="mailGroup" 
            onMouseEnter={()=>displayContact('phone')}
            onMouseLeave={()=>hideContact('phone')}/>
            </span>
           
          </li>  
        </ul>

      </div>
  )
}
export default ContactButtons;