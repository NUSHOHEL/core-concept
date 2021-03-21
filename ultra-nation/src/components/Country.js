import React from 'react';

const Country = (props) => {
    const {name, population, region, flag}=props.country;
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style={{border:"5px solid red", margin:'5px'}}>
            <h4>This is a {name}</h4>
            <img style={{height:"50px"}} src={flag} alt=""/>
            <h4>Region: {region}</h4>
            <h4>Population: {population}</h4>
            <button onClick={()=>handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;