import React from 'react'
import { ImCart } from 'react-icons/im';
import '../App.css'
import Button from 'react-bootstrap/Button';

const CartWidget = () => {
  return (
    <>
    <Button variant="dark"><h3> <ImCart/> Cart</h3></Button>
    </>
  )
}

export default CartWidget
