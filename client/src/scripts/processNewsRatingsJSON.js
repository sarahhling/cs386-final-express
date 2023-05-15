import newsRatings from "../newsRatings.json";

function foundSourceInData(source) {
  const foundSource = newsRatings.find((item) => item.source === source);
  if (foundSource) {
    return true;
  }
  return false; // Return null if the source is not found
}

function findFactualReporting(source) {
  const foundSource = newsRatings.find((item) => item.source === source);
  if (foundSource) {
    return foundSource["factual reporting"];
  }
  return null; // Return null if the source is not found
}

function findBiasRating(source) {
  const foundSource = newsRatings.find((item) => item.source === source);
  if (foundSource) {
    return foundSource["bias rating"];
  }
  return null; // Return null if the source is not found
}

function findOther(source) {
  const foundSource = newsRatings.find((item) => item.source === source);
  if (foundSource) {
    return foundSource["other"];
  }
  return null; // Return null if the source is not found
}

function getInfo(source, opinion) {
  var info = [];
  var facts = findFactualReporting(source);
  var other = findOther(source);
  var bias = findBiasRating(source);
  if (opinion) {
    info.push("opinion");
  }
  if (facts !== "" && facts !== null) {
    info.push(facts);
  }
  if (other !== "" && other !== null) {
    info.push(other);
  }
  if (bias !== "" && bias !== null) {
    info.push(bias);
  }
  return info;
}

export {
  foundSourceInData,
  findFactualReporting,
  findBiasRating,
  findOther,
  getInfo,
};
