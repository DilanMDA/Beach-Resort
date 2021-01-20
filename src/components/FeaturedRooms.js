import React, { Component } from 'react'
import {RoomContext} from '../context/context';
export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        const {name,greeting} = this.context;
        // console.log(value);
        return (
            <div>
                {greeting} {name} from FeaturedRooms 
            </div>
        )
    }
}
