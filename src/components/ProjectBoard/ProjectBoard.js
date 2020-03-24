import React, { Component } from "react";
import { Link } from "react-router-dom";
import Backlog from "./Backlog";
import { connect } from "react-redux";
import classnames from "classnames";
import { getBacklog } from "../../actions/backlogActions";
import PropTypes from "prop-types";

class ProjectBoard extends Component {
  componentDidMount() {
    const { identifier } = this.props.match.params;
    this.props.getBacklog(identifier);
  }
  render() {
    const { identifier } = this.props.match.params;
    const { project_tasks } = this.props.backlog;
    return (
      <div className="container">
        <Link
          to={`/addProjectTask/${identifier}`}
          className="btn btn-primary mb-3"
        >
          <i className="fas fa-plus-circle"> Create Project Task</i>
        </Link>
        <br />
        <hr />
        <Backlog project_tasks_prop={project_tasks} />
      </div>
    );
  }
}

ProjectBoard.propTypes = {
  getBacklog: PropTypes.func.isRequired,
  backlog: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  backlog: state.backlog
});

export default connect(mapStateToProps, { getBacklog })(ProjectBoard);
