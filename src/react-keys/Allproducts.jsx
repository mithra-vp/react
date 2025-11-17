import React from 'react'

const Allproducts = () => {

    const products = [
        {id:'p1', name:'t-shirt'},
        {id:'p2', name:'skirt'}
    ]
  return (
    <div>
      <ul>
        {products.map(abc => (
            <li style={{background:'red',color:'white', padding: '10px', margin:'10px'}} key={abc.id}>{abc.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Allproducts
