import MemeItem from './MemeItem'
import MEMES from '../memes';

const MemeList = () => {
  return (
    <div>
      { MEMES.map(({title, img, downvotes, upvotes}) => <MemeItem
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
