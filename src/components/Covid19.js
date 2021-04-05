import React, { Component } from "react"

class Covid19 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sunny: './sunny.png',
            cold: './cold.png',
            mild: './mild.png',
            tempC: 0,
            tempF: 0,
        }
        this.fetchData = this.fetchData.bind(this);
        //this.fetchData();
    }

    fetchData() {
        fetch("http://api.weatherstack.com/current?access_key=c438eeac9740584c2e7afb60294cb814&query=Rajkot")
            .then(response => {
                return response.json()
            })
            .then(response => {
                this.cityTempC = response.current.temperature;
                this.cityTempF = response.current.temperature;
                this.setState({ tempC: this.cityTempC })
                this.setState({ tempF: this.cityTempF })
            });
    }

    changeToF() {
        this.cityTempC = (this.cityTempC * 9 / 5) + 32;
        this.setState({ tempF: this.cityTempC })
        this.cityTempC = this.cityTempF;
        this.setState({ isShowCapital: !this.state.isShowCapital })
    }

    componentDidMount() {
        this.fetchData()
    }

    render() {
        return (
            <div className="data">
                <img alt="My Pic" width={200} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvf_KgIXyqt7BCjqjwhXLWSo5OkL2e5WFXS4McWMLt-7wSqKv2xTDB6gkU5wBHSFYoqgA&usqp=CAU" />
                <div className="name-text">I live in Rajkot, India </div>
                <div className="info-text">Rajkot is a city in the western Indian state of Gujarat.</div>
                <div>
                    <img alt="Weather" width={100} src={this.cityTempC < 11 ? this.state.cold : this.cityTempC < 21 ? this.state.mild : this.state.sunny} />
                    <span className="name-text">{!this.state.isShowCapital ? this.state.tempC : this.state.tempF } </span>
                    <button
                        onClick={() => this.changeToF()}
                        className={this.state.isShowCapital ? "btn-capital-hide" : "btn-capital-show"}>
                        {this.state.isShowCapital ? "Change to 'C" : "Change to 'F"}
                    </button>
                </div>
            </div>
        )
    }
}

export default Covid19;

/**
 * Topics you might also like:
 *      - JS Promises -> https://www.w3schools.com/js/js_promise.asp
 *      - Components Lifecycle -> https://reactjs.org/docs/react-component.html#the-component-lifecycle
 */