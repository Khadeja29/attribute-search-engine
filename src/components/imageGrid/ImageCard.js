import {React, useState} from "react"
import CloseIcon from '@material-ui/icons/Close';
import "./imageGrid.css"
import TextField from '@material-ui/core/TextField';

export default function ImageCard(props) {

    let results= []
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempimgSrc] = useState('');
    //const [imageAttributeList, setImageAttributeList] = useState(null);
    //const [imageAttributeList] = useState([]);
    const getImg = (image) =>{
        setTempimgSrc(image);
        
        fetch(`http://localhost:3001/faces/api/v1/search/${image}`)
            .then(res => res.json())
            .then(data => {
                console.log("att list");
                console.log(data);
                //setImageAttributeList(data);
                //console.log(imageAttributeList);
                // imageAttributeList = data;
                // console.log(imageAttributeList);
                 results = data
                 //console.log(results)
                setModel(true);
            })
        
    }
    
    return (
        <>
        <div className={model? "model open":"model"}>
            <img src={`../images/${tempimgSrc}`}/>
            <CloseIcon onClick={()=>setModel(false)}/>
            <div className="results">
            
            
            {console.log("Hello this is list")}
            {console.log(results)}
            
            <TextField

                               // value={this.state.title}

                                //onChange={this.handleChange}

                                defaultValue={results}

                                //onChange={(e) => { this.setState({ title: e.target.value }) }}

                                style={{ width: '100%' }}

                            />
            </div>
            
        </div>
        <div className="card" className="pics" key={props.image_id} onClick={()=>getImg(props.image_id)}>
            <img src={`../images/${props.image_id}`} className="card--image" />
        </div>
        </>
        
    )
}