import React, { Component } from 'react';
import {RoomContext} from '../context/context';
import Loading from './Loading';

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        const {featuredRooms : rooms} = this.context;
        console.log(rooms);
        
        return (
            <div>
               from FeaturedRooms
               <Loading/> 
            </div>
        )
    }
}
