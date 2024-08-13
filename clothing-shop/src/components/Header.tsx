import { ShoppingCart } from "phosphor-react"
import '../components/header.css'

export const Header = () => {
    return <div className="navbar">
        <span className="title">Clothing Shop</span>
        <div className="links">
            <button><ShoppingCart size={32} /></button>
        </div>
    </div>
}