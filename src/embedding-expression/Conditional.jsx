import React from 'react'

const Conditional = () => {

    const isLoggedIn = false;
  return (
    <div>
      <p>{isLoggedIn ? 'Welcome back' : 'Please Login'}</p>
    </div>
  )
}

export default Conditional
