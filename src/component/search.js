import React, { Component } from 'react';

class SearchBar extends React.Component {
     onInputChange(term) {
     this.props.limit(25,term);
    }
    handleSearch=(e)=>
    {
        e.preventDefault();
        this.props.onTermChange();       
    }

    render() {
        return (
            <div className="row"> 
            <form onSubmit={this.handleSearch}>
            <div className="search m2">
                
            <div className="col l11 m10 s8">
            <label for="first_name">Search Giphy's:</label>
            <input id="first_name" onChange={event => this.onInputChange(event.target.value)} placeholder="Search all the GIF and Stickers" />    
            </div>

            <div className="col l1 m2 s4">
            <button class="btn waves-effect waves-light orange darken-3 mt-25" type="submit" name="action">
            <i class="material-icons dp48 left"></i> Search          
            </button>   

            </div>   

            </div>
            </form>
            </div>
        );
    }
}

export default SearchBar;