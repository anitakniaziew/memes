import MemeItem from './MemeItem';

const MemeList = ({memes, type}) => {
  if (memes.length === 0) return <h1>Nothing to display</h1>;
  return (
    <div>
      { memes.map(({id, title, img, downvotes, upvotes}) => <MemeItem
        id={id}
        key={id}
        title={title}
        img={img}
        downvotes={downvotes}
        upvotes={upvotes}
        type={type}
      />) }
    </div>
  )
}

export default MemeList;
