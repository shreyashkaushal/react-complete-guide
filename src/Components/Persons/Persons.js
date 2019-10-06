import React,{Component} from 'react';
import Person from './Person/Person';

class Persons extends Component
 
{
  /*static getDerivedStateFromProps(props,state)
  {
    console.log('[persons.js] getderivedstatefromprops');
    return state;
  }*/
  shouldComponentUpdate(nextProps,nextState)
  {
    console.log('[persons.js] shouldcomponentupdate')
    return true;
  }
  getSnapshotBeforeUpdate(prevState,prevProps)
  {
    console.log('[persons.js] getsnapshotbeforeupdate')
    return {message:'snapshot!!'}
  }
  componentDidUpdate(prevProps,prevState,snapshot)
 {
    console.log('[persons.js] component did update')
    console.log(snapshot)
  }
 render(){
  console.log('[persons.js] rendering...')  
  return this.props.persons.map((person,index)=>{
      
  return ( <Person
  click = {()=>this.props.clicked(index)} 
  name={person.name}
  age={person.age}
  key = {person.id}
  changed={(event)=>this.props.changed(event,person.id)}
  />)
});
 } 
  }
    
  export default Persons; 