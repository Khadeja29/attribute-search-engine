import React from 'react';
import ImageCard from '../components/imageGrid/ImageCard';
import './checkBoxDisplay.css';

class CheckBoxDisplay extends React.Component {

    constructor(props){
      super(props);
      this.pageTitle = "Event handlers";
      this.state = {
      attributes:[]
      }
    }
      
      handleInputChange = event =>{
        console.log(event.target.value);
        const target = event.target;
        var value = target.value;
        if(target.checked){
           this.state.attributes.push(value);
        }
        else{
        this.state.attributes.splice(value, 1);
        }
        //console.log(this.state.attributes); 
        }
      

      submit = (event) => {
        console.log(`You have clicked the Submit Choices button`);
        console.log(this.state.attributes); 

        const options = {
          method: "POST",
          body: JSON.stringify(this.state.attributes),
          headers: {
              "Content-Type": "application/json"
          }
      }
      
      fetch("http://localhost:3001/faces/api/v1/search", options)
          .then(res => res.json())
          .then(data => {
            let results = data.map((img) =>{
              return (
                  <ImageCard key={img.image_id} image_id = {img.image_id}/>
              )
            })
            this.props.parentCallback(results);
            event.preventDefault();
          })

          
      }

    render(){

  return (
    
    <div >
      
            <table className="table table-style">
              <thead className="thead-dark">
                <tr>
                  <th  scope="col">#</th>
                  <th scope="col">Attribute</th>
                  <th scope="col">Yes</th>
                  <th scope="col">No</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>5o'ClockShadow</td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="5_o_Clock_Shadow=1"/>
                    </div>
                  </td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="5_o_Clock_Shadow=-1"/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>ArchedEyebrows</td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Arched_Eyebrows=1"/>
                    </div>
                  </td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Arched_Eyebrows=-1"/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Attractive</td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Attractive=1"/>
                    </div>
                  </td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Attractive=-1"/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>BagsUnderEyes</td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Bags_Under_Eyes=1"/>
                    </div>
                  </td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Bags_Under_Eyes=-1"/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Bald</td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Bald=1"/>
                    </div>
                  </td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Bald=-1"/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Bangs</td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Bangs=1"/>
                    </div>
                  </td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Bangs=-1"/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>BigLips</td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Big_Lips=1"/>
                    </div>
                  </td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Big_Lips=-1"/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td>BigNose</td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Big_Nose=1"/>
                    </div>
                  </td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Big_Nose=-1"/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td>BlackHair</td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Black_Hair=1"/>
                    </div>
                  </td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Black_Hair=-1"/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">10</th>
                  <td>BlondHair</td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Blond_Hair=1"/>
                    </div>
                  </td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Blond_Hair=-1"/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">11</th>
                  <td>Blurry</td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Blurry=1"/>
                    </div>
                  </td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Blurry=-1"/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">12</th>
                  <td>BrownHair</td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Brown_Hair=1"/>
                    </div>
                  </td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Brown_Hair=-1"/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">13</th>
                  <td>BushyEyebrows</td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Bushy_Eyebrows=1"/>
                    </div>
                  </td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Bushy_Eyebrows=-1"/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">14</th>
                  <td>Chubby</td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Chubby=1"/>
                    </div>
                  </td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Chubby=-1"/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">15</th>
                  <td>DoubleChin</td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Double_Chin=1"/>
                    </div>
                  </td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Double_Chin=-1"/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">16</th>
                  <td>Eyeglasses</td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Eyeglasses=1"/>
                    </div>
                  </td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Eyeglasses=-1"/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">17</th>
                  <td>Goatee</td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Goatee=1"/>
                    </div>
                  </td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Goatee=-1"/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">18</th>
                  <td>GrayHair</td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Gray_Hair=1"/>
                    </div>
                  </td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Gray_Hair=-1"/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">19</th>
                  <td>HeavyMakeup</td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Heavy_Makeup=1"/>
                    </div>
                  </td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Heavy_Makeup=-1"/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">20</th>
                  <td>HighCheekbones</td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="High_Cheekbones=1"/>
                    </div>
                  </td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="High_Cheekbones=-1"/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">21</th>
                  <td>Male</td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Male=1"/>
                    </div>
                  </td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Male=-1"/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">22</th>
                  <td>MouthSlightlyOpen</td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Mouth_Slightly_Open=1"/>
                    </div>
                  </td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Mouth_Slightly_Open=-1"/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">23</th>
                  <td>Mustache</td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Mustache=1"/>
                    </div>
                  </td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Mustache=-1"/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">24</th>
                  <td>NarrowEyes</td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Narrow_Eyes=1"/>
                    </div>
                  </td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Narrow_Eyes=-1"/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">25</th>
                  <td>NoBeard</td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="No_Beard=1"/>
                    </div>
                  </td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="No_Beard=-1"/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">26</th>
                  <td>OvalFace</td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Oval_Face=1"/>
                    </div>
                  </td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Oval_Face=-1"/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">27</th>
                  <td>PaleSkin</td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Pale_Skin=1"/>
                    </div>
                  </td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Pale_Skin=-1"/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">28</th>
                  <td>PointyNose</td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Pointy_Nose=1"/>
                    </div>
                  </td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Pointy_Nose=-1"/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">29</th>
                  <td>RecedingHairline</td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Receding_Hairline=1"/>
                    </div>
                  </td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Receding_Hairline=-1"/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">30</th>
                  <td>RosyCheeks</td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Rosy_Cheeks=1"/>
                    </div>
                  </td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Rosy_Cheeks=-1"/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">31</th>
                  <td>Sideburns</td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Sideburns=1"/>
                    </div>
                  </td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Sideburns=-1"/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">32</th>
                  <td>Smiling</td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Smiling=1"/>
                    </div>
                  </td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Smiling=-1"/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">33</th>
                  <td>StraightHair</td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Straight_Hair=1"/>
                    </div>
                  </td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Straight_Hair=-1"/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">34</th>
                  <td>WavyHair</td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Wavy_Hair=1"/>
                    </div>
                  </td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Wavy_Hair=-1"/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">35</th>
                  <td>WearingEarrings</td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Wearing_Earrings=1"/>
                    </div>
                  </td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Wearing_Earrings=-1"/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">36</th>
                  <td>WearingHat</td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Wearing_Hat=1"/>
                    </div>
                  </td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Wearing_Hat=-1"/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">37</th>
                  <td>WearingLipstick</td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Wearing_Lipstick=1"/>
                    </div>
                  </td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Wearing_Lipstick=-1"/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">38</th>
                  <td>WearingNecklace</td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Wearing_Necklace=1"/>
                    </div>
                  </td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Wearing_Necklace=-1"/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">39</th>
                  <td>WearingNecktie</td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Wearing_Necktie=1"/>
                    </div>
                  </td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Wearing_Necktie=-1"/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">40</th>
                  <td>Young</td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Young=1"/>
                    </div>
                  </td>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" name="attributes" onChange={this.handleInputChange} value="Young=-1"/>
                    </div>
                  </td>
                </tr> 
            </tbody>
          </table>
              <div className="d-grid gap-2">
                <button className="block" type="button" onClick={this.submit}>Submit Choices!</button>
                </div>
    </div>
  );
  }
}

export default CheckBoxDisplay;

        
        
        
        
        
        
        
        
        
        
        
        
        
       