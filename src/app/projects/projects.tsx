import Image from 'next/image'
import headshot from '../../../public/images/me.jpg'
import '../w3.css';

export default function Projects() {
    return (
        <>
        <div id = "projects" className="mx-8 md:mx-10 lg:mx-20 xl:mx-30 mt-10 w3-animate-opacity-delay-2">
        <h2 className='text-2xl font-semibold text-center'>Projects</h2>
        <div className="flex flex-row flex-wrap container gap-x-6 p-4 justify-center">
        <div className="max-w-xs rounded overflow-hidden shadow-lg m-2 bg-gray-200">
            {/* <div className='w-full'>
                <Image src={headshot} alt={'picture of me'}></Image>
            </div> */}
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-black">Cloud Video Platform</div>
                <p className="text-gray-700 text-base">
                Created scalable video hosting platform using Google Cloud services. Used ffmpeg for video processing and Firebase/Firestore API.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-blue-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2">Google Cloud</span>
                <span className="inline-block bg-blue-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2">Containers</span>
                <span className="inline-block bg-blue-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2">Firebase</span>
            </div>
        </div>
        <div className="max-w-xs rounded overflow-hidden shadow-lg m-2 bg-gray-200">
            {/* <div className='w-full'>
                <Image src={headshot} alt={'picture of me'}></Image>
            </div> */}
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-black">Chess DNN</div>
                <p className="text-gray-700 text-base">
                Built and trained a Deep Neural Network (DNN) model for a chess AI with TensorFlow, Keras. Tried to beat Stockfish (could not).
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-blue-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2">Neural Networks</span>
                <span className="inline-block bg-blue-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2">TensorFlow</span>
                <span className="inline-block bg-blue-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2">Artificial Intelligence</span>
            </div>
        </div>
        <div className="max-w-xs rounded overflow-hidden shadow-lg m-2 bg-gray-200">
            {/* <div className='w-full'>
                <Image src={headshot} alt={'picture of me'}></Image>
            </div> */}
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-black">Video Game Recommendation System</div>
                <p className="text-gray-700 text-base">
                Developed a content filtering recommender system for video games. Integrated sales and descriptions into a recommendation algorithm.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-blue-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2">Recommender systems</span>
                <span className="inline-block bg-blue-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2">BERT</span>
                <span className="inline-block bg-blue-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2">Classification</span>
            </div>
        </div>
        </div>
        <div className='container'>
            <p className='text-center font-light p-4'>
                Message me if you would like any information about these projects <a target = "_blank" className = 'underline' href="mailto:rerasala@gmail.com">here</a>
            </p>
        </div>
        </div>
        </>
    )

}