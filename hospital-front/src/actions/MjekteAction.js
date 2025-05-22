import { GET_MJEKET,GET_MJEKETS,CREATE_MJEKET,DELETE_MJEKET } from "../actions/type";
import axios from "axios";
import { GET_ERRORS } from "../actions/type";

export const getMjektets = (qytetiId, spitaliId,repartiId) => async (dispatch) => {
    try {
        const response 
        = await axios.get(`http://localhost:8081/mjeket/all/${qytetiId}/${spitaliId}/${repartiId}`);
        dispatch({
            type: GET_MJEKETS,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
};

export const creaetMjeket = (qytetiId, spitaliId,repartiId,mjeket) => async (dispatch) => {
    try {
        const response = 
        await axios.post(`http://localhost:8081/mjeket/${qytetiId}/${spitaliId}/${repartiId}`,mjeket);
        dispatch({
            type: CREATE_MJEKET,
            payload: response.data
        });
        window.location.href = `/mjeketList/${qytetiId}/${spitaliId}/${repartiId}`;
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
};

export const getMjek = (qytetiId, spitaliId,repartiId,mjektId) => async (dispatch) => {
    try {
        const response =
         await axios.get(`http://localhost:8081/mjeket/o/${qytetiId}/${spitaliId}/${repartiId}/${mjektId}`);
        dispatch({
            type: GET_MJEKET,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
};

export const deletemjkete = ( repartiId,mjektId) => async (dispatch) => {
    try {
        const response 
        = await axios.delete(`http://localhost:8081/mjeket/delete/${repartiId}/${mjektId}`);
        console.log('deleteReparti called with:', {  repartiId ,mjektId});
        dispatch({
            type: DELETE_MJEKET,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
};
