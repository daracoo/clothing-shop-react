import { Link } from "react-router-dom"
import { ShoppingCart } from "phosphor-react"
import '../components/header.css'

export const Header = () => {
    return <div className="navbar">
        <div className="links">
            <Link to=""></Link>
            <Link to="/cart">
                <ShoppingCart size={32} />
            </Link>
        </div>
    </div>
}