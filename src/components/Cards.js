import React, {Component} from 'react';
import Card from './Card';

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <section className="cards-container">
                {
                    this.props.plants.map((plant) => <Card addFave={this.props.addFavePlant} key={plant.id} id={plant.id} img={plant.img} title={plant.title} desc={plant.desc} />)
                }
            </section>
         );
    }
}
 
export default Cards;