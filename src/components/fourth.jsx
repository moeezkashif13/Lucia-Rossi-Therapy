import { Heading } from "./general";
import {AiOutlineArrowUp} from 'react-icons/ai'


export default function Fourth(){
    return(

        <div className="md:flex md:flex-row-reverse lg:h-[1150px] lg:text-lg" id="contact">


<div className="md:w-1/2 w-full h-[210px] md:h-auto">


<img src="https://static.wixstatic.com/media/beaf50_5b74dad1598f4328be075d48377f8851~mv2.jpg/v1/fill/w_675,h_1732,al_c,q_100,usm_0.66_1.00_0.01,enc_auto/beaf50_5b74dad1598f4328be075d48377f8851~mv2.jpg" className="w-full max-w-full h-full object-cover" alt="" />


</div>


<div className="md:w-1/2 px-mobilePadding md:px-tabletPadding lg:px-desktopPadding py-16 space-y-20 bg-[#EDD4A6]">



<div className="space-y-12">
    <Heading text="Contact"/>
    <div className="space-y-5">
<p>Email: moeezkashif13@gmail.com</p>
<p>T: +92 336 4507406</p>

<p ><a href="https://www.linkedin.com/in/abdulmoeez19" target="_blank">Linkedin: https://www.linkedin.com/in/abdulmoeez19</a></p>


<p ><a href="https://www.facebook.com/abdulmoeez121367" target="_blank">Facebook: https://www.facebook.com/abdulmoeez121367</a></p>
    
    
    </div>
</div>


<div className="space-y-12">
    <Heading text="Location"/>
    <div className="space-y-12">
<p>My practice is based in South Kensington (SW7), Central London.</p>

<div className="space-y-4">
    <p>Within walking distance of:</p>
    <ul className="list-disc px-mobilePadding space-y-2">
    <li>Knightsbridge</li>
    <li>Bromptom</li> 
    <li>Chelsea</li>
    <li>Belgravia</li>

    </ul>
</div>


<p>Currently I offer video sessions.</p>



    </div>
</div>



<div className="space-y-12">
    <Heading text="Book your free consultation"/>
    <div className="space-y-5">
<p>If you would like to be booked in for a free consultation, please send me an email at moeezkashif13@gmail.com</p>
    </div>
</div>



<button className="mx-auto flex items-center gap-x-2 bg-[#373B4D] text-white px-7 py-2"  onClick={()=>{
    document.body.scrollTo({top:0,behavior:'smooth'});
    document.documentElement.scrollTo({top:0,behavior:'smooth'});
    
}}  > Back to Top <span><AiOutlineArrowUp/></span></button>





</div>




        </div>


    )
}