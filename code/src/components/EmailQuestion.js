import React from 'react'

const EmailQuestion = ({ emailInput, onEmailInputChange, onStepChange }) => {
  return (
    <form className="form" onSubmit={onStepChange}>
      <label htmlFor="emailInput">Type your Email address</label>
      <input
        name="emailInput"
        id="emailInput"
        type="email"
        placeholder="Email goes here"
        value={emailInput}
        onChange={onEmailInputChange}
        required
      />
      <button className="btn6" type="submit">
        Complete sign-up
      </button>
    </form>
  )
}

export default EmailQuestion
