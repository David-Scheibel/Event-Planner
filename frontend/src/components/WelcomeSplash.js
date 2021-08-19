import React, { Component } from 'react'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom'

class WelcomeSplash extends Component {

    render () {

        const nick = this.props.nickname
        
        return (
            <div>
                {/* <h3>{`Welcome to your planner, ${nick == null ? "null" : nick}!`}</h3> */}
                <h3>{nick == null ? " " : `Welcome to your planner, ${nick}!`}</h3>
            </div>
        )
    }
}

export default WelcomeSplash