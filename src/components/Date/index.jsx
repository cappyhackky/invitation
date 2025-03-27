import { parentVariants, transition } from "@/animation/transition";
import useDB from "@/hooks/useDB";
import { Container, Divider, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import TextMask from "../TextMask";
import CardDate from "./CardDate";

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
 * Date component
 *
 * @returns React.ReactElement
 */
const Date = () => {
  const textHeader = "Save the Date";
  const { nikaah, reception } = useDB((db) => db.wedding);

  return (
    <Container sx={{ py: 15, alignContent:"center"}}>
      <Grid container spacing={5} sx={{ justifyContent: "center" }}>
        <Grid
          item
          xs={12}
          component={motion.div}
          variants={parentVariants}
          initial="hidden"
          whileInView="show"
          exit="exit"
          viewport={{ once: true }}
        >
          <Typography variant="h4" component="div" sx={{ textAlign: "center" }}>
            {textHeader.split(" ").map((text, key) => (
              <TextMask key={key} variants={textVariants}>
                {text}
              </TextMask>
            ))}
          </Typography>

          <Typography variant="h2" sx={{ textAlign: "center", my: 3 }}>
            {reception.date.split(" ").map((text, key) => (
              <TextMask key={key} variants={textVariants}>
                {text}
              </TextMask>
            ))}
          </Typography>

          <Divider />
        </Grid>

        <Grid item md={8} xs={12}>
          <CardDate
            title="Nikaah Ceremony"
            date={nikaah.date}
            time_1={nikaah.time_1}
            time_2={nikaah.time_2}
            time_3={nikaah.time_3}
            time_4={nikaah.time_4}
            location={nikaah.location}
            address={nikaah.address}
            link={nikaah.gmaps.link}
          />
        </Grid>

        {/* <Grid item md={6} xs={12}>
          <CardDate
            title="Wedding Reception"
            date={reception.date}
            time={reception.time}
            location={reception.location}
            address={reception.address}
            link={reception.gmaps.link}
          />
        </Grid> */}
      </Grid>
    </Container>
  );
};

export default Date;
