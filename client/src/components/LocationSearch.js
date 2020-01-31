import React from "react"
import axios from "axios"
import {Link} from "react-router-dom"
import Location from './Location'

class LocationSearch extends React.Component{
    state = {
        locations: [],
        query: "-",
        loading: true
    }

    componentDidMount() {
        axios.get("/api/locations")
        .then(response => {
            let locations = response.data.sort((a,b) => {
                if (a.name < b.name) {
                    return -1;
                }
                else {
                    return 1;
                }
            })
            this.setState({locations: locations, loading: false})
        })
    }

    handleChange = event => {
        this.setState({query: event.target.value})
    }

    render() {
        const {locations, query, loading} = this.state
        return(
            <div className="search-page">
                <h1>Search Locations Below</h1>
                <img src="images/locations.jpg" alt="rick and morty in space"/>
                <br></br>
                <select value={query} onChange={this.handleChange}>
                    <option value="-">-</option>
                    {
                        locations.map((location, index) => {
                            return(
                                <option value={index} key={index}>{location.name}</option>
                            )
                        })
                    }
                </select>
                {
                    query !== "-" && 
                    <Location location={locations[query]}/>
                }
                
            </div>
        )
    }
}

export default LocationSearch
