import React from "react"

class Character extends React.Component{
    state = {id: this.props.match.params.id}

    render() {
        return(
            <div id="char">
                <h1>{this.state.name}</h1>
                <img src="/images/sample.jpg" alt={this.state.name}/>
                <div id="charInfo">
                    <p>Status:</p>
                    <p>Species:</p>
                    <p>Type:</p>
                    <p>Gender:</p>
                    <p>Origin:</p>
                    <p>Location:</p>
                </div>
                
            </div>
        )
    }

}

export default Character