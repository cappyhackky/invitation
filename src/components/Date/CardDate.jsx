import { transition } from "@/animation/transition";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";
import MapTwoToneIcon from "@mui/icons-material/MapTwoTone";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import React from "react";
import TextMask from "../TextMask";

const parentVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    y: 1,
    opacity: 1,
    transition: {
      ...transition,
      staggerChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
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

// Icons variants
const iconVariants = {
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
 * Event Date Component
 *
 * @returns React.ReactElement
 */
const CardDate = ({ title, date, time_1, time_2, time_3, time_4, location, address, link }) => {
  const eventTimes = [
    { time: "07:00 PM", event: "Reception of Baarat" },
    { time: "08:00 PM", event: "Nikaah" },
    { time: "09:00 PM", event: "Dinner" },
    { time: "10:00 PM", event: "Rukhsati" }
  ];
  return (
    <Card
      elevation={0}
      variant="outlined"
      component={motion.div}
      variants={parentVariants}
      initial="hidden"
      whileInView="show"
      exit="exit"
      viewport={{ once: true }}
      sx={{ borderRadius: 0 }}
    >
      <CardContent
        sx={{
          pt: 5,
          px: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          color="text.primary"
          variant="h3"
          sx={{ textAlign: "center", fontWeight: 700 }}
        >
          {title.split(" ").map((text, key) => (
            <TextMask key={key} variants={textVariants}>
              {text}
            </TextMask>
          ))}
        </Typography>

        <Box
          component={motion.div}
          variants={iconVariants}
          sx={{
            border: 2,
            borderColor: "text.primary",
            borderRadius: "50%",
            width: 100,
            height: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 3,
          }}
        >
          <CalendarMonthTwoToneIcon
            sx={{ fontSize: 60, color: "text.primary" }}
          />
        </Box>

        <Typography
          color="text.primary"
          variant="h5"
          component="p"
          sx={{ textAlign: "center", mt: 4, fontWeight: 700 }}
        >
          {date.split(" ").map((text, key) => (
            <TextMask key={key} variants={textVariants}>
              {text}
            </TextMask>
          ))}
        </Typography>

        <TableContainer>
          <Table sx={{ width: '100%' }}>
            <TableBody>
              {eventTimes.map((row, index) => (
                <TableRow key={index}>
                  <TableCell align="center">
                    <Typography color="text.primary" variant="body2" sx={{textAlign:'left', fontWeight: 700 }}>
                      {row.event}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography color="text.primary" variant="body2" sx={{textAlign:'right', fontWeight: 700 }}>
                      {row.time}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box
          component={motion.div}
          variants={iconVariants}
          sx={{
            border: 2,
            borderColor: "text.primary",
            borderRadius: "50%",
            width: 100,
            height: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 4,
          }}
        >
          <MapTwoToneIcon sx={{ fontSize: 60, color: "text.primary" }} />
        </Box>

        <Typography
          color="text.primary"
          variant="h5"
          component="p"
          sx={{ textAlign: "center", mt: 4, fontWeight: 700 }}
        >
          {location.split(" ").map((text, key) => (
            <TextMask key={key} variants={textVariants}>
              {text}
            </TextMask>
          ))}
        </Typography>

        <Typography
          color="text.primary"
          variant="body2"
          sx={{ textAlign: "center", fontWeight: 700, mt: 2 }}
        >
          {address.split(" ").map((text, key) => (
            <TextMask key={key} variants={textVariants}>
              {text}
            </TextMask>
          ))}
        </Typography>
      </CardContent>

      <CardActions sx={{ p: 5 }}>
        <Button
          component={motion.a}
          variants={iconVariants}
          disableElevation
          fullWidth
          size="large"
          variant="contained"
          color="secondary"
          startIcon={<LocationOnTwoToneIcon />}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ borderRadius: 0 }}
        >
          Visit via Maps
        </Button>
      </CardActions>
    </Card>
  );
};

/**
 * CardDate prop types
 */
CardDate.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time_1: PropTypes.string.isRequired,
  time_2: PropTypes.string.isRequired,
  time_3: PropTypes.string.isRequired,
  time_4: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default React.memo(CardDate);
