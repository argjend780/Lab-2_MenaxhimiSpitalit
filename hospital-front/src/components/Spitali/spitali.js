import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteEmployee } from "../../actions/SpitaliAction";
import { Plus } from "lucide-react"; 
import { Hospital } from "lucide-react"; 

function Spitali({ spitali, qyteti_id }) {
    const dispatch = useDispatch();

    const onClickdeleteEmployee = (departmentId, spitaliId) => {
        dispatch(deleteEmployee(departmentId, spitaliId));
        window.location.reload();
    }

    return (
        /*<div className="card bg-light mb-3">
            <div className="card-body d-flex justify-content-between">
                <div className="employee-info">
                    <div className="d-flex flex-column">
                        <h5>{spitali.emri}</h5>
                        <h5>{spitali.adressa}</h5>
                        <h5>{spitali.email}</h5>
                        
                    </div>
                </div>
                <div className="employee-buttons">
                    <ul className="list-group d-flex mb-0">
                        <li className="list-group-item update mr-2">
                            <Link to={`/repartiList/${qyteti_id}/${spitali.id}`}>
                                <i className="fa fa-edit pr-1"></i>Repartet Bord
                            </Link>
                        </li>
                        <li className="list-group-item update mr-2">
                            <Link to={`/updateSpitaliForm/${qyteti_id}/${spitali.id}`}>
                            
                                <i className="fa fa-edit pr-1"></i>Update Employee
                            </Link>
                        </li>
                        <li className="list-group-item delete">
                            <Link to="" onClick={() => onClickdeleteEmployee(qyteti_id, spitali.id)} className="btn btn-danger">
                                <i className="fa fa-trash pr-1"></i>Delete Employee
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>*/
        
            <div className="bg-blue-100 rounded-lg shadow-lg p-6 w-full sm:w-80 md:w-96 lg:w-1/4 xl:w-[90%] mb-8 mx-6">
              <div className="flex justify-between">
                <div className="employee-info">
                <Hospital className="w-6 h-6 text-blue-500" />
                  <div className="flex flex-col space-y-2">
                    <h5 className="text-xl font-bold">{spitali.emri}</h5>
                    <h6 className="text-sm text-gray-600">{spitali.adressa}</h6>
                    <h6 className="text-sm text-gray-600">{spitali.email}</h6>
                  </div>
                </div>
                <div className="employee-buttons mt-4">
                <ul className="space-y-2">
                    <li>
                    <Link 
                        to={`/updateSpitaliForm/${qyteti_id}/${spitali.id}`} 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-0.5 px-1 rounded inline-block">
                        Update board
                    </Link>
                    </li>
                    <li>
                    <button
                        onClick={() => onClickdeleteEmployee(qyteti_id, spitali.id)}
                        className="bg-red-500 hover:bg-red-700 text-white font-semibold py-0.5 px-1 rounded "
                    >
                        <i className="fa fa-trash pr-1"></i>Delete board
                    </button>
                    </li>
                    <li>
                    <Link
                        to={`/repartiList/${qyteti_id}/${spitali.id}`}
                        className="bg-gray-500 hover:bg-gray-700 text-white font-semibold py-0.5 px-1 rounded"
                    >
                        <i className="fa fa-edit pr-1"></i>Repartet
                    </Link>
                    </li>
                    
                </ul>
                </div>
              </div>
            </div>
                
    );
}

export default Spitali;


