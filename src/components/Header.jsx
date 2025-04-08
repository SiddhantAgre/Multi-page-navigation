import { Link } from "react-router-dom";


function Header() {

    return ( <div className="flex justify-end items-center p-8 text-3xl font-semibold gap-5 bg-amber-700 h-30">
        
        <Link to = {'/about'}>About</Link>
        <Link to = {'/home'}>Home</Link>
        <Link to = {'/contact'}>Contact</Link>
        <Link to = {'/product'}>Product</Link>
       
    </div> );
    
}

export default Header;