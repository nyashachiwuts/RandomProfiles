import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import ProfileDetailView from './Components/ProfileDetailView'
import UserList from './Components/ProfileListView'

const App = props => {
  const [id, setID] = useState(null)
  console.log(`Passed variable to App.js is: ` + id)

  const [resources, setResources] = useState([])

  const fetchResource = async () => {
    const response = await axios.get(
      'https://api.randomuser.me/?results=7'
    )
    setResources(response.data.results)
  }

  useEffect(() => {
    fetchResource()
  }, [])

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <UserList resources={resources} setID={setID} />
        </Route>
        <Route exact path='/user/:id'>
          <ProfileDetailView resources={resources} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App