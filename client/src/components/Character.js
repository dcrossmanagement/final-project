import React from "react"

class Character extends React.Component{
    state = {name: this.props.match.params.name}

    render() {
        return(
        <h1>{this.state.name}</h1>
        )
    }

}

export default Character