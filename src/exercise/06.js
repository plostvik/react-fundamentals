// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [inputValue, setInputValue] = React.useState('')

  const handleChange = e => {
    setInputValue(e.target.value.toLowerCase())
  }
  const handleSubmit = e => {
    e.preventDefault()
    onSubmitUsername(inputValue)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">Username:</label>
        <input
          type="text"
          id="userName"
          onChange={handleChange}
          value={inputValue}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
