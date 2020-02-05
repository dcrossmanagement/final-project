import React from "react"
import {Link} from "react-router-dom"

const LocationResults = props => {
    return(
        <div id="location-info">
            <h1>Name: {props.location.name}</h1>
            <h2>Type: {props.location.type}</h2>
            <h2>Dimension: {props.location.dimension}</h2>
            {props.residents.length === 0 && <h2>Residents: None</h2>}
            {props.residents.length > 0 && <h2>Residents: </h2>}
            <div>
                {
                    props.residents.map((resident,index) => {
                        return(
                            <Link to={`/characters/${resident.id}`} key={index}>
                                <p>{resident.name}</p>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default LocationResults