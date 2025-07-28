import React from "react";
class CountPeople extends React.Component {
    constructor() {
        super();
        this.state = {
            entryCount: 0,
            exitCount: 0,
        };
        this.updateEntry = this.updateEntry.bind(this);
        this.updateExit = this.updateExit.bind(this);
    }

    updateEntry() {
        this.setState((prevState, props) => {
            return { entryCount: prevState.entryCount + 1 }
        });
    }
    updateExit() {
        this.setState((prevState, props) => {
            return { exitCount: prevState.exitCount + 1 }
        });
    }

    render() {
        return (
            <div className="container">

                <div className="entry-section">
                    <button onClick={this.updateEntry}>Login</button>
                    <span>{this.state.entryCount} People Entered!!!</span>
                </div>

                <div className="exit-section">
                    <button onClick={this.updateExit}>Exit</button>
                    <span>{this.state.exitCount} People Left!!!</span>
                </div>

            </div>
        );
    }
}
export default CountPeople;