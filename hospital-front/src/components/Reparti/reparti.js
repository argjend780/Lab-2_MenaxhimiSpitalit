import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteReparti } from '../../actions/RepartiActions';

function Reparti({ reparti, qytetiId, spitaliId }) { // Destructure props here
    const dispatch = useDispatch();

    const onDeleteTaskClick = (qytetiId, spitaliId, repartiId) => {
        console.log('qytetiId:', qytetiId); // Debug: Log the qytetiId
        console.log('spitaliId:', spitaliId); // Debug: Log the spitaliId
        console.log('repartiId:', repartiId); // Debug: Log the repartiId
        dispatch(deleteReparti(qytetiId, spitaliId, repartiId));
        window.location.reload();
    };

    return (
       /* <div className='container d-flex flex-row'>
            <div className='card card-body'>
                <div className='row'>
                    <div className='col-md-9'>
                        <div className='container'>
                            <h2>{reparti.name}</h2>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <ul className='list-group d-flex flex-column'>
                        <Link to={`/pacinetList/${qytetiId}/${spitaliId}/${reparti.id}`} className='list-group-item'>
                                Pacinetet
                            </Link>
                            <Link to={`/infermiertList/${qytetiId}/${spitaliId}/${reparti.id}`} className='list-group-item'>
                                Infermiert
                            </Link>

                            <Link to={`/mjeketList/${qytetiId}/${spitaliId}/${reparti.id}`} className='list-group-item'>
                                Mjeket board
                            </Link>
                            <Link to={`/updateRepartiform/${qytetiId}/${spitaliId}/${reparti.id}`} className='list-group-item'>
                                Update board
                            </Link>
                            <button
                                onClick={() => onDeleteTaskClick(qytetiId, spitaliId, reparti.id)}
                                className='list-group-item list-group-item-action'
                            >
                                Delete board
                            </button>
                        </ul>
                    </div>
                </div>
            </div>
        </div>*/

  <div className="max-w-4xl mx-auto p-4">
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6">
        {/* Info e repartit */}
        <div>
          <h2 className="text-2xl font-bold text-green-700 mb-1">{reparti.name}</h2>
          <p className="text-sm text-gray-500">Reparti në Spitalin Nr. {spitaliId}, Qyteti {qytetiId}</p>
        </div>

        {/* Butonat / lidhjet */}
        <div className="mt-4 md:mt-0 flex flex-col md:flex-row gap-3">
          <Link
            to={`/pacinetList/${qytetiId}/${spitaliId}/${reparti.id}`}
            className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg hover:bg-blue-200 transition"
          >
            Pacientët
          </Link>
          <Link
            to={`/infermiertList/${qytetiId}/${spitaliId}/${reparti.id}`}
            className="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg hover:bg-purple-200 transition"
          >
            Infermierët
          </Link>
          <Link
            to={`/mjeketList/${qytetiId}/${spitaliId}/${reparti.id}`}
            className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-lg hover:bg-emerald-200 transition"
          >
            Mjekët
          </Link>
          <Link
            to={`/updateRepartiform/${qytetiId}/${spitaliId}/${reparti.id}`}
            className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg hover:bg-yellow-200 transition"
          >
            Përditëso
          </Link>
          <button
            onClick={() => onDeleteTaskClick(qytetiId, spitaliId, reparti.id)}
            className="bg-red-100 text-red-800 px-4 py-2 rounded-lg hover:bg-red-200 transition"
          >
            Fshij
          </button>
        </div>
      </div>
    </div>
  </div>


    );
}

export default Reparti;
/*import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { deleteReparti } from '../../actions/RepartiActions';
function Reparti(props) {
    const dispatch = useDispatch();
    const {reparti} = props;
    const qytetiId = props.qytetiId;
    const spitaliId = props.spitaliId;
   

    const onDeleteTaskClik = (qytetiId,spitaliId,repartiId) =>{
        dispatch(deleteReparti(qytetiId,spitaliId,repartiId));
        console.log('qytetId:', qytetiId);  // Debug: Log the qytetId
        console.log('spitaliId:', spitaliId);  // Debug: Log the spitaliId
        console.log('repartiId:', repartiId);  // Debug: Log the repartiId
       // window.location.reload();
    }

    return (
        <div className='container d-flex flex-row'>
            <div className='card card-body'>
                <div className='row'>
                    <div className='col-md-9'>
                        <div className='container'>
                            <h2>{reparti.name}</h2>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <ul className='list-group d-flex flex-column'>
                            <Link to={`/employeeList/${reparti.id}`} className='list-group-item'>
                                Qyteti board
                            </Link>
                            <Link to={`/updateQytetiform/${reparti.id}`} className='list-group-item'>
                                Update board
                            </Link>
                            <button
                                onClick={() => onDeleteTaskClik(qytetiId, spitaliId, reparti.id)}
                                className='list-group-item list-group-item-action'
                            >
                                Delete board
                            </button>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reparti;*/
