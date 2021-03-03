import React, { Component } from 'react';

export default class FilterObject extends Component{
    constructor(){
        super();
        this.state = {
            friends: [
                {
                    name: 'Jacob',
                    height: 'six feet',
                    age: 21,
                },
                {
                    name: 'Devan',
                    age: 21,
                    hairColor: 'brown'
                },
                {
                    name: 'Katie',
                    height: 'five foot five',
                }
            ],

            userInput: '',
            filteredFriends: []
        }

    }

    handleChange(val){
        this.setState({ userInput: val });
    }  
    
    filterFriends(prop){
        let friends = this.state.friends;
        let filteredFriends = [];

        for (let i = 0; i < friends.length; i++){
            if (friends[i].hasOwnProperty(prop)){
                filteredFriends.push(friends[i]);
            }
        }

        this.setState({ filteredFriends: filteredFriends })
    }

    render(){
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText' >Original: { JSON.stringify(this.state.friends, null, 10) } </span>
                <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value)} />
                <button className='confirmationButton' onClick={ () => this.filterFriends(this.state.userInput)} >Filter</button>
                <span className='resultsBox filterObjectRB'>Filtered: { JSON.stringify(this.state.filteredFriends, null, 10) } </span>
            </div>
        )
    }
}