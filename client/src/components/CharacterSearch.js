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
                <h1>Banana Bears Trading Club</h1>
                <h2>The Banana Bears Trading Club is the go to spot for chart maxis and technical trading enthousiasts.</h2>
                <h2>Our aim is for Bears to have a place to educate themselves on financial markets while enjoying each others' company.</h2>
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