import { GET_QYTETETS,GET_QYTETI,CREATE_QYTETI,DELETE_QYTETI } from "../actions/type";
import { GET_ERRORS } from "./type";
import axios from "axios";

export const createQyteti = (qytet) => async (dispatch) => {
    try {
         // Log për të verifikuar token-in

        const response = await axios.post(
            "http://192.168.0.22:8081/meaxhimi-spitalit-app/api/qyteti",
            qytet
           
        );

        console.log('Response:', response.data);
        alert('Qyteti u krijua me sukses!');

        dispatch({
            type: CREATE_QYTETI,
            payload: response.data,
        });

        window.location.href = "/qytetiList";
    } catch (error) {
        console.error('Error:', error.response.data);
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });

        if (error.response && error.response.status === 401) {
            alert('Unauthorized: Administrators are not authorized to perform this action.');
        }
    }
};

export const getAllQytetet=() => async(dispatch) =>{
    try {
        const response = await axios.get(`http://localhost:8081/api/qyteti/all`);
        dispatch({
            type: GET_QYTETETS,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
}; 
                                        //nxit aksionin me ndodh
export const getQyteti = (id) => async(dispatch ) => {
    try{
        const response = await axios.get(`http://192.168.0.22:8081/meaxhimi-spitalit-app/api/qyteti/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('jwtToken')}` // Marrja e JWT token-it nga localStorage
                }
            }
        );
        dispatch( { 
            type: GET_QYTETI,
            payload: response.data

        } );
    }catch(error){
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
};
export const deleteQyteti =(id) => async(dispatch)=>{
    if(window.confirm("Jeni i sigurt qe doni te fshini kete")){
        await axios.delete(`http://192.168.0.22:8081/meaxhimi-spitalit-app/api/qyteti/${id}`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwtToken')}` // Marrja e JWT token-it nga localStorage
            }
        }
    );
        dispatch({
            type: DELETE_QYTETI,
            payload: id,
        });
    }

};
