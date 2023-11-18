
export default function ProblemCard({index, title, editorial, attempt, description, tags }) {
    return (
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
  