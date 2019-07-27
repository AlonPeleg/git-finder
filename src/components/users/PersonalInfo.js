import React,{Fragment} from "react";

const PersonalInfo = ({ login, company, blog }) => {
  return (
    <ul>
      <li>
        {login && (
          <Fragment>
            <strong>Username: </strong> {login}
          </Fragment>
        )}
      </li>
      <li>
        {company && (
          <Fragment>
            <strong>Company: </strong> {company}
          </Fragment>
        )}
      </li>
      <li>
        {blog && (
          <Fragment>
            <strong>Website: </strong> {blog}
          </Fragment>
        )}
      </li>
    </ul>
  );
};

export default PersonalInfo;
