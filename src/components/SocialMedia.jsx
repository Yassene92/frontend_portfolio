import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://twitter.com/Yassine73470292"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter />
        </a>
      </div>
      <div>
        <a
          href="https://www.facebook.com/yassine.elhabbazi.7"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/yassine-el-habbazi-3b6340144/">
          <AiFillLinkedin />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
