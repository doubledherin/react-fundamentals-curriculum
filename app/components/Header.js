import React from 'react'
import PropTypes from 'prop-types'

import Form from './Form'

class Header extends React.Component {

    render() {
        return (
            <div className="header">
                <h1 >{this.props.text}</h1>
                <div className="header-container">
                    <Form/>
                </div>
            </div>
        )
    }
}

export default Header
