import React, {  useRef, useState } from 'react'
import { token } from '../../../helpers/auth';
import Error404 from '../Error404';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../database/firebase';
import { Link } from 'react-router-dom';
import Loader from '../../atoms/Loader';

const CreateProduct = () => {

    const form = useRef()
    const user = token("token")
    const [product, setProduct] = useState()
    const [loader, setLoader] = useState()
    const {register, handleSubmit } = useForm()


    const sendProduct = (data) => {
        const product = {
            name: data.name,
            image: data.image,
            price: Number(data.price),
            quantity: Number(data.quantity),
            description: data.description,
            category: data.category
        }
        const productosRef = collection(db, product.category)
        addDoc(productosRef, product)
        setProduct(true);
    }

    if(loader) return <Loader />

    if (product) {
        return (
          <div className="">
            <div className="flex flex-col justify-center items-center alto-full">
              <h1 className="ml-4">Producto creado con exito !!</h1>
              <div className="mt-4 ml-4 ">
                <Link
                  className="bg-red-800 text-white p-2 rounded-md hover:cursor-pointer"
                  onClick={()=> {
                    setProduct(false)
                    setLoader(true)
                    form.current.reset();
                }}
                >
                  Crear otro producto
                </Link>
              </div>
            </div>
          </div>
        );
    }

  return (
    <div>
      {user ? (
        <div className="flex flex-col items-center justify-center">
          <div className="mt-28 p-7 shadow">
            <h1 className="text-gray-500 text-center mb-2">CREAR PRODUCTO</h1>
            <form
              ref={form}
              className="flex flex-col gap-4 w-60"
              onSubmit={handleSubmit(sendProduct)}
            >
              <input
                className="rounded"
                autoComplete="off"
                type="text"
                placeholder="Nombre"
                required
                {...register("name")}
              />
              <input
                className="rounded"
                autoComplete="off"
                type="text"
                placeholder="Imagen url"
                required
                {...register("image")}
              />
              <input
                className="rounded"
                autoComplete="off"
                type="text"
                placeholder="Precio"
                required
                {...register("price")}
              />
              <input
                className="rounded"
                autoComplete="off"
                type="number"
                placeholder="Cantidad"
                required
                {...register("quantity")}
              />
              <textarea
                className="rounded p-2"
                placeholder="Descripcion"
                required
                {...register("description")}
              ></textarea>
              <select
                className="rounded p-2"
                {...register("category")}
                required
              >
                <option value="">Categoria</option>
                <option value="perfumes">Perfumes</option>
                <option value="cosmeticos">Cosmeticos</option>
              </select>
              <button
                type="submit"
                className="bg-red-900 text-white rounded-2xl"
              >
                Crear producto
              </button>
            </form>
            <div className={product ? "creado" : "hidden"}>
              <h2 className="mt-3 p-1 rounded text-white bg-green-600">
                Producto creado con exito!
              </h2>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Error404 />
        </div>
      )}
    </div>
  );
}

export default CreateProduct