import React from 'react'
import {useContext} from 'react';
import {RoomContext} from '../context/context';
export default function RoomFilter() {
    const context = useContext(RoomContext);
    console.log(context);
    
    return (
        <div>
            hello from rooms filter
        </div>
    )
}
