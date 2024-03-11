import {useState} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Registro from './components/Registro'

function App() {
  const [name,setName]= useState('');
  const [email,setEmail] = useState ('');
  const [password,setPassword] = useState ('');
  const [repassword,setRepassword] = useState ('');
  // const [registro,setRegistrarse] = useState ('');

  const handleNameChange = (event) => {
    setName(event.target.value)
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }
  const handleRepasswordChange = (event) => {
    setRepassword(event.target.value)
  }
  // const validar = () => setRegistrarse(if name && email && password && repassword);
    
  return(
    <div>
      <input type='text' placeholder='Nombre' value={name} onChange={handleNameChange}></input>
      <input type='text' placeholder='tuemail@ejemplo.com' value={email} onChange={handleEmailChange}></input>
      <input type='text' placeholder='Contraseña' value={password} onChange={handlePasswordChange}></input>
      <input type='text' placeholder='Confirma tu contraseña' value={repassword} onChange={handleRepasswordChange}></input>
      {/* <button style={{background: green}} onclick={validar}>Registrarse</button> */}
    </div>
    )
}

export default App;
