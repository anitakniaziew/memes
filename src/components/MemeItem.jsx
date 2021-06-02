import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { downvote, upvote } from '../store';

const MemeItem = ({index, img, title, downvotes, upvotes}) => {
  const dispatch = useDispatch();

  return (
    <div style={{height: '80vh', width: '50vw', marginBottom: '100px', textAlign: 'center'}}>
      <h2>{title}</h2>
      <img src={img} alt="meme" style={{height: '90%'}}/>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <button type="button" onClick={() => dispatch(downvote(index))}>Downvotes: {downvotes}</button>
        <button type="button" onClick={() => dispatch(upvote(index))}>Upvotes: {upvotes}</button>
      </div>
    </div>
  )
}
MemeItem.propTypes = {
  index: PropTypes.number,
  img: PropTypes.string,
  title: PropTypes.string,
  downvotes: PropTypes.number,
  upvotes: PropTypes.number
};
export default MemeItem;
