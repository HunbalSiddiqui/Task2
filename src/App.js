import React from 'react'
import './App.css'
import Landing from './Pages/Landing/Landing'
import {Switch,Route} from 'react-router-dom'
import Output from './Pages/Output/Output'
export default function App() {
  return (
    <div>
        <Switch>
            <Route path='/' component={Landing} exact/>
            <Route path='/Output' component={Output}/>
        </Switch>
    </div>
  )
}
