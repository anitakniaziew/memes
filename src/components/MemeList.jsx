import MemeItem from './MemeItem';
import { useSelector } from 'react-redux'

const MemeList = () => {
  const memes = useSelector((state) => state.memes);

  return (
    <div>
      { memes.map(({title, img, downvotes, upvotes}, index) => <MemeItem
        index={index}
        key={title}
        title={title}
        img={img}
        downvotes={downvotes}
        upvotes={upvotes}
      />) }
    </div>
  )
}

export default MemeList;
