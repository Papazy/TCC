
export default function ProblemCard({index, title, editorial, attempt, description, tags }) {
    return (
<<<<<<< HEAD
        <section>
            <div className="container px-6 py-10 mx-auto flex flex-wrap justify-between">
                {/* Card 1 */}
                <div className="max-w-sm md:mb-6 mb-4 p-6 flex flex-col justify-center bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                            Database
                        </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        enhance your knowledge of data management, database
                        modeling, and database programming
                    </p>
                    <a
                        href="#"
                        className="inline-flex items-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Read more
                        <svg
                            className="w-3.5 h-3.5 ml-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </a>
                </div>
                {/* Card 1 */}
                <div className="max-w-sm md:mb-6 mb-4 p-6 bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                            Algorithm
                        </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Algorithms Course: Master the art of problem-solving
                        with our algorithms course. 
                    </p>
                    <a
                        href="/problemdetail"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Read more
                        <svg
                            className="w-3.5 h-3.5 ml-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </a>
                </div>
                {/* Card 1 */}
                <div className="max-w-sm md:mb-6 mb-4 p-6 bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                            Bitwise Operation
                        </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions
                        of 2021 so far, in reverse chronological order.
                    </p>
                    <a
                        href="#"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Read more
                        <svg
                            className="w-3.5 h-3.5 ml-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </a>
                </div>
                {/* Card 1 */}
                <div className="max-w-sm md:mb-6 mb-4 p-6 bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                            Calculus
                        </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions
                        of 2021 so far, in reverse chronological order.
                    </p>
                    <a
                        href="#"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Read more
                        <svg
                            className="w-3.5 h-3.5 ml-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </a>
                </div>
=======
      <>  
        <article key={index} className="rounded-xl border overflow-x-auto border-black p-4">
          <div className="flex flex-col sm:gap-4">
            <div className="flex justify-between">
              <h3 className="mt-4 text-lg font-medium sm:text-xl">
                <a href="" className="hover:underline">
                  {title}
                </a>
              </h3>
              <div className="flex gap-4">
                <div className="mt-4 rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">Editorial</div>
                <div className="mt-4 rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">{attempt ? 'Attempted' : 'Not Attempted'}</div>
              </div>
>>>>>>> 1a2389f74c7e1ba926940970944c5098d694dc17
            </div>
  
            <p className="mt-1 text-sm text-gray-700">{description}</p>
            {/* tag */}
            <div className="mt-4 flex sm:items-center gap-2">
              {tags.map((tag, tagIndex) => (
                <div key={tagIndex} className="flex items-center gap-1 bg-gray-300 p-1 rounded-md text-gray-500">
                  <p className="text-xs font-medium">{tag}</p>
                </div>
              ))}
            </div>
          </div>
        </article>
  
        
      </>
    );
  }
  