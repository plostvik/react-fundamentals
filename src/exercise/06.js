// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [inputValue, setInputValue] = React.useState('')
  const [error, setError] = React.useState(null)

  const handleChange = e => {
    setInputValue(e.target.value)
    const isValid = e.target.value === e.target.value.toLowerCase()
    setError(isValid ? null : 'Username must be lower case')
  }
  const handleSubmit = e => {
    e.preventDefault()
    onSubmitUsername(inputValue)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">Username:</label>
        <input type="text" id="userName" onChange={handleChange} />
        {error && (
          <p role="alert" style={{color: 'red'}}>
            {error}
          </p>
        )}
      </div>
      <button type="submit" disabled={!!error}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
