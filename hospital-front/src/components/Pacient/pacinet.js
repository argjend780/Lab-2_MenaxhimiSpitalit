import React from "react";
import { useDispatch } from "react-redux";
import { Link, useRouteLoaderData } from "react-router-dom";
import { deletePacinet } from "../../actions/PacinetActions";
import { UserRound } from "lucide-react";



function Pacient({ qytetiId,spitaliId,pacient, repartiId }) {
    const dispatch = useDispatch();

    const onClickdeleteEmployee = (repartiId, pacinetId) => {
        dispatch(deletePacinet(repartiId, pacinetId));
        window.location.reload();
       
    }
return (
    <div className="bg-white shadow-md rounded-xl p-6 mb-4 flex flex-col md:flex-row justify-between items-start md:items-center">
    <div className="flex flex-col space-y-2 text-gray-800">
        {/* Ikona e përdoruesit me ngjyrë që ndryshon në bazë të gjinisë */}
        <UserRound className={`w-6 h-6 ${pacient && pacient.gjinia === 'M' ? 'text-blue-600' : 'text-red-600'}`} />
        
        {/* Të dhënat e pacientit */}
        {pacient && (
            <>
                <h5 className="text-lg font-semibold">{pacient.name}</h5>
                <p>{pacient.address}</p>
                <p>{pacient.email}</p>
                <p>{pacient.gjinia}</p>
            </>
        )}
    </div>

    <div className="mt-4 md:mt-0 flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-3">
        {/* Link për "Employee Bord" */}
        <Link
            to=""
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
            <i className="fa fa-edit mr-2"></i>Employee Bord
        </Link>

        {/* Link për "Alergjia" */}
        <Link
            to={`/alergjiaList/${repartiId}/${spitaliId}`}
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
        >
            <i className="fa fa-medkit mr-2"></i>Alergjia
        </Link>

        {/* Link për "Update Employee" */}
        <Link
            to={`/updatePacinetiForm/${qytetiId}/${spitaliId}/${repartiId}/${pacient.id}`}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
        >
            <i className="fa fa-edit mr-2"></i>Update Employee
        </Link>

        {/* Butoni për "Delete Employee" */}
        <button
            onClick={() => onClickdeleteEmployee(repartiId, pacient.id)}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
            <i className="fa fa-trash mr-2"></i>Delete Employee
        </button>
    </div>
</div>
);
}export default Pacient;