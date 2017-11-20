import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap'

const LandingJumbotron = () => (
  <div className="container">
    <Jumbotron>
      <h1>Welcome to Weathrly!</h1>
      <p>Type a zip code or city and state in the search box to get started!</p>
      <p><Button bsStyle="primary">Learn more</Button></p>
    </Jumbotron>
  </div>
)

export default LandingJumbotron
