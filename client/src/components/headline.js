import React from "react";
import Image from "react-bootstrap/Image";
import styles from "../styles/Headline.module.css";
import { Row, Col } from "react-bootstrap";
import TagGroup from "./TagGroup";
import Tag from "./tag";

function Headline(props) {
  var { imgURL, date, headline, url, source, opinion, tags } = props;
  var myOpinion = "";
  if (opinion) {
    myOpinion = "opinion";
  }
  var source_url;

  imgURL = imgURL == null ? "/defaultHeadlineImg.png" : imgURL;
  date = date == null ? "Date Unavailable" : new Date(date);
  headline = headline == null ? "" : headline;
  url = url == null ? "" : url;
  source = source == null ? "" : source;
  source_url = source == null ? "" : "https://www." + source;

  //console.log(`${imgURL}\n${date}\n${headline}\n${url}\n${source}`);

  if (date != "") {
    const options = { month: "long", day: "numeric", year: "numeric" };
    date = date.toLocaleDateString("en-US", options);
  }

  return (
    <Row className="py-2">
      <Col xs={12} sm={12} md={2} xl={2}>
        <Image src={imgURL} className={styles.img} alt="headline image" />
      </Col>
      <Col xs={12} sm={12} md={10} xl={10}>
        <Row className="py-1">
          <p className={`m-0 ${styles.date}`}>
            {date} &nbsp;&nbsp;
            <Tag type={myOpinion} key={0} />
          </p>
        </Row>
        <Row className="pb-1">
          <div>
            <a href={url} className={styles.headline} target="_blank">
              {headline}&nbsp;
            </a>
            <a href={source_url} target="_blank" className={styles.source}>
              <span>({source})</span>
            </a>
          </div>
        </Row>
        <Row>
          <TagGroup tags={tags} />
        </Row>
      </Col>
    </Row>
  );
}

export default Headline;
