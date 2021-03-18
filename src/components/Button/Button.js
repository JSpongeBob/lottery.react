import React, { Component } from 'react'

export default class Button extends Component {
    render() {

        const {title, handleClick,disabled} = this.props;
        return (
            <span>
                <button disabled={disabled} onClick={handleClick}> {title}</button>
            </span>
        )
    }
}
