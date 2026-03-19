import { VideoCard } from "./VideoCard"

const VIDEOS = [{
    title: "How to learn React in 2026 | code with me",
      author: "John Doe",
      views: "1.2M views", 
      timestamp: "2 days ago", 
      image: "photo.png",
      thumbImage: "thumb.jpg"
},
{
    title: "How to learn React in 2026 | code with me",
      author: "John Doe",
      views: "1.2M views", 
      timestamp: "2 days ago", 
      image: "photo.png",
      thumbImage: "thumb.jpg"
}  ,
{
    title: "How to learn React in 2026 | code with me",
      author: "John Doe",
      views: "1.2M views", 
      timestamp: "2 days ago", 
      image: "photo.png",
      thumbImage: "thumb.jpg"
}  ,
{
    title: "How to learn React in 2026 | code with me",
      author: "John Doe",
      views: "1.2M views", 
      timestamp: "2 days ago", 
      image: "photo.png",
      thumbImage: "thumb.jpg"
}  ,
{
    title: "How to learn React in 2026 | code with me",
      author: "John Doe",
      views: "1.2M views", 
      timestamp: "2 days ago", 
      image: "photo.png",
      thumbImage: "thumb.jpg"
}  ,{
    title: "How to learn React in 2026 | code with me",
      author: "John Doe",
      views: "1.2M views", 
      timestamp: "2 days ago", 
      image: "photo.png",
      thumbImage: "thumb.jpg"
}    


]

export const VideoGrid = () => {
    return <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video => <div> 
            <VideoCard   
                  
                title={video.title}
                author={video.author} 
                views={video.views} 
                timestamp={video.timestamp} 
                image={video.image}
                thumbImage={video.thumbImage}
                ></VideoCard>

            </div>)}
    
    </div> 
}