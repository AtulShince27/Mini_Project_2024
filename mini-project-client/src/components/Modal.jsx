import React from 'react'
import '../styles/modal.scss';
const Modal = (type) => {
    console.log(type.type)
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
                </div>
                <form >
                    {/* Create New Group Inputs */}
                    {type.type === "CreateGroup" && (
                        <>
                        <label htmlFor="groupName">Group Name</label> 
                        <br></br>
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
                        <label htmlFor="lastName">Last Name</label>
                        <br/> 
                        <input type="text" name="lastName" id="lastName" placeholder='Enter Last Name'/>
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
                            <label for="fileInput">Select a file:</label>
                            <br/>
                            <input type="file" id="fileInput" name="fileInput" accept=".pdf,.pptx,.docx" />
                            <br/>
                        </>
                    )}
                    {/* Upload Notice */}
                    {type.type === "UploadNotice" && (
                        <>
                        <label htmlFor="tags">Choose The Tags for Notice</label>
                        <br/>
                        <label for="fileInput">Select a file:</label>
                        <input type="file" id="fileInput" name="fileInput" accept=".pdf,.pptx,.docx" /> 
                        <br/>
                        </>
                    )}
                    {/* Remove Member */}
                    {type.type === "RemoveMember" && <label htmlFor='removeMember'>Remove Member</label>}
                    {/* Buttons */}
                </form>
                <div className="btn-container">
                        {type.type === "RemoveMember" || type === "EditMember"
                        && <h4>Are you sure you want to make these changes?</h4>}
                        <div id="submitBtnCol">
                            {type.type === "RemoveMember" || type === "EditMember" ? (
                                <button id='submitBtn' type='submit'>Yes</button>
                            ) : (
                                <button id='submitBtn' type='submit'>Submit</button>
                            )}
                        </div>
                        <div id="cancelBtnCol">
                            {type.type && (
                                <button id='cancelBtn'>Cancel</button>
                            )}
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Modal