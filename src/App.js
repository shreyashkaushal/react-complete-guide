import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id:1, name: 'Shreyash', age: 25 },
      { id:2,name: 'Ajay', age: 29 },
      { id:3,name: 'Rohit', age: 26 }, 
      {id:4,name:'bhavesh' , age : 29}
    ],
    otherState: 'some other value'
    , showPerson : false
  };

  /*switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 24 },
        { name: 'kannu', age: 24 },
        { name: 'ranu', age: 24 },
       
      ]
    });
  };*/
  deletePersonHandler=(personIndex)=>{
    //const persons = this.state.persons; this is bad practice as it changes the original state person property
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }

  nameChangeHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id ===id;
    })
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons =[...this.state.persons];
    persons[personIndex]=person; 
    
    this.setState({persons:persons });
  }

toggleName = () =>{
  const doesName = this.state.showPerson;
  this.setState({showPerson:!doesName});

}
  render() {
    const design = {
      backgroundColor : 'yellow',
      font : 'inherit',
      padding : '8px',
      cursor : 'pointer',
      border : '1px solid blue'
    }
    let name = null;
    if(this.state.showPerson)
    {
      name= (<div>
      {this.state.persons.map((person,index)=>{
        return <Person
        click = {()=>this.deletePersonHandler(index)} 
        name={person.name}
        age={person.age}
        key = {person.id}
        changed={(event)=>this.nameChangeHandler(event,person.id)}
        />
      })}
        
        </div>);

    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
        style = {design}
        onClick= {this.toggleName}>toggle person</button>  
       
       {name}   
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
