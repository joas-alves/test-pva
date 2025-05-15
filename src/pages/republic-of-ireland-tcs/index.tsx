import { useTranslations } from 'next-intl';

export default function RepublicOfIreland() {
    const t = useTranslations('RepublicOfIrelandTCs');
    
    return (
        <section className="container mx-auto pt-10 pb-40 text-lg">
            <div className="m-auto">
                <h1 className="sub-heading text-primary mb-6">
                    {t('title')}
                </h1>
                <ol className='list-decimal flex flex-col gap-4 list-inside text-lg mt-4' start={1}>
                    {t.raw('terms').map((term: string, index: number) => (
                        <li key={index}>{term}</li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
