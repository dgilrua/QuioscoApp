import React from 'react'
import Layout from '../layout/Layout'
import useQuiosco from '../hooks/useQuiosco'
import ResumenProducto from '../components/ResumenProducto'

const Resumen = () => {

    const {pedido} = useQuiosco()

  return (
    <Layout
        pagina={'Resumen'}
    >
        <h1 className="text-4xl font-extrabold">Resumen</h1>
        <p className="text-2xl my-10">Resumen de tu pedido</p>

        {pedido.length === 0 ? (
            <h1 className='text-center text-3xl font-bold mt-5'>Todavias no has agregado ningun pedido, ve al menu y elige lo que mas te guste!</h1>
        ) : (
            pedido.map(item => (
                <ResumenProducto 
                    key={item.id}
                    pedido={item}
                />
            ))
        )}
    </Layout>
  )
}

export default Resumen