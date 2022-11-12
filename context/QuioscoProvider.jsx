import axios from 'axios'
import {useState, useEffect, createContext, use} from 'react'
import {toast} from 'react-toastify'
import { useRouter } from 'next/router'

const QuioscoContext = createContext()

const QuioscoProvider = ({children}) => {

    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const [producto, setProducto] = useState({})
    const [modal, setModal] = useState(false)
    const [pedido, setPedido] = useState([])
    const [nombre, setNombre] = useState('')
    const [total, setTotal] = useState(0)
    
    const router = useRouter()

    const obtenerCategorias = async () => {
        const {data} = await axios('/api/categorias')
        setCategorias(data)
    }

    const handleClickCategoria = id => {
        const categoria = categorias.filter(cate => cate.id === id)
        setCategoriaActual(categoria[0])
        router.push('/')
    }

    const handleChangeModal = () => {
        setModal(!modal)
    }

    const handleSetProducto = (producto) => {
        setProducto(producto)
    }

    const handleSetPedido = ({categoriaId, ...objeto}) => {
        if(pedido.some(item => item.id === objeto.id)){
            const pedidoActualizado = pedido.map(item => item.id === objeto.id ? objeto : item) 
            setPedido(pedidoActualizado)
            toast.success('Pedido Actualizado Correctamente')
        } else {
            setPedido([...pedido, objeto])
            toast.success('Pedido Agregado Correctamente')
        }
        setModal(false)
    }

    const handleEditarProducto = id => {
        setModal(!modal)
        const productoActualizado = pedido.filter(item => item.id === id)
        setProducto(productoActualizado[0])
    }

    const handleEliminarProducto = id => {
        const productosActualizados = pedido.filter(item => item.id !== id)
        setPedido(productosActualizados)
    }

    const handleEnviarPedido = async e => {
        e.preventDefault()
        
        try {
            axios.post('/api/ordenes',{pedido, nombre, total, fecha: Date.now().toString()})

            setPedido([])
            setNombre('')
            setTotal(0)

            toast.success('El pedido ha sido agregado correctamente')

            setTimeout(() => {
                router.push('/')
            }, 2000);

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const precioTotal = pedido.reduce((total, producto) => (producto.cantidad * producto.precio) + total, 0)
        setTotal(precioTotal)
    },[pedido])

    useEffect(() => {
        obtenerCategorias()
    },[])

    useEffect(() => {
        setCategoriaActual(categorias[2])
    }, [categorias])

  return (
    <QuioscoContext.Provider
        value={{
            categorias,
            handleClickCategoria,
            categoriaActual,
            handleChangeModal,
            handleSetProducto,
            modal,
            producto,
            handleSetPedido,
            pedido,
            handleEditarProducto,
            handleEliminarProducto,
            nombre, 
            setNombre,
            handleEnviarPedido,
            total
        }}
    >
        {children}
    </QuioscoContext.Provider>
  )
}

export {QuioscoProvider}
export default QuioscoContext
