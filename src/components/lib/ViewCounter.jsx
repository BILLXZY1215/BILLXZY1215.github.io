import React, { useEffect, useState } from "react";
import firebase from "gatsby-plugin-firebase";

export const incrementViews = async (id) => {
  const ref = firebase.database().ref(`/views`).child(id);

  ref.transaction((currentViews) => {
    return currentViews + 1;
  });
};

const ViewCounter = ({ path, colorScheme, extraText, badge }) => {
  const [viewCount, setViewCount] = useState("");
  const id_pretty = (x) => {
    let res = "";
    for (var i = 0; i < x.length; i++) {
      res += x.charCodeAt(i);
    }
    return res + "prod"; // unique id for primary key
  };
  const id = id_pretty(path);

  useEffect(() => {
    // 1 is displayed for a split second and then the correct count
    // This is a workaround
    const onViews = (newViews) => {
      setViewCount(newViews.val() === 1 ? 0 : newViews.val());
    };
    if (window.location.pathname === path) {
      incrementViews(id);
    }

    firebase.database().ref(`/views`).child(id).on(`value`, onViews);

    return () => {
      if (firebase.database()) {
        firebase.database().ref(`/views`).child(id).off(`value`, onViews);
      }
    };
  }, [id, path]);

  const badgeStyle = {
    border: "1px solid",
    width: "100%",
    display: "inline",
    margin: "0 0 8px 5px",
    // margin: "2px 0 0 0",
    padding: "1px 3px 1px 3px",
    fontSize: "5px",
    overflow: "auto",
  };

  const titleStyle = {
    width: "100%",
    margin: "2px 0 0 0",
    fontSize: "5px",
    overflow: "auto",
  };

  return (
    // <Badge variant="outline" colorScheme={colorScheme} ml={2}>
    <div style={badge ? badgeStyle : titleStyle}>
      {viewCount ? viewCount : `---`} views {extraText}{" "}
    </div>
    // </Badge>
  );
};

export default ViewCounter;
