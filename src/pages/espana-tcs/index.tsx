import React from 'react'
import { useTranslations } from 'next-intl'

const Espana = () => {
    const t = useTranslations('EspanaTCs')
    
    return (
        <section className="container mx-auto pt-10 pb-40 text-lg">
            <div className="m-auto">
                <h1 className="sub-heading text-primary mb-6">
                    {t('title')}
                </h1>
                <div className='flex flex-col gap-4'>
                    {(t.raw('terms') as readonly string[]).map((term: string, index: number) => (
                        <p key={index}>{term}</p>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Espana
