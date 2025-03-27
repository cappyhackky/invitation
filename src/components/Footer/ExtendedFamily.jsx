import { transition } from "@/animation/transition";
import { Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";
import TextMask from "../TextMask";

/**
 * Text variant
 */
const textVariants = {
  hidden: {
    opacity: 0,
    y: "80%",
    skewY: 10,
  },
  show: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition,
  },
  exit: {
    opacity: 0,
  },
};

/**
 * Extended family component for footer
 *
 * @param {object} props
 * @returns
 */
const ExtendedFamily = ({ title, line_1, line_2, line_3, line_4 }) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontFamily: "Arizonia",
            color: "background.paper",
          }}
        >
          {title.split(" ").map((text, key) => (
            <TextMask key={key} variants={textVariants}>
              {text}
            </TextMask>
          ))}
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h5" sx={{ textAlign: "center", fontFamily:'lora' }}>
          {line_1.split(" ").map((text, key) => (
            <TextMask key={key} variants={textVariants}>
              {text}
            </TextMask>
          ))}
        </Typography>
        <Typography variant="h5" sx={{ textAlign: "center", fontFamily:'lora' }}>
          {line_2.split(" ").map((text, key) => (
            <TextMask key={key} variants={textVariants}>
              {text}
            </TextMask>
          ))}
        </Typography>
        <Typography variant="h5" sx={{ textAlign: "center", fontFamily:'lora' }}>
          {line_3.split(" ").map((text, key) => (
            <TextMask key={key} variants={textVariants}>
              {text}
            </TextMask>
          ))}
        </Typography>
        <Typography variant="h5" sx={{ textAlign: "center", fontFamily:'lora' }}>
          {line_4.split(" ").map((text, key) => (
            <TextMask key={key} variants={textVariants}>
              {text}
            </TextMask>
          ))}
        </Typography>
      </Grid>
    </Grid>
  );
};

/**
 * Prop types
 */
ExtendedFamily.propTypes = {
  title: PropTypes.string.isRequired,
  // father: PropTypes.string.isRequired,
  // mother: PropTypes.string.isRequired,
};

export default ExtendedFamily;
