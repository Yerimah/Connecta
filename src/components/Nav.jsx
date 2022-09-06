import connectaLogo from '../assets/danielLogo.png'

const Nav = () => {
    return (
        <nav>
            <button className='logo'>
                <img src={connectaLogo} alt="logo" />
            </button>
            <input type="text" className='search' placeholder='search' />
            <span className='nav-links'>
              <button></button>
            </span>
        </nav>
    )
}

export default Nav;