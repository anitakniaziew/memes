import MemeItem from './MemeItem';
import PropTypes from 'prop-types';
import styles from './memeList.module.scss';

const MemeList = ({ memes, type }) => {
  if (memes.length === 0) {
    return <h1>There're no memes in this category yet!</h1>;
  }

  return (
    <div className={styles.memeList}>
      {memes.map(({ id, title, img, downvotes, upvotes, favourite }) => (
        <MemeItem
          id={id}
          key={id}
          title={title}
          img={img}
          downvotes={downvotes}
          upvotes={upvotes}
          favourite={favourite}
          type={type}
        />
      ))}
    </div>
  );
};
MemeList.propTypes = {
  meme: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      img: PropTypes.string,
      title: PropTypes.string,
      downvotes: PropTypes.number,
      upvotes: PropTypes.number,
      favourite: PropTypes.bool,
    })
  ),
  type: PropTypes.string,
};

export default MemeList;
