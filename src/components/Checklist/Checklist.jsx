import Step from '../Step';
import './Checklist.css';

function Checklist({ steps }) {
  return (
    <div className='checklist-container'>
      <div>
        {steps &&
          steps.map((step) => (
            <Step
              label={step.label}
              link={step.link}
              isChecked={step.isChecked}
            />
          ))}
      </div>
    </div>
  );
}

export default Checklist;
