import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import classnames from 'classnames';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { downvote, upvote } from '../store';
import styles from './memeItem.module.scss';

const MemeItem = ({id, img, title, downvotes, upvotes, type}) => {
  const dispatch = useDispatch();
  console.log(type)

  return (
    <div style={{height: '80vh', width: '50vw', marginBottom: '100px', textAlign: 'center', color: 'rgb(23, 21, 68)'}}>
      <h2>{title}</h2>
      <img src={img} alt="meme" style={{height: '90%'}}/>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <button type="button" onClick={() => dispatch(upvote(id))} className={classnames([styles.voteBtn, {[styles.hot]: type === "hot" }])}><ArrowUpwardIcon /> {upvotes}</button>
        <button type="button" onClick={() => dispatch(downvote(id))} 
        className={classnames([styles.voteBtn, {[styles.regular]: type === "regular" }])}
        ><ArrowDownwardIcon />{downvotes}</button>
      </div>
    </div>
  )
}
MemeItem.propTypes = {
  id: PropTypes.number,
  img: PropTypes.string,
  title: PropTypes.string,
  downvotes: PropTypes.number,
  upvotes: PropTypes.number
};
export default MemeItem;
