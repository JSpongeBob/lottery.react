import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button/Button";
import { Component } from "react";
import Numbers from "./components/Numbers/Numbers";

const LIMIT = 36;

class App extends Component {
    state = {
        numbers: [],
    };

    generateNumber = () => {
        const { numbers } = this.state;
        let randomNumber;
        do {
            randomNumber = Math.round(Math.random() * LIMIT);
        } while (numbers.includes(randomNumber));

        this.setState({ numbers: [...numbers, randomNumber] });
    };

    deleteNumber = (element) => {
        const { numbers } = this.state;
        const newArrray = numbers.filter((el) => el !== element);
        this.setState({ numbers: newArrray });
    };

    render() {
        const { numbers } = this.state;
        return (
            <div className="App">
                <Button disabled={numbers.length === LIMIT + 1} title="Generate" handleClick={this.generateNumber} />
                <Numbers numbers={numbers} deleteNumber={this.deleteNumber} />
            </div>
        );
    }
}

export default App;
