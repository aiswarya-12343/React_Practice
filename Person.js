import React from 'react';
function Person({person}){
    return (
        <div>
            <h2>Iam {person.nam} my age is {person.age} Iam {person.weight}kgs of weight</h2>

        </div>
    )
}
export default Person;