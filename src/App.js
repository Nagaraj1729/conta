import {BrowserRouter, Route, Router, Switch} from 'react-router-dom'

import Contacts from "./components/Contacts"
import Header from "./components/Header"
import CartApp from "./components/ToolkitApp/CartApp"


const App = () => {
  return (
    <div>
      {/* <Header/>
       <Contacts/> */}
       <CartApp/>
    </div>
  )
}


export default(App)
