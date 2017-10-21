import React from 'react'
import PropTypes from 'prop-types'
import { getCurrentWeather } from '../utils/api.js'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cityname: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    getDefaultProps() {
        text: 'Get Weather'
    }
    handleClick() {
        return getCurrentWeather(this.state.cityname)
    }
    handleChange(e) {
        const value = e.target.value
        this.setState(function() {
            return {
                cityname: value
            }
        })
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    className="form-control"
                    placeholder="St. George, Utah"
                    onChange={this.handleChange}
                    value={this.state.cityname}
                />
                <button
                    className='btn btn-success'
                    onClick={this.handleClick}>
                        {this.props.text}
                </button>
            </div>
        )
    }
}

Form.propTypes = {
    text: PropTypes.string.isRequired
}

export default Form
