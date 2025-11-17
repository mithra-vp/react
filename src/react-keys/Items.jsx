import React from 'react'

const Items = () => {

    const fruitItems = ['Apple' , 'Banana', 'Orange']
  return (
    <div>
      <ul>
        {fruitItems.map((fs,index) => (
            <li key={index}>{fs}</li>
        ))}
      </ul>
    </div>
  )
}

export default Items
