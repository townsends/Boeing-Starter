import React, {Component} from 'react';

class PDPTypeSelect extends Component{

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
                    <label htmlFor='pdpType-select'>PDP Type:</label>
                    <select name="pdpType" className="pdpType-select" onChange={(e) => this.props.onPDPChange(e.target.value)}>
                        {options}
                    </select>
                </div>
            
        )
    }
}

export default PDPTypeSelect;