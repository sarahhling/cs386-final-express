import React, { useState, useEffect } from "react";
import Headline from "./headline";
import { foundSourceInData } from "../scripts/processNewsRatingsJSON";
import { getInfo } from "../scripts/processNewsRatingsJSON";

function HeadlineBody(props) {
  const { articles, filters } = props;
  const [filterEnabled, setFilterEnabled] = useState(false);
  const [filterTriggerCount, setFilterTriggerCount] = useState(0);
  const [myArticles, setArticles] = useState([]);
  const [factArray, setFactArray] = useState([]);
  const [biasArray, setBiasArray] = useState([]);
  const [otherArray, setOtherArray] = useState([]);
  const processedTitles = new Set(); // Create a set to store processedtitles

  console.log("Filters: " + filters);

  useEffect(() => {
    setArticles(articles);
  }, [articles]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const headlines = await fetchNewsHeadlines(category, query);
  //     setArticles(headlines);
  //   }

  //   fetchData();
  // }, [category, query]);

  useEffect(() => {
    // Skip the first trigger since filters will be empty
    if (!filterTriggerCount) {
      setFilterTriggerCount(1);
    } else {
      setFilterEnabled(true);

      setFactArray(
        filters.filter((value) =>
          [
            "mostly_factual",
            "high",
            "very_high",
            "mixed",
            "low",
            "very_low",
          ].includes(value)
        )
      );
      setBiasArray(
        filters.filter((value) =>
          [
            "extreme_left",
            "left",
            "left_center",
            "least_biased",
            "right_center",
            "right",
            "extreme_right",
          ].includes(value)
        )
      );

      setOtherArray(
        filters.filter((value) =>
          ["conspiracy", "satire", "opinion"].includes(value)
        )
      );
    }
  }, [filters, articles]);

  return (
    <>
      {myArticles.map((article, index) => {
        let foundSource = foundSourceInData(article.rights);
        if (foundSource) {
          article.tags = getInfo(article.rights, article.is_opinion);
          if (
            !filterEnabled ||
            (filterEnabled &&
              (biasArray.length == 0 ||
                biasArray.some((element) => article.tags.includes(element))) &&
              (factArray.length === 0 ||
                factArray.some((element) => article.tags.includes(element))) &&
              (otherArray.length === 0 ||
                otherArray.some((element) => article.tags.includes(element))))
            //filters.every((element) => article.tags.includes(element)))
          ) {
            if (!processedTitles.has(article.title)) {
              // Check if the title has already been processed
              processedTitles.add(article.title); // Add the title to the set
              return (
                <Headline
                  key={index}
                  source={article.rights}
                  headline={article.title}
                  date={article.published_date}
                  url={article.link}
                  imgURL={article.media}
                  opinion={article.is_opinion}
                  tags={article.tags}
                />
              );
            }
          }
        }
      })}
    </>
  );
}

export default HeadlineBody;
