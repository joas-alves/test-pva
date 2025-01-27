import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Vet2Pet: NextPage = () => {
  return (
    <>
      <Head>
        <title>Vet2Pet Services</title>
        <meta name='description' content='Discover Vet2Pet, your all-in-one veterinary health care app for managing your pets health.' />
      </Head>
      <main className='p-6 mx-auto max-w-4xl'>
        <h1 className='text-3xl font-bold text-center mb-6'>Welcome to Vet2Pet</h1>
        <div className='flex justify-center mb-6'>
          <Image src='/images/vet2pet-banner.png' alt='Vet2Pet banner' className='rounded-lg' width={600} height={400} />
        </div>
        <p className='text-lg leading-relaxed mb-4'>
          Introducing Vet2Pet – your all-in-one veterinary health care app designed to make managing your pet’s health easier than ever! With Vet2Pet, you can effortlessly track treatment schedules, set reminders for medications, and keep detailed health records, all in one place.
        </p>
        <p className='text-lg leading-relaxed mb-4'>
          But that’s not all! Our app also allows you to engage directly with your veterinary practice. Schedule appointments, ask questions, and receive personalised advice from your trusted vet, ensuring your furry friend gets the best care possible.
        </p>
        <p className='text-lg leading-relaxed mb-4'>
          Join the Vet2Pet community today and take the stress out of pet health management. Your pet deserves the best, and with Vet2Pet, the best is just a tap away! 🐾📱
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
            Download on the App Store
          </a>
          <a
            href='https://play.google.com/store/apps/details?id=com.vet2petapp.app&hl=en_GB'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center px-4 py-3 bg-black text-white rounded-lg hover:bg-slate-950 hover:text-white'
          >
            <Image
              src="/images/icons/google-play-icon.svg"
              alt="Apple Store"
              width={24}
              height={24}
              className='me-2'
            />
            Get it on Google Play
          </a>
        </div>
      </main>
    </>
  );
};

export default Vet2Pet;
