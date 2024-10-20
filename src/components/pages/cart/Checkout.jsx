import React, { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import { useForm } from 'react-hook-form'

const Checkout = () => {
    
    const {cart, priceTotal} = useContext(CartContext)

    const {register, handleSubmit } = useForm()

    const comprar = (data) => {
        const order = {
            cliente: data,
            productos: cart,
            total: priceTotal()
        }
        console.log(order)
    }


  return (
    <div className="container-form">
      <h1>Finalizar compra</h1>
      <form onSubmit={handleSubmit(comprar)}>

        <input type="text" placeholder='Ingresa tu nombre' {...register("nombre")}/>
        <input type="phone" placeholder='Ingresa tu telefono' {...register("telefono")}/>

        <button className='send' type='submit'>Comprar</button>
      </form>
    </div>
  );
}

export default Checkout