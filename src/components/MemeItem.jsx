import PropTypes from 'prop-types';

const MemeItem = ({img, title, downvotes, upvotes}) => {
  return (
    <div style={{height: '80vh', marginBottom: '70px'}}>
      <h2>{title}</h2>
      <img src={img} alt="meme" style={{height: '100%'}}/>
      <div>
        <p>{downvotes}</p>
        <p>{upvotes}</p>
      </div>
    </div>
  )
}
MemeItem.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  downvotes: PropTypes.number,
  upvotes: PropTypes.number
};
export default MemeItem;
