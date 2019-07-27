import React, { Component, Fragment } from "react";
import Spinner from "../layouts/Spinner";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Badges from "./Badges";
import Repos from "../repos/Repos";
import PersonalInfo from './PersonalInfo'
import Bio from './Bio'

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
    getUserRepos: PropTypes.func.isRequired
  };

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      company,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.props.user;

    const { loading, repos } = this.props;

    if (loading) return <Spinner />;
    return (
      <Fragment>
        <Link to="/" className="btn btn-light">
          Back To Search
        </Link>
        Hireable:{" "}
        {hireable ? (
          <i className="fas fa-check text-success" />
        ) : (
          <i className="fas fa-times-circle text-danger" />
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              alt=""
              className="round-img"
              style={{ width: 150 }}
            />
            <h1>{name}</h1>
            <p>location: {location}</p>
          </div>
          <div>
            <Bio bio={bio} html_url={html_url}/>
            <PersonalInfo login={login} company={company} blog={blog}/>
          </div>
        </div>
        <Badges
          followers={followers}
          following={following}
          public_repos={public_repos}
          public_gists={public_gists}
        />
        <Repos repos={repos} />
      </Fragment>
    );
  }
}

export default User;
