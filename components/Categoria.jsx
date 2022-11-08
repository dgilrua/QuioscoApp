import Image from 'next/image'
import useQuiosco from '../hooks/useQuiosco'

const Categoria = ({categoria}) => {

    const {categoriaActual, handleClickCategoria} = useQuiosco()

    const {id, nombre, icono} = categoria

  return (
    <div className={`flex h-32 gap-4 p-8 hover:bg-amber-400 items-center transition-all border w-full ${categoriaActual?.id === id ? 'bg-amber-400' : ''}`}>
        <Image 
            alt='icono'
            width={70}
            height={70}
            src={`/assets/img/icono_${icono}.svg`}
        />

        <button
            type='button'
            className='font-bold text-2xl uppercase'
            onClick={() => handleClickCategoria(id)}
        >{nombre}</button>
    </div>
  )
}

export default Categoria