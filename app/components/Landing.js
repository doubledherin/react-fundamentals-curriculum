import React from 'react'
import Header from './Header'
import Form from './Form'

require('../index.css')

class Landing extends React.Component {
    render() {
        return (
            <div>
                <Header text="Weather Friend"/>
                <div className="landing">
                    <h1 className="search-heading">Enter a City and State</h1>
                    <Form text="Click for weather"/>
                </div>
            </div>
        )
    }
}

export default Landing
