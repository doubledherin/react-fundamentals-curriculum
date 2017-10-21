import React from 'react'
import Landing from './Landing'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={ Landing }/>
                    <Route render={() => <p>Not Found</p>}/>
                </Switch>
            </Router>
        )
    }
}

export default App
