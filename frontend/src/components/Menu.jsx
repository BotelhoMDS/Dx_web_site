import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'
export default function Menu() {
 return (
 <header>
 <nav>
 <ul>
 <li><Link to="/produtos"> Produtos </Link> </li>
 <li><Link to="/serviços"> Serviços </Link> </li>
 <li> <img src="/figure/dx-branco.svg" alt="logo dx in white" /></li>
 <li><Link to="/quem_somos_nos"> Quem somos nós? </Link></li>
 <li><Link to="/"> Conta </Link></li>
 </ul>
 </nav>
 </header>
 )
}