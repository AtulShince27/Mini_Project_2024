import groupIcon from '../assets/icons/groups_icon.png'

function Sidebar() {
    return(
        <div className='sidebar'>
            <button className='group-button' type="button"><img src={groupIcon} alt='group-icon' />Groups</button>
        </div>
    )
}

export default Sidebar
