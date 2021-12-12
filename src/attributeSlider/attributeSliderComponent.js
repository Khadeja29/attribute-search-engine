import React from "react";
import "./attributeSlider.css"
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
class CheckboxComponent extends React.Component {

  render() {
    const checkboxList = this.props.checkboxList;
    return (
      <>
        
        {checkboxList.map((option) => (
        <div className = "checkbox " key={option.id}>
      
        <table className="table table-style ">

          <tbody>

            <tr >

              <td htmlFor={option.id}>{option.name}</td>

              <td>
                <div>
                        <RangeSlider
                        className="slider" 
                        min={option.min}
                        max={option.max}
                        step= {option.step}
                        tooltipPlacement = "bottom"
                        value={option.value}
                        onChange={(e) => this.props.onChange(e,option)}
                        
                       
                        />
                </div>
              </td>
              </tr>

      </tbody>

      </table>

</div>
          
        ))}
      </>
    );
  }
}
export default CheckboxComponent;