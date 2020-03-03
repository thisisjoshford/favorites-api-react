import React, { Component } from 'react';
import request from 'superagent';

export default class ListDetails extends Component {
    state = { character: {}}
    
    async componentDidMount(){
        console.log('>>>>>>>>>>>>Mounting<<<<<<<<<<')
        const character = await request.get(`http://futuramaapi.herokuapp.com/api/v2/characters?search=${this.props.match.params.charName}`);
        this.setState({character: character.body[0]})
        console.log(this.state.character)
    }
    render() {
        const char = this.state.character
        return (
            <div>
                <h2>{char.Name}</h2>
                <img src={char.PicUrl}/>
                <ul>
                    <li>{char.Species}</li>
                    <li>{char.Age}</li>
                    <li>{char.Planet}</li>
                    <li>{char.Profession}</li>
                    <li>{char.Status}</li>
                    <li>{char.FirstAppearance}</li>
                    <li>{char.Relatives}</li>
                    <li>{char.VoicedBy}</li>
                </ul>
            
            </div>
        
            
        )
    }
}
