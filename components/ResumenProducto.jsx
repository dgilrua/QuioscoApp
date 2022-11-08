import React from 'react'
import Image from 'next/image'
import { formatearDinero } from '../helpers'
import useQuiosco from '../hooks/useQuiosco'

const ResumenProducto = ({pedido}) => {

    const {nombre, precio, imagen, cantidad, id} = pedido
    const {handleEditarProducto, handleEliminarProducto} = useQuiosco()
  return (
    <div className='flex shadow-md gap-12 items-center p-5'>
        <div className='w-1/6'>
            <Image 
                alt={`imagen ${nombre}`}
                width={400}
                height={500}
                src={`/assets/img/${imagen}.jpg`}
            />
        </div>
        <div className='w-4/6'>
            <h1 className='font-bold text-4xl'>{nombre}</h1>
            <p className='font-bold text-2xl mt-4'>Cantidad: {cantidad}</p>
            <p className='text-2xl text-amber-500 font-bold mt-4' >Precio: {formatearDinero(precio)}</p>
            <p className='text-l text-gray-800 mt-4' >Subtotal: {formatearDinero(precio * cantidad)}</p>
        </div>
        <div className='w-1/6 flex flex-col gap-5 items-center'>
            <button
                className=' bg-sky-700 p-3 text-white uppercase font-bold w-full hover:bg-sky-900 flex items-center justify-center gap-2'
                onClick={() => {
                    handleEditarProducto(id)
                }}
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
            </svg>
            Editar</button>
            <button
                className=' bg-red-700 p-3 text-white uppercase font-bold w-full hover:bg-red-900 flex items-center justify-center gap-2'
                type='button'
                onClick={() => handleEliminarProducto(id)}
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>

            Eliminar</button>
        </div>
    </div>
  )
}

export default ResumenProducto