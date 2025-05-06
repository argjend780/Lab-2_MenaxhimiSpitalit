
import React, { useEffect, useState } from 'react';

import { MapPin, Plus } from 'lucide-react';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteQyteti } from '../../actions/QyteteAction';


function Qyteti(props) {
    const { qytet } = props;
    const dispatch = useDispatch();
   // const [isAuthenticated, setIsAuthenticated] = useState(null);

    const onDelete = (id) => {
        dispatch(deleteQyteti(id));
        window.location.reload(); 
    };

   /* useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        if (!token) {
            setIsAuthenticated(false);
        } else {
            dispatch(verifikimi(token)).then(response => {
                setIsAuthenticated(response.status);
            });
        }
    }, [dispatch]);*/

    
    <div className="w-full flex justify-center mt-6 mb-4">
    <Link
      to="/shtoqytet"
      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
    >
      <Plus className="w-5 h-5 mr-2" />
      Krijo Qytet
    </Link>
  </div>

    return (
       
       /* <div className='container d-flex flex-row'>
            <div className='card card-body'>
                <div className='row'>
                    <div className='col-md-9'>
                        <div className='container'>
                            <h1>{qytet.id}</h1>
                            <h2>{qytet.emri}</h2>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <ul className='list-group d-flex flex-column'> 
                            
                        </ul>
                    </div>
                </div>
            </div>

        </div>*/


        <div className="bg-green-100 rounded-xl shadow-md p-4 flex items-center justify-between w-full max-w-sm m-2">
            <div className="flex items-center space-x-4">
                <div className="bg-green-200 text-green-800 p-3 rounded-full">
                    <MapPin className="w-6 h-6" />
                </div>
                <div>
                    <h2 className="text-xl font-bold">{qytet.emri}</h2>
                    <p className="text-sm text-gray-600">ID: {qytet.id}</p>
                </div>
                
            </div>

            {/* Shtimi i linkut për spitalet dhe per delete uptade */}
            <div className="mt-4">
                <h3 className="text-lg font-semibold">Shiko Spitale:</h3>
                <ul className="mt-2 space-y-2">
                    <li>
                        <Link
                            to={`/qytet/${qytet.id}/spitale`} // Linku për spitale
                            className="text-blue-500 hover:underline"
                        >
                            Spitale në {qytet.emri}
                        </Link>
                    </li>
                    <li>
                    <button 
                    onClick={() => onDelete(qytet.id)} 
                    className="bg-red-500 hover:bg-red-700 text-white font-semibold py-0.5 px-1 rounded"
                    >
                    Delete board
                    </button>
                    </li>
                    <li>
                    
                    <Link 
                    to={`/uptadeQytetiform/${qytet.id}`} 
                    className="bg-green-500 hover:bg-green-700 text-white font-semibold py-0.5 px-1 rounded inline-block"
                    >
                    Update board
                    </Link>
                    
                    </li>
                </ul>
            </div>
            
        </div>

    );
}

export default Qyteti;


/*import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteQyteti } from '../../actions/QyteteAction';
import axios from 'axios';

function Qyteti(props) {
    const { qytet } = props;
    const dispatch = useDispatch();
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    const onDelete = (id) => {
        dispatch(deleteQyteti(id));
        window.location.reload(); 
    };

    const verifyToken = async (token) => {
        try {
            const response = await axios.post(
                'http://localhost:8083/auth/verifyToken',
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            return response.data;
        } catch (error) {
            console.error('Token verification failed:', error);
            return false;
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        if (!token) {
            setIsAuthenticated(false);
        } else {
            verifyToken(token).then(isValid => {
                setIsAuthenticated(isValid);
            });
        }
    }, []);

    if (isAuthenticated === null) {
        return <p>Loading...</p>;
    }

    if (isAuthenticated === false) {
        return <p>Unauthorized. Please <Link to="/signin">sign in</Link>.</p>;
    }

    return (
        <div className='container d-flex flex-row'>
            <div className='card card-body'>
                <div className='row'>
                    <div className='col-md-9'>
                        <div className='container'>
                            <h1>{qytet.id}</h1>
                            <h2>{qytet.emri}</h2>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <ul className='list-group d-flex flex-column'> 
                            <Link to={`/employeeList/${qytet.id}`} className='list-group-item'>Spitalet board</Link>
                            <Link to={`/updateQytetiform/${qytet.id}`} className='list-group-item'>Update board</Link>
                            <Link to='' onClick={() => onDelete(qytet.id)} className='list-group-item'>Delete board</Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Qyteti;*//*import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteQyteti } from '../../actions/QyteteAction';

function Qyteti(props) {
    const { qytet } = props;
    const dispatch = useDispatch();

    const onDelete = (id) => {
        dispatch(deleteQyteti(id));
        window.location.reload(); 
    }

    return (
        <div className='container d-flex flex-row'>
            <div className='card card-body'>
                <div className='row'>
                    <div className='col-md-9'>
                        <div className='container'>
                            <h1>{qytet.id}</h1>
                            <h2>{qytet.emri}</h2>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <ul className='list-group d-flex flex-column'> 
                            <Link to={`/employeeList/${qytet.id}`} className='list-group-item'>Spitalet board</Link>
                            <Link to={`/uptadeQytetiform/${qytet.id}`} className='list-group-item'>Update board</Link>
                            <Link to='' onClick={() => onDelete(qytet.id)} className='list-group-item'>Delete board</Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Qyteti;*/
