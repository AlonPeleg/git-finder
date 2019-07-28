import React, { useEffect, Fragment } from "react";
import Spinner from "../layouts/Spinner";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Badges from "./Badges";
import Repos from "../repos/Repos";
import PersonalInfo from "./PersonalInfo";
import PersonalImg from "./PersonalImg";
import Bio from "./Bio";

const User = ({ user, loading, repos, getUser, getUserRepos, match }) => {
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

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
  } = user;

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
        <PersonalImg avatar_url={avatar_url} name={name} location={location} />
        <div>
          <Bio bio={bio} html_url={html_url} />
          <PersonalInfo login={login} company={company} blog={blog} />
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
};

User.propTypes = {
  loading: PropTypes.bool,
  user: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  getUserRepos: PropTypes.func.isRequired
};

export default User;
