import React from 'react'
import RoomsFilter from './RoomFilter';
import RoomsList from './RoomList';
import { RoomConsumer } from '../context/context';
// import Loading from '../components/Loading';


export default function RoomContainer() {
    

    return (
        <RoomConsumer>
            {(value) => {
                console.log(value);
 
                return (
                <div>
                    hello from room container
                    <RoomsFilter/>
                    <RoomsList/>
                </div>
                );
            }
            }
        </RoomConsumer>
    );
}


 










// import React from 'react'
// import RoomsFilter from './RoomFilter';
// import RoomsList from './RoomList';
// import {RoomConsumer} from '../context/context';
// import Loading from '../components/Loading';

// export default function RoomContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 (value) =>{  
//                     const {loading, sortedRooms,rooms} = value;
//                     if(loading){
//                         return <Loading/>;
//                     }
//                     return(
//                         <div>
//                         Hello from rooms container 
//                         <RoomsFilter rooms={rooms}/>
//                         <RoomsList rooms={sortedRooms}/>
//                     </div>
//                     );
//                 }
//             }
//         </RoomConsumer>

//     );
// }
