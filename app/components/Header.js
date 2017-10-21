import React from 'react'
import PropTypes from 'prop-types'

import Button from './Button'
import InputField from './InputField'

class Header extends React.Component {
    getDefaultProps() {
        text: 'Weather Buddy'
    }

    render() {
        return (
            <div className="header">
                <h1 >{this.props.text}</h1>
                <div className="header-container">
                    <InputField/>
                </div>
                <Button text={"Gimme the weather"}/>
            </div>
        )
    }
}

Header.propTypes = {
    text: PropTypes.string.isRequired
}

export default Header
