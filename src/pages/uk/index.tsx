import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/en-UK',
      permanent: false, 
    },
  };
};

const Uk = () => {
  return null;
};

export default Uk;
