import React from 'react'

const List = () => {
    const fruits = ["Apple","Banana","Mango"];
  return (
    <div>
      <ul>
        {fruits.map((fruit,index) =>(
            <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  )
}

export default List
