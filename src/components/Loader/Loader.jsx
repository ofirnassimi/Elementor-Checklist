import './Loader.css';
import loaderIcon from '../../assets/loader.svg';

function Loader() {
  return (
    <div className='loader-container'>
      <img className='loader-image' src={loaderIcon} alt='loader' />
    </div>
  );
}

export default Loader;
