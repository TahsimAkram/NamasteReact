import React from "react";
class UserCC extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {name,location} = this.props;
        return (
        <div>
            <h1>Name : {name}</h1>
            <h1>Location : {location}</h1>
        </div>
        )
    }
}

export default UserCC;
