import Link from "next/link";
import { useTranslations } from "next-intl";

export default function UsaPetOwnerPage() {
  const t = useTranslations('USAPetOwnerTCs');
  
  return (
    <section className="container mx-auto pt-10 pb-40 text-lg">
      <div className="col-md-8 m-auto">
        <h1 className="sub-heading mb-6">
          <span className="text-primary">{t('title.prefix')}</span> {t('title.suffix')}
        </h1>
        <p className="text-lg mb-4">
          <Link
            className="font-bold text-primary hover:underline"
            href={t('pdf_path')}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('download_link')}
          </Link>
        </p>
        <ol className="list-decimal list-inside lg:px-10 flex flex-col gap-4 marker:text-primary" start={1}>
          {(t.raw('terms') as string[]).map((term: string, index: number) => (
            <li key={index}>{term}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}
