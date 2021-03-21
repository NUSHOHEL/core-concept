import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import map from '../../images/Map.png'
import './Destination.css'
import { useParams } from 'react-router';
import fakeVehicle from '../../FakeData/FakeVehicle';
import './Destination.css'


const Destination = () => {
    const { vehicleType } = useParams();
    const [destination, setDestination] = useState({
        pick: '',
        to: ''
    });
    const vehicle = fakeVehicle.filter(vehile => vehile.vehicleType === vehicleType);
    const handleBlur = (e) => {
        let isFormFilled = true;
        if (e.target.id === 'pick') {
            isFormFilled = /[a-zA-Z]{2,}/.test('e.target.value');
        }
        if (e.target.id === 'to') {
            isFormFilled = /[a-zA-Z]{2,}/.test('e.target.value');
        }
        if (isFormFilled) {
            const searchResult = { ...destination };
            searchResult[e.target.id] = e.target.value;
            setDestination(searchResult);
        }
    }
    const [submit, setSubmit] = useState(false);


  

    return (
        <div className='container'>
            <NavBar />
            <div className='row'>
                <div className='text-center mt-5 col-md-4 col-sm-6 p-2  h-100 '>
                    <div style={{ display: submit ? 'none' : 'block' }} className='border p-2 mt-5 bg-secondary rounded-3' >
                        <label htmlFor="pick"> Pick From</label>
                        <input onBlur={handleBlur} className="form-control" type="text" id='pick' />
                        <label htmlFor="to">Pick to</label>
                        <input onBlur={handleBlur} className="form-control" type="text" id='to' /><br />
                        <button onClick={() => setSubmit(!submit)} type="button" className="form-control btn btn-danger" value="Search">Search</button>
                    </div>
                    <div style={{ display: submit ? 'block' : 'none' }} className='search-result bg-dark p-2 rounded-3 mt-5'>
                        <div className='rounded-3 p-2 m-2 bg-primary text-light'  >
                            <h3>{destination.pick}</h3>
                            <br />
                            <h3>{destination.to}</h3>
                        </div>
                        {
                            vehicle.map(v => <div className="card p-2  m-2" key={v.key}>
                                <div className='d-flex justify-content-evenly align-items-center'>
                                    <img style={{ border: '1px solid red' }} src={v.image} alt="" />
                                    <p>{v.vehicleType}</p>


                                    <p style={{ border: '1px solid red' }}>type:{v.vehicleType} </p>
                                </div>

                            </div>)
                        }
                    </div>

                </div>

                <div className='col-md-8 col-sm-6 mt-5 p-5'>
                    <img style={{ height: '80%' }} src={map} alt="" />

                </div>
            </div>
        </div>
    );
};

export default Destination;