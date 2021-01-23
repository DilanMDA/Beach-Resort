import React from 'react'
import {useContext} from 'react';
import {RoomContext} from '../context/context';
import Title from '../components/Title';
export default function RoomFilter() {
    const context = useContext(RoomContext);
    console.log(context); 
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;
    return (
        <section className = 'filter-container'>
           <Title title='search rooms'/>
        </section>
    );
}
