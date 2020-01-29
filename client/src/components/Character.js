import React from "react"
import axios from "axios"

class Character extends React.Component{
    state = {
        id: this.props.match.params.id,
        character: {},
        loading: true
    }

    componentDidMount() {
        axios.get(`/api/characters/${this.state.id}`)
        .then(response => this.setState({character: response.data, loading: false}))
    }
    
    render() {
        const {character, loading} = this.state
        return(
            <div id="char">
                {
                    !loading && 
                    <div>
                        <h1>{character.name}</h1>
                        <img src={character.image} alt={character.name}/>
                        <div id="charInfo">
                            <p>Status: {character.status}</p>
                            <p>Species: {character.species}</p>
                            <p>Type: {character.type}</p>
                            <p>Gender: {character.gender}</p>
                            <p>Origin: {character.origin.name}</p>
                            <p>Location: {character.location.name}</p>
                        </div>
                    </div>
                }
            </div>
        )
    }

}

export default Character