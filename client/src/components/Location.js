import React from "react"
import axios from "axios"

class Location extends React.Component {
    state = {
        location: this.props.location,
        residents: []
    }

    componentDidMount() {
        let residents = this.state.location.residents
        let resID = residents.map((resident, index) => {
            return (
                resident.split("/").pop()
            )
        })
        resID.forEach((id, index) => {
            axios.get(`/api/characters/${id}`)
            .then(response => this.setState({residents: [...this.state.residents, response.data]}))
        })
    }

    render() {
        const {location} = this.props
        const {residents} = this.state
        return(
            <div id="location-info">
                <h1>Name: {location.name}</h1>
                <h2>Type: {location.type}</h2>
                <h2>Dimension: {location.dimension}</h2>
                <h2>Residents: </h2>
                <div>
                    {
                        residents.map((resident,index) => {
                            return(
                                <p key={index}>{resident.name}</p>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Location