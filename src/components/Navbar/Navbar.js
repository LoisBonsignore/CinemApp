// styles
import "./Navbar.css"

export default function Navbar() {
    return (
        <div className='navbar'>
            <nav>

                <div className='logo'>
                    <img src={require('../../assets/popcorns.png')} alt="popcorn-logo" />
                    <h1>CinemApp</h1>
                </div>
                <a href="#slider">Slider</a>
            </nav>
        </div>
    )
}
