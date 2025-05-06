import React, { useState } from 'react';
import { createQyteti } from '../../actions/QyteteAction';
import { useDispatch, useSelector } from 'react-redux';

function AddQyteti() {
  const dispatch = useDispatch();
  const [emri, setName] = useState();
  const errors = useSelector((state) =>state.errorReducerContent);
  const onchange = (event) =>{
    setName(event.target.value);
  }

  const onSubmit = (e) =>{
    e.preventDefault();
    const newDepartment = {emri};
    dispatch(createQyteti(newDepartment));
    alert('Qyteti u krijua me sukses!');
  }
  /*const isAuthenticated = useAuthentication(); 
  if (isAuthenticated === null) {
      return <p>Loading...</p>;
    }
  
    if (isAuthenticated === false) {
      return window.location.href="/";
    }*/
  return (
    /*<div className='container d-flex justify-content-center mt-5'> {/* Përdorimi i d-flex dhe justify-content-center për të vendosur elementet në qendër }
      <div className='col-md-8'>
        <h5 className='text-center'>Create Department Form</h5>
        <hr />
        <form onSubmit={onSubmit} className='d-flex flex-column'> {/* Përdorimi i d-flex dhe flex-column për vendosjen e elementeve në kolonë }
          <div className='form-group'>
            <input
              type='text'
              className={`form-control form-control-lg ${errors.emri ? "is-invalid" : ""}`}
              placeholder='Department Name'
              name='emri'
              value={emri}
              onChange={onchange}
            />
            {errors.emri && <p className='invalid-feedback'>{errors.emri}</p>}
          </div>
          <input
            type='submit'
            className='btn btn-primary btn-block mt-4'
            value='Create Department' /* Ndryshimi i inputit nga <input> në <button> dhe shtimi i vlerës së tij
          />
        </form>
      </div>
    </div> */
        <div className="flex justify-center mt-5">
          <div className="w-full max-w-md">
            <h5 className="text-center text-xl font-semibold">Create Department Form</h5>
            <hr className="my-4" />
            <form onSubmit={onSubmit} className="flex flex-col">
              <div className="mb-4">
                <input
                  type="text"
                  className={`w-full px-4 py-2 text-lg border rounded-md focus:outline-none ${errors.emri ? "border-red-500" : "border-gray-300"}`}
                  placeholder="Department Name"
                  name="emri"
                  value={emri}
                  onChange={onchange}
                />
                {errors.emri && <p className="text-red-500 text-sm mt-1">{errors.emri}</p>}
              </div>
              <input
                type="submit"
                className="w-full py-2 mt-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none"
                value="Create Department"
              />
            </form>
          </div>
        </div>
      
  );
}

export default  AddQyteti;
/*import React from 'react'
import { useState } from 'react';
import { createDepartment } from '../../actions/departmentactions';
import { useDispatch,useSelector} from 'react-redux';

function AddDepartment() {

  const dispatch = useDispatch();
  const [name, setName] = useState();
  const errors = useSelector((state) =>state.errorReducerContent);

  const onchange = (event) =>{
    setName(event.target.value);
  }

  const onSubmit = (e) =>{
    e.preventDefault();
    const newDepartment = {name};
    dispatch(createDepartment(newDepartment));

  }
  return (
    <>
    <div className='row'>
        <div className='col-md-8 m-auto'>
            <h5 className='text-center'>Create Departament Form</h5>
            <hr/>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <input 
                    type='text' 
                    className={`form-control form-control-lg ${errors.name ? "is-invalid" : ""}`}
                    placeholder='Department Name'
                    name='name'
                    onChange={onchange}
                    ></input>
                    {
                      errors.name && <p className='invalid-feedback'>{errors.name}</p>
                    }
                </div>
                    <input 
                    type='submit' 
                    className='btn btn-primary btn-block mt-4'></input>

            </form>
        </div>

    </div>
    </>
  )
}

export default AddDepartment ma beje dhe ky te pershtatet me displayflex */