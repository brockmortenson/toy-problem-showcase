import React, { Component, useReducer } from 'react';

export default class FilterString extends Component {
    constructor(){
        super();
        this.state = {
            siblings: ['Laura', 'Brett', 'Bryce'],
            userInput: '',
            filteredSiblings: []
        };
    }

    handleChange(val){
        this.setState({ userInput: val });
    }

    filterSiblings(userInput){
        let siblings = this.state.siblings;
        let filteredSiblings = [];

        for (let i = 0; i < siblings.length; i++){
            if (siblings[i].includes(userInput)){
                filteredSiblings.push(siblings[i]);
            }
        }

        this.setState({ filteredSiblings: filteredSiblings })
    }

    render(){
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText' >Siblings: { JSON.stringify(this.state.siblings, null, 10)} </span>
                <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value)} />
                <button className='confirmationButton' onClick={ () => this.filterSiblings(this.state.userInput)} >Filter</button>
                <span className='resultsBox filterStringRB' >Filtered Siblings: { JSON.stringify(this.state.filteredSiblings, null, 10)} </span>
            </div>
        )
    }
}