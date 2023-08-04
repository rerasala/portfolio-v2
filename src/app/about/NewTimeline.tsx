import '../w3.css';

export default function NewTimeline() {
    return (
        <>
            <div id = "about" className="container mt-10 mx-8 md:mx-10 lg:mx-20 xl:mx-30 p-0 sm:p-4 md:p-0 flex flex-row flex-wrap justify-center gap-12 w3-animate-opacity-delay">
            <div className="container">
            <h2 className='text-2xl font-semibold text-center'>About</h2>
            </div>
            <div className="mr-0 max-w-sm">
                <h3 className="mb-10 text-center">History</h3>
                <ol className="relative border-l border-gray-200 mx-auto">                  
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 "></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400">September 2019 - April 2023</time>
                        <h3 className="text-lg font-semibold text-gray-100">Student &mdash; The University of Michigan</h3>
                        <p className="mb-4 text-base font-normal text-gray-300 dark:text-gray-400">BSE Computer Science, Magna Cumme Laude</p>
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5  "></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400">May 2021 - July 2021</time>
                        <h3 className="text-lg font-semibold text-gray-100">SWE Intern &mdash; Ford Motor Company</h3>
                        <p className="mb-4 text-base font-normal text-gray-300 dark:text-gray-400">Developed tracking software for server health</p>
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5  "></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400">December 2021 - December 2022</time>
                        <h3 className="text-lg font-semibold text-gray-100">VP Professional Development &mdash; Kappa Theta Pi</h3>
                        <p className="mb-4 text-base font-normal text-gray-300 dark:text-gray-400">Helped students pursue professional interests</p>
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5  "></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400">May 2022 - August 2022</time>
                        <h3 className="text-lg font-semibold text-gray-100">SDE Intern &mdash; Amazon</h3>
                        <p className="mb-4 text-base font-normal text-gray-300 dark:text-gray-400">Worked on serverless web apps</p>
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5  "></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400">August 2023 - Present</time>
                        <h3 className="text-lg font-semibold text-gray-100">Graduate Student &mdash; Johns Hopkins University</h3>
                        <p className="mb-4 text-base font-normal text-gray-300 dark:text-gray-400">Candidate for MS in Artificial Intelligence</p>
                    </li>
                </ol>
            </div>
            <div className="text-center">
            <h3 className="mb-10">Interests</h3>
            <div className="container text-center max-w-fit grid grid-rows-2 grid-flow-col gap-8 mb-10">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 w-50 text-center flex flex-col justify-center rounded-xl p-5">
                    <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke = "black" fill = "none" strokeWidth="1.5" className='w-10 h-10 mx-auto' viewBox="0 0 256 256"><path fill="black" d="M229.06 53.89a32.92 32.92 0 0 0-26.95-26.95c-32.37-5.49-93.39-8-138.27 36.9s-42.39 105.9-36.9 138.27a32.92 32.92 0 0 0 27 26.95A206.58 206.58 0 0 0 88.27 232c32.09 0 72.05-8 103.89-39.84c44.89-44.88 42.39-105.9 36.9-138.27Zm-61.61-14a192 192 0 0 1 32 2.8a16.94 16.94 0 0 1 13.85 13.87a188.59 188.59 0 0 1 2.7 36.22L163.21 40c1.4-.08 2.79-.1 4.24-.1ZM56.56 213.3a16.94 16.94 0 0 1-13.86-13.86a188.59 188.59 0 0 1-2.7-36.22L92.78 216a187.79 187.79 0 0 1-36.22-2.7Zm124.3-32.44c-11.61 11.6-33.27 27.73-67.37 33.27l-71.62-71.62c5.54-34.1 21.67-55.76 33.27-67.37S108.4 47.4 142.5 41.86l71.63 71.63c-5.54 34.1-21.67 55.76-33.27 67.37Zm-15.22-90.5a8 8 0 0 1 0 11.31L151.3 116l6.34 6.34a8 8 0 1 1-11.31 11.3l-6.33-6.33L127.31 140l6.34 6.34a8 8 0 1 1-11.3 11.31L116 151.3l-14.34 14.34a8 8 0 1 1-11.31-11.31L104.7 140l-6.34-6.34a8 8 0 0 1 11.31-11.3l6.34 6.34l12.68-12.7l-6.34-6.34a8 8 0 0 1 11.3-11.31l6.35 6.35l14.34-14.34a8 8 0 0 1 11.3 0Z"/></svg>
                    </div>
                    <p className="text-black p-3">
                        College Football
                    </p>
                </div>
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-50 text-center flex flex-col justify-center rounded-xl p-5">
                    <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className = 'w-10 h-10 mx-auto' viewBox="0 0 24 24"><g fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46a2.5 2.5 0 0 0-1.98 3a2.5 2.5 0 0 0-1.32 4.24a3 3 0 0 0 .34 5.58a2.5 2.5 0 0 0 2.96 3.08a2.5 2.5 0 0 0 4.91.05L12 20V4.5ZM16 8V5c0-1.1.9-2 2-2m-6 10h4"/><path d="M12 18h6a2 2 0 0 1 2 2v1M12 8h8m.5 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Zm-4 5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Z"/><path d="M20.5 21a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Zm-2-18a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Z"/></g></svg>
                    </div>
                    <p className="text-black p-3">
                        Cloud Computing
                    </p>
                </div>
                <div className="bg-gradient-to-r from-teal-300 to-emerald-500 w-50 w-50 text-center flex flex-col justify-center rounded-xl p-5">
                    <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className = "w-10 h-10 mx-auto" viewBox="0 0 256 256"><path fill="black" d="M200 152a31.84 31.84 0 0 0-19.53 6.68l-23.11-18A31.65 31.65 0 0 0 160 128c0-.74 0-1.48-.08-2.21l13.23-4.41A32 32 0 1 0 168 104c0 .74 0 1.48.08 2.21l-13.23 4.41A32 32 0 0 0 128 96a32.59 32.59 0 0 0-5.27.44L115.89 81A32 32 0 1 0 96 88a32.59 32.59 0 0 0 5.27-.44l6.84 15.4a31.92 31.92 0 0 0-8.57 39.64l-25.71 22.84a32.06 32.06 0 1 0 10.63 12l25.71-22.84a31.91 31.91 0 0 0 37.36-1.24l23.11 18A31.65 31.65 0 0 0 168 184a32 32 0 1 0 32-32Zm0-64a16 16 0 1 1-16 16a16 16 0 0 1 16-16ZM80 56a16 16 0 1 1 16 16a16 16 0 0 1-16-16ZM56 208a16 16 0 1 1 16-16a16 16 0 0 1-16 16Zm144-8a16 16 0 1 1 16-16a16 16 0 0 1-16 16Z"/></svg>
                    </div>
                    <p className="text-black p-3">
                        Artificial Intelligence
                    </p>
                </div>
                <div className="bg-gradient-to-r from-yellow-300 to-amber-500 text-center flex flex-col justify-center rounded-xl p-5">
                    <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className = "w-10 h-10 mx-auto" viewBox="0 0 24 24"><g fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9.5 11h.01m4.99 0h.01M9.5 15a3.5 3.5 0 0 0 5 0"/><path d="M7 5h1V3h8v2h1a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3v1H7v-1a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3"/></g></svg>
                    </div>
                    <p className="text-black p-3">
                        LEGO Collections!
                    </p>
                </div>

            </div>
            </div>
            </div>
            
        </>
    )
}