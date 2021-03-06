import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const groups = [['AC', '+/-', '%', '÷'], ['7', '8', '9', 'x'], ['4', '5', '6', '-'], ['1', '2', '3', '+'], ['0', '.', '=']];

  const operators = ['÷', 'x', '-', '+', '='];

  const handleClick = buttonName => clickHandler(buttonName);

  const elements = () => groups.map(group => <div key={group}>{group.map(element => <Button key={element} name={element} color={operators.indexOf(element) === -1 ? 'lightgray' : undefined} wide={element === '0'} clickHandler={handleClick} />)}</div>);

  return (
    <div className="button-panel">
      {elements()}
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
