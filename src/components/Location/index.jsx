import useDB from "@/hooks/useDB";
import { Box, Container } from "@mui/material";

/**
 *
 * @returns React.ReactElement
 */
const Location = () => {
  const { gmaps } = useDB((db) => db.wedding.nikaah);
  return (
    <Box
      sx={{
        py: 15,
        backgroundColor: "text.secondary",
      }}
    >
      <Container>
        <Box
          component="iframe"
          title="Google Maps"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={gmaps.iframeSrc}
          sx={{
            width: "100%",
            height: 450,
            border: 0,
            borderColor: "divider",
            borderRadius: 1,
          }}
        />
      </Container>
    </Box>
  );
};

export default Location;
