import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//import useAuthentication from '../actions/auth';
import { getPacinets } from '../actions/PacinetActions';
import Pacient from './Pacient/pacinet';
import { Plus } from 'lucide-react';


function PacinetList() {
    const { qytetiId ,spitaliId,repartiId} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPacinets(qytetiId ,spitaliId,repartiId));
    }, [dispatch,qytetiId ,spitaliId,repartiId]);

    const pacinetlist = useSelector((state) => state.pacinetReducerContent.pacinets);
    /*const isAuthenticated = useAuthentication();  
    if (isAuthenticated === null) {
        return <p>Loading...</p>;
      }
    
  
      
    if (!Array.isArray(pacinetlist)) {
        return <div>No data available</div>;
    }
    */
    return (
        <div className="container">
            <div className="mb-6">
                  <Link
                    to={`/addPacinet/${qytetiId}/${spitaliId}/${repartiId}`}
                    className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 absolute right-6 top-2 mt-4 mr-4"
                  >
                  <Plus className="w-5 h-5 mr-2" />
                  Krijo Pacient
                </Link>
            </div>
            {pacinetlist.map((pacient) => (
                <Pacient
                    key={pacient.id}
                    pacient={pacient}
                     qytetiId={qytetiId} // Pass qytetiId here
                    spitaliId={spitaliId} 
                    repartiId={repartiId}// Pass spitaliId here
                />
            ))}
        </div>
    );
}

export default PacinetList;