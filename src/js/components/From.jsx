import React, {Component} from "react";
import ReactDOM from "react-dom";

class Form extends Component {
    constructor()
    {
        super();

        this.state = {
            details: {
                name: "",
                email: ""
            }
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.changeInput = this.changeInput.bind(this);
    }

    componentDidMount()
    {
        fetch(BASE_URL+"/show")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                },
                (error) => {
                   console.log(error)
                }
            )
    }

    onSubmit(event)
    {
        event.preventDefault();
    }

    changeInput(e, fieldName)
    {
        let details = this.state.details;
        let value = e.target.value;
        details[fieldName] = value;
        this.setState({details})
    }

    render()
    {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>Name:</label>
                    <input type="text" onChange={(e) => this.changeInput(e, "name")} value={this.state.details.name}/>
                    <label>Email:</label>
                    <input type="email" onChange={(e) => this.changeInput(e, "email")} value={this.state.details.email}/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default Form;

