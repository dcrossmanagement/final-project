import React from "react"
import axios from "axios"
import CharacterResults from "./CharacterResults"

class CharacterSearch extends React.Component {
    state = {
        characters: [],
        query: "",
        loading: true
    }

    componentDidMount() {
        axios.get("/api/characters")
        .then(response => this.setState({characters: response.data, loading: false}))
    }

    handleChange = event => {
        this.setState({query: event.target.value})
    }

    render() {
        const {characters, query, loading} = this.state
        return(
            <div className="search-page">
                <h1>Search Character Below</h1>
                <img src="/images/characters.jpg" alt="various characters"/>
                <br></br>
                <input 
                    type="text"
                    name="query"
                    value={query}
                    onChange={this.handleChange}
                    placeholder="Search Favorite Character Here!"
                    autoComplete="off"
                />
                <CharacterResults characters={characters} query={query} loading={loading}/>
            </div>
        )
    }
}

export default CharacterSearch