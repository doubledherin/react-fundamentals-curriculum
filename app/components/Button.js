import React from 'react'
import PropTypes from 'prop-types'

class Button extends React.Component {
    getDefaultProps() {
        text: 'Get Weather'
    }

    render() {
        return (
            <button className='btn btn-success'>{this.props.text}</button>
        )
    }
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}

export default Button
