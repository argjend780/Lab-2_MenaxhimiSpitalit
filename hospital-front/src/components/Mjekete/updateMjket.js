import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getMjektets, creaetMjeket } from "../../actions/MjekteAction";


function UpdateMjeket() {
  const { qytetiId, spitaliId, repartiId, mjketId } = useParams();
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errorReducerContent);
  const mjeketList = useSelector((state) => state.mjeketReducerContetnt.mjekets);

  const [mjeketData, setMjeketData] = useState({
    id: "",
    name: "",
    address: "",
    email: "",
    phoneNumber: "",
  });

  console.log(qytetiId);
  console.log(spitaliId);
  console.log(repartiId);
  console.log(mjketId);


  useEffect(() => {
    dispatch(getMjektets(qytetiId, spitaliId, repartiId));
  }, [dispatch, qytetiId, spitaliId, repartiId]);

  useEffect(() => {
    if (mjeketList && mjeketList.length > 0) {
      const selectedMjek = mjeketList.find(mjek => mjek.id === Number(mjketId));
      if (selectedMjek) {
        console.log("Updating mjeketData with selectedMjek:", selectedMjek);
        setMjeketData({
          id: selectedMjek.id ?? "",
          name: selectedMjek.name ?? "",
          address: selectedMjek.address ?? "",
          email: selectedMjek.email ?? "",
          phoneNumber: selectedMjek.phoneNumber ?? "",
        });
      }
    }
  }, [mjeketList, mjketId]);

  const onChange = (event) => {
    const { name, value } = event.target;
    setMjeketData((prevMjeketData) => ({
      ...prevMjeketData,
      [name]: value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const updateMjekObject = {
      id: mjeketData.id,
      name: mjeketData.name,
      address: mjeketData.address,
      email: mjeketData.email,
      phoneNumber: mjeketData.phoneNumber,
    };
    dispatch(creaetMjeket(qytetiId, spitaliId, repartiId, updateMjekObject));
  };

  
return (
  <div className="bg-gray-100 min-h-screen py-12">
    <div className="flex justify-center">
      <div className="w-full max-w-md px-4">
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h3 className="text-center text-2xl font-bold text-red-600 mb-6">🔄 Përditëso Mjekun</h3>

          <form onSubmit={onSubmit} className="space-y-4">

            {/* ID - Vetëm lexim */}
            <div>
              <label htmlFor="id" className="block font-semibold text-gray-700 mb-1">ID (Leximi vetëm)</label>
              <input
                type="text"
                id="id"
                name="id"
                value={mjeketData.id}
                disabled
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg cursor-not-allowed text-gray-500"
              />
            </div>

            {/* Emri */}
            <div>
              <label htmlFor="name" className="block font-semibold text-gray-700 mb-1">Emri</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-red-600">
                  <i className="bi bi-person-fill"></i>
                </span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={mjeketData.name}
                  onChange={onChange}
                  required
                  className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:outline-none ${
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
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-red-600">
                  <i className="bi bi-house-fill"></i>
                </span>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={mjeketData.address}
                  onChange={onChange}
                  required
                  className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:outline-none ${
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
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-red-600">
                  <i className="bi bi-envelope-fill"></i>
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={mjeketData.email}
                  onChange={onChange}
                  required
                  className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:outline-none ${
                    errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-red-200'
                  }`}
                />
              </div>
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Numri i telefonit */}
            <div>
              <label htmlFor="phoneNumber" className="block font-semibold text-gray-700 mb-1">Numri i Telefonit</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-red-600">
                  <i className="bi bi-telephone-fill"></i>
                </span>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={mjeketData.phoneNumber}
                  onChange={onChange}
                  required
                  className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:outline-none ${
                    errors.phoneNumber ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-red-200'
                  }`}
                />
              </div>
              {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
            </div>

            {/* Butoni Submit */}
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
            >
              <i className="bi bi-arrow-repeat"></i> Përditëso
            </button>

          </form>
        </div>
      </div>
    </div>
  </div>
);
}

export default UpdateMjeket;
