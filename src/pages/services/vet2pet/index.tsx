import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Vet2Pet: NextPage = () => {
  const t = useTranslations("Vet2Pet");
  
  return (
    <>
      <Head>
        <title>{t("page_title")}</title>
        <meta name='description' content={t("meta_description")} />
      </Head>
      <main className='p-6 mx-auto max-w-4xl'>
        <h1 className='text-3xl font-bold text-center mb-6'>{t("welcome_title")}</h1>
        <div className='flex justify-center mb-6'>
          <Image src='/images/vet2pet-banner.png' alt={t("banner_alt")} className='rounded-lg' width={600} height={400} />
        </div>
        <p className='text-lg leading-relaxed mb-4'>
          {t("intro_paragraph")}
        </p>
        <p className='text-lg leading-relaxed mb-4'>
          {t("second_paragraph")}
        </p>
        <p className='text-lg leading-relaxed mb-4'>
          {t("third_paragraph")}
        </p>
        <div className='flex justify-center space-x-4 mt-6'>
          <a
            href='https://apps.apple.com/gb/app/vet2pet-online-pet-care-hub/id1660078670'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center px-4 py-3 bg-black text-white rounded-lg hover:bg-slate-950 hover:text-white'
          >
            <Image
              src="/images/icons/apple-store-white-icon.svg"
              alt="Apple Store"
              width={24}
              height={24}
              className='me-2'
            />
            {t("download_app_store")}
          </a>
          <a
            href='https://play.google.com/store/apps/details?id=com.vet2petapp.app&hl=en_GB'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center px-4 py-3 bg-black text-white rounded-lg hover:bg-slate-950 hover:text-white'
          >
            <Image
              src="/images/icons/google-play-icon.svg"
              alt="Google Play"
              width={24}
              height={24}
              className='me-2'
            />
            {t("download_google_play")}
          </a>
        </div>
      </main>
    </>
  );
};

export default Vet2Pet;
