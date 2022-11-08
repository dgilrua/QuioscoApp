import { useRouter } from "next/router"

const pasos = [
    {paso: 1, nombre: 'Menú', url:'/'},
    {paso: 2, nombre: 'Resumen', url:'/resumen'},
    {paso: 3, nombre: 'Datos y Total', url:'/total'},
] 
const Pasos = () => {

    const route = useRouter()

    const calcularPorcentaje = () => {
        let porcentaje

        if(route.pathname === '/') {
            porcentaje = 6
        } else if (route.pathname === '/resumen'){
            porcentaje = 52
        } else {
            porcentaje = 100
        }

        return porcentaje
    }

  return (
    <>
        <div className="flex justify-between mb-7">
            {pasos.map(paso => (
                <button
                    className="font-bold text-3xl"
                    onClick={() => {
                        route.push(paso.url)
                    }}
                    key={paso.paso}
                >
                    {paso.nombre}       
                </button>
            ))}
        </div>
        <div className="bg-gray-100 mb-5">
            <div 
                className="h-2 rounded-full text-xs leading-none text-center text-white bg-amber-500 paso"
                style={{
                    width: `${calcularPorcentaje()}%`,
                }}
            ></div>
        </div>
    </>
  )
}

export default Pasos