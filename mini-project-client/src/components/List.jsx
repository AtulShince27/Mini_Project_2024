import { useEffect, useState } from 'react';
import groupIcon from '../assets/icons/group_name_bubble.png'
import DropDown from './DropDown'
import { users } from '../test/user_members';
import { userGroups } from '../test/user_groups';
import "../styles/list.scss";
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentPage } from '../store/atoms/globalAtoms';
import { currentGroup } from '../store/atoms/globalAtoms';
import { loginCredentials } from '../test/registered_users';

function List() {
    const [activeId, setId] = useState(0);
    const [activeGroupId, setActiveGroupId] = useRecoilState(currentGroup);
    // Get the value of the items present in the list
    let itemList;
    let currPage = useRecoilValue(currentPage);
    // variable that the useEffect can access
    let idx = {id: null, name: ""}
    if(currPage === "homePage"){
        itemList = userGroups;
    } else if(currPage === "usersGroupPage"){
        itemList = users;
    }
    console.log(currPage);
    console.log(itemList)
    // Retrieving data for the signed in user
    let storageObj;
    try {
       storageObj = JSON.parse(sessionStorage.getItem("currentUser"));
    } catch (error) {
        storageObj = null;
        console.log("Not Signed In!")
    }
    console.log(storageObj.emailId);
    const emailId = storageObj.emailId;
    // Retrieving the data from DB
    let currIdx = -1;
    if(itemList){
        let len = itemList.length;
        console.log(len);
        for (let i = 0; i < len; i++) {
            console.log(itemList[i].user);
            if(itemList[i].user === emailId){
                currIdx = i;
                break;
            }
        }
        console.log(currIdx);
        let groups_list;
        if(currIdx != -1 && currPage === "homePage"){
            groups_list = itemList[currIdx].group;
            idx = groups_list.find((group) => group.id === activeId);
        } else if(currIdx != -1 && currPage === "usersGroupPage"){
            groups_list = itemList[currIdx].group_members;
            idx = groups_list.find((group) => group.id === activeId);
        }
    }

    const showDropList=(id)=>{
        var menu = document.getElementById("drop-"+ id);
        if(menu.className === "show-drop-box"){
            menu.className = "hide-drop-box";
        } else {
            menu.className = "show-drop-box";
        }
        setId(id);
    }

    useEffect(()=>{
        setActiveGroupId(idx);
    }, [activeId])
    // console.log(activeGroupId);
    return (
        <div className='list'>
            {currPage === "homePage" && itemList[currIdx].group.map(item => (
                <div className='list-Item' key={item.id}>
                    <img alt='group-icon' src={groupIcon} />
                    {item.name}
                    <i onClick={() => { showDropList(item.id);}} className="fa-solid fa-ellipsis-vertical options"></i>
                    <div id={"drop-" + item.id} className={activeId === item.id? "show-drop-box drop-box" : "hide-drop-box drop-box"}><DropDown/></div>
                    </div>
            ))}
            {currPage === "usersGroupPage" && itemList[currIdx].group_members.map(item => (
                <div className='list-Item' key={item.id}>
                    <img alt='group-icon' src={groupIcon} />
                    {item.name}
                    <i onClick={() => { showDropList(item.id); }} className="fa-solid fa-ellipsis-vertical options"></i>
                    <div id={"drop-" + item.id} className={activeId === item.id? "show-drop-box drop-box" : "hide-drop-box drop-box"}><DropDown/></div>
                    </div>
            ))}
        </div>
    );
}

export default List
