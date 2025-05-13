import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createRepart } from '../../actions/RepartiActions';

function AddReparti() {
    const { qytetiId, spitaliId } = useParams();
    const dispatch = useDispatch();
    const errors = useSelector((state) => state.errorReducerContent);
    const [repartidata, setRepartitData] = useState({
        name: "",
    });

    const onChange = (event) => {
        const { name, value } = event.target;
        setRepartitData({ ...repartidata, [name]: value });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(createRepart(qytetiId, spitaliId, repartidata));
    };
   
    return (
        
        <>
            <div className="container mx-auto mt-5 px-4">
            <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg">
                <h5 className="text-center text-2xl font-semibold text-gray-800 mb-4">Update Department Form</h5>
                <hr />
                <form onSubmit={onSubmit} className="space-y-4">
                <div className="form-group">
                    <input
                    type="text"
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Department Name"
                    name="name"
                    value={repartidata.name}
                    onChange={onChange}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <input
                    type="submit"
                    className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
                    value="Create Reparti"
                />
                </form>
            </div>
            </div>
        </>

    );
}



export default AddReparti;
