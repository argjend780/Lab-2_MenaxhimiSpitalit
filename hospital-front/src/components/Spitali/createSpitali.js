import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { createEmployee } from "../../actions/SpitaliAction";


function AddSpitali() {
  const errors = useSelector((state) => state.errorReducerContent);
  const dispatch = useDispatch();
  const { qytetiId } = useParams();
  const [spitali, setSpitali] = useState({
    emri: "",
    adressa: "",
    email: "",
    //phoneNumber: "",
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setSpitali((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const newEmployee = {
      emri: spitali.emri,
      adressa: spitali.adressa,
      email: spitali.email,
     // phoneNumber: spitali.phoneNumber,
    };
    dispatch(createEmployee(qytetiId, newEmployee));
  };


  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Shto Spital të Ri</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Emri</label>
          <input
            type="text"
            name="emri"
            placeholder="Shkruaj emrin e spitalit"
            value={spitali.emri}
            onChange={onChange}
            className={`w-full p-2 border rounded-md ${
              errors.emri ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.emri && <p className="text-red-500 text-sm mt-1">{errors.emri}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Adresa</label>
          <input
            type="text"
            name="adressa"
            placeholder="Shkruaj adresën"
            value={spitali.adressa}
            onChange={onChange}
            className={`w-full p-2 border rounded-md ${
              errors.adressa ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.adressa && <p className="text-red-500 text-sm mt-1">{errors.adressa}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Shkruaj email-in"
            value={spitali.email}
            onChange={onChange}
            className={`w-full p-2 border rounded-md ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/*<div>
          <label className="block text-sm font-medium text-gray-700">Numri i telefonit</label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Shkruaj numrin e telefonit"
            value={spitali.phoneNumber}
            onChange={onChange}
            required
            className={`w-full p-2 border rounded-md ${
              errors.phoneNumber ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
          )}
        </div>*/}

        <div className="text-center">
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
          >
            Shto Spitalin
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddSpitali;
