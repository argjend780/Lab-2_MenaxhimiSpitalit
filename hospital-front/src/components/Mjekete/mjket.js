import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deletemjkete } from "../../actions/MjekteAction";

function Mjekt({ qytetiId, spitaliId, mjeket, repartiId }) {
  const dispatch = useDispatch();

    const onClickdeleteEmployee = (repartiId, mjektId) => {
        dispatch(deletemjkete(repartiId, mjektId));
        window.location.reload();
    }

 return (
  <div className="w-80 bg-white rounded-xl shadow-lg border border-gray-200 p-6 flex flex-col items-center space-y-6">
    {/* Foto profili e përkohshme */}
    <img
      src={mjeket.photoUrl || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
      alt="Foto e Mjekut"
      className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-gray-300"
    />

    {/* Informacioni */}
    <div className="text-center">
      <h2 className="text-xl font-semibold text-green-800 mb-2">{mjeket.name}</h2>
      <p className="text-sm text-gray-600 mb-1">{mjeket.address}</p>
      <p className="text-sm text-gray-600 mb-1">{mjeket.email}</p>
      {/*<p className="text-sm text-gray-600">{mjeket.phoneNumber}</p>*/}
    </div>

    {/* Butonat */}
    <div className="flex flex-col gap-3 w-full">
      <Link
        to={`/taskList/${repartiId}/${mjeket.id}`}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg text-center hover:bg-red-500 transition-all duration-300"
      >
        Takimet
      </Link>
      <Link
        to={`/updateMjekeForm/${qytetiId}/${spitaliId}/${repartiId}/${mjeket.id}`}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg text-center hover:bg-red-500 transition-all duration-300"
      >
        Përditëso
      </Link>
      <button
        onClick={() => onClickdeleteEmployee(repartiId, mjeket.id)}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg text-center hover:bg-red-600 transition-all duration-300"
      >
        Fshij
      </button>
    </div>
  </div>
);

}

export default Mjekt;
