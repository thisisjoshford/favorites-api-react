import React, { Component } from 'react'
import List from './List';
import request from 'superagent';
import './Search.css';

export default class Search extends Component {

    state = {
        characters: [],
        input: '',
    }

    handleSearch = async (e) => {
        e.preventDefault();
        const search = await request.get(`http://futuramaapi.herokuapp.com/api/v2/characters?search=${this.state.input}`);
        
        (console.log(search.body))
        this.setState({
            characters: search.body
        });
        
    }

    render() {
        return (
            <div id="searchBox">
                <form onSubmit ={this.handleSearch}>
                    <input 
                        placeholder="enter character name"
                        value={this.state.input} 
                        onChange={(e) => this.setState({ input: e.target.value })} 
                    />
                    <br/>
                    <button>Search!</button>
                    <List characters={this.state.characters} />
                </form>
            </div>
        )
    }
}
