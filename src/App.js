import React, {Component} from 'react';
import TopBar from './components/TopBar.js';
import TitleBar from './components/TitleBar.js';
import PLDTable from './components/PLDTable.js';

class App extends Component{

  constructor(props) {
      super(props);
      this.state = {visable: true};

    this.table = [
        {
            PldID: 'Data1',
            Model: 'Data',
            Rev: 'Data',
            Figure_Number: 'Data',
            Rel: 'Data',
            Approved_Date: 'Data',
            Figure_Type: 'Data',
            Illustrator: 'Data',
            Data_Author: 'Data',
            Data_Checker: 'Data',
            PLD_Approver: 'Data',
            Due_Date: 'Data',
            Status: 'Data',
            PLD_Number: 'Data'
        },
        {
            PldID: 'Data2',
            Model: 'Data',
            Rev: 'Data',
            Figure_Number: 'Data',
            Rel: 'Data',
            Approved_Date: 'Data',
            Figure_Type: 'Data',
            Illustrator: 'Data',
            Data_Author: 'Data',
            Data_Checker: 'Data',
            PLD_Approver: 'Data',
            Due_Date: 'Data',
            Status: 'Data',
            PLD_Number: 'Data'
        },
        {
            PldID: 'Data3',
            Model: 'Data',
            Rev: 'Data',
            Figure_Number: 'Data',
            Rel: 'Data',
            Approved_Date: 'Data',
            Figure_Type: 'Data',
            Illustrator: 'Data',
            Data_Author: 'Data',
            Data_Checker: 'Data',
            PLD_Approver: 'Data',
            Due_Date: 'Data',
            Status: 'Data',
            PLD_Number: 'Data'
        },
        {
            PldID: 'Data4',
            Model: 'Data',
            Rev: 'Data',
            Figure_Number: 'Data',
            Rel: 'Data',
            Approved_Date: 'Data',
            Figure_Type: 'Data',
            Illustrator: 'Data',
            Data_Author: 'Data',
            Data_Checker: 'Data',
            PLD_Approver: 'Data',
            Due_Date: 'Data',
            Status: 'Data',
            PLD_Number: 'Data'
        }
      ];

      this.modelArray = [
        {
          id: 'Gamma'
        },
        {
          id: 'Beta' 
        },
        {
          id: 'Alpha'  
        },
        {
          id: 'Omega'  
        }
      ];

      this.pdpTypeArray = [
        {
          id: '1464'
        },
        {
          id: '7425' 
        },
        {
          id: '6227'  
        },
        {
          id: '2562'  
        },
        {
          id: '21525'  
        },
        {
          id: '345'  
        }
      ];

      this.user = "Jim Sterling(1432)";

      this.SubmitClick = this.SubmitClick.bind(this);
      this.HomeClick = this.HomeClick.bind(this);
    }

    SubmitClick() {
      if (this.state.visable) {
        this.setState({
          visable : !this.state.visable
        })
      }
    }
    
    HomeClick() {
      if (!this.state.visable) {
        this.setState({
          visable : !this.state.visable
        })
      }
    }

    render(){

    return (
        <div>
            <TitleBar user={this.user}  />
            <TopBar modelArray={this.modelArray} pdpTypeArray={this.pdpTypeArray} handleModelChange={onModelChange} handlePDPChange={onPDPChange} clickSubmit={this.SubmitClick} clickHome={this.HomeClick}/>
            {this.state.visable && <PLDTable table={this.table} /> }
        </div>
    );

    }
}

function onModelChange(value) {
  console.log(value);
  return value;
}

function onPDPChange(value) {
  console.log(value);
  return value;
}





export default App;