import './header.css';

import { Link } from 'react-router-dom';
import { BsFillHandbagFill } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';
import { RiDashboardFill } from 'react-icons/ri'
import { MdLocalGroceryStore } from 'react-icons/md'


export default function Header() {
 return (
   <div className='sidebar'>
        <span>Store App</span>
        <Link to={'/'}><RiDashboardFill size={24} />Dasboard</Link>
        <Link to={'/client'}><FaUsers size={24} />Clientes</Link>
        <Link to={'/product'}><BsFillHandbagFill size={24} />Produtos</Link>
        <Link to={'/order'}><MdLocalGroceryStore size={24} />Vendas</Link>
   </div>
  )
}