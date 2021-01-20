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

    }

    //getData by lifecycle method start

    componentDidMount() {
        // this.getData
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.feature === true);
        this.setState({
            rooms,
             featuredRooms,
             sortedRooms: rooms,
             loading: false
        });
        console.log(rooms);
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = { ...item.fields, images, id };
            return room;
        })
        return tempItems;
    }
    //end of getData process
    render() {
        return (
            <RoomContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };