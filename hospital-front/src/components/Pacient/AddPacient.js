import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
//import useAuthentication from "../../actions/auth";
import { creaetPacient } from '../../actions/PacinetActions';
function AddPacinet() {
    
    const { qytetiId, spitaliId, repartiId } = useParams();
    console.log('qytetId:', qytetiId); // Debug: Log the qytetiId
    console.log('spitaliId:', spitaliId); // Debug: Log the spitaliId
    console.log('repartiId:', repartiId); 
    const dispatch = useDispatch();
    const errors = useSelector((state) => state.errorReducerContent);
    const [pacinetData, setPacinetData] = useState({
        name: "",
        address: "",
        email: "",
        //phoneNumber: "",
        gjinia: ""
    });

    const onChange = (event) => {
        const { name, value } = event.target;
        setPacinetData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const newPacinet = {
            name: pacinetData.name,
            address: pacinetData.address,
            email: pacinetData.email,
            //phoneNumber: pacinetData.phoneNumber,
            gjinia: pacinetData.gjinia
        };
        dispatch(creaetPacient(qytetiId, spitaliId, repartiId, newPacinet));
    };
    /*const isAuthenticated = useAuthentication(); 
    if (isAuthenticated === null) {
        return <p>Loading...</p>;
      }
    
      if (isAuthenticated === false) {
        return window.location.href="/";
      }*/
 return (
    <div className="max-w-2xl mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Create Pacient Form</h1>
        <form onSubmit={onSubmit} className="space-y-5">
            {/* Name */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                    type="text"
                    name="name"
                    value={pacinetData.name}
                    onChange={onChange}
                    placeholder="Enter pacient name"
                    className={`w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? "border-red-500" : "border-gray-300"}`}
                    required
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Address */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                    type="text"
                    name="address"
                    value={pacinetData.address}
                    onChange={onChange}
                    placeholder="Enter pacient address"
                    className={`w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.address ? "border-red-500" : "border-gray-300"}`}
                    required
                />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
            </div>

            {/* Email */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    name="email"
                    value={pacinetData.email}
                    onChange={onChange}
                    placeholder="Enter pacient email"
                    className={`w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? "border-red-500" : "border-gray-300"}`}
                    required
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Gender */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Gender</label>
                <select
                    name="gjinia"
                    value={pacinetData.gjinia}
                    onChange={onChange}
                    className={`w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.gjinia ? "border-red-500" : "border-gray-300"}`}
                    required
                >
                    <option value="">Select Gender</option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                </select>
                {errors.gjinia && <p className="text-red-500 text-sm mt-1">{errors.gjinia}</p>}
            </div>

            {/* Submit */}
            <div className="text-center">
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition"
                >
                    Create Pacient
                </button>
            </div>
        </form>
    </div>
);


}

export default AddPacinet;