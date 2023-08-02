import './ProgressBar.css';

function ProgressBar(props) {
  const { completed } = props;

  return (
    <div className='progress-bar-container'>
      <div className='filler' style={{ width: `${completed}%` }}>
        <span>{completed ? `${Math.floor(completed)}%` : ''}</span>
      </div>
    </div>
  );
}

export default ProgressBar;
