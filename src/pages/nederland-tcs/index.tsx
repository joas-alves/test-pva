import React from 'react'
import { useTranslations } from 'next-intl';

const NederLand = () => {
    const t = useTranslations('NederlandTCs');

    return (
        <div className="single-column text-lg">
            <div className="container pb-5">
                <h1 className="sub-heading mb-6">
                    <span className="text-primary">{t('title')}</span> – Nederlands
                </h1>
                <div className='flex flex-col gap-4'>
                    {t.raw('terms').map((term: string, index: number) => (
                        <p key={index} className="text-gray-700">
                            {term}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NederLand
