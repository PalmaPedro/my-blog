import type { NextPage } from 'next'
import Link from 'next/link';
import Image from 'next/future/image';

import Container from '../components/Container';

const  About:NextPage = () => {
  return (
    <Container title="About Pedro Palma">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About me
        </h1>
       
      </div>
    </Container>
  );
}

export default About
