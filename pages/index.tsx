import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import iconLight from '../public/assets/logo-dark.svg';
import { auth } from '../firebaseIndex';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();

  // Check if user is logged in
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(`User is logged in: ${user.displayName}`);
      // ...
    } else {
      // User is signed out
      // Send user to login page
      console.log('User is not logged in');
      router.push('/login');
    }
  });

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex min-h-screen'>
        <aside>
          <Image src={iconLight} alt='logo' />
        </aside>
        <div className='flex-1 h-ful flex flex-col'>
          <header>
            <h1>Board Name</h1>
          </header>
          <section className='bg-[#F4F7FD] flex-1'>
            <p>Board Content Here</p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
