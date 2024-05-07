import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isTouched, setIsTouched] = useState(false);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    if (!isTouched) {
      setIsTouched(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0) {
      setIsValid(false);
      setIsTouched(true);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('');
    setIsValid(true);
    setIsTouched(false);
  };

  const inputBlurHandler = () => {
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      setIsTouched(true);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid && isTouched ? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} onBlur={inputBlurHandler} />
      </div>
      <Button type="submit" className={!isValid && isTouched ? 'invalid' : ''}>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
