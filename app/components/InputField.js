import React from 'react'

class InputField extends React.Component {
    render() {
        return (
            <input
                type="text"
                className="form-control"
                placeholder="St. George, Utah"
                value=""
            />
        )
    }
}

export default InputField
