import React, { Component } from "react";
import Button from "../Button/Button";

export default class Numbers extends Component {
    render() {
        const { numbers, deleteNumber } = this.props;

        return (
            <div>
                {" "}
                NUMBERS :
                {numbers.map((el, index) => {
                    return (
                        <div key={index}>
                            {el}
                            <Button title="X" handleClick={() => deleteNumber(el)} />
                        </div>
                    );
                })}
            </div>
        );
    }
}
