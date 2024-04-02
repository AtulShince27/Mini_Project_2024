import viewGroup from '../assets/icons/view_group_icon.png'
import editGroup from '../assets/icons/edit_icon.png'
import deleteGroup from '../assets/icons/delete_group_icon.png'
import removeUser from '../assets/icons/remove_user_icon.png'
import '../styles/dropdown.scss';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { currentPage } from '../store/atoms/globalAtoms';


function DropDown() {
    const navigate = useNavigate();
    const handleNavigate = ()=>{
        navigate("/usersPage");
    }
    // using the recoil state value from global states
    const currPage = useRecoilValue(currentPage);
    return(
        <div className='dropdown'>
            {currPage === "homePage" && (
                <>
                    <div className='dropdown-item' onClick={handleNavigate}>
                        <img src={viewGroup} />
                        View Group
                    </div>
                    <div className='dropdown-item'>
                        <img src={editGroup} />
                        Edit Group
                    </div>
                    <div className='dropdown-item no-border'>
                        <img src={deleteGroup} />
                        Delete Group
                    </div>
                </>
            )}
            {currPage === "usersGroupPage" && (
                <>
                    <div className='dropdown-item'>
                        <img src={editGroup} />
                        Edit Member
                    </div>
                    <div className='dropdown-item no-border'>
                        <img src={removeUser} />
                        Remove Member
                    </div>
                </>
            )}
        </div>
    )
}

export default DropDown
