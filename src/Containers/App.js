import React, { Component } from 'react';
import classes from'./App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import WithClass from '../HOC/WithClass';
//import Radium,{StyleRoot} from 'radium';
//import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class App extends Component {
  constructor(props)
  {
    super(props);
    console.log( '[App.js] constructor')

  }
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
 static getDerivedStateFromProps(props,state)
 {
  console.log('[App.js] getDerivedStaeFromProps',props) 
  return state;
 }

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
  componentDidMount()
  {
    console.log('[App.js] componentDidMount');
  }
  componentDidUpdate(prevProps,prevState,snapshot)
 {
    console.log('[App.js] component did update')
    
  }
  shouldComponentUpdate(nextProps,nextState)
  {
    console.log('[App.js] shouldcomponentupdate')
    return true;
  }

toggleName = () =>{
  const doesName = this.state.showPerson;
  this.setState({showPerson:!doesName});

}
  render() {
    console.log('[App.js] render')
    
    let persons = null;
    
    if(this.state.showPerson)
    {
      persons= <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed = {this.nameChangeHandler}
      />
      
      
        

    }
   // let classes = ['red','bold'].join(' ');
   
    return (
      <WithClass classes={classes.App}>
        <Cockpit showPerson={this.state.showPerson}
        persons={this.state.persons}
        clicked = {this.toggleName}
         />   
     {persons}   
    </WithClass>
    
      
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
