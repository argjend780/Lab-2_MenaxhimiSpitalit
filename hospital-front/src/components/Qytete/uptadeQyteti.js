import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createQyteti,getQyteti } from '../../actions/QyteteAction';
import { useParams } from 'react-router-dom';
function UpdateQyteti() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const qyteti = useSelector((state) => state.qytetiReducerContent.qytet);
  const errors = useSelector((state) => state.errorReducerContent);
  const [data, setData] = useState({
    id: id,
    emri: ''
  });

  useEffect(() => {
    dispatch(getQyteti(id));
    setData((initialState) => ({
      ...initialState,
      id: qyteti.id,
      emri: qyteti.emri || ''
    }));
  }, [dispatch, id, qyteti.emri, qyteti.id]);

  const onChange = (event) => {
    const { name, value } = event.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const updateDepartment = {
      id: data.id,
      emri: data.emri
    };
    dispatch(createQyteti(updateDepartment));
    alert('Qyteti u uptade me sukses!');
  };
 /* const isAuthenticated = useAuthentication(); 
  if (isAuthenticated === null) {
      return <p>Loading...</p>;
    }
  
    if (isAuthenticated === false) {
      return window.location.href="/";
    }*/
  return (
    <div className="flex justify-center mt-10">
    <div className="w-full max-w-md bg-white p-6 rounded shadow-md">
      <h5 className="text-center text-xl font-semibold mb-4">Update Qyteti Form</h5>
      <hr className="mb-6" />
      <form onSubmit={onSubmit} className="flex flex-col">
        <div className="mb-4">
          <input
            type="text"
            className="w-full px-4 py-2 text-lg border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
            placeholder="Qyteti ID"
            name="id"
            value={id}
            disabled
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            className={`w-full px-4 py-2 text-lg border rounded-md focus:outline-none ${
              errors.emri ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Qyteti Name"
            name="emri"
            value={data.emri}
            onChange={onChange}
          />
          {errors.emri && (
            <p className="text-red-500 text-sm mt-1">{errors.emri}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        >
          Update Qyteti
        </button>
      </form>
    </div>
  </div>
  );

}

export default UpdateQyteti;
