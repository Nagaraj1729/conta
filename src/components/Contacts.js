import { useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import { getAllContacts, getSingleContact, deleteContact } from '../redux/actions/actions'
import AddEditContactPopup from './AddEditContactPopup'
import { bindActionCreators } from 'redux'


function Contacts({getAllContacts, getSingleContact, deleteContact}) {
    const contacts = useSelector(state=> state.contacts)
    const contact = useSelector(state=> state.contact)
    const searchValue = useSelector(state=> state.searchValue)


useEffect(()=> {
    getAllContacts()
},[])

const searchedContacts = contacts.filter((contact)=> (contact.name.toLowerCase().includes(searchValue) || contact.phoneNo.includes(searchValue)))
console.log('searchedCONTACTS---::-', searchedContacts)

  return (
    <div>
        <div className='container d-flex flex-row align-items-center justify-content-between mt-4'>
            <h1>All Contacts</h1>
            <button className='btn btn-primary' data-toggle="modal" data-target="#exampleModalCenter">+ Add Contact</button>
        </div>
        <div className='container mt-4'>
            {searchedContacts.length<=0 
                ? <h3 className='text-danger text-center mt-5 pt-5'>No Contacts Found..!</h3>
                : (
                <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Email</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {searchedContacts.map((contact, index)=> (
                        <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{contact.name}</td>
                        <td>{contact.phoneNo}</td>
                        <td>{contact.email}</td>
                        <td>
                            <button className='btn btn-outline-info'  data-toggle="modal" data-target="#exampleModalCenter" onClick={()=> getSingleContact(index)}>Edit</button> &nbsp;
                            <button className='btn btn-outline-danger' onClick={()=> deleteContact(index)}>Delete</button>
                        </td>
                        </tr>
                        )
                    )}
                
                    
                </tbody>
                </table>) }
            {/* POPUP */}
            {/* <!-- Button trigger modal --> */}
            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" data-backdrop="static" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <AddEditContactPopup contactToBeEdited={contact}/>
            </div>
            </div>

        </div>
    </div>
  )
}

// const mapStateToProps = state=> {
//     return {
//         contacts : state.contacts,
//         contact : state.contact 
//     }
// }


// const mapDispatchToProps = dispatch=> {
//     return {
//         getAllContacts : ()=> dispatch(getAllContacts()),
//         getSingleContact : (index)=> dispatch(getSingleContact(index)),
//         deleteContact : (index)=> dispatch(deleteContact(index))
//     }
// }

const mapDispatchToProps = dispatch=> {
    return bindActionCreators({
        getAllContacts,
        getSingleContact ,
        deleteContact
    }, dispatch)
}



export default connect(null, mapDispatchToProps)(Contacts)