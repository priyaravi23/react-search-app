import React, {Component} from 'react';
import mockDataService from './components/mock-data-service';

class App extends Component {
    state = {
        // contains the json
        states: [],
        filteredStates: [],
        // What the user has entered
        userInput: ""
    };

    constructor(props) {
        super(props);
        this.mockDataService = new mockDataService();
    }

    componentDidMount() {
        this.getItems();
    }

    render() {
        return (
            <div>
                <p>
                    <input type="text"
                           id="filter"
                           placeholder="Search for..."
                           onChange={this.handleChange}
                    />
                </p>

                <ul>
                    {this.state.filteredStates.map(item => (
                        <li key={item.name}
                            value={item.name}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }


    getItems() {
        this.mockDataService.retrieveItems().then(states => {
                this.setState({
                    states: states,
                    filteredStates: [...states]}
                );
            }
        );
    }

    // Event fired when the input value is changed
    handleChange = (e) => {
        const userInput = e.target.value;
        const re = new RegExp(userInput, 'i');
        // Filter our suggestions that don't contain the user's input
        const filteredStates = this.state.states.filter((item, index) => {
            return re.test(item.name);
        });

        this.setState({
            filteredStates,
            userInput: e.target.value
        });
    };
}

export default App;
