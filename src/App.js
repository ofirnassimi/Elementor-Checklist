import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Checklist from './components/Checklist';
import ProgressBar from './components/ProgressBar';
import Button from './components/Button';
import StepsTracker from './components/StepsTracker';
import Loader from './components/Loader';
import settings from './settings/config.js';

function App() {
  const [steps, setSteps] = useState([]);
  const [currentSteps, setCurrentSteps] = useState([]);
  const [numOfChecked, setNumOfChecked] = useState(0);
  const [iteration, setIteration] = useState(0);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [numOfSteps, setNumOfSteps] = useState(settings.NUM_OF_STEPS);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          'https://run.mocky.io/v3/59fe4372-8bb0-4de5-97d4-2fae5dd6c9e5'
        );
        setSteps(response.data);
        setIsDataLoading(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const loadCurrentSteps = useCallback(() => {
    const slicedSteps = steps.slice(
      iteration * numOfSteps,
      (iteration + 1) * numOfSteps
    );
    const updatedSteps = slicedSteps.map((step) => ({
      ...step,
      isChecked: false,
    }));
    setCurrentSteps(updatedSteps);

    setNumOfChecked(0);
  }, [steps, iteration, numOfSteps]);

  useEffect(() => {
    loadCurrentSteps();
  }, [steps, iteration, numOfSteps, loadCurrentSteps]);

  useEffect(() => {
    if (numOfChecked === numOfSteps) {
      setIteration(iteration + 1);
    }
  }, [numOfChecked, numOfSteps, iteration]);

  const handlePrevoius = () => {
    currentSteps[numOfChecked - 1].isChecked = false;
    setNumOfChecked(numOfChecked - 1);
  };

  const handleNext = () => {
    currentSteps[numOfChecked].isChecked = true;
    setNumOfChecked(numOfChecked + 1);
  };

  const handleReset = () => {
    currentSteps.forEach((step) => (step.isChecked = false));
    setNumOfChecked(0);
  };

  return (
    <div className='App'>
      <div className='header'>
        <div className='left-header'>
          <b>Let's set up your site</b>
          <i>
            {numOfChecked} of {currentSteps.length} complete
          </i>
        </div>
        <StepsTracker
          numOfSteps={numOfSteps}
          changeAmount={setNumOfSteps}
          totalNumOfSteps={steps.length}
        />
      </div>
      <ProgressBar completed={(numOfChecked / currentSteps.length) * 100} />
      {isDataLoading ? <Loader /> : <Checklist steps={currentSteps} />}

      <div className='buttons-container'>
        <Button
          className='reset-button'
          onClick={handleReset}
          disabled={isDataLoading || numOfChecked === 0}
          label='Reset'
        />
        <div className='navigationButtons-container'>
          <Button
            className='navigation-button'
            onClick={handlePrevoius}
            disabled={isDataLoading || numOfChecked === 0}
            label='Previous'
          />
          <Button
            className='navigation-button'
            onClick={handleNext}
            disabled={isDataLoading || numOfChecked === currentSteps.length}
            label='Next'
          />
        </div>
      </div>
    </div>
  );
}

export default App;
