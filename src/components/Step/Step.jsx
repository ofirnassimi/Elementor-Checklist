import checkedIcon from '../../assets/checked.svg';
import uncheckedIcon from '../../assets/unchecked.svg';
import './Step.css';

function Step({ label, link, isChecked }) {
  return (
    <div className='wrapper'>
      <div className='step-container'>
        <img
          className='icon'
          src={isChecked ? checkedIcon : uncheckedIcon}
          alt='checked'
        />
        <div className='step-info'>
          <div className='label'>{label}</div>
          {link && (
            <a
              className='link'
              href={link.url}
              target='_blank'
              rel='noopener noreferrer'
            >
              {link.text}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Step;
