/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image'
import React from 'react'
import simplyHealth from '../../../public/images/simplyhealth.jpg'

const SimplyHealth = () => {
    return (
        <section>
            <div className='relative'>
                <Image alt='simplyhealth' src={simplyHealth} width={1920} height={1080} className='wfull sm:h-96 h-52 object-cover' />
                <h1 className='mx-auto container text-3xl font-bold text-primary absolute bottom-1/3'>Looking for SimplyHealth?</h1>
            </div>
            <div className='mx-auto container text-center flex flex-col gap-4 items-center mt-10 text-xl'>
                <h4 className='text-black text-center font-bold text-primary'>Simplyhealth recently made the decision to withdraw from the Animal Health sector. As part of their overall strategic review, they looked carefully to identify an existing supplier in the market who had the scale and resources to provide continuity of service to their customers and as a consequence, Simplyhealth took the decision to sell the veterinary side of their business to Premier Vet Alliance (PVA).</h4>
                <p>If you are looking for more information on your existing Pet Care Plan or more details on how to launch a plan, then please visit the Premier Vet Alliance.</p>
                <a className='text-primary hover:underline font-bold' href="/">Visit our homepage to find out more </a>
                <p>The Premier Vet Alliance is a global leader in preventative health care offering unrivaled technology, investment and support to veterinary clinics and pet owners around the world including the following services:</p>
                <p className='text-center'><a className='text-primary font-bold hover:underline' href="/uk/services/premier-pet-care-plan">Pet Care Plan</a>- a market leading preventative healthcare solution</p>
                <p className='text-center'> <a className='text-primary font-bold hover:underline' href="/uk/services/post2pet/">Post2Pet</a> – An affordable, convenient and easy to use home delivery service</p>
                <p className='text-center'>  <a className='text-primary font-bold hover:underline' href="/uk/services/our-technology/">Technology</a> – State-of-the-art financial technology platform</p>
                <p className='text-center'> <a className='text-primary font-bold hover:underline' href="/uk/services/training/">Training</a> – Access to the PVA Training Academy</p>
                <p>For all queries, please contact:  <a className='text-primary font-light hover:underline' href="mailto:PCP@premiervetalliance.co.uk">enquiries@premiervetalliance.co.uk</a></p>
            </div>
        </section>
    )
}

export default SimplyHealth
