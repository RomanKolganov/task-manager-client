import axios from "axios";
import { GET_ERRORS, GET_PROJECTS, GET_PROJECT, DELETE_PROJECT } from "./types";

export const createProject = (project, history) => async dispatch => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/project",
      project
    );
    history.push("/dashboard");
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};

export const getProjects = () => async dispatch => {
  const response = await axios.get("http://localhost:8080/api/project");
  dispatch({
    type: GET_PROJECTS,
    payload: response.data
  });
};

export const getProject = (identifier, history) => async dispatch => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/project/${identifier}`
    );
    dispatch({
      type: GET_PROJECT,
      payload: response.data
    });
  } catch (error) {
    history.push("/dashboard");
  }
};

export const deleteProject = identifier => async dispatch => {
  await axios.delete(`http://localhost:8080/api/project/${identifier}`)
  dispatch({
    type: DELETE_PROJECT,
    payload: identifier
  })
}