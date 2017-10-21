import React from 'react'
import Header from './Header'
import Button from './Button'
import InputField from './InputField'

require('../index.css')

class Landing extends React.Component {
    render() {
        return (
            <div>
                <Header text="Weather Friend"/>
                <div className="landing">
                    <h1 className="search-heading">Enter a City and State</h1>
                    <div className="location-container">
                        <InputField/>
                    </div>
                    <Button text={"Gimme the weather"}/>

                </div>
            </div>
        )
    }
}

export default Landing
