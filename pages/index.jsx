import Producto from "../components/Producto";
import useQuiosco from "../hooks/useQuiosco";
import Layout from "../layout/Layout";

export default function Home({}) {

  const {categoriaActual} = useQuiosco()

  return (
    <Layout pagina={`Menu ${categoriaActual?.nombre}`}>
      <h1 className="text-4xl font-extrabold">{categoriaActual?.nombre}</h1>
      <p className="text-2xl my-10">Elije y personaliza tu pedido acontinuacion</p>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {categoriaActual?.productos?.map(producto => (
          <Producto 
            key={producto.id}
            producto={producto}
          />
        ))}
      </div>
    </Layout>
  ) 
}
