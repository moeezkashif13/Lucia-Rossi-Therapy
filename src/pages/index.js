import FirstSection from "@/components/first";
import Second from "@/components/second";
import Third from "@/components/third";
import Fourth from "@/components/fourth";

import {HiMenu} from 'react-icons/hi'

import {AiOutlineArrowUp, AiOutlineClose} from 'react-icons/ai'
import { useState } from "react";
import Head from "next/head";

export default function Home() {


  const [showNav,setShowNav] = useState(false);
  

  return (
<>
    <Head>

    <title>Counsellor: Adult, Child & Adolescent | London & remote | Lucia Rossi Therapy</title>

    <link rel="icon" sizes="192x192" href="https://static.wixstatic.com/media/beaf50_dd8cbb73cea34b7a891d584f4031a0b9%7Emv2.jpg/v1/fill/w_32%2Ch_32%2Clg_1%2Cusm_0.66_1.00_0.01/beaf50_dd8cbb73cea34b7a891d584f4031a0b9%7Emv2.jpg" />


    <link rel="shortcut icon" href="https://static.wixstatic.com/media/beaf50_dd8cbb73cea34b7a891d584f4031a0b9%7Emv2.jpg/v1/fill/w_32%2Ch_32%2Clg_1%2Cusm_0.66_1.00_0.01/beaf50_dd8cbb73cea34b7a891d584f4031a0b9%7Emv2.jpg" type="image/jpeg"/>


    <link rel="apple-touch-icon" href="https://static.wixstatic.com/media/beaf50_dd8cbb73cea34b7a891d584f4031a0b9%7Emv2.jpg/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/beaf50_dd8cbb73cea34b7a891d584f4031a0b9%7Emv2.jpg" type="image/jpeg" />


    <link rel="icon" href="https://static.wixstatic.com/media/beaf50_dd8cbb73cea34b7a891d584f4031a0b9%7Emv2.jpg/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/beaf50_dd8cbb73cea34b7a891d584f4031a0b9%7Emv2.jpg" type="image/jpeg" />



    </Head>

<div className="text-black font-light">

<div className="hidden md:hidden">

<div className="h-[70px] bg-[#e1d6ce] flex items-center ">

  <div className="ml-auto mr-3 bg-white w-[50px] h-[50px] flex items-center justify-center rounded-full text-3xl text-[#2e251f] cursor-pointer" onClick={()=>setShowNav(true)}>

<HiMenu/>


  </div>

</div>

<div className={` h-full fixed bg-[rgba(0,0,0,0.8)] w-full top-0 ${showNav?'right-0': "-right-[800px]"} `} style={{transition:'all 0.7s'}}>
<div className="bg-[#D6C8C0] absolute right-0 h-full w-[90%] flex flex-col">

<div className="  bg-white ml-auto mr-5 mt-5 w-10 h-10 text-2xl rounded-full flex justify-center items-center cursor-pointer" onClick={()=>setShowNav(false)}>
  <AiOutlineClose/>
</div>


<div className="px-8 py-10 text-2xl  space-y-3 font-medium">
<div>Home</div>

<div>About Me</div>

<div>Services</div>


<div>Contact</div>
</div>


</div>

</div>


</div>



<div className="w-11 h-11 rounded-md text-white text-2xl cursor-pointer bg-[#373B4D] fixed right-6 bottom-6 flex justify-center items-center" onClick={()=>{
    document.body.scrollTo({top:0,behavior:'smooth'});
    document.documentElement.scrollTo({top:0,behavior:'smooth'});
    
}}  >

<AiOutlineArrowUp/>


</div>



<FirstSection/>

<Second/>


<Third/>


<Fourth/>



</div>
</>
  
    

  )
}

