import React from 'react';
import Person from './Person';
function NameList(){
    const details = [
        {
         id:101,
         nam:'Aiswarya',
         age:20, 
         height:5.2,
         weight:48
        },
        {
           id:102,
           nam:'Pravalllika',
           age:20,
           height:5.1,
           weight:54
        },
        {
            id:103,
            nam:'Arshii',
            age:20,
            height:5.2,
            weight:55
        }
    ]
    const persons = details.map(person =>
        <Person key={person.id} person={person}/>
        )
    return <div>{persons}</div>

}
export default NameList;