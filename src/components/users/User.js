import React, { useEffect, Fragment, useContext } from "react";
import Spinner from "../layouts/Spinner";
import { Link } from "react-router-dom";
import Badges from "./Badges";
import Repos from "../repos/Repos";
import PersonalInfo from "./PersonalInfo";
import PersonalImg from "./PersonalImg";
import Bio from "./Bio";
import GithubContext from "../../context/github/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { getUser, loading, user,repos , getUserRepos } = githubContext;

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

export default User;
