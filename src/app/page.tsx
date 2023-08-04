import Image from 'next/image'
import web from '../../public/images/web_thing.svg';
import './w3.css';
import NavBar from './navbar/navbar';
import NewTimeline from './about/NewTimeline';
import Projects from './projects/projects';

export default function Home() {

  return (
    <>
    <NavBar />
    <main id = "main" className="flex flex-col flex-wrap justify-between mt-20 mx-8 md:mx-10 lg:mx-20 xl:mx-30 w3-animate-opacity">
      <div className="flex items-center justify-around flex-col sm:flex-col md:flex-row">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex pt-5">
        <div className="container">
          <div className="pb-5">
            <h2 className="lg:text-2xl font-semibold font-sans">Oh Hello! I&apos;m</h2>
            <h1 className="font-extrabold font-sans text-transparent drop-shadow-2xl text-5xl md:text-6xl bg-clip-text bg-gradient-to-r from-blue-400 to-green-600">Rohan Erasala</h1>
          </div>
          <div className='pt-5 font-mono'>
            <h3 className='text'>I&apos;m an engineer</h3>
            <h3 className='text'>Designer</h3>
            <h3 className='text'>Guitarist</h3>
            <h3 className='text'>and more!</h3>
            <br />
            <h3 className='text'>Currently: grad student @ Johns Hopkins studying artificial intelligence</h3>
          </div>
        </div>
      </div>
      <div className='w-auto h-auto max-w-xs m-10 '>
        <Image src={web} alt={'picture of me'} className={'drop-shadow-xl rounded-xl element1 w3-animate-opacity'}></Image>
      </div>
      </div>
    </main>
    <NewTimeline />
    <Projects />
    </>
  )
}
