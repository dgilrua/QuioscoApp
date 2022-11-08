import Image from "next/image"
import { formatearDinero } from "../helpers"
import useQuiosco from "../hooks/useQuiosco"

const Producto = ({producto}) => {

    const {handleChangeModal, handleSetProducto} = useQuiosco()
    const {nombre, precio, imagen} = producto

  return (
    <div className='border p-3'>
        <Image 
            alt={`Imagen ${nombre}`}
            src={`/assets/img/${imagen}.jpg`}
            width={400}
            height={500}
        />
        <div className="p-5">
            <h3 className="text-3xl font-bold">{nombre}</h3>
            <p className="mt-5 font-black text-4xl text-amber-400">
                {formatearDinero(precio)}
            </p>
            <button
                type="button"
                onClick={() => {
                    handleChangeModal()
                    handleSetProducto(producto)
                }}
                className='p-2 bg-indigo-700 hover:bg-indigo-900 text-white uppercase font-bold w-full mt-5'
            >
            Agregar</button>
        </div>
    </div>
  )
}

export default Producto