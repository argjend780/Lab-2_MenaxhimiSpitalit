import React ,{useEffect} from "react";
import Qyteti from './Qytete/qyteti';
import { Link } from "react-router-dom";
import { MapPin, Plus } from 'lucide-react';

import { getAllQytetet } from "../actions/QyteteAction";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

function QytetiList(){
    const dispatch = useDispatch();
    const [alertShown, setAlertShown] = useState(false);
    const qytetilist= useSelector(
        (state)=> state.qytetiReducerContent.qytetets
    );

    useEffect(() =>{
        dispatch(getAllQytetet());
    },[dispatch]);



    useEffect(() => {
        if (qytetilist.length > 0 && !alertShown) {
            const lastDepartment = qytetilist[qytetilist.length - 1];
            const { id, name } = lastDepartment;
           
            setAlertShown(true);
        }
    }, [qytetilist, alertShown]);

    /*useEffect(() => {
        // Kontrolloni në fillim të ngarkimit të faqes nese localStorage është bosh
        const user = localStorage.getItem('user');
        const token = localStorage.getItem('token');

        // Nëse localStorage është bosh, ridrejto përdoruesin në faqen e login-it
        if (user==null || token==null) {
            window.location.href = '/';
        }
    }, []);*/
    return(
        <div className="container">
          <div className="mb-6">
          <Link
            to="/createQytetiForm"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
          >
          <Plus className="w-5 h-5 mr-2" />
          Krijo Qytet
        </Link>
      </div>
   <div className="w-full p-2">
  <div className="flex flex-wrap gap-4 justify-start">
    {qytetilist.map((qytet) => (
      <Qyteti key={qytet.id} qytet={qytet} />
    ))}
  </div>
</div>
  </div>
    );

}
export default QytetiList;