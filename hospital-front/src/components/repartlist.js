import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRepartis } from '../actions/RepartiActions';
import { Plus } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Reparti from './Reparti/reparti';
function RepartiList() {
    const { qytetiId, spitaliId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
   
    useEffect(() => {
        dispatch(getRepartis(qytetiId, spitaliId));
    }, [dispatch, qytetiId, spitaliId]);

    const repartilist = useSelector((state) => state.repartiReducerContent.reparts);
    
    return (
        <div className="container">
             <div className="mb-6">
                  <Link
                    to={`/createRepartiForm/${qytetiId}/${spitaliId}`}
                    className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 absolute right-6 top-2 mt-4 mr-4"
                  >
                  <Plus className="w-5 h-5 mr-2" />
                  Krijo Repartin
                </Link>
              
       
        
                <button
                    onClick={() => navigate(`/spitaletlist/${qytetiId}`)}
                    className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-xl shadow hover:bg-red-700 right-6 top-2 mt-4 mr-4"
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Kthehu prapa
                </button>
         </div>
            
            {repartilist.map((reparti) => (
                <Reparti
                    key={reparti.id}
                    reparti={reparti}
                    qytetiId={qytetiId} // Pass qytetiId here
                    spitaliId={spitaliId} // Pass spitaliId here
                />
            ))}
        </div>
    );
}

export default RepartiList;