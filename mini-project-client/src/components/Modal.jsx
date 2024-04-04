import React, { useEffect, useState } from 'react'
import '../styles/modal.scss';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { isModalVisible } from '../store/atoms/globalAtoms';
import { isModalVisibleMember, isModalVisibleNotes, isModalVisibleNotices } from '../store/atoms/globalAtoms';
import { isListModalVisibleDelete, isListModalVisibleEdit } from '../store/atoms/globalAtoms';
const Modal = (type) => {
    console.log(type.type)

    const [isVisible, setVisibility] = useRecoilState(isModalVisible);
    const setModalVisibilityMember = useSetRecoilState(isModalVisibleMember);
    const setModalVisibilityNotes = useSetRecoilState(isModalVisibleNotes);
    const setModalVisibilityNotices = useSetRecoilState(isModalVisibleNotices);
    const setModalVisibilityDelete = useSetRecoilState(isListModalVisibleDelete);
    const setModalVisibilityEdit = useSetRecoilState(isListModalVisibleEdit);

    const [cancelClicked, setCancelClicked] = useState(false);
    const cancelBtnHandler = ()=>{
        setCancelClicked(true);
    }

    const handleFormSubmit = (ev)=>{
        ev.preventDefault()
        if(type.type === "CreateGroup"){

        } else if(type.type  === "AddMember" ||  type.type === "EditMember"){
            const firstName = document.getElementById("firstName");
            const lastName = document.getElementById("lastName");
            const phoneNum = document.getElementById("phoneNum");
            // Axios code to send this data to backend 
            console.log("FName: " + firstName);
            console.log("lName: " + lastName);
            console.log("Phone: " + phoneNum);
        } else if(type.type === "UploadNotes" || type.type === "UploadNotice"){

        } else if(type.type === "RemoveMember"){

        } 
    }

    useEffect(()=>{
        if(cancelClicked === true){
            setVisibility(false);
            setModalVisibilityMember(false);
            setModalVisibilityNotes(false);
            setModalVisibilityNotices(false);
            setModalVisibilityEdit(false);
            setModalVisibilityDelete(false);
        }
    })
    console.log("setVisi: " + cancelClicked);
    console.log(isVisible);
    return (
        <div className='modal'>
            <div className="modal-form">
                <div className="modal-header">
                    {type.type  === "CreateGroup" && <h1>Create New Group.</h1>}
                    {type.type  === "AddMember" && <h1>Add New Member.</h1>}
                    {type.type  === "UploadNotes" && <h1>Upload Notes.</h1>}
                    {type.type  === "UploadNotice" && <h1>Upload Notice.</h1>}
                    {type.type  === "RemoveMember" && <h1>Remove Member.</h1>}
                    {type.type  === "EditMember" && <h1>Edit Member.</h1>}
                    {type.type  === "DeleteGroup" && <h1>Delete Group.</h1>}
                    {type.type  === "EditGroup" && <h1>Edit Group.</h1>}
                </div>
                <form onSubmit={handleFormSubmit}>
                    {/* Create New Group Inputs */}
                    {type.type === "CreateGroup" && (
                        <>
                        <label htmlFor="groupName">Group Name</label> 
                        <br></br>
                        <input type="text" name='groupName' id='groupName' placeholder='Enter Group Name' required/>
                        <br/>
                        </>
                    )}
                    {/* Edit Group Inputs */}
                    {type.type === "EditGroup" && (
                        <>
                        <label htmlFor="groupName">Group Name</label> 
                        <br/>
                        <input type="text" name='groupName' id='groupName' placeholder='Enter Group Name' required/>
                        <br/>
                        </>
                    )}
                    {/* Add New Member Inputs */}
                    {type.type === "AddMember" && (
                        <>
                        <label htmlFor="firstName">First Name</label> 
                        <br/>
                        <input type="text" name="firstName" id="firstName" placeholder='Enter First Name'/>
                        <label htmlFor="lastName">Last Name</label>
                        <br/> 
                        <input type="text" name="lastName" id="lastName" placeholder='Enter Last Name'/>
                        <label htmlFor="phoneNum">Phone Number</label>
                        <br/> 
                        <input type="text" name="phoneNum" id="phoneNum" placeholder='Enter Phone Number'/> 
                        <br/>
                        </>
                    )}
                    {/* Edit Member Modal */}
                    {type.type === "EditMember" && (
                        <>
                        <label htmlFor="firstName">First Name</label> 
                        <br/>
                        <input type="text" name="firstName" id="firstName" placeholder='Enter First Name'/>
                        <br />
                        <label htmlFor="lastName">Last Name</label>
                        <br/> 
                        <input type="text" name="lastName" id="lastName" placeholder='Enter Last Name'/>
                        <br />
                        <label htmlFor="phoneNum">Phone Number</label>
                        <br/> 
                        <input type="text" name="phoneNum" id="phoneNum" placeholder='Enter Phone Number'/> 
                        <br/>
                        </>
                    )}
                    {/* Upload Notes */}
                    {type.type === "UploadNotes" && (
                        <>
                            <label htmlFor="tags">Choose The Tags for Notes</label>
                            <br/>
                            <label htmlFor="fileInput">Select a file:</label>
                            <br/>
                            <input type="file" id="fileInput" name="fileInput" accept=".pdf,.pptx,.docx,.ppt" />
                            <br/>
                        </>
                    )}
                    {/* Upload Notice */}
                    {type.type === "UploadNotice" && (
                        <>
                        <label htmlFor="tags">Choose The Tags for Notice</label>
                        <br/>
                        <label for="fileInput">Select a file:</label>
                        <input type="file" id="fileInput" name="fileInput" accept=".pdf,.pptx,.docx,.ppt" /> 
                        <br/>
                        </>
                    )}
                    {/* Buttons */}
                    {/* Delete & Edit Group */}
                    {type.type === "DeleteGroup" || type.type === "EditGroup"? (<h4>Are you sure you want to make these changes?</h4>): (<></>)}
                    {/* Delete and Edit Member */}
                    {type.type === "RemoveMember" || type.type === "EditMember"? (<h4>Are you sure you want to make these changes?</h4>) : (<></>)}
                    <div className="btn-container">
                        <div id="submitBtnCol">
                            {type.type === "RemoveMember" || type.type === "EditMember" || type.type === "DeleteGroup" || type.type === "EditGroup"? (
                                <button id='submitBtn' type='submit'>Yes</button>
                            ) : (
                                <button id='submitBtn' type='submit'>Submit</button>
                            )}
                        </div>
                        <div id="cancelBtnCol">
                            {type.type && (
                                <button id='cancelBtn' onClick={cancelBtnHandler}>Cancel</button>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal