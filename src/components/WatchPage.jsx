import Suggestions from "./Suggestions"
import VideoDetails from "./VideoDetails"
import {useParams} from 'react-router-dom'


const WatchPage = () => {

    const {id} = useParams()
    console.log(id)


  return (
    <div className="border flex h-full p-4">
      <VideoDetails id={id}/>
      <Suggestions />
    </div>
  )
}

export default WatchPage