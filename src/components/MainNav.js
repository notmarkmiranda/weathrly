import React from 'react'
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap'

const MainNav = ({ searchbarValue, handleChange, handleSubmit }) => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">WEATHRLY</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Navbar.Form pullRight>
          <FormGroup>
            <FormControl
              type="text"
              placeholder="Search"
              value={ searchbarValue }
              inputRef={ (input) => this.inputLocation = input }
              onChange={ () => { handleChange(this.inputLocation.value) } }
              />
          </FormGroup>
          {' '}
          <Button type="submit" onClick={ () => handleSubmit() }>Submit</Button>
        </Navbar.Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MainNav
