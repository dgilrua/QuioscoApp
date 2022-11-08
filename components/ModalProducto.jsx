import React, { useEffect, useState } from 'react'
import useQuiosco from '../hooks/useQuiosco'
import Image from 'next/image'
import { formatearDinero } from '../helpers'

const ModalProducto = () => {

    const {producto, handleChangeModal, handleSetPedido, pedido} = useQuiosco()
    const {nombre, imagen, precio} = producto

    const [cantidad, setCantidad] = useState(1)
    const [edicion, setEdicion] = useState(false)

    useEffect(() => {
        if(pedido.some(item => item.id === producto.id)) {
            const productoEditando = pedido.find(item => item.id === producto.id)
            setCantidad(productoEditando.cantidad)
            setEdicion(true)
        }
    }, [pedido, producto])

  return (
    <div className='flex'>
        <div className='md:w-1/3'>
            <Image 
                alt={`producto ${nombre}`}
                src={`/assets/img/${imagen}.jpg`}
                width={400}
                height={400}
            />
        </div>
        <div className='md:w-2/3 ml-5'>
            <div className='flex justify-end'>
                <button
                    type='button'
                    onClick={() => handleChangeModal()}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <h1 className='text-3xl font-bold'>{nombre}</h1>
            <p className='mt-5 font-black text-5xl text-amber-500'>{formatearDinero(precio)}</p>
            <div className='flex gap-3 mt-10'>
                <button
                    type='button'
                    onClick={() => {
                        if(cantidad < 1) return
                        setCantidad(cantidad + -1)
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
                <p className='text-3xl font-bold'>{cantidad}</p>
                <button 
                    type='button'
                    onClick={() => {
                        if(cantidad > 9) return
                        setCantidad(cantidad + 1)
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>

            <button
                type='button'
                className='mt-10 rounded-md py-3 px-10 uppercase font-bold text-white bg-indigo-600 hover:bg-indigo-800'
                onClick={() => handleSetPedido({...producto, cantidad})}
            >
                {edicion ? 'editar pedido' : 'agregar pedido'}
            </button>
        </div>
    </div>
  )
}

export default ModalProducto