import React, { Component } from "react"

class Provinces extends Component {

    render() {
        return (
            <div>
                 <img alt="My Pic" width={300} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Person_standing_in_front_of_Swiss_Alps.jpg/640px-Person_standing_in_front_of_Swiss_Alps.jpg" />
                 <div className="name-text">Hi, I'm Chirag</div>
                 <div className="info-text">
                     I'm a Software Developer working with <span className="company-name">Fiserv</span> based in India.
                 </div>
                 <div> I love cricket, trekking and hiking.</div>
                 <div>Eagerly waiting to join SMU in person classes.</div>
            </div>
        )
    }
}

/**
 * Topics you might also like:
 *      - Array.map() -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */

export default Provinces;