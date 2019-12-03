import React, { Component } from 'react'
import './Header.css';
//      -   Whatever the user clicks on, we will save that selection in the state.App //
//      -   On submit, we pass the users selction to App.js through a function that was passed down in props. //
//      -  We need a constructor in order to set state  //

class Header extends Component {
    constructor() {
        super();
        this.state = {
            userChoice: "",
            filteredArray: []
        }
    }
    // this can go anywhere, as long as its not inside of a life cycle statment // 
    weHaveATarget = (e) => {
        e.preventDefault();
        console.log(e.target.value);

        // We're saving it into state //
        this.setState({
            userChoice: e.target.value
            // It wont run until setState has finished ///
        });
    }

    render() {
        return (

            <header>
                <div className="wrapper backer">
                    <h1>Torontos Upcoming Concert Generator</h1>
                    <h2>Populate A Random Artist And Venue</h2>
                </div>
            <form action="">
                <select onChange={this.weHaveATarget} name="whichVenue" id="whichVenue">
                    <option value="">Music Genres...</option>
                    <option value="KnvZfZ7vAee">R&B</option>
                    <option value="KnvZfZ7vAv1">Hip-Hop</option>
                    <option value="KnvZfZ7vAeA">Rock</option>
                    <option value="KnvZfZ7vAev">Pop</option>
                    <option value="KnvZfZ7vAvv">Alternative</option>
                    <option value="KnvZfZ7vAvF">Dance/Electronic</option>
                    <option value="KnvZfZ7vAva">Folk</option>
                    <option value="KnvZfZ7vAv6">Country</option>
                    <option value="KnvZfZ7vAvl">Other?</option>
                </select>
                <button
                    onClick={(e) => this.props.getArtistProp(e, this.state.userChoice)}>
                    Find My Artist
                    </button>
            </form >
            </header>    
        )
    }
}

export default Header;