import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; // Combine import statements
import { getSpitaletList } from "../actions/SpitaliAction";
import Spitali from "./Spitali/spitali";
import { Plus } from "lucide-react"; 
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom"; 
    import { useState } from "react";
    
function SpitaliList() {
    const { qyteti_id } = useParams();
    const dispatch = useDispatch();
    const [previousEmployeeListLength, setPreviousEmployeeListLength] = useState(0); 
    const employeeList = useSelector((state) => state.spitaliReducerContent.spitalis);
    const navigate = useNavigate();

    
    useEffect(() => {
        dispatch(getSpitaletList(qyteti_id));
    },[dispatch, qyteti_id]);

    useEffect(() => {
        ///KAM KOMENRUAR SEPSE KUR NUK KISHE SPITALI ME PARAQISTE ERROR
       /* if (employeeList.length !== previousEmployeeListLength) { 
            const lastEmploye = employeeList[employeeList.length - 1];
            const { id, name } = lastEmploye;
            alert(`Employe me ID: ${id} dhe emrin: "${name}" është shtuar i fundit`);
        }*/
        // Përditëso gjendjen e mëparshme të listës
        setPreviousEmployeeListLength(employeeList.length);
    }, [employeeList, previousEmployeeListLength]);
   
    return (
        
        <div className="container">
         <div className="mb-6">
                  <Link
                    to={`/createSpitaliForm/${qyteti_id}`}
                    className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-xl shadow hover:bg-green-700"
                  >
                  <Plus className="w-5 h-5 mr-2" />
                  Krijo Spital
                </Link>
              
        </div>
        <div className="mb-6">
                <button
                    onClick={() => navigate('/qytetetlist')}
                    className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-xl shadow hover:bg-red-700"
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Kthehu prapa
                </button>
        </div>
            
             {employeeList.map((spitali) => 
                 <Spitali qyteti_id={qyteti_id} key={spitali.id} spitali={spitali}/> // Changed id={id} to key={employee.id}
             )}
        </div>
    );
}
export default SpitaliList