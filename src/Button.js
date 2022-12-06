import './Button.scss';

function Button( {onClick, className, buttonValue} ) {
  return (
    <div className={`${className}`} data-value={`${buttonValue}`} onClick={() => onClick(buttonValue)}>
      {buttonValue}
    </div>
  );
}

export default Button;