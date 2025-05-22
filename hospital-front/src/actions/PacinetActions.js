import { GET_PACINETI,GET_PACINETS,CREATE_PACINETI,DELETE_PACIENTI,GET_PACIENTI_COUNT } from "../actions/type";
import axios from "axios";
import { GET_ERRORS } from "../actions/type";

export const getPacinets = (qytetiId, spitaliId,repartiId) => async (dispatch) => {
    try {
        const response= await axios.get(`http://localhost:8081/pacient/all/${qytetiId}/${spitaliId}/${repartiId}`);
        dispatch({
            type: GET_PACINETS,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
};


export const creaetPacient = (qytetiId, spitaliId,repartiId,pacinet) => async (dispatch) => {
    try {
       
        const response = 
        await axios.post(`http://localhost:8081/pacient/add/${qytetiId}/${spitaliId}/${repartiId}`,pacinet   ,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwtToken')}` // Marrja e JWT token-it nga localStorage
            }
        }
    );
        dispatch({
            type: CREATE_PACINETI,
            payload: response.data
        });
        window.location.href = `/pacinetList/${qytetiId}/${spitaliId}/${repartiId}`;
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
};

export const getPacinet = (qytetiId, spitaliId,repartiId,pacientId) => async (dispatch) => {
    try {
        const response =
         await axios.get(`http://localhost:8081/pacient/o/${qytetiId}/${spitaliId}/${repartiId}/${pacientId}`);
        dispatch({
            type: GET_PACINETI,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
};

export const deletePacinet = ( repartiId,pacinetId) => async (dispatch) => {
    try {
        console.log(`Request URL: http://localhost:8081/pacient/delete/${repartiId}/${pacinetId}`); // Log request URL
        const response 
        = await axios.delete(`http://localhost:8081/pacient/delete/${repartiId}/${pacinetId}` ,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwtToken')}` // Marrja e JWT token-it nga localStorage
            }
        }
    );
        console.log('deleteReparti called with:', {   repartiId ,pacinetId});
        dispatch({
            type: DELETE_PACIENTI,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
};
export const getPacinetCount = () => async (dispatch) => {
    try {
        const response = await axios.get("http://localhost:8081/pacient/count");
        dispatch({
            type: GET_PACIENTI_COUNT,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response?.data || { message: "Something went wrong" }
        });
    }
};




