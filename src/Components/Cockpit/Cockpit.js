import React from 'react';
import classes from './cockpit.css';
const cockpit = (props)=>{
    const assignClasses = [];
    let btnClass ='';
    if(props.showPerson){
        btnClass=classes.Red;

    }
    
   
    if(props.persons.length<=2)
    {
      assignClasses.push(classes.red);  //classes = ['red']

    }
    if(props.persons.length<=1)
    {
      assignClasses.push(classes.bold); //classes = ['red','bold']

    }

    return(
    <div className={classes.Cockpit}>
    <h1>Hi, I'm a React App</h1>
    <p className={assignClasses.join(' ')}>This is really working!</p>
    <button className={btnClass}  
    
    onClick= {props.clicked}>toggle person</button>
    </div>
      
) ;
}
export default cockpit;