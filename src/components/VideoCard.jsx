


const VideoCard = ({videoInfo}) => {
    
    const {snippet, statistics, contentDetails} = videoInfo

    const {channelTitle, title, thumbnails ,publishedAt} = snippet

    const {viewCount} = statistics



  return (
    <div className="w-80 h-auto my-1 mx-3 py-1 ">
        <img src={thumbnails.high.url} alt="image"  className="rounded-lg w-full h-48"/>
        <ul className="my-1">
            <li className="text-md font-semibold break-words">{title}</li>
            <li className=" text-gray-700 text-sm my-1" >{channelTitle}</li>
            <li className="text-gray-700 text-sm">{viewCount} views <span className="mx-2 text-black">&#8226;</span> <span>{publishedAt} ago</span></li>
        </ul>
    </div>
  )
}

export default VideoCard