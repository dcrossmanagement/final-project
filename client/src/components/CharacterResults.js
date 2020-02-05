import React from "react"
import {Link} from "react-router-dom"

const CharacterResults = props => {
    const {characters, query, loading} = props
    return(
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
                        <Link to={`/characters/${person.id}`} key={index}>
                            <div className="result">
                                <h4>ID# {person.id}</h4>
                                <h2>{person.name}</h2>
                                <h3>{person.origin.name}</h3>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default CharacterResults