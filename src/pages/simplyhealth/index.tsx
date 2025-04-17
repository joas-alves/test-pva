/* eslint-disable @next/next/no-html-link-for-pages */
import { useTranslations } from 'next-intl';

const SimplyHealth = () => {
    const t = useTranslations('SimplyHealth');
    
    return (
        <section className="w-full">
            <div className='bg-image h-96 relative'>
                <h1 className='text-3xl font-bold text-primary absolute bottom-1/3 left-[5%]'>{t('heading')}</h1>
            </div>
            <div className='mx-auto container text-center flex flex-col gap-4 items-center mt-10 text-xl'>
                <h4 className='text-black text-center font-bold text-primary'>{t('intro_paragraph')}</h4>
                <p>{t('info_paragraph')}</p>
                <a className='text-primary hover:underline font-bold' href="/">{t('visit_homepage')} </a>
                <p>{t('services_intro')}</p>
                <p className='text-center'><a className='text-primary font-bold hover:underline' href="/uk/services/premier-pet-care-plan">{t('pet_care_plan')}</a>- {t('pet_care_plan_desc')}</p>
                <p className='text-center'> <a className='text-primary font-bold hover:underline' href="/uk/services/post2pet/">{t('post2pet')}</a> – {t('post2pet_desc')}</p>
                <p className='text-center'>  <a className='text-primary font-bold hover:underline' href="/uk/services/our-technology/">{t('technology')}</a> – {t('technology_desc')}</p>
                <p className='text-center'> <a className='text-primary font-bold hover:underline' href="/uk/services/training/">{t('training')}</a> – {t('training_desc')}</p>
                <p>{t('contact_prefix')}  <a className='text-primary font-light hover:underline' href="mailto:PCP@premiervetalliance.co.uk">{t('contact_email')}</a></p>
            </div>
        </section>
    )
}

export default SimplyHealth
