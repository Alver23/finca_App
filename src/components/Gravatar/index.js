/* import React from "react";
import PropTypes from "prop-types";
import md5 from "md5";

const Gravatar = ({ email }) => {
  const base = "https://gravatar.com/avatar/";
  const formattedEmail = email.trim().toLowerCase();
  const hash = md5(formattedEmail, { encoding: "binary" });
  
  return <Avatar src={`${base}${hash}?d=identicon`} alt="User Avatar" />;
};

Gravatar.propTypes = { email: PropTypes.string };

export default Gravatar;
*/

import React from "react";
import md5 from "md5";
import Avatar from "./styles";

const Gravatar = (props) => {
  const email = props.email;
  const hash = md5(email || "example");
  /* const avatarUrl = `https://www.gravatar.com/avatar/${hash}?d=identicon`; */
  const avatarUrl = `https://res.cloudinary.com/imagesfull/image/upload/v1590199764/like/RamaCafe_o2tsfw.jpg`;

  return <Avatar className={props.className} src={avatarUrl} alt="Avatar" />;
};

export default Gravatar;
