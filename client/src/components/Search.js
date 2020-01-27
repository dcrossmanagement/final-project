import React from "react"
import axios from "axios"

class Search extends React.Component {
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
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        const {characters, query, loading} = this.state
        return(
            <>
                <div id="search-page">
                    <h1>Search Character Below</h1>
                    <img src="/images/sample.jpg" alt="various characters"/>
                    <br></br>
                    <input 
                        type="text"
                        name="query"
                        value={query}
                        onChange={this.handleChange}
                        placeholder="Search Favorite Character Here!"
                        autoComplete="off"
                    />
                    <div id="results">
                        {loading && <h3>Loading...</h3>}
                        {
                            characters.filter(person => {
                                if(!query) {
                                return true
                                }
                                else {
                                return person.name.toLowerCase().includes(query.toLowerCase())
                                }
                            })
                            .map((person,index) => {
                                return(
                                    <div className="result" key={index}>
                                        <h4>ID# {person.id}</h4>
                                        <h2>{person.name}</h2>
                                        <h3>{person.origin.name}</h3>
                                    </div>
                                )
                            })

                        }
                    </div>
                </div> 
            </>
        )
    }
}

export default Search