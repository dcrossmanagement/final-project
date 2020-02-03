import React from "react"

class Home extends React.Component {
    render() {
        return (
            <div id="home-page">
                <h1>Rick and Morty Character Search</h1>
                <h2>Welcome to the Home Of All The Rick and Morty Characters In All The Known Universes!</h2>
                <img src="/images/sample.jpg" alt="landing page img"/>
                <h3>Use the Characters Page to search for more info on your favorite character, the Locations Page to see the residents of each place Rick and Morty have ever been, and the Episodes Page to see which characters were in each episode!</h3>
            </div>
        )
    }
}

export default Home