import {
  Box,
  MenuItem,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";

const EventFilter = ({
  setAnimateCard,
  setFilteredEvents,
  events,
  committees,
}) => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilter = ({ target }) => {
    setActiveFilter(target.value);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (target.value === "all") {
        setFilteredEvents(events);
      } else {
        setFilteredEvents(
          events.filter((event) => event.committee[0].name === target.value)
        );
      }
    }, 500);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        paddingBottom: "2rem",
      }}
    >
      <Typography>Filter:</Typography>
      <TextField
        margin='dense'
        color='secondary'
        name='upcomingFilter'
        variant='outlined'
        sx={{ width: isNonMobile ? "17rem" : "18rem" }}
        notched='true'
        value={activeFilter}
        id='committee'
        select
        label='Committee'
        onChange={handleFilter}
      >
        <MenuItem value='all' selected>
          All
        </MenuItem>
        {committees &&
          Object.values(committees.committees).map((committee) => (
            <MenuItem key={committee} value={committee}>
              {committee}
            </MenuItem>
          ))}
      </TextField>
    </Box>
  );
};

export default EventFilter;
