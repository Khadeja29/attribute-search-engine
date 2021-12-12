import React, { Component } from "react";

class DatabaseSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
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

    var selection= this.state.selectedOption
    var opt= []
    opt.push(selection);
    const options = {
        method: "POST",
        body: JSON.stringify(opt),
        headers: {
          "Content-Type": "application/json"
      }
    }
   console.log(JSON.stringify(opt));
    fetch("http://localhost:3001/faces/api/v1", options)
        .then(res => res.json())
        .then(data => {
            this.props.pCallback(data);
            
        })
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div >
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
        <div >
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
      
        <button className="btn btn-default" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default DatabaseSelection ;

// 
/* <div>
Selected option is : {this.state.selectedOption}
</div> */