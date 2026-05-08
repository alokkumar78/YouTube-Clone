import React from 'react';

const MOCK_COMMENTS = [
  {
    id: 1,
    user: "@ReactFan2026",
    avatar: "/thumb.jpg",
    time: "2 hours ago",
    content: "This new update looks incredibly futuristic! The glassmorphism is completely next-level. The transitions make it so smooth to use.",
    likes: "2.4K",
  },
  {
    id: 2,
    user: "@DevExplorer",
    avatar: "/thumb.jpg",
    time: "5 hours ago",
    content: "Wow, finally a proper tutorial that covers the latest features. Thanks for making this, the UI is just breathtaking.",
    likes: "852",
  },
  {
    id: 3,
    user: "@WebNinja",
    avatar: "/thumb.jpg",
    time: "1 day ago",
    content: "Can we get a breakdown of how the neon glow effects were implemented? Looks like standard Tailwind with some custom box-shadow magic.",
    likes: "156",
  }
];

export function Comments() {
  return (
    <div className="mt-6 pt-6 border-t border-gray-700/50">
      <h3 className="text-xl font-bold mb-6 text-gray-100">1,204 Comments</h3>
      
      {/* Comment Input */}
      <div className="flex gap-4 mb-8">
        <img src="/thumb.jpg" alt="Your Avatar" className="w-10 h-10 rounded-full" />
        <div className="flex-1">
          <input 
            type="text" 
            placeholder="Add a futuristic comment..." 
            className="w-full bg-transparent border-b border-gray-600 focus:border-cyan-400 outline-none pb-1 text-sm transition-colors"
          />
          <div className="flex justify-end gap-2 mt-2 hidden group-focus-within:flex">
            <button className="px-4 py-2 text-sm font-medium hover:bg-white/10 rounded-full transition-colors">Cancel</button>
            <button className="px-4 py-2 text-sm font-medium bg-cyan-600/50 hover:bg-cyan-500 rounded-full transition-colors text-white">Comment</button>
          </div>
        </div>
      </div>

      {/* Comment List */}
      <div className="flex flex-col gap-6">
        {MOCK_COMMENTS.map((comment) => (
          <div key={comment.id} className="flex gap-4">
            <img src={comment.avatar} alt={comment.user} className="w-10 h-10 rounded-full mt-1" />
            <div className="flex-1">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-semibold text-sm text-gray-200">{comment.user}</span>
                <span className="text-xs text-gray-500">{comment.time}</span>
              </div>
              <p className="text-sm text-gray-300 mb-2">{comment.content}</p>
              <div className="flex items-center gap-4 text-gray-400 text-sm">
                <button className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.514" /></svg>
                  {comment.likes}
                </button>
                <button className="hover:text-cyan-400 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.514" /></svg>
                </button>
                <button className="text-xs font-semibold hover:text-cyan-400 transition-colors">Reply</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
