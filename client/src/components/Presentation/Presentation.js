import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class Presentation extends Component {
  render() {
    const {
      _id,
      presenter,
      evaluator,
      topic,
      article,
      keywords,
      date,
      summary
    } = this.props.presentation;

    return (
      <Fragment>
        <Link to={`/presentations/${_id}`} style={{ textDecoration: "none" }}>
          <div>
            <p>
              <span>Presenter: </span>
              {presenter}
            </p>
            <p>
              <span>Evaluator: </span>
              {evaluator}
            </p>
            <p>
              <span>Topic: </span>
              {topic}
            </p>
            <p>
              <span>Article: </span>
              {article}
            </p>
            <p>
              <span>Keywords: </span>
              {keywords}
            </p>
            <p>
              <span>Date: </span>
              {date}
            </p>
            <p>
              <span>Summary: </span>
              {summary}
            </p>
            <button> Detail </button>
          </div>
        </Link>
      </Fragment>
    );
  }
}

export default Presentation;
