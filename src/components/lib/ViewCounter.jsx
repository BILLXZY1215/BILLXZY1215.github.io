import React, { useEffect, useState } from "react";
import firebase from "gatsby-plugin-firebase";
import { Badge, ChakraProvider } from "@chakra-ui/react";

const incrementViews = async (id) => {
  const ref = firebase.database().ref(`/views`).child(id);

  ref.transaction((currentViews) => {
    return currentViews + 1;
  });
};

const ViewCounter = ({ data, colorScheme, extraText }) => {
  const [viewCount, setViewCount] = useState("");
  const id_pretty = (x) => {
    let res = "";
    for (var i = 0; i < x.length; i++) {
      res += x.charCodeAt(i);
    }
    return res;
  };
  const id = id_pretty(data);

  useEffect(() => {
    // 1 is displayed for a split second and then the correct count
    // This is a workaround
    const onViews = (newViews) => {
      setViewCount(newViews.val() === 1 ? 0 : newViews.val());
    };

    incrementViews(id);

    firebase.database().ref(`/views`).child(id).on(`value`, onViews);

    return () => {
      if (firebase.database()) {
        firebase.database().ref(`/views`).child(id).off(`value`, onViews);
      }
    };
  }, [id]);

  return (
    <ChakraProvider>
      <Badge variant="outline" colorScheme={colorScheme} ml={2} mb={2}>
        {viewCount ? viewCount : `---`} views {extraText}
      </Badge>
    </ChakraProvider>
  );
};

export default ViewCounter;
