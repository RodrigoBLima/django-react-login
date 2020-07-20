import React, { Component } from 'react'
import TopMenu from './Navbar'

export default class Layout extends Component {
    render() {
        return (
            <div>
                <TopMenu />
                {this.props.children}
            </div>
        )
    }
}
