import React from "react"
import axios from "axios"
import LocationResults from "./LocationResults"

class LocationSearch extends React.Component{
    state = {
        locations: [],
        query: "-",
        residents: []
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

    fetchResidents = async (query) => {
        let residentURLs = this.state.locations[query].residents
        let resID = residentURLs.map((resident) => {
            return (
                resident.split("/").pop()
            )
        })
        let residents = await Promise.all(resID.map(async (id) => {
            return (await axios.get(`/api/characters/${id}`)).data
        }))
        return residents
    }

    handleChange = async (event) => {
        let query = event.target.value
        let residents = await this.fetchResidents(query)
        this.setState({query, residents})
    }

    render() {
        const {locations, query, residents} = this.state
        const location = locations[query]
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
                    <LocationResults location={location} residents={residents}/>
                }
            </div>
        )
    }
}

export default LocationSearch
