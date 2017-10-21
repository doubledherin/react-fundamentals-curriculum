import React from 'react'
import PropTypes from 'prop-types'
import { getCurrentWeather, getFiveDayForecastEndpoint } from '../utils/api.js'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cityname: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit() {
        const weather = getCurrentWeather(this.state.cityname)
        return weather
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
            <form>
                <input
                    type="text"
                    className="form-control"
                    placeholder="St. George, Utah"
                    onChange={this.handleChange}
                    value={this.state.cityname}
                />
                <input
                    type="submit"
                    className='btn btn-success'
                    onSubmit={this.handleSubmit}
                    value="Get Weather"/>
            </form>
        )
    }
}

export default Form
