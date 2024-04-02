import React, { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import List from '../components/List'
import Modal from '../components/Modal';
import '../styles/home.scss'
import { currentPage } from '../store/atoms/globalAtoms';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { isUserSignedIn } from '../store/atoms/globalAtoms';
import { RecoilRoot } from 'recoil';


import createGroupIcon from '../assets/icons/create_group_icon.png'

const HomePageContainer = () => {
  const [isVisible, setVisibility] = useState(false);
  // Set the current page to home page
  const [isSignedIn, setSignedIn] = useRecoilState(isUserSignedIn);
  let storageObj;
  try {
    storageObj  = JSON.parse(sessionStorage.getItem("currentUser"));
  } catch (error) {
    console.log("Not Signed In!")
    storageObj = null;
  }
  console.log(storageObj);
  let signedInVal;
  if(storageObj === null){
    signedInVal = false;
  } else {
    signedInVal = true;
  }
  const [currPage, setCurrPage] = useRecoilState(currentPage);
  useEffect(()=>{
      setCurrPage("homePage");
      setSignedIn(signedInVal);
  }, []);
  console.log(currPage);
  console.log("signIn: " + isSignedIn);
  // A callback for Create Group Modal
  const createGroupModal = () => {
    console.log("function called successfully")
    setVisibility(true);
    console.log(isVisible)
  }
  return (
    <div className='container'>
      {isVisible === true && (
        <Modal type="CreateGroup"></Modal>
      )}
      <Navbar></Navbar>
        <div className='home-page'>
        {/* The Sidebar contains information of the groups */}
          <div className='sidebar-col'>
            <Sidebar />
          </div>
          {isSignedIn && <div className='home-container'>
            <div>
              <div className='page-title'>Home</div>
              <div className='page-title-sub'>Here is a list of groups you have created:</div>
            </div>
            <button className='create-group' type='button' onClick={()=>createGroupModal()}>
              <img alt='create-group' src={createGroupIcon} />
              Create Group
            </button>
            <List/>
          </div>}
          {!isSignedIn && <div className='home-container'>
            <h1 className='text-center font-semibold mt-12'>Kindly Sign In to your Account First!!</h1>  
          </div>}
        </div>
    </div>
  )
}

const HomePage = () => {
  return (
    <>
      <RecoilRoot>
        <HomePageContainer></HomePageContainer>
      </RecoilRoot>
    </>
  )
}

export default HomePage