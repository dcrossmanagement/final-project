import React from "react"
import {Link} from "react-router-dom"

const EpisodeResults = props => {
    return(
        <div id="episode-info">
            <h1>Name: {props.episode.name}</h1>
            <h2>Air Date: {props.episode.air_date}</h2>
            <h2>Characters: </h2>
            <div>
                {
                    props.characters.map((character, index) => {
                        return(
                            <Link to={`/characters/${character.id}`} key={index}>
                                <p>{character.name}</p>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default EpisodeResults