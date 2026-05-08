import { AppBar } from "@/components/Appbar";
import { Comments } from "@/components/Comments";
import { RecommendedVideos } from "@/components/RecommendedVideos";

export default function Watch() {
  return (
    <main className="min-h-screen bg-black">
      <AppBar />
      <div className="flex justify-center p-4">
        <div className="w-full max-w-[1600px] flex flex-col lg:flex-row gap-6">
          {/* Main Video Section (Left Column) */}
          <div className="flex-1 lg:w-2/3 lg:max-w-[1000px]">
            {/* Video Player */}
            <div className="w-full aspect-video rounded-xl overflow-hidden bg-black shadow-[0_0_30px_rgba(34,211,238,0.1)]">
              <video
                src="/2vid.mp4"
                className="w-full h-full"
                controls
                autoPlay
              />
            </div>

            {/* Video Details */}
            <div className="mt-4">
              <h1 className="text-xl md:text-2xl font-bold text-gray-100">
                How to learn React in 2026 | futuristic code with me
              </h1>

              <div className="flex flex-col md:flex-row md:items-center justify-between mt-3 gap-4">
                <div className="flex items-center gap-4">
                  <img src="/thumb.jpg" alt="Channel" className="w-10 h-10 rounded-full" />
                  <div>
                    <h3 className="font-bold text-gray-100">John Doe</h3>
                    <p className="text-sm text-gray-400">1.5M subscribers</p>
                  </div>
                  <button className="bg-gray-100 text-black px-4 py-2 rounded-full font-bold ml-2 hover:bg-gray-300 transition-colors">
                    Subscribe
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center bg-white/10 rounded-full overflow-hidden">
                    <button className="flex items-center gap-2 px-4 py-2 hover:bg-white/20 transition-colors text-sm font-medium border-r border-gray-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.514" /></svg>
                      125K
                    </button>
                    <button className="flex items-center px-4 py-2 hover:bg-white/20 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.514" /></svg>
                    </button>
                  </div>
                  <button className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors text-sm font-medium">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                    Share
                  </button>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-4 mt-4 hover:bg-white/10 transition-colors cursor-pointer text-sm text-gray-300">
                <span className="font-bold text-gray-200">1.2M views • 2 days ago</span>
                <p className="mt-2">Welcome to the future of web development! In this video, we explore how to build stunning, futuristic user interfaces using React and Tailwind CSS in the year 2026. Watch as we implement glassmorphism, neon glows, and smooth animations to create a next-generation video streaming platform.</p>
              </div>
            </div>

            {/* Comments Section */}
            <Comments />
          </div>

          {/* Recommended Videos Sidebar (Right Column) */}
          <div className="lg:w-1/3 lg:min-w-[350px] lg:max-w-[400px]">
            <RecommendedVideos />
          </div>
        </div>
      </div>
    </main>
  );
}
