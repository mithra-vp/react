import React from 'react'
import { useParams } from 'react-router-dom'
import { FaBoxTissue } from "react-icons/fa";

const ProductDetail = () => {
    const {id} = useParams();
  return (
    <div>
      <h2><FaBoxTissue />Product id: {id}</h2>
    </div>
  )
}

export default ProductDetail
