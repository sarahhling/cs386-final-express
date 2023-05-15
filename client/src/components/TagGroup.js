import React, { useEffect, useState } from "react";
import Tag from "./tag";

function TagGroup({ tags }) {
  const [myTags, setTags] = useState([]);

  useEffect(() => {
    setTags(tags);
  }, [tags]);

  //console.log("tag group tags: " + tags);

  return (
    <div className="d-inline">
      {myTags &&
        myTags.length > 0 &&
        myTags.map((tag, index) => {
          //console.log(tag);
          if (tag != "opinion") {
            return <Tag type={tag} key={index} />;
          }
        })}
    </div>
  );
}

export default TagGroup;
