import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpitaletList } from "../../actions/SpitaliAction";
import { getRepartis } from "../../actions/RepartiActions";
import { getAllQytetet } from "../../actions/QyteteAction";
import { Link } from "react-router-dom";

function ListPacinet() {
  const dispatch = useDispatch();

  const qytetilist = useSelector((state) => state.qytetiReducerContent.qytetets);
  const employeeList = useSelector((state) => state.spitaliReducerContent.spitalis);
  const repartilist = useSelector((state) => state.repartiReducerContent.reparts);
  const errors = useSelector((state) => state.errorReducerContent);

  const [spital, setSpital] = useState({ id: "" });
  const [employeeData, setEmployeeData] = useState({});

  useEffect(() => {
    dispatch(getAllQytetet());
  }, [dispatch]);

  useEffect(() => {
    if (employeeData.qytetiId) {
      dispatch(getSpitaletList(employeeData.qytetiId));
    }
  }, [dispatch, employeeData.qytetiId]);

  useEffect(() => {
    if (employeeData.qytetiId && employeeData.spitaliId) {
      dispatch(getRepartis(employeeData.qytetiId, employeeData.spitaliId));
    }
  }, [dispatch, employeeData.qytetiId, employeeData.spitaliId]);

  const onChange = (event) => {
    const { name, value } = event.target;
    if (name === "qytetiId") {
      setSpital({ id: "" });
    }
    setEmployeeData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // No submit logic needed for now
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Register Employee
        </h1>
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2 font-medium">City</label>
            <select
              name="qytetiId"
              value={employeeData.qytetiId || ""}
              onChange={onChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select city</option>
              {qytetilist.map((qyteti) => (
                <option key={qyteti.id} value={qyteti.id}>
                  {qyteti.emri}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">Hospital</label>
            <select
              name="spitaliId"
              value={employeeData.spitaliId || ""}
              onChange={onChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select hospital</option>
              {employeeList.map((spitali) => (
                <option key={spitali.id} value={spitali.id}>
                  {spitali.emri}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">Department</label>
            <select
              name="repartiId"
              value={employeeData.repartiId || ""}
              onChange={onChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select department</option>
              {repartilist.map((reparti) => (
                <option key={reparti.id} value={reparti.id}>
                  {reparti.name}
                </option>
              ))}
            </select>
          </div>

          <div className="text-center">
            <Link
              to={`/pacinetList/${employeeData.qytetiId}/${employeeData.spitaliId}/${employeeData.repartiId}`}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ListPacinet;
