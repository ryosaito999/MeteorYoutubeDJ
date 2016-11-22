import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import MainPage from '../ui/pages/MainPage.jsx'
import RoomTemplate from '../ui/pages/RoomTemplate.jsx'

// // containers
import RoomContainer from '../ui/containers/RoomContainer.jsx'
// import MainContainer from '../ui/containers/MainContainer.jsx'
//
// // pages
// import SignupPage from '../ui/pages/SignupPage.jsx'
// import LoginPage from '../ui/pages/LoginPage.jsx'

export const renderRoutes = () =>(
  <Router history = {browserHistory}>
    <Route path="/" component={MainPage}></Route>
    <Route path="/room/:id" component={ RoomTemplate} />

  </Router>
)
