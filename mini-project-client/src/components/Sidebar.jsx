import groupIcon from '../assets/icons/groups_icon.png'
import logoutBtn from "../assets/icons/logout_icon.png"
import "../styles/sidebar.scss";
function Sidebar() {
    return(
        <div className='sidebar'>
            <div className='sidebar-rows'>
                <button className='group-button' type="button"><img src={groupIcon} alt='group-icon' />Groups</button>
            </div>
            <div className='sidebar-rows'>

            </div>
            <div className='sidebar-rows'>
                <img src={logoutBtn} alt="Log Out Btn"/>
                <button className="logout-btn" type='button'>Logout</button>
            </div>
        </div>
    )
}

export default Sidebar
