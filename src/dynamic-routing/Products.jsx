import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
    const my_products = [
        {id:'1', name:'Laptop'},              //object array
        {id:'2', name:'Phone'},
        {id:'3', name:'Tablet'},
    ]
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {my_products.map(p=>(
            <li key={p.id}>
            <Link to={`/products/${p.id}`}>{p.name}</Link>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Products
