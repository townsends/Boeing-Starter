import React, {Component} from 'react';

class ModelSelect extends Component{

    render(){
        let arrayOfData = this.props.arrayOfData;
        let options = arrayOfData.map((data) =>
                <option 
                    key={data.id}
                    value={data.id}
                >
                    {data.id}
                </option>
            );
        
            return (
                <div>
                    <label htmlFor='model-select'>Model:</label>
                    <select name="model" className="model-select" onChange={(e) => this.props.onModelChange(e.target.value)}>
                        {options}
                    </select>
                </div>
            
        )
    }
}

export default ModelSelect;