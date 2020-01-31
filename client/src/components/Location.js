import React from "react"

class Location extends React.Component {
    state = {
        location: this.props.location,
        residents: []
    }

    // componentDidMount() {

    // }

    render() {
        const {location} = this.props
        const {residents} = this.state
        return(
            <div id="location-info">
                <h1>Name: {location.name}</h1>
                <h2>Type: {location.type}</h2>
                <h2>Dimension: {location.dimension}</h2>
                {/*<h2>Residents: </h2>
                <ul>
                    {
                        residents.map((resident,index) => {
                            return(
                                <li>{resident}</li>
                            )
                        })
                    }
                </ul>*/}
            </div>
        )
    }
}

export default Location