import React, { useEffect, useCallback} from 'react'
import { formatearDinero } from '../helpers'
import useQuiosco from '../hooks/useQuiosco'
import Layout from '../layout/Layout'

const Total = () => {

  const {pedido, nombre, setNombre, handleEnviarPedido, total} = useQuiosco()

  console.log(total)

  const comprobarPedido = useCallback(() => {
    return pedido.length === 0 || nombre === '' || nombre.length < 3
  }, [pedido, nombre])

  useEffect(() => {
    comprobarPedido()
  }, [pedido, comprobarPedido])

  return (
    <Layout 
        pagina={'Total'}
    >
        <h1 className="text-4xl font-extrabold">Total y Confirmar Pedido</h1>
        <p className="text-2xl my-10">Confirma tu pedido acontinuacion</p>

        <form onSubmit={handleEnviarPedido}>
          <div>
            <label 
              htmlFor="nombre"
              className='uppercase text-2xl font-bold text-slate-700'
            >nombre</label>
            <input 
              type="text"
              id='nombre'
              className='w-full block lg:w-1/3 bg-slate-200 mt-5 rounded-md p-3 text-xl font-bold text-gray-800' 
              value={nombre}
              onChange={e => setNombre(e.target.value)}
            />
          </div>
          <div className='mt-10'>
            <p className='font-bold text-2xl'>Total a pagar: <span className=' text-amber-500 text-3xl'>{formatearDinero(total)}</span></p>
          </div>
          <input 
            type="submit"
            className={`${comprobarPedido() ? 'bg-indigo-200' : 'bg-indigo-600 hover:bg-indigo-900'} uppercase text-center py-3 px-10 font-bold text-xl text-white mt-10 rounded-md hover:cursor-pointer`}
            value='Confirmar pedido'
            disabled={comprobarPedido()}
          />
        </form>
    </Layout>
  )
}

export default Total