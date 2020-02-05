import React from "react"
import axios from "axios"
import EpisodeResults from "./EpisodeResults"

class EpisodeSearch extends React.Component {
    state = {
        episodes: [],
        query: "-",
        loading: true,
        characters: []
    }

    componentDidMount() {
        axios.get("/api/episodes")
        .then(response => {
            let episodes = response.data
            this.setState({episodes: episodes, loading: false})
        })
    }

    fetchCharacters = async (query) => {
        let characterURLs = this.state.episodes[query].characters
        let charID = characterURLs.map((character) => {
            return (
                character.split("/").pop()
            )  
        })
        let characters = await Promise.all(charID.map(async (id) => {
            return (await axios.get(`/api/characters/${id}`)).data
        }))
        return characters
    }

    handleChange = async (event) => {
        let query = event.target.value
        let characters = await this.fetchCharacters(query)
        this.setState({query, characters})
    }

    render() {
        const {episodes, query, characters} = this.state
        const episode = episodes[query]
        return(
            <div className="search-page">
                <h1>Search Episodes Below</h1>
                <img src="images/episodes.jpg" alt="episodes"/>
                <br></br>
                <select value={query} onChange={this.handleChange}>
                    <option value="-">-</option>
                    {
                        episodes.map((episode, index) => {
                            return(
                            <option value={index} key={index}>{episode.episode}</option>
                            )
                        })
                    }
                </select>
                {
                    query !== "-" &&
                    <EpisodeResults episode={episode} characters={characters}/>
                }
            </div>
        )
    }
}

export default EpisodeSearch