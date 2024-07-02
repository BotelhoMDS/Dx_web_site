import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'
import logo from './figure/dxbranco.svg'; // Caminho relativo correto
export default function Menu() {
 return (
 <header>
 <nav>
 <ul>
 <li><Link to="/produtos"> Produtos </Link> </li>
 <li><Link to="/serviços"> Serviços </Link> </li>
 <li><Link to="/"><img src={logo} alt="logo" className='logo' /></Link></li>
 <li><Link to="/quem_somos_nos"> Quem somos nós? </Link></li>
 <li><Link to="/"> Conta </Link></li>
 </ul>
 </nav>
 </header>
 )
}