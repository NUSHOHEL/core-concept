import React from 'react';
import './Home.css'
import NavBar from '../NavBar/NavBar'
import fakedata from '../../FakeData/FakeData';
import { Link } from 'react-router-dom';



const Home = () => {
   
    return (
        <div className='home'>
        <div className='container'>
            <NavBar />
            <div className='row row-cols-1 row-cols-md-4 g-4  mt-5'>
                {
                    fakedata.map(vehicle => <div className="col" key={vehicle.key}>
                        <Link to={`/destination/${vehicle.vehicleType}`}style={{ textDecoration: 'none' }}>
                        <div className="card h-100 text-center p-4">
                            <img src={vehicle.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-text">{vehicle.vehicleType}</h5>
                            </div>
                        </div>

                        </Link>
                       
                    </div>)
                }

            </div>
        </div>
        </div>

    );
};

export default Home;