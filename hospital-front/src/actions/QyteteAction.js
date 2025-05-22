import { GET_QYTETETS,GET_QYTETI,CREATE_QYTETI,DELETE_QYTETI,GET_QYTETI_COUNT } from "../actions/type";
import { GET_ERRORS } from "./type";
import axios from "axios";

export const createQyteti = (qytet) => async (dispatch) => {
    try {
         // Log për të verifikuar token-in

        const response = await axios.post(
            "http://localhost:8081/qyteti/",
            qytet
           
        );

        console.log('Response:', response.data);
        //alert('Qyteti u krijua me sukses!');

        dispatch({
            type: CREATE_QYTETI,
            payload: response.data,
        });

        window.location.href = "/qytetetList";
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
        const response = await axios.get(`http://localhost:8081/qyteti/all`);
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
        const response = await axios.get(`http://localhost:8081/qyteti/${id}`);
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
        await axios.delete(`http://localhost:8081/qyteti/${id}`);
        dispatch({
            type: DELETE_QYTETI,
            payload: id,
        });
    }

};
export const getQytetiCount = () => async (dispatch) => {
    try {
        const response = await axios.get("http://localhost:8081/qyteti/count");
        dispatch({
            type: GET_QYTETI_COUNT,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response?.data || { message: "Something went wrong" }
        });
    }
};
