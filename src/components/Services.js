import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state ={
        service : [
            {
                icon: <FaCocktail/>,
                title : 'free cocktail',
                info : 'Every evening, Canopy hotels has free tastings at their hotel bar, where you can sample local wines, beers and spirits at no cost. ...'
            },{
                icon: <FaHiking/>,
                title : 'Endless Hiking',
                info : 'For our guests who are nature lovers, hiking in Kandy is an absolute must! This is an opportunity to take in a diverse array of ecosystems and habitats, which are home to rich biodiversity. Take delight in the thrilling trails we offer at Hunas Falls for your trekking pleasure.'
            },{
                icon: <FaShuttleVan/>,
                title : 'free shuttle',
                info : 'There is always a friendly welcome from the time you step into the airport shuttle van to the arrival at the front desk.'
            },{
                icon: <FaBeer/>,
                title : 'strongest beer',
                info : 'Free beer restaurant is a sea food restaurant offering fresh sea foods daily taken by the tangalle fisheries harbor.you can take sea food grilled / fresh juice / breakfast / sri lankan foods. we are specially given by free beer for every person.'
            }
        ]
    };
    render() {
        return (
            <section className = 'services'>
                 <Title title = "services"/>
                 <div className="services-center">
                     {this.state.service.map((item,index) =>{
                         return(
                             <article key = {index} className = 'service'>
                                 <span>{item.icon}</span>
                                 <h6>{item.title}</h6>
                                 <p>{item.info}</p>
                             </article>
                         );
                     })}
                 </div>
            </section>
        )
    }
}
