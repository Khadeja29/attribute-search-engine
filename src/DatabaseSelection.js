import React, { Component } from "react";

class DatabaseSelection extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption);
    const options = {
        method: "POST",
        body: JSON.stringify(this.state.selectedOption),
        
    }
  
    fetch("http://localhost:3001/faces/api/v1", options)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
  
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div className="radio">
          <label>
            <input
              type="radio"
              value= "CelebA"
              checked={this.state.selectedOption === "CelebA"}
              onChange={this.onValueChange}
            />
            CelebA
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value= 'LFWA'
              checked={this.state.selectedOption === 'LFWA'}
              onChange={this.onValueChange}
            />
            LFWA
          </label>
        </div>
       
        <div>
          Selected option is : {this.state.selectedOption}
        </div>
        <button className="btn btn-default" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default DatabaseSelection ;

