import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo_branco.png'
import './menu.css'
import Button from '../button'
//import ButtonLink from '../components/ButtonLink'



function Menu() {
 return (
 <nav className="Menu">
 <Link to="/">
 <img className="Logo" src={Logo} alt="Logo da TimaoFlix" />
 </Link>
 
 <Button as = {Link} className="ButtonLink" to="/cadastro/video">
     Novo vídeo
</Button>
 </nav>
 )
}
export default Menu;
