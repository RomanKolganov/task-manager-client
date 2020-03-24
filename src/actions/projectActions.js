import axios from "axios";
import { GET_ERRORS, GET_PROJECTS, GET_PROJECT, DELETE_PROJECT } from "./types";

export const createProject = (project, history) => async dispatch => {
  try {
    await axios.post("/api/project", project);
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
  const response = await axios.get("/api/project");
  dispatch({
    type: GET_PROJECTS,
    payload: response.data
  });
};

export const getProject = (identifier, history) => async dispatch => {
  try {
    const response = await axios.get(`/api/project/${identifier}`);
    dispatch({
      type: GET_PROJECT,
      payload: response.data
    });
  } catch (error) {
    history.push("/dashboard");
  }
};

export const deleteProject = identifier => async dispatch => {
  if (
    window.confirm(
      "Are you shure? This will delete the project and all the data relatedto to it"
    )
  ) {
    await axios.delete(`/api/project/${identifier}`);
    dispatch({
      type: DELETE_PROJECT,
      payload: identifier
    });
  }
};
