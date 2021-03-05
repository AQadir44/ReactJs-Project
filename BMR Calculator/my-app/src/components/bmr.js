import React , {Component } from 'react';
import './bmr.css';

class Bmr extends Component{

    constructor(){
        super();
        this.state = {
            gender : '',
            age : '',
            weight : '',
            heightFeet : '',
            heightInches : '',
            bmr : '',
            activity : '',
            error : ''

        }
    }
    
    handleAgeChange = (event) => {
        this.setState({age : event.target.value})
    }
    handlegenderChange = (event) => {
        this.setState({gender : event.target.value})
    }
    handleweightChange = (event) => {
        this.setState({weight : event.target.value})
    }
    handleheightFeetChange = (event) => {
        this.setState({heightFeet : event.target.value})
    }
    handleheightInchesChange = (event) => {
        this.setState({heightInches : event.target.value})
    }
    
    
    calculateBMR(){
        let age = this.state.age;
        let weight = this.state.weight;
        let gender = this.state.gender;
        let heightInches = this.state.heightInches;
        let heightFeet = this.state.heightFeet;
        

        if(age === '' || weight === '' || gender === '' || heightFeet === '' || heightInches === ''  ){
            this.setState({error : 'Incomplete INfo'})
        }


        let bmrCalc = '';
        let height = ((heightFeet * 30.48) + (heightInches * 2.54))
       
        if(gender === 2){
            bmrCalc = 66 + (6.2 * weight) + (12.7 * height) - (6.76 * age);
        } else if(gender === 1){
            bmrCalc = 655.1 + (4.35 * weight) + (4.7 * height) - (4.7 * age );
        }
    

        this.setState({bmr : bmrCalc});

        this.setState({error : ''});
    }


    



    render(){

        let error;
        if(this.state.error){
            error = <div className="error">{this.state.error}</div>
        }

        let reultBMR;
        if(this.state.bmr){
            reultBMR = <div className="result">{this.state.bmr}</div>
        }



        return(
            <div id="bmrcalc">
                <div className="form">
                    <h2>BMR &amp; Daily Calorie Calculator</h2>
                    {error}
                    <div className="inputwrap">
                        <label  className="label">Gender</label>
                        <label><input type="radio" checked={this.state.gender === '1'} onChange={this.handlegenderChange} className="genderF" name="gender" value="1" />Female</label>
                        <label><input type="radio" checked={this.state.gender === '2'} onChange={this.handlegenderChange} className="genderM" name="gender" value="2" />Male</label>
                    </div>
                    <div className="inputwrap">
                        <label  className="label">Weight in Pounds</label>
                        <input type="number" name="weight" value={this.state.weight} onChange={this.handleweightChange} className="weight" min="0" max="999" />
                    </div>
                    <div className="inputwrap">
                        <label className="label">Height in feet and inches</label>
                        <input type="number" name="heightFeet" value={this.state.heightFeet} onChange={this.handleheightFeetChange}  className="heightFeet" min="0" max="8" />
                        <input type="number" name="heightInches" value={this.state.heightInches} onChange={this.handleheightInchesChange}  className="heightInches" min="0" max="100" />
                        
                    </div>
                    <div className="inputwrap">
                        <label className="label">Age in years</label>
                        <input type="number" value={this.state.age} onChange={this.handleAgeChange}  className="age" name="age" min="0" max="120" />
                    </div>
                    <button type="button" onClick={() => this.calculateBMR()}> Calculate BMR</button>
                    {reultBMR}
                </div>
            </div>
        )
    }

}
export default Bmr;