import React from 'react'
import { useState } from 'react'

const Input = () => {
    const [name, setName] = useState('');
  return (
    <div>
      <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)}/>
      <p>Hello, {name || 'stranger'}!</p>
    </div>
  )
}

export default Input
