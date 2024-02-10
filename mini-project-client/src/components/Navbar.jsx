import '../styles/navbar.scss'
import person from '../assets/icons/person.png'
function Navbar() {
    return(
        <div className='navbar'>
            <div className='logo'>AutoBot.io</div>
            <img className='user-icon' src={person} alt='user profile' />
        </div>
    )
}

export default Navbar
