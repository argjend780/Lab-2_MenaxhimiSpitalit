import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMjektets } from '../actions/MjekteAction';
import Mjekt from './Mjekete/mjket';

function MjketList() {
    const { qytetiId, spitaliId, repartiId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMjektets(qytetiId, spitaliId, repartiId));
    }, [dispatch, qytetiId, spitaliId, repartiId]);

    const mjketlist = useSelector((state) => state.mjeketReducerContetnt.mjekets);

    return (
        <div className="container mx-auto p-4">
            <div className="mb-4">
                <Link to={`/addMjeket/${qytetiId}/${spitaliId}/${repartiId}`} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                    Shto Mjek
                </Link>
            </div>
            <div className="flex flex-wrap gap-4">
                {mjketlist.map((mjeket) => (
                    <Mjekt
                        key={mjeket.id}
                        mjeket={mjeket}
                        qytetiId={qytetiId}
                        spitaliId={spitaliId}
                        repartiId={repartiId}
                    />
                ))}
            </div>
        </div>
    );
}

export default MjketList;
