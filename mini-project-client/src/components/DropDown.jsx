import viewGroup from '../assets/icons/view_group_icon.png'
import editGroup from '../assets/icons/edit_icon.png'
import deleteGroup from '../assets/icons/delete_group_icon.png'
import removeUser from '../assets/icons/remove_user_icon.png'
import '../styles/dropdown.scss';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentPage } from '../store/atoms/globalAtoms';
import { isListModalVisibleEdit, isListModalVisibleDelete } from '../store/atoms/globalAtoms';
import { useEffect, useState } from 'react';


function DropDown() {
    const navigate = useNavigate();
    const handleNavigate = ()=>{
        navigate("/usersPage");
    }
    // using the recoil state value from global states
    const currPage = useRecoilValue(currentPage);
    const [modalVisibilityEdit, setModalVisibilityEdit] = useRecoilState(isListModalVisibleEdit);
    const [modalVisibilityDelete, setModalVisibilityDelete] = useRecoilState(isListModalVisibleDelete);
    const [isVisibleEdit, setVisibilityEdit] = useState(false);
    const [isVisibleDelete, setVisibilityDelete] = useState(false);
    // Modal visible function
    const showModal = (type) =>{
        console.log("function called successfully")
        if(type === "Edit"){
            console.log("Inside edit")
            setVisibilityEdit(true);
        } else if(type === "Delete"){
            setVisibilityDelete(true);
        }
    }

    useEffect(()=>{
        if(isVisibleEdit === true){
            setModalVisibilityEdit(true);
        } else if(isVisibleDelete === true){
            setModalVisibilityDelete(true);
        } 
        if(modalVisibilityEdit === false || 
        modalVisibilityDelete === false){
            setVisibilityDelete(false);
            setVisibilityEdit(false);
        }
    })
    return(
        <div className='dropdown'>
            {currPage === "homePage" && (
                <>
                    <div className='dropdown-item' onClick={handleNavigate}>
                        <img src={viewGroup} />
                        View Group
                    </div>
                    <div className='dropdown-item' onClick={()=>showModal("Edit")}>
                        <img src={editGroup}/>
                        Edit Group
                    </div>
                    <div className='dropdown-item no-border' onClick={()=>showModal("Delete")}>
                        <img src={deleteGroup}/>
                        Delete Group
                    </div>
                </>
            )}
            {currPage === "usersGroupPage" && (
                <>
                    <div className='dropdown-item' onClick={()=>showModal("Edit")}>
                        <img src={editGroup} />
                        Edit Member
                    </div>
                    <div className='dropdown-item no-border' onClick={()=>showModal("Delete")}>
                        <img src={removeUser} />
                        Remove Member
                    </div>
                </>
            )}
        </div>
    )
}

export default DropDown
