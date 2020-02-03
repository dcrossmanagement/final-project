import React from "react"
import axios from "axios"

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
        let charID = characterURLs.map((character, index) => {
            return (
                character.split("/").pop()
            )  
        })
        let characters = await Promise.all(charID.map(async (id, index) => {
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
                    <div id="episode-info">
                        <h1>Name: {episode.name}</h1>
                        <h2>Air Date: {episode.air_date}</h2>
                        <h2>Characters: </h2>
                        <div>
                            {
                                characters.map((character, index) => {
                                    return(
                                        <p key={index}>{character.name}</p>
                                    )
                                })
                            }
                        </div>
                    </div>    
                }
            </div>
        )
    }
}

export default EpisodeSearch