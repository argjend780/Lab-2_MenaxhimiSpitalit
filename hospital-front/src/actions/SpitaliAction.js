import axios from "axios";
import { GET_SPITALI, GET_SPITALIS, CREATE_SPITALI, DELETE_SPITALI, GET_SPITALI_COUNT,GET_ERRORS } from "./type";

export const getSpitaletList = (qyteti_id) => async (dispatch) => {
    try {
        const response = await axios.get(`http://localhost:8081/spitalet/reparti/${qyteti_id}`);
        dispatch({
            type: GET_SPITALIS,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response ? error.response.data : "Gabim Rrjeti"
        });
    }
};

export const createEmployee = (qytetiId, spitali) => async (dispatch) => {
    try {
        const response = await axios.post(`http://localhost:8081/spitalet/create/${qytetiId}`, spitali);
        dispatch({
            type: CREATE_SPITALI,
            payload: response.data
        });
        window.location.href = `/spitaletlist/${qytetiId}`;
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response ? error.response.data : "Gabim Rrjeti"
        });
    }
};

export const getEmployee = (qytetiId, spitaliId) => async (dispatch) => {
    try {
        const response = await axios.get(`http://localhost:8081/spitalet/get/${qytetiId}/${spitaliId}`);
        dispatch({
            type: GET_SPITALI,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response ? error.response.data : "Gabim Rrjeti"
        });
    }
};

export const deleteEmployee = (qytetiId, spitaliId) => async (dispatch) => {
    try {
        if (window.confirm("A je i sigurt që dëshiron ta fshish?")) {
            await axios.delete(`http://localhost:8081/spitalet/delete/${qytetiId}/${spitaliId}`);
            dispatch({
                type: DELETE_SPITALI,
                payload: spitaliId
            });
            window.location.reload();
        }
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response ? error.response.data : "Gabim Rrjeti"
        });
    }
};
export const getSpitaliCount = () => async (dispatch) => {
    try {
        const response = await axios.get("http://localhost:8081/spitalet/count");
        dispatch({
            type: GET_SPITALI_COUNT,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response?.data || { message: "Something went wrong" }
        });
    }
};
