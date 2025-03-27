import { parentVariants, transition } from "@/animation/transition";
import useDB from "@/hooks/useDB";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import TextMask from "../TextMask";
import ExtendedFamily from "./ExtendedFamily";

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
 * Divider variant
 */
const dividerVariants = {
  hidden: {
    scaleX: 0,
    originX: 0.5,
  },
  show: {
    scaleX: 1,
    originX: 0.5,
    transition,
  },
  exit: {
    opacity: 0,
  },
};

/**
 * Footer component
 */
const Footer = () => {
  const { groom, bride } = useDB((db) => db.wedding.couple);
  const blessingText =
    "Your Blessing and Prayers are a great gift to us.";
  const happyCoupleText = "The Happy Couple";

  return (
    <Box
      component={motion.div}
      variants={parentVariants}
      initial="hidden"
      whileInView="show"
      exit="exit"
      viewport={{ once: true }}
      py={18}
    >
      <Container>
        <Grid
          container
          spacing={5}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Typography
              variant="h4"
              sx={{ textAlign: "center", fontFamily: "Arizonia" }}
            >
              {blessingText.split(" ").map((text, key) => (
                <TextMask key={key} variants={textVariants}>
                  {text}
                </TextMask>
              ))}
            </Typography>
          </Grid>

          <Grid item xs={12} mb={5}>
            <Divider
              sx={{ my: 5 }}
              component={motion.div}
              variants={dividerVariants}
            >
              <FavoriteTwoToneIcon sx={{ fontSize: 50 }} />
            </Divider>

            {/*<Typography
              variant="h2"
              sx={{ textAlign: "center", fontFamily: "Arizonia" }}
            >
              {happyCoupleText.split(" ").map((text, key) => (
                <TextMask key={key} variants={textVariants}>
                  {text}
                </TextMask>
              ))}
            </Typography>*/}
          </Grid>

          {/* Groom's family */}
          <Grid item md={6} xs={12}>
            <ExtendedFamily
              title="R. S. V. P."
              line_1={"Rashid Hussain Saifi"}
              line_2={"Sajid Ali, Haider Ali"}
              line_3={"Mohd. Arif, Raees Ahmad, Mohd. Yameen"}
              line_4={"Zeeshan Saifi, Arman Saifi"}
            />
          </Grid>

          {/* Bride's family */}
          <Grid item md={6} xs={12} sx={{ mt: { md: 0, xs: 5 } }}>
            <ExtendedFamily
            title="W. B. C. F."
              line_1={"Haji Mabood Ali"}
              line_2={"Near Gosiya Masjid, Gullarghatti"}
              line_3={"Ramnagar (Nainital) U.K."}
              line_4={"Mob.  9568318786, 7351182786"}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
