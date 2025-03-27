import { parentVariants, transition } from "@/animation/transition";
import { Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import TextMask from "../TextMask";

/**
 * Text variant
 */
const textVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition,
  },
  exit: {
    opacity: 0,
  },
};

/**
 * Opening words component
 *
 * @returns React.ReactElement
 */
const Words = () => {
  // const greeting = "Assalamu'alaikum Warahmatullahi Wabarakatuh";
  // const words =
  //   "Glory be to Allah who created His creatures in pairs. O Allah, grant us the opportunity to weave the love You created between us to follow the Sunnah of Your Messenger in establishing a family that is peaceful, loving, and full of mercy.";
  const greeting = "In the name of Allah";
  const greeting_2 = "The most Benificient & Merciful"
  const grandparents = "Mrs. & Mr Haji Mabood Ali"
  const greeting_3 = "Request the honour of your presence at the"
  const greeting_4 = "NIKAAH"
  const greeting_5 = "of their beloved Grand Daughter"
  const words =
    "In the name of Allah ";

  return (
    <Container
      component={motion.div}
      variants={parentVariants}
      initial="hidden"
      whileInView="show"
      exit="exit"
      viewport={{ once: true }}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        my: 20,
      }}
    >
      <Typography
        variant="h2"
        component="div"
        sx={{
          textAlign: "center",
          fontSize: {
            md: "3em",
            xs: "2em",
          },
        }}
      >
        {greeting.split(" ").map((text, key) => (
          <TextMask key={key} variants={textVariants}>
            {text}
          </TextMask>
        ))}
      </Typography>
      <Typography
        variant="h6"
        component="div"
        sx={{
          textAlign: "center",
        }}
      >
        {greeting_2.split(" ").map((text, key) => (
          <TextMask key={key} variants={textVariants}>
            {text}
          </TextMask>
        ))}
      </Typography>
      <Typography
        variant="gp"
        component="div"
        sx={{
          textAlign: "center",
          fontSize: {
            md: "3em",
            xs: "2em",
          },
        }}
      >
        {grandparents.split(" ").map((text, key) => (
          <TextMask key={key} variants={textVariants}>
            {text}
          </TextMask>
        ))}
      </Typography>
      <Typography
        variant="h6"
        component="div"
        sx={{
          textAlign: "center",
        }}
      >
        {greeting_3.split(" ").map((text, key) => (
          <TextMask key={key} variants={textVariants}>
            {text}
          </TextMask>
        ))}
      </Typography>
      <Typography
        variant="gp"
        component="div"
        sx={{
          textAlign: "center",
          fontSize: {
            md: "3em",
            xs: "2em",
          },
        }}
      >
        {greeting_4.split(" ").map((text, key) => (
          <TextMask key={key} variants={textVariants}>
            {text}
          </TextMask>
        ))}
      </Typography>
      <Typography
        variant="h3"
        component="div"
        sx={{
          textAlign: "center",
        }}
      >
        {greeting_5.split(" ").map((text, key) => (
          <TextMask key={key} variants={textVariants}>
            {text}
          </TextMask>
        ))}
      </Typography>
    </Container>
  );
};

export default Words;
