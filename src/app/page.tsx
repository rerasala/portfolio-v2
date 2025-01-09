import Image from 'next/image'
import face from '../../public/images/face.png';
import './w3.css';
import NavBar from './navbar/navbar';
import NewTimeline from './about/NewTimeline';
import Projects from './projects/projects';
import Footer from './footer/footer';

export default function Home() {

  return (
    <>
    <NavBar />
    <main id = "main" className="flex flex-col flex-wrap justify-between mt-20 mx-8 md:mx-10 lg:mx-20 xl:mx-30 w3-animate-opacity">
      <div className="flex items-center mx-auto justify-around flex-col sm:flex-col md:flex-row">
      <div className="z-10 justify-between font-mono text-sm lg:flex pt-5">
        <div className="container">
          <div className="pb-5">
            <h2 className="lg:text-2xl font-semibold font-serif italic">Oh Hello! I&apos;m</h2>
            <h1 style={{ margin: -5 }} className="font-extrabold font-sans text-transparent drop-shadow-2xl text-9xl md:text-8xl sm:text-7xl bg-clip-text bg-gradient-to-r from-blue-400 to-green-600">Rohan Erasala</h1>
          </div>
          <div className='pt-5 font-mono text-md lg:text-lg'>
            <h3 className='text'>engineer</h3>
            <h3 className='text'>designer</h3>
            <h3 className='text'>guitarist</h3>
            <h3 className='text'>and more!</h3>
            <br />
            <h3 className='text'>Currently: swe @ amazon</h3>
          </div>
        </div>
      </div>
      <div className='max-w-xl'>
        <Image src={face} alt={'picture of me'} className={'drop-shadow-xl rounded-xl element1 w3-animate-opacity md:block sm:hidden xs:hidden'}></Image>
      </div>
      </div>
    </main>
    <NewTimeline />
    <Projects />
    <Footer />
    </>
  )
}
