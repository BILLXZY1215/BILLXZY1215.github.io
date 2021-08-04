import React, { useEffect, useState } from "react";
import firebase from "gatsby-plugin-firebase";
import { FiThumbsUp } from "react-icons/fi";
import { Button } from "@chakra-ui/react";

export const incrementViews = async (id) => {
  const ref = firebase.database().ref(`/views`).child(id);

  ref.transaction((currentViews) => {
    return currentViews + 1;
  });
};

const ThumbCounter = ({ path, colorScheme }) => {
  const [viewCount, setViewCount] = useState("");
  const id_pretty = (x) => {
    let res = "";
    for (var i = 0; i < x.length; i++) {
      res += x.charCodeAt(i);
    }
    return res + "prodthumb"; // unique id for primary key
  };
  const id = id_pretty(path);

  useEffect(() => {
    // 1 is displayed for a split second and then the correct count
    // This is a workaround
    const onViews = (newViews) => {
      setViewCount(newViews.val() === 1 ? 0 : newViews.val());
    };
    firebase.database().ref(`/views`).child(id).on(`value`, onViews);

    return () => {
      if (firebase.database()) {
        firebase.database().ref(`/views`).child(id).off(`value`, onViews);
      }
    };
  }, [id, path]);

  const handleClick = () => {
    if (sessionStorage.getItem("path-thumb-Storage") === null) {
      sessionStorage.setItem("path-thumb-Storage", ""); // Initialize
    }
    if (sessionStorage.getItem("path-thumb-Storage").indexOf(id) === -1) {
      incrementViews(id);
      sessionStorage.setItem(
        "path-thumb-Storage",
        sessionStorage.getItem("path-thumb-Storage") + id
      );
    }
  };
  return (
    <Button
      onClick={handleClick}
      leftIcon={<FiThumbsUp />}
      colorScheme={colorScheme}
      size="xs"
      variant={
        !sessionStorage.getItem("path-thumb-Storage") ||
        sessionStorage.getItem("path-thumb-Storage").indexOf(id) === -1
          ? "outline"
          : "solid"
      }
    >
      {viewCount ? viewCount : "---"}
    </Button>
  );
};

export default ThumbCounter;
