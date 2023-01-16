import { getNewId } from '../services/idService';

export default function RadioButton({
  radioButtonName = 'Radio Button Name',
  radioButtonId = getNewId(),
  radioButtonDescription = 'Button Description',
  onRadioButtonClick = null,
  buttonChecked = false,
}) {
  function handleRadioButtonClick() {
    if (onRadioButtonClick) {
      return { onRadioButtonClick };
    }
  }
  return (
    <div
      className="flex items-center justify-center gap-1"
      onClick={handleRadioButtonClick}
    >
      <input
        type="radio"
        name={radioButtonName}
        id={radioButtonId}
        checked={buttonChecked}
      ></input>
      <label htmlFor={radioButtonId}>{radioButtonDescription}</label>
    </div>
  );
}
