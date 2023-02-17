import './Button.scss';

function Button(props) {
  return (
    <div>
        <button className="primary-button">{props.text}</button>
    </div>
  );
}

export default Button;