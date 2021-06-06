import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import classnames from 'classnames';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { downvote, upvote } from '../../store';
import styles from './memeItem.module.scss';

const MemeItem = ({ id, img, title, downvotes, upvotes, type }) => {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className={styles.memeItemContainer}>
      <div className={styles.memeTitle}>
        <h2>{title}</h2>
        <StarBorderIcon
          className={classnames([styles.favBtn, { [styles.active]: isFav }])}
          onClick={() => setIsFav((prevState) => !prevState)}
        />
      </div>
      <img src={img} alt="meme" className={styles.memeImg} />
      <div className={styles.voteBtnsContainer}>
        <button
          type="button"
          onClick={() => dispatch(upvote(id))}
          className={classnames([
            styles.voteBtn,
            { [styles.hot]: type === 'hot' },
          ])}
        >
          <ArrowUpwardIcon /> {upvotes}
        </button>
        <button
          type="button"
          onClick={() => dispatch(downvote(id))}
          className={classnames([
            styles.voteBtn,
            { [styles.regular]: type === 'regular' },
          ])}
        >
          <ArrowDownwardIcon />
          {downvotes}
        </button>
      </div>
    </div>
  );
};
MemeItem.propTypes = {
  id: PropTypes.number,
  img: PropTypes.string,
  title: PropTypes.string,
  downvotes: PropTypes.number,
  upvotes: PropTypes.number,
  type: PropTypes.string,
};
export default MemeItem;
