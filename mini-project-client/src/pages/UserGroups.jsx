import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import List from '../components/List'
import Modal from '../components/Modal';
import '../styles/usergroups.scss'
import { useState, useEffect } from 'react';
import addMemberIcon from "../assets/icons/add_user_icon.png";
import uploadNotesIcon from "../assets/icons/upload_notes_icon.png";
import uploadNoticesIcon from "../assets/icons/notices_icon.png"
import { currentPage } from '../store/atoms/globalAtoms';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { RecoilRoot } from 'recoil';

const UserGroupsContainer = () => {
  const [isVisibleMember, setVisibilityMember] = useState(false);
  const [isVisibleNotes, setVisibilityNotes] = useState(false);
  const [isVisibleNotices, setVisibilityNotices] = useState(false);

  // Set the current page to sign in page
  // const setCurrPage = useSetRecoilState(currentPage);
  const [currPage, setCurrPage] = useRecoilState(currentPage);
  useEffect(()=>{
      setCurrPage("usersGroupPage");
  }, []);
  console.log(currPage);
  let currPageValue = currPage;
  console.log(currPageValue); 
  // Add member function
  const addMemberModal = ()=>{
    console.log("function called successfully")
    setVisibilityMember(true);
    console.log(isVisibleMember)
  }
  // Upload notices visibility function
  const uploadNoticeModal = ()=>{
    console.log("function called successfully")
    setVisibilityNotices(true);
    console.log(isVisibleNotes)
  }
  // Upload Notes visibility function
  const uploadNotesModal = ()=>{
    console.log("function called successfully")
    setVisibilityNotes(true);
    console.log(isVisibleNotices)
  }
  return (
    <div className='container'>
      <Navbar></Navbar>
      {isVisibleMember === true && (
        <Modal type="AddMember"></Modal>
      )}
      {isVisibleNotes === true && (
        <Modal type="UploadNotes"></Modal>
      )}
      {isVisibleNotices === true && (
        <Modal type="UploadNotice"></Modal>
      )}
      <div className="users-page">
        <div className="sidebar-col">
          <Sidebar />
        </div>
        <div className="user-list-col">
            <div className='text-row'>
              <div className='page-title'>Group Name</div>
              <div className='page-title-sub'>Here are the members of the group:</div>
            </div>
            <div className="button-row">
              <div>
                <button className='create-group' type='button' onClick={()=> addMemberModal()}>
                  <img alt='Add Member Icon' src={addMemberIcon} />
                  <p>Add Member</p>
                </button>
              </div>
              <div>
                <button className='create-group' type='button' onClick={()=> uploadNotesModal()}>
                  <img alt='Upload Notes' src={uploadNotesIcon} />
                  <p>Upload Notes</p>
                </button>
              </div>
              <div>
                  <button className='create-group' type='button' onClick={()=> uploadNoticeModal()}>
                  <img alt='Upload Notices' src={uploadNoticesIcon} />
                  <p>Upload Notice</p>
                </button>
              </div>
            </div>
            <div className="list-row">
              <List/>
            </div>
          </div>
      </div>
    </div>
  )
}

const UserGroups = () => {
  return (
    <>
      <RecoilRoot>
        <UserGroupsContainer></UserGroupsContainer>
      </RecoilRoot>
    </>
  )
}

export default UserGroups