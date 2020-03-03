import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListDetails from './ListDetails.js';
import './List.css';

export default class List extends Component {
    render() {
        console.log(this.props.characters)
        return (
            <div>
                {
                    this.props.characters.map(char => 
                    <div className="charContainer">
                        <img className="charImage" src={char.PicUrl} alt={`a sweet pic of ${char.Name}`}/>
                        <h2 className="charName">{char.Name}</h2>
                        <Link to={`/details/${char.Name}`}>More Info</Link>
                    </div>
                    )
                }
            </div>
        )
    }
}
