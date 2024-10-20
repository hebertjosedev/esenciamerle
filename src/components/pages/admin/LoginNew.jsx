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
        // Signed in
        const user = userCredential.user;
        setToken(user.uid)
        nav("/login/crear/producto")
        // ...
      })
      .catch((error) => {
        console.log(error)
        console.log(error.code)
        console.log(error.message)
        setError(error.code)
      });
  }

  return (
    <div className="h-80 flex flex-col items-center justify-center">
      <h1 className="text-gray-500">Iniciar sesion</h1>
      <form className="flex flex-col gap-4 w-60" onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Correo electronico" required/>
        <input type="password" name="password" placeholder="Contraseña" required />
        <button type="submit" className="bg-red-900 text-white">Iniciar sesion</button>
      </form>
      <div className="error mt-3">
        {error && (
          <span className="bg-red-700 text-white p-2 rounded">{error}</span>
        )}
      </div>
    </div>
  );
};

export default LoginUser
