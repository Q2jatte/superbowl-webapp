import { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

function FilterButton(props) {
  const [radioValue, setRadioValue] = useState("all");

  const radios = [
    { name: "Tous", value: "all" },
    { name: "A venir", value: "future" },
  ];

  const handleChange = (e) => {
    const newValue = e.target.value;
    setRadioValue(newValue);
    console.log("chilValue: " + newValue);
    // Appelez la fonction de rappel du parent avec la nouvelle valeur
    props.onValueChange(newValue);
  };

  return (
    <ButtonGroup className="ms-1 mb-1">
      {radios.map((radio, idx) => (
        <ToggleButton
          key={idx}
          id={`radio-${idx}`}
          type="radio"
          variant="outline-success"
          name="radio"
          value={radio.value}
          checked={radioValue === radio.value}
          onChange={handleChange}
        >
          {radio.name}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
}

export default FilterButton;
