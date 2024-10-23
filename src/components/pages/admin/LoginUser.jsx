import { setToken } from "../../../helpers/auth";
import { auth } from "../../../database/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginUser = () => {
  const nav = useNavigate();

  const [error, setError] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError()

    const email = e.target.email.value
    const password = e.target.password.value

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setToken(user.uid)
        nav("/")
      })
      .catch((error) => {
        setError(error.code)
      });
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-28 p-7 shadow">
        <h1 className="text-gray-500 text-center mb-2">INICIAR SESIÓN</h1>
        <form className="flex flex-col gap-4 w-60" onSubmit={handleSubmit}>
          <input
            className="rounded"
            type="email"
            name="email"
            placeholder="Correo electronico"
            required
          />
          <input
            className="rounded"
            type="password"
            name="password"
            placeholder="Contraseña"
            required
          />
          <button type="submit" className="bg-red-900 text-white rounded-2xl">
            Iniciar sesion
          </button>
        </form>
        <div className="error mt-3">
          {error && (
            <span className="bg-red-700 text-white p-2 rounded">{error}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginUser
