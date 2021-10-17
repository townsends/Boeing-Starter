import React from 'react';
import ModelSelect from './ModelSelect.js';
import PDPTypeSelect from './PDPTypeSelect.js';

function TopBar(props) {

    return (
    <div>
        <ModelSelect arrayOfData={props.modelArray} onModelChange={props.handleModelChange} />
        <PDPTypeSelect arrayOfData={props.pdpTypeArray} onPDPChange={props.handlePDPChange} />
        <button type="button" onClick={props.clickSubmit}>Submit</button>
        <button type="button" onClick={props.clickHome}>Home</button>
    </div>
    );
}

export default TopBar;