import '../w3.css';

export default function Projects() {
    return (
        <>
        <div id = "projects" className="mx-8 md:mx-10 lg:mx-20 xl:mx-30 mt-10 w3-animate-opacity-delay-2">
        <h2 className='text-2xl font-semibold text-center'>Projects</h2>
        <div className="flex flex-row flex-wrap container gap-x-6 p-4 justify-center mx-auto">
        <div className="max-w-xs rounded overflow-hidden shadow-lg m-2 bg-gray-200">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-black">RAG system using Mistral API</div>
                <p className="text-gray-700 text-base">
                Created and deployed a RAG system using the OpenAI Mistral API to generate responses to user questions with context.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-blue-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2">RAG</span>
                <span className="inline-block bg-blue-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2">Artificial Intelligence</span>
                <span className="inline-block bg-blue-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2">Containers</span>
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
        <div className="max-w-xs rounded overflow-hidden shadow-lg m-2 bg-gray-200">
            {/* <div className='w-full'>
                <Image src={headshot} alt={'picture of me'}></Image>
            </div> */}
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-black">Sentiment Analysis of NFL Draft threads</div>
                <p className="text-gray-700 text-base">
                Can fans really tell who's going to be a great football player? Find out in my research paper <a style={{color: 'blue'}} target="_blank" href="https://publications.waset.org/10013885/tweets-to-touchdowns-predicting-national-football-league-achievement-from-social-media-optimism">here</a>. Received an award for the best presentation.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-blue-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2">Sentiment Analysis</span>
                <span className="inline-block bg-blue-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2">Artificial Intelligence</span>
                <span className="inline-block bg-blue-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2">Research</span>
            </div>
        </div>
        </div>
        </div>
        </>
    )

}