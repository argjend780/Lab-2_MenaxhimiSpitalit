import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { creaetPacient, getPacinets,getPacinet } from "../../actions/PacinetActions";

//import useAuthentication from "../../actions/auth";

function UpdatePacienti() {
  const { qytetiId, spitaliId, repartiId, pacientId } = useParams();
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errorReducerContent);
  const pacients = useSelector((state) => state.pacinetReducerContent.pacinets);

  const [pacientData, setPacientData] = useState({
    id: "",
    name: "",
    address: "",
    email: "",
    //phoneNumber: "",
    gjinia: "",
  });

  useEffect(() => {
    dispatch(getPacinet(qytetiId, spitaliId, repartiId,pacientId));
  }, [dispatch, qytetiId, spitaliId, repartiId, pacientId]);

  useEffect(() => {
    if (pacients && pacients.length > 0) {
      const selectedPacient = pacients.find(pacient => pacient.id === Number(pacientId));
      if (selectedPacient) {
        console.log(selectedPacient)
        setPacientData({
          id: selectedPacient.id ?? "",
          name: selectedPacient.name ?? "",
          address: selectedPacient.address ?? "",
          email: selectedPacient.email ?? "",
          //phoneNumber: selectedPacient.phoneNumber ?? "",
          gjinia: selectedPacient.gjinia ?? "",
        });
      }
    }
  }, [pacientId, pacients]);

  const onChange = (event) => {
    const { name, value } = event.target;
    setPacientData((prevPacientData) => ({
      ...prevPacientData,
      [name]: value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const updatePacientObject = {
      id: pacientData.id,
      name: pacientData.name,
      address: pacientData.address,
      email: pacientData.email,
      //phoneNumber: pacientData.phoneNumber,
      gjinia: pacientData.gjinia,
    };
    dispatch(creaetPacient(qytetiId, spitaliId, repartiId, updatePacientObject));
  };

  /*const isAuthenticated = useAuthentication();
  if (isAuthenticated === null) {
    return <p>Loading...</p>;
  }

  if (isAuthenticated === false) {
    return (window.location.href = "/");
  }*/
return (
  <div className="max-w-2xl mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">
    <h1 className="text-2xl font-bold text-center mb-6">Update Pacient Form</h1>
    <form onSubmit={onSubmit} className="space-y-5">
      
      {/* ID (read-only) */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Pacient ID</label>
        <input
          type="text"
          name="id"
          value={pacientData.id}
          disabled
          className="w-full px-4 py-2 mt-1 border border-gray-300 bg-gray-100 rounded-lg"
        />
      </div>

      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={pacientData.name}
          onChange={onChange}
          placeholder="Enter pacient name"
          className={`w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? "border-red-500" : "border-gray-300"}`}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      {/* Address */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Address</label>
        <input
          type="text"
          name="address"
          value={pacientData.address}
          onChange={onChange}
          placeholder="Enter pacient address"
          className={`w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.address ? "border-red-500" : "border-gray-300"}`}
        />
        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={pacientData.email}
          onChange={onChange}
          placeholder="Enter pacient email"
          className={`w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? "border-red-500" : "border-gray-300"}`}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      {/* Phone Number */}
      {/*<div>
        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          value={pacientData.phoneNumber}
          onChange={onChange}
          placeholder="Enter pacient phone number"
          className={`w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.phoneNumber ? "border-red-500" : "border-gray-300"}`}
          required
        />
        {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
      </div>

      {/* Gender */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Gender</label>
        <select
          name="gjinia"
          value={pacientData.gjinia}
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
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg transition"
        >
          Update Pacient
        </button>
      </div>
    </form>
  </div>
);

}

export default UpdatePacienti;
