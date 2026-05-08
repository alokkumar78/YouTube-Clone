


export const SearchBar = () => {
    return <div className="w-2/4">
            <div className="max-sm:hidden sm:w-48 lg:w-96 flex items-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-full p-1 pl-4 pr-1 transition-all duration-500 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(0,255,255,0.15)] focus-within:bg-black/40 focus-within:border-cyan-400/50 focus-within:shadow-[0_0_40px_rgba(0,255,255,0.2)] focus-within:ring-1 focus-within:ring-cyan-400/50">
                <input id="default-search" className="w-full bg-transparent text-cyan-50 placeholder-gray-500 border-none outline-none text-sm tracking-widest font-light px-2" placeholder="INITIALIZE SEARCH..." required />
                <button className="text-gray-500 hover:text-cyan-300 p-2.5 rounded-full transition-all duration-300 hover:bg-cyan-900/30 hover:shadow-[0_0_15px_rgba(0,255,255,0.4)] group">
                    <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </button> 
            </div>
    </div>
}
