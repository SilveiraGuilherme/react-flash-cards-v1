import { getNewId } from '../services/idService';

export default function RadioButton({
  id = getNewId(),
  name = 'radioButtonName',
  ButtonDescription = 'Button Description',
  buttonChecked = false,
  onButtonClick = null,
}) {
  function handleRadioButtonChange() {
    if (onButtonClick) {
      onButtonClick();
    }
  }
  return (
    <div className="flex items-center justify-center gap-1">
      <input
        id={id}
        type="radio"
        name={name}
        checked={buttonChecked}
        onChange={handleRadioButtonChange}
      ></input>
      <label htmlFor={id}>{ButtonDescription}</label>
    </div>
  );
}
