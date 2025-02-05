import React from 'react'

const FirstQuestion = ({
  nameInput,
  onNameInputChange,
  onStepChange,
  onEnter,
}) => {
  return (
    <form className="form">
      <label htmlFor="nameInput">Hey there! Whats your name?</label>
      <input
        name="name"
        id="nameInput"
        type="text"
        placeholder="Type your name here"
        required
        value={nameInput}
        onChange={onNameInputChange}
        onKeyPress={onEnter}
      />
      <button
        disabled={nameInput === ''}
        className="btn6"
        type="submit"
        onClick={onStepChange}
      >
        Next question
      </button>
    </form>
  )
}

export default FirstQuestion
