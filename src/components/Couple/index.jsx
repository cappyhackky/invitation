import useDB from "@/hooks/useDB";
import { Box, Stack } from "@mui/material";
import React from "react";
import CoupleProfile from "./CoupleProfile";

/**
 * Couple component
 *
 * @returns React.ReactElement
 */
const Couple = () => {
  // const { bride, groom } = useDB((db) => db.wedding.couple);
  const couple = useDB((db) => db.wedding.couple);
  return (
    <Box>
      <CoupleProfile couple={couple} />
      {/* <CoupleProfile couple={groom} /> */}
    </Box>
  );
};

export default Couple;
