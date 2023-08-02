import Button from '../Button/Button';
import './StepsTracker.css';

function StepsTracker({ numOfSteps, changeAmount, totalNumOfSteps }) {
  const handleInputChange = (e) => {
    const newValue = parseInt(e.target.value);
    changeAmount(newValue);
  };

  const handleIncrement = () => {
    changeAmount((prevSteps) => prevSteps + 1);
  };

  const handleDecrement = () => {
    changeAmount((prevSteps) => prevSteps - 1);
  };

  return (
    <div className='input-container'>
      <Button
        className='decrement'
        onClick={handleDecrement}
        disabled={numOfSteps === 1}
        label='-'
      />
      <input
        type='number'
        onChange={handleInputChange}
        min={1}
        max={totalNumOfSteps}
        value={numOfSteps}
        readOnly
      />
      <Button
        className='increment'
        onClick={handleIncrement}
        disabled={numOfSteps === totalNumOfSteps}
        label='+'
      />
    </div>
  );
}

export default StepsTracker;
