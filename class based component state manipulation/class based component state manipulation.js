import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons : [{name :'shreyash', age : 24 },
    {name :'shreya',age : 23},{name :'ajay', age : 24 }
  ] ,
  otherPerson : 'something other'
  }

  switchnameHandler = () => {
    //console.log('was clicked')
    this.setState({
      persons : [{name :'lalla', age : 24 },
      {name :'aisha',age : 23},{name :'vijay', age : 24 }
    ]
    })

  }

  
  render() {
    return (
     <div className="App">
       <h1>hi thats my first react app</h1>
       <p>this shit is really working</p>
       <Person name ={this.state.persons[0].name} age ={this.state.persons[0].age}/> 
       <button onClick = {this.switchnameHandler}>switch name </button>
       <Person name ={this.state.persons[1].name} age ={this.state.persons[1].age}>my hobby : chatting</Person> 
       <Person name ={this.state.persons[2].name} age ={this.state.persons[2].age} /> 
      </div>
      
    );
    //return React.createElement('div',{className:"App"},React.createElement('h1',null,'does this works'));
  }
}

export default App;
