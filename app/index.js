var React = require('react')
var ReactDOM = require('react-dom')
require('dotenv').config()
import App from './components/App'
require('./index.css')

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)
