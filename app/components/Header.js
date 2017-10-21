import React from 'react'
import PropTypes from 'prop-types'

import Form from './Form'

class Header extends React.Component {
    getDefaultProps() {
        text: 'Weather Buddy'
    }

    render() {
        return (
            <div className="header">
                <h1 >{this.props.text}</h1>
                <div className="header-container">
                    <Form text="Get the weather"/>
                </div>
            </div>
        )
    }
}

Header.propTypes = {
    text: PropTypes.string.isRequired
}

export default Header
