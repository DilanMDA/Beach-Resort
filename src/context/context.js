import React, { Component } from 'react'
const RoomContext = React.createContext(undefined);
//<RoomContext.provider value={'hello'}></RoomContext.provider>

  class RoomProvider extends Component {
    state={
        greeting : 'hello',
        name : 'Akila'

    }
    render() {
        return (
            <RoomContext.Provider value={{...this.state}}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;

export {RoomProvider, RoomConsumer, RoomContext};