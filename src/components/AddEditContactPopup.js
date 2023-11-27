 import React, { useEffect, useRef, useState } from 'react'
 import { connect } from 'react-redux'
import { addContact, editContact } from '../redux/actions/actions'
import { bindActionCreators } from 'redux'

 function AddEditContactPopup({addContact, contactToBeEdited,editContact}) {
    // console.log('EDIT CONTCT::::;', editContact)
    const [contact, setContact] = useState({name : '',phoneNo : '',email :''})

    useEffect(()=> {
        setContact(contactToBeEdited)
        // return ()=> {
        //     console.log('Popup------CLosed')
        //     setContact({name :'', phoneNo:'', email:''})
        // }
    },[contactToBeEdited])

    // const handleChange = (name, value)=> {
    //     const oldContact = {...contact}
    //     oldContact[name] = value
    //     setContact(oldContact)
    // }

    const handleSubmit = e => {
        e.preventDefault()
        if (contact.id!==undefined){
            editContact(contact, contact.id)
        }else{
            addContact(contact)
        }
        closeRef.current.click()
    }

    const closePopup = ()=> {setContact({name :'', phoneNo:'', email:''})}
    // NEW - to click another button in somewhere
    const closeRef = useRef()

   return (
    <div className="modal-content">
        <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">Add/Edit Contact</h5>
            <button type="button" ref={closeRef} onClick={closePopup} className="close" data-dismiss="modal" aria-label="Close" >
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div className="modal-body">
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput">Name:</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Name" required
                    value = {contact.name}
                    maxlength="20"
                    onChange={e=> setContact({...contact, name: e.target.value })}
                />
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Phone Number:</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" required placeholder="Enter Phone Number"
                    minlength="10"
                    maxlength="10"
                    value = {contact.phoneNo}
                    onChange={e=> setContact({...contact, phoneNo: e.target.value })}
                />
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput4">Email:</label>
                <input type="email" className="form-control" id="formGroupExampleInput4" placeholder="Enter Email"
                    value = {contact.email}
                    onChange={e=> setContact({...contact, email: e.target.value })}
                />
            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={closePopup} data-dismiss="modal">Close</button>
            <button type="submit" className="btn btn-primary">Submit</button>
        </div>
        </form>
        </div>
        
    </div>
   )
 }
 

 const mapDispatchToProps = dispatch=> {
    return bindActionCreators ({
        addContact, editContact
    }, dispatch)
}

// const mapDispatchToProps = dispatch=> {
//     return {
//         addContact : (contact)=> dispatch(addContact(contact)),
//         editContact : (contact, index)=> dispatch(editContact(contact, index))
//     }
// }

export default connect(null, mapDispatchToProps)(AddEditContactPopup)