import { Component } from "react";
import axios from "axios";

class UserPage extends Component {
    constructor(props){
        super(props)
        this.state={
            playerName: null,
            playerStats: {}
        }
    }
    getPlayerId = () => {
        axios.get("https://www.balldontlie.io/api/v1/players?search=lebron")
        .then(async res => {
            console.log(res.data.data)
        }).catch(e => {
            console.log(e)
        })
    }

    componentDidMount(){
        this.getPlayerId()
    }

    selectPlayer = () =>{

    }

    selectTeam = () =>{

    }



render(){
    return (
        <div className="userMenu">
        <h1 className="welcomeText">welcome</h1>

        <div className="playerSelect">
        <input placeholder="Player's first or last name" type="text"></input> <br />
        <button onClick={this.selectPlayer} className="trackBtn">Track Player</button> 
        </div> 

        <div className="teamSelect">
        <input placeholder="Team's name" type="text"></input> <br />
        <button onClick={this.selectTeam} className="trackBtn">Track Team</button> 
        </div>

        <div>
            <h1>Your favourite players</h1>
        </div>

        <div>
            <h1>Your favourite Teams</h1>
        </div>

        </div>
    )
}
}

export default UserPage