import { Link } from 'react-router-dom'
// styles
import "./Navbar.css"

export default function Navbar() {
    return (
        <div className='navbar'>
            <nav>
                <Link to="/">
                    <div className='logo'>
                        <img src={require('../../assets/popcorns.png')} alt="popcorn-logo" />
                        <h1>CinemApp</h1>
                    </div>
                </Link>
                <Link to="/films">Slider</Link>
            </nav>
        </div>
    )
}
