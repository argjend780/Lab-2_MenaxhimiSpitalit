import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getEmployee, createEmployee } from "../../actions/SpitaliAction";

function UpdateSpitali() {
  const { qytetiId, spitaliId } = useParams();
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errorReducerContent);
  const spitali = useSelector((state) => state.spitaliReducerContent.spitali);

  const [spitaliData, setSpitaliData] = useState({
    id: "",
    emri: "",
    adressa: "",
    email: "",
    //phoneNumber: "",
  });

  useEffect(() => {
    dispatch(getEmployee(qytetiId, spitaliId));
  }, [dispatch, qytetiId, spitaliId]);

  useEffect(() => {
    if (spitali) {
      setSpitaliData({
        id: spitali.id,
        emri: spitali.emri,
        adressa: spitali.adressa,
        email: spitali.email,
         // phoneNumber: spitali.phoneNumber,
      });
    }
  }, [spitali]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setSpitaliData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const updatedSpital = {
      id: spitaliData.id,
      emri: spitaliData.emri,
      adressa: spitaliData.adressa,
      email: spitaliData.email,
       //phoneNumber: spitaliData.phoneNumber,
    };
    dispatch(createEmployee(qytetiId, updatedSpital));
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Përditëso të dhënat e Spitalit</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">ID</label>
          <input
            type="text"
            name="id"
            value={spitaliData.id}
            disabled
            className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Emri</label>
          <input
            type="text"
            name="emri"
            value={spitaliData.emri}
            onChange={onChange}
            className={`w-full mt-1 p-2 border rounded-md ${
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
            value={spitaliData.adressa}
            onChange={onChange}
            className={`w-full mt-1 p-2 border rounded-md ${
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
            value={spitaliData.email}
            onChange={onChange}
            className={`w-full mt-1 p-2 border rounded-md ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
          >
            Përditëso
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateSpitali;
