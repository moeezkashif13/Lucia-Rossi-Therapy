import { Heading } from "./general";

const Training = ()=><div className="space-y-12">

<Heading text="Training and qualifications" />


    <ul className="list-disc px-mobilePadding  space-y-2">
    <li>BSc (Hons) in Psychology</li>
    <li>MSc in Applied Cognitive Neuroscience (Dept of Psychology)</li>
    <li>MSc in Integrative Psychotherapy (currently completing at Metanoia Institute and Middlesex University)</li>
    <li>CBT: Introductory Course (BPS LC Approved)</li>
    <li>Certificate in Counselling Children</li>
    <li>Diploma in Therapeutic Counselling</li>
    <li>Certificate in Counselling Studies</li>
    <li>Certificate in Counselling Skills</li>



    </ul>
</div>



const Experience = ()=>{
    return (
        <div className="space-y-12">

<Heading text="Experience" />


<div className="space-y-9">



<div className="space-y-6">
    <p className="font-bold">Adult and Child Counsellor in Private Practice</p>
    <p>Working with an integrative approach both long term and short term. Abiding by the BACP Ethical Framework.</p>
</div>



<div className="space-y-6">
    <p className="font-bold">Psychotherapist</p>
    <p>Integrative psychotherapy with adult clients at agency.</p>
</div>



<div className="space-y-6">
    <p className="font-bold">NHS Counsellor</p>
    <p>Working within The Awareness Centre’s NHS counselling service, offering Step 2 therapeutic counselling to adult clients at GP practice (South London and Maudsley NHS Foundation Trust – SLaM).</p>
</div>


<div className="space-y-6">
    <p className="font-bold">Assistant Clinical Psychologist</p>
    <p>In-school observations for the purposes of ADHD diagnostic assessment: conducting observations of children and adolescents; interviewing key staff members; producing reports.</p>
</div>


<div className="space-y-6">
    <p className="font-bold">School Project Manager</p>
    <p>Managing the counselling project in school: offering one-to-one and group sessions to students; managing counsellors and providing clinical supervision; being responsible for health and safety.</p>
</div>


<div className="space-y-6">
    <p className="font-bold">Counsellor in school </p>
    <p>Providing one-to-one long-term and group therapeutic counselling to children in schools.</p>
</div>


<div className="space-y-6">
    <p className="font-bold">Specialist Mental Health Mentor</p>
    <p>Mentoring adult students with mental health difficulties in university settings.</p>
</div>




</div>


</div>
    )
}



const Professional = ()=>{
    return (
        <div className="space-y-12" >

<Heading text="Professional standards" />

<ul className="list-disc px-mobilePadding  space-y-2">
    <li>Registered Member of the BACP (The British Association for Counselling and Psychotherapy)</li>
    <li>MBPsS (The British Psychological Association)</li>
    <li>DBS Enhanced Certificate (Update Service)​​</li>
</ul>


<p>I abide by the BACP Ethical Framework​ and am registered with Howden insurance company.</p>

<p>As part of my commitment to offering a quality service, I undergo regular clinical supervision, which supports my professional and ethical practice. </p>

</div>
    )
}





export default function Second(){

return(
    <div className="md:flex md:flex-row-reverse lg:text-lg" id="about">


{/*  */}
<div className="md:w-1/2 w-full h-[230px]  md:h-auto">
    <img src="https://static.wixstatic.com/media/beaf50_dc23c074bc084b6ca9dcfb0a8bae7163~mv2.jpg/v1/fill/w_577,h_2000,al_c,q_100,enc_auto/beaf50_dc23c074bc084b6ca9dcfb0a8bae7163~mv2.jpg" className="h-full max-w-full w-full object-cover" alt="" />
</div>
{/*  */}



{/*  */}

<div className="md:w-1/2 px-mobilePadding md:px-tabletPadding lg:px-desktopPadding py-16 bg-[#EDD4A6] space-y-24">


<Training/>


<Experience/>


<Professional/>


</div>


{/*  */}







    </div>

)

}