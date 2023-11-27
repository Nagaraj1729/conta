const initialContacts = {
    contacts : [
                {name : 'Ravi', phoneNo:"6541135799", email:'ravi12@gamail.com'},
                {name : 'Arjun', phoneNo:"9874632145", email:'arjun65@gamail.com'},
                {name : 'King', phoneNo:"9486654929", email:'arjun65@gamail.com'},
                {name : 'Aruna', phoneNo:"7514896229", email:'arjun65@gamail.com'},
                {name : 'Ram', phoneNo:"6547951213", email:'arjun65@gamail.com'},
                {name : 'Rekha', phoneNo:"9632587451", email:'arjun65@gamail.com'},
                {name : 'Arya', phoneNo:"8899847565", email:'arjun65@gamail.com'},
                {name : 'Kaja', phoneNo:"7756896515", email:'arjun65@gamail.com'},
                {name : 'Uday', phoneNo:"8789654132", email:'arjun65@gamail.com'},
                {name : 'Daniel', phoneNo:"8054563210", email:'arjun65@gamail.com'},
                {name : 'Vishnu', phoneNo:"9587456322", email:'arjun65@gamail.com'},
                {name : 'Varun', phoneNo:"7532145698", email:'arjun65@gamail.com'},
                {name : 'Teja', phoneNo:"6214589365", email:'arjun65@gamail.com'},
                ],
    contact : {},
    searchValue : ''
}

export const contactReducer = (state=initialContacts, action)=> {
        switch (action.type) {
            case 'GET_ALL_CONTACTS':
                return {...state}
            case 'ADD_CONTACT':
                let contacts = [...state.contacts]
                console.log('---- in ADD reducer---', contacts)
                contacts.push(action.payload)
                return {...state, contacts}
            case 'EDIT_CONTACT':
                let currContacts = [...state.contacts]
                currContacts[action.index] = action.editedContact
                return {...state, contacts:currContacts}
            case 'DELETE_CONTACT':
                // let allContacts = [...state.contacts]
                return {...state, contacts : state.contacts.filter((contact,id)=> id !== action.deletedId)}
            case 'GET_SINGLE_CONTACT':
                return {...state, contact: {...state.contacts[action.index], id:action.index}}
            case 'SEARCH_CONTACT':
                console.log('SEARCCH----VALUE:::::-', action.searchValue)
                return {...state, searchValue : action.searchValue.toLowerCase()}
            default:
                return state;
        }

    }