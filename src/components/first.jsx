import { Heading } from "./general"

import {LuSofa} from 'react-icons/lu'

export default function FirstSection(){

    return(
        <div className="md:flex " id="#">

{/*  */}
        <div className="md:w-1/2 bg-[#F5F3EF] px-mobilePadding md:px-tabletPadding lg:px-desktopPadding">

<div className="hidden md:flex font-medium gap-x-5 pt-6 lg:text-lg">
    <a href="#">Home</a>
    <a href="#about" >About me</a>
    <a href="#services" >Services</a>
    <a href="#contact">Contact</a>
</div>


<div className="pt-12 pb-8 flex flex-col items-center  space-y-1 text-[#6B727B] md:text-2xl">


<div className="text-6xl text-[#E1B353]"><LuSofa/></div>

<p>Lucia Rossi, MSc</p>

<p>Adult, Child and Adolescent Counsellor</p>

</div>


<div className="flex flex-col md:flex-wrap md:flex-row md:justify-between  items-center gap-y-4 pb-6">

{[1,2,3,4,5,6].map(()=>{
    return <div className="w-[220px] h-[100px] md:w-[150px] ">
        <img src="https://static.wixstatic.com/media/beaf50_c8a8a6ec31ac4a4b8b3e0b908754182e~mv2.jpg/v1/fill/w_162,h_114,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/slam2.jpg" className="w-full h-full object-cover max-w-full" alt="" />
    </div>
})}

</div>



        </div>
{/*  */}


{/*  */}

<div className="md:w-1/2 bg-[#F3B340] py-16 px-mobilePadding md:px-tabletPadding lg:px-desktopPadding space-y-6">


<Heading text="Welcome" />


<div className="w-[160px] h-[220px] lg:w-[200px] lg:h-[270px]">


<img src="/man.jpg" className="w-full max-w-full h-full object-cover" alt="" />


</div>

<p className="leading-7  ">I am an Adult, Child and Adolescent Therapeutic Counsellor with an academic background in Psychology with over a decade of training in mental health, working with an integrative approach. My experience in this field spans different settings: NHS, private practice, school and agency.</p>

<p className="leading-7  ">I believe that each individual is unique and benefits from a tailored approach. Taking the first step and making contact with a therapist can be quite challenging. Wherever you are at, I will meet you there. This is a confidential space where you can explore your feelings and patterns safely, developing a healthier relationship with yourself and others.</p>

</div>


{/*  */}


</div>

    )

}