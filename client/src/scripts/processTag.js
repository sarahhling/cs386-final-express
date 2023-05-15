import styles from "../styles/Tag.module.css";

function processTag(type) {
  var style;
  var value;
  switch (type) {
    case "opinion":
      style = styles.opinion;
      value = "( Opinion Piece )";
      break;
    case "very_high":
      style = styles.veryHigh;
      value = "Facts: Very High";
      break;
    case "high":
      style = styles.high;
      value = "Facts: High";
      break;
    case "mostly_factual":
      style = styles.mostlyFactual;
      value = "Facts: Mostly Factual";
      break;
    case "mixed":
      style = styles.mixed;
      value = "Facts: Mixed";
      break;
    case "low":
      style = styles.low;
      value = "Facts: Low";
      break;
    case "very_low":
      style = styles.veryLow;
      value = "Facts: Very Low";
      break;
    case "extreme_left":
      style = styles.extreme_left;
      value = "Extreme Left";
      break;
    case "left":
      style = styles.left;
      value = "Left";
      break;
    case "left_center":
      style = styles.leftCenter;
      value = "Left-Center";
      break;
    case "least_biased":
      style = styles.leastBiased;
      value = "Least Biased";
      break;
    case "right_center":
      style = styles.rightCenter;
      value = "Right-Center";
      break;
    case "right":
      style = styles.right;
      value = "Right";
      break;
    case "extreme_right":
      style = styles.extreme_right;
      value = "Extreme Right";
      break;
    case "conspiracy":
      style = styles.conspiracy;
      value = "Pseudoscience/Conspiracy";
      break;
    case "satire":
      style = styles.satire;
      value = "Satire";
      break;
    default:
  }
  return { style, value };
}

export { processTag };
