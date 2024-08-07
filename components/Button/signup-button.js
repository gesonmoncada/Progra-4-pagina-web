import { useAuth0 } from "@auth0/auth0-react";
import React, {useState, useEffect} from "react";

const UserProfile = () => {
  const { user, isAuthenticated } = useAuth0();
  const [ message, setMessage] = useState("");
  // Este efecto se ejecutará cada vez que cambie el estado de autenticación
  useEffect(() => {
    if (isAuthenticated) {
      setMessage("Has iniciado sesión con exito");
      // Elimina el mensaje después de 1.5 segundos
      setTimeout(() => setMessage(""), 1500);
    }
  }, [isAuthenticated]);
  // No renderiza el perfil si el usuario no está autenticado
  if (!isAuthenticated) return null;

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} width={45}/>
        {/* <h2>{user.name}</h2>
        <p>{user.email}</p>
        {message && <p>{message}</p>} */}
      </div>
    )
  );
}
export default UserProfile;