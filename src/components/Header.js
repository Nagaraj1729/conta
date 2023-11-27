import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { searchContact } from "../redux/actions/actions"

function Header({searchContact}) {
  const [searchValue, setSearchValue] = useState('')

useEffect(()=> {
  searchContact(searchValue)
  console.log('SEARC_eFFect CALLED----', searchValue)
}, [searchValue])

  const handleSearchChange = (e)=> {
    setSearchValue(e.target.value)
  }

  const handleSearchSubmit = (e)=> {
    e.preventDefault()
    console.log('search_SUBMITTED CALLED----', searchValue)
    searchContact(searchValue)
  }

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="123">Contacts</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
            
                </ul>
                <form className="form-inline my-2 my-lg-0" onSubmit={handleSearchSubmit}>
                <input className="form-control mr-sm-2" value={searchValue} onChange={handleSearchChange} type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0"  type="submit">Search</button>
                </form>
            </div>
            </nav>
    </div>
  )
}

const mapDispatchToProps = dispatch=> {
  return bindActionCreators({
    searchContact
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Header)