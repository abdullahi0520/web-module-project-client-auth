import axios from "axios";
import React from "react";

class FriendsList extends React.Component {
    state = {
        friendsList: []
    };
    componentDidMount() {
        axios.get('http://localhost:9000/friends')
        .then(res => {
            console.log(res)
        })
    }

    render() {
        return(
            <div>
               <h2>The Gang</h2> 
            </div>
                
        )
    }
}

export default FriendsList