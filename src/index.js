import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import './App.scss'
import { HashRouter } from 'react-router-dom'

const appJsx = (
  <HashRouter>
    <App />
  </HashRouter>
)

ReactDOM.render(appJsx, document.getElementById('root'))