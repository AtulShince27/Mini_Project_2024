import viewGroup from '../assets/icons/view_group_icon.png'
import editGroup from '../assets/icons/edit_icon.png'
import deleteGroup from '../assets/icons/delete_group_icon.png'


function DropDown() {
    return(
        <div className='dropdown'>
            <div className='dropdown-item'><img src={viewGroup} />View Group</div>
            <div className='dropdown-item'><img src={editGroup} />Edit Group</div>
            <div className='dropdown-item no-border'><img src={deleteGroup} />Delete Group</div>
        </div>
    )
}

export default DropDown
