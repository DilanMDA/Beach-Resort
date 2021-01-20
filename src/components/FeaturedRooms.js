import React, { Component } from 'react'
import {RoomContext} from '../context/context';
export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        const value = this.context;
        console.log(value);
        return (
            <div>
                hello from FeaturedRooms {value}
            </div>
        )
    }
}
