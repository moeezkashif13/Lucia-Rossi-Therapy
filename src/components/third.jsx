import { Heading } from "./general";


const commonSpace = 'space-y-10';

const fromParentSpacing = 'space-y-20'


export default function Third(){
    return (


        <div  className="md:flex lg:text-lg" id="services">
            

        <div className="md:w-1/2 h-[210px] w-full md:h-auto">
            <img src="https://static.wixstatic.com/media/beaf50_350324eb25484270aa0133f84d34c91a~mv2.jpg/v1/fill/w_460,h_1865,al_c,q_100,enc_auto/beaf50_350324eb25484270aa0133f84d34c91a~mv2.jpg" className="w-full h-full max-w-full object-cover" alt="" />
        </div>




<div className={`md:w-1/2 bg-[#F3B340] py-16 px-mobilePadding md:px-tabletPadding lg:px-desktopPadding ${fromParentSpacing}`}>



        <div className={`${commonSpace}`}>
            <Heading text='Clients I work with' />
            <p>Adults, Children and Adolescents</p>
        </div>


        <div className={`${commonSpace}`}>
            <Heading text='What I can help with' />
            <p>Anxiety, Communication Issues, Bereavement, Child Related Issues, Cultural Issues, Depression, Identity Issues, Loss, Trauma, Relationship Issues, Self Esteem, Sexual Identity, Spirituality, Stress and Work Related Issues.</p>
        </div>



        <div className={`${commonSpace}`}>
            <Heading text='Types of therapy' />
            
            <div className="space-y-6">
                    <p className="text-lg  font-semibold">Adults</p>
                    <p>With adult clients, I work with an integrative approach, drawing from different theories: Psychodynamic, Cognitive Behavioural Therapy (CBT), Humanistic, Person Centred, Attachment Theory, Psychodynamic, Relational, Solution Focused Brief Therapy, Mindfulness, Schema Therapy, Transactional Analysis, Existential, Gestalt, Transpersonal.</p>
                </div>


                <div className="space-y-6">
                    <p className="text-lg  font-semibold">Children and Adolescents</p>
                    <p>When working children and adolescents, I still work integratively and draw from these different approaches. Particulary relevant here are Play Theory and Attachment Theory.</p>
                </div>
            
            

        </div>



        <div className={`${commonSpace}`}>
            <Heading text='How I deliver therapy' />
            <ul className="list-disc space-y-2 px-mobilePadding">
                <li>Online (on Zoom, end-to-end encrypted and HIPAA compliant service)</li>
                <li>Long term </li>
                <li>Short term </li>
            </ul>
        </div>



        <div className={`${commonSpace}`}>
            <Heading text='Free Initial Consultation' />
            <p>I offer a free initial consultation via Zoom. This is an opportunity for both of us to assess whether we can work together. You will have the chance to learn more about how I work and ask any questions you may have. </p>
        </div>



        <div className={`${commonSpace}`}>
            <Heading text='Reviewing Our Work' />
            <p>On session 6, we will review our work together. This can look like checking in with how you feel with the sessions and reflecting on our work together.</p>
        </div>



        <div className={`${commonSpace}`}>
            <Heading text='Languages' />
            <p>I offer sessions in English and Italian.</p>
        </div>


        <div className={`${commonSpace}`}>
            <Heading text='Fees' />
            
            <div className="space-y-5">
                <p className="font-medium">Initial Consultation</p>
                <p>Complimentary initial consultation.</p>
            </div>


            <div className="space-y-5">
                <p className="font-medium">Ongoing Fees</p>
                <p>My regular fee is £80 for a 50 minute session.</p>
                <p>I offer few slots at a concessionary rate of £65. Please enquire for further details.</p>
            </div>
            

        </div>



        <div className={`${commonSpace}`}>
            <Heading text='Reviewing Our Work' />
            <p>On session 6, we will review our work together. This can look like checking in with how you feel with the sessions and reflecting on our work together.</p>
        </div>



</div>





        </div>


    )
}