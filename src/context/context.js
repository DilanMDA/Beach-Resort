import React, { Component } from 'react';
import items from '../data';
const RoomContext = React.createContext(undefined);
//<RoomContext.provider value={'hello'}></RoomContext.provider>

class RoomProvider extends Component {
    //initial state

    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false,

    }

    //getData by lifecycle method start

    componentDidMount() {
        // this.getData
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter((room: { featured: boolean; }) => room.featured === true);
        let maxPrice = Math.max(...rooms.map(item => item.price));
        let maxSize = Math.max(...rooms.map(item => item.size));

        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false,
            price: maxPrice,
            maxPrice,
            maxSize,

        });
    }
    // RoomList data
    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = { ...item.fields, images, id };
            return room;
        })
        return tempItems;
    }
    getRoom = slug => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find((room) => room.slug === slug);
        return room;
    }
    //RoomFilter data
    handleChange = event => {
        const target = event.target
        const value = event.type === 'checkbox' ? target.checked : target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        },
            //call back function   
            this.filterRooms
        )
    };

    filterRooms = () => {
        //  get rooms 
        let {
            rooms,
            type,
            capacity,
            // price,
            // minPrice,
            // maxPrice,
            // maxSize,
            // breakfast,
            // pets,
        } = this.state;
        //all the rooms
        let tempRooms = [...rooms];
        // transform value
        capacity = parseInt(capacity);

        // filter by type
        if (type !== 'all') {
            tempRooms = tempRooms.filter(rooms => rooms.type === type);
        }

        // filter by capacity
        if (capacity !== 1) {
            tempRooms = tempRooms.filter(room => room.capacity === capacity)
        }

        this.setState({
            sortedRooms: tempRooms
        })
    };


    //End of RoomFilter data
    //end of getData process
    render() {
        return (
            <RoomContext.Provider
                value={{
                    ...this.state,
                    getRoom: this.getRoom,
                    handleChange: this.handleChange
                }}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;

// Higher order component access

export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
        return (
            <RoomConsumer>
                {value => <Component {...props} context={value} />}
            </RoomConsumer>
        );
    };
}


export { RoomProvider, RoomConsumer, RoomContext };