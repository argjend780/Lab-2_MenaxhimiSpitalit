import { GET_REPARTI,GET_REPARTS,CREATE_REPARTI,DELETE_REPARTI } from "../actions/type";
import axios from "axios";
import { GET_ERRORS } from "../actions/type";

export const getRepartis = (qytetiId, spitaliId) => async (dispatch) => {
    try {
        const response = await axios.get(`http://localhost:8081/api/repartet/list/${qytetiId}/${spitaliId}`);
        dispatch({
            type: GET_REPARTS,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
};

export const createRepart = (qytetiId, spitaliId, reparti) => async (dispatch) => {
    try {
        const response = await axios.post(`http://localhost:8081/api/repartet/${qytetiId}/${spitaliId}`,reparti,{
           /* headers: {
                Authorization: `Bearer ${localStorage.getItem('jwtToken')}` // Marrja e JWT token-it nga localStorage
            }*/
        }
    );

        window.location.href = `/repartilist/${qytetiId}/${spitaliId}`
        dispatch({
            type: CREATE_REPARTI,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
};

export const getReparti = (qytetiId, spitaliId, repartiId) => async (dispatch) => {
    try {
        const response = await axios.get(`http://localhost:8081/api/repartet/get/${qytetiId}/${spitaliId}/${repartiId}`);
        dispatch({
            type: GET_REPARTI,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
};

export const deleteReparti = (qytetiId, spitaliId,repartiId) => async (dispatch) => {
    try {
        console.log(`Request URL: http://localhost:8081/api/repartet/repartet/delete/${qytetiId}/${spitaliId}/${repartiId}`); // Log request URL
        const response = await axios.delete(`http://localhost:8081/api/repartet/repartet/delete/${qytetiId}/${spitaliId}/${repartiId}`);
        dispatch({
            type: DELETE_REPARTI,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
};
