import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaRedditSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

const SocialShareButtons = ({ url, title }) => {
  return (
    <div style={{
    display: "flex",
    justifyContent: "space-around",
    width: "auto",
    }}
    >
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://www.facebook.com/dialog/share?app_id=1180206992856877&display=popup&href=${url}`}
      >
        <FaFacebookSquare style={{
        color: "#3b5998",
        width: 50,
        height: "auto",
        }}/>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://twitter.com/intent/tweet?url=${url}`}
      >
        <FaTwitterSquare style={{
        color: "#00acee",
        width: 50,
        height: "auto",}} />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`http://www.reddit.com/submit?url=${url}&title=${title}`}
      >
        <FaRedditSquare style={{
        color: "#ff4500",
        width: 50,
        height: "auto",
        }} />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://api.whatsapp.com/send/?text=${url}`}
      >
        <FaWhatsappSquare style={{
        color: "#25D366",
        width: 50,
        height: "auto",
        }} />
      </a>
    </div>
  );
};

export default SocialShareButtons;
