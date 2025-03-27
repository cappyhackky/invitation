import { transition, parentVariants } from "@/animation/transition";
import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import React from "react";
import TextMask from "../TextMask";

const photoVariants = {
  hidden: {
    scale: 1.3,
  },
  show: {
    scale: 1,
    transition,
  },
  exit: {
    opacity: 0,
  },
};

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
 * Couple profile component
 *
 * @param {object} props
 * @returns React.ReactElement
*/
const CoupleProfile = ({ couple }) => {
  const { firstName: bride_firstName, lastName: bride_lastName, parents: bride_parents } = couple.bride;
  const { firstName: groom_firstName, lastName: groom_lastName, parents: groom_parents } = couple.groom;

  const bride_fullName = `${bride_firstName} ${bride_lastName}`;
  const bride_parentsName = `Mr. ${bride_parents.father} & Mrs. ${bride_parents.mother}`;
  const groom_fullName = `${groom_firstName} ${groom_lastName}`;
  const groom_parentsName = `Mr. ${groom_parents.father} & Mrs. ${groom_parents.mother}`;

  return (
    <Grid
      container
      spacing={0}
      justifyContent="center"
      alignItems="center"
      sx={{ backgroundColor: couple.bg, position: "relative" }}
    >
      {/* Bride's Section */}
      <Grid
        item
        md={6}
        xs={12}
        sx={{
          py: 10,
          minHeight: { md: "100vh", xs: 300 },
          backgroundColor: couple.bride.bg,
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Container>
          <Typography color="text.default" variant="h2" component="h2" sx={{ mb: 4, textAlign: "center", fontSize: { md: "5em" } }}>
            {bride_fullName}
          </Typography>
          <Typography color="text.default" variant="h2" component="h3" sx={{ mb: 4, textAlign: "center", fontSize: { md: "2.5em" } }}>
            {`(${couple.bride.nickname})`}
          </Typography>
          <Typography
            color="text.default"
            variant="h3"
            component="div"
            sx={{ mb: 4, textAlign: "center" }}
          >
            {bride_parents.description.split(" ").map((text, key) => (
              <TextMask key={key} variants={textVariants}>
                {text}
              </TextMask>
            ))}
          </Typography>
          
          <Typography color="text.default" variant="h4" component="div" sx={{ mb: 4, textAlign: "center" }}>
            {bride_parentsName}
          </Typography>
        </Container>
      </Grid>

      {/* Weds Text */}
      <Grid
        item
        xs={12}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          zIndex: 10, // Ensure it's above the other sections
        }}
      >
        <Typography
          color="text.default"
          variant="h1"
          component="div"
          sx={{
            mb: 4,
            fontWeight: 700,
          }}
        >
          Weds
        </Typography>
      </Grid>

      {/* Groom's Section */}
      <Grid
        item
        md={6}
        xs={12}
        sx={{
          py: 10,
          minHeight: { md: "100vh", xs: 300 },
          backgroundColor: couple.groom.bg,
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Container>
          <Typography color="text.default" variant="h2" component="h2" sx={{ mb: 4, textAlign: "center", fontSize: { md: "5em" } }}>
            {groom_fullName}
          </Typography>
          <Typography color="text.default" variant="h2" component="h3" sx={{ mb: 4, textAlign: "center", fontSize: { md: "2.5em" } }}>
            {`-${couple.groom.nickname}`}
          </Typography>
          <Typography
            color="text.default"
            variant="h3"
            component="div"
            sx={{ mb: 4, textAlign: "center" }}
          >
            {groom_parents.description.split(" ").map((text, key) => (
              <TextMask key={key} variants={textVariants}>
                {text}
              </TextMask>
            ))}
          </Typography>
          

          <Typography color="text.default" variant="h4" component="div" sx={{ mb: 4, textAlign: "center" }}>
            {groom_parentsName}
          </Typography>
        </Container>
      </Grid>
    </Grid>
  );
};

export default React.memo(CoupleProfile);
