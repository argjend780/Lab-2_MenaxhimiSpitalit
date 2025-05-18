import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { creaetMjeket } from '../../actions/MjekteAction';


function AddMjket() {
    const { qytetiId, spitaliId, repartiId } = useParams();
    const dispatch = useDispatch();
    const errors = useSelector((state) => state.errorReducerContent || {});

    const [mjketData, setMjketData] = useState({
        name: "",
        address: "",
        email: "",
        phoneNumber: ""
    });

    const onChange = (event) => {
        const { name, value } = event.target;
        setMjketData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const newEmployee = { ...mjketData };
        dispatch(creaetMjeket(qytetiId, spitaliId, repartiId, newEmployee));
    };

return (
  <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4 py-12">
    <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-6">
      <h3 className="text-center text-2xl font-bold text-red-600 mb-6">➕ Shto Mjekun</h3>

      <form onSubmit={onSubmit} className="space-y-4">

        {/* Emri */}
        <div>
          <label htmlFor="name" className="block font-semibold text-gray-700 mb-1">Emri</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-red-600">
              <i className="bi bi-person-fill"></i>
            </span>
            <input
              type="text"
              id="name"
              name="name"
              value={mjketData.name}
              onChange={onChange}
              required
              className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-red-200'
              }`}
            />
          </div>
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Adresa */}
        <div>
          <label htmlFor="address" className="block font-semibold text-gray-700 mb-1">Adresa</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-red-600">
              <i className="bi bi-house-fill"></i>
            </span>
            <input
              type="text"
              id="address"
              name="address"
              value={mjketData.address}
              onChange={onChange}
              required
              className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.address ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-red-200'
              }`}
            />
          </div>
          {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-semibold text-gray-700 mb-1">Email</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-red-600">
              <i className="bi bi-envelope-fill"></i>
            </span>
            <input
              type="email"
              id="email"
              name="email"
              value={mjketData.email}
              onChange={onChange}
              required
              className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-red-200'
              }`}
            />
          </div>
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Numri i telefonit }
        <div>
          <label htmlFor="phoneNumber" className="block font-semibold text-gray-700 mb-1">Numri i telefonit</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-red-600">
              <i className="bi bi-telephone-fill"></i>
            </span>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={mjketData.phoneNumber}
              onChange={onChange}
              required
              className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.phoneNumber ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-red-200'
              }`}
            />
          </div>
          {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
        </div>*/}

        {/* Butoni Submit */}
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
        >
          <i className="bi bi-box-arrow-in-down"></i> Krijo Punonjës
        </button>

      </form>
    </div>
  </div>
);


}

export default AddMjket;
