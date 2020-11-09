import React, { createContext, useContext, useState } from "react";
import moment from "moment";

import avatar from "../assets/carmen-sandiego.png";

const TweetContext = createContext(null);

export const TweetProvider = ({ children }) => {
  const date = moment().format("h:mm a - MMM Do, YYYY");

  const [numOfLikes, setNumOfLikes] = useState(460);
  const [numOfRetweets, setNumOfRetweets] = useState(65);
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);

  const handleToggleLikes = () => {
    const incOrDec = isLiked ? -1 : 1;
    setIsLiked(!isLiked);
    setNumOfLikes(numOfLikes + incOrDec);
  };

  const handleToggleRetweets = () => {
    const incOrDec = isRetweeted ? -1 : 1;
    setIsRetweeted(!isRetweeted);
    setNumOfRetweets(numOfRetweets + incOrDec);
  };

  return (
    <TweetContext.Provider
      value={{
        tweetContents: "Where in the world am I?",
        displayName: "Carmen Sandiego ✨",
        username: "carmen-sandiego",
        avatarSrc: avatar,
        isRetweetedByCurrentUser: isRetweeted,
        isLikedByCurrentUser: isLiked,
        date,
        numOfLikes,
        numOfRetweets,
        setNumOfLikes,
        setNumOfRetweets,
        setIsLiked,
        setIsRetweeted,
        handleToggleLikes,
        handleToggleRetweets,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};

export const useTweet = () => {
  return useContext(TweetContext);
};
