import React, { Component } from 'react';
import './List.css';

export default class List extends Component {
    render() {
        return (
            <div>
                {
                    this.props.characters.map(char => 
                    <div className="charContainer">
                        <img className="charImage" src={char.PicUrl} alt={`a sweet pic of ${char.Name}`}/>
                        <h2 className="charName">{char.Name}</h2>
                    </div>)
                }
            </div>
        )
    }
}
