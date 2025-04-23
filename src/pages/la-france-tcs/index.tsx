import React from 'react'
import { useTranslations } from 'next-intl';

const LaFrance = () => {
    const t = useTranslations('LaFranceTCs');

    return (
        <section className="container mx-auto pt-10 pb-40 text-lg">
            <div className="m-auto">
                <h1 className="sub-heading text-primary mb-6">
                    {t('title')}
                </h1>
                <div className="space-y-4">
                    {(t.raw('terms') as string[]).map((term: string, index: number) => (
                        <p key={index} className="text-gray-700">
                            {term}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default LaFrance
