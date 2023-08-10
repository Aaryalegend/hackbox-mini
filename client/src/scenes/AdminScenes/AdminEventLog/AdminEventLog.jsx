import React, { useState, useEffect } from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { motion } from "framer-motion";
import moment from "moment";

import Header from "components/Header";
import EventActions from "./EventActions";
import DataGridCustomToolbar from "components/DataGridCustomToolbar";
import { useApprovedEventsQuery } from "state/eventApiSlice";
import { useGetUsersQuery } from "state/userApiSlice";

const filterAndSortData = (data) => {
  return data
    .filter((item) => item.status === true)
    .sort(
      (a, b) => moment(new Date(b.startDate)) - moment(new Date(a.startDate))
    );
};

const AdminEventLog = () => {
  const theme = useTheme();
  //state
  const [events, setEvents] = useState(null);
  //RTK Query
  const { data: users } = useGetUsersQuery();
  const { data, isLoading } = useApprovedEventsQuery();
  //useEffect
  useEffect(() => {
    if (data) {
      const filteredData = filterAndSortData(data);
      setEvents(filteredData);
    }
  }, [data]);

  //Function to sort table on the basis of date
  const dayInMonthComparator = (v1, v2) =>
    moment(new Date(v1)) - moment(new Date(v2));

  const columns = [
    {
      field: "name",
      headerName: "Event Name",
      minWidth: 250,
      flex: 1,
    },
    {
      field: "committee",
      headerName: "Organized By",
      minWidth: 250,
      flex: 0.6,
      valueGetter: (params) => params.value[0].name,
      renderCell: (params) => {
        return params.row.committee[0].name;
      },
    },
    {
      field: "startDate",
      headerName: "Date",
      minWidth: 150,
      flex: 0.3,
      valueGetter: (params) => params.row.startDate,
      valueFormatter: ({ value }) =>
        moment(new Date(value)).format("Do MMMM YYYY"),
      renderCell: (params) => {
        return moment(new Date(params.row.startDate)).format("MMMM Do YYYY");
      },
      sortComparator: dayInMonthComparator,
    },
    {
      field: "registrations",
      headerName: "Registrations",
      type: "number",
      minWidth: 120,
      flex: 0.3,
      valueGetter: (params) => {
        return users?.filter((user) => user.event[0].id === params.row._id)
          .length;
      },
      renderCell: (params) => {
        return users?.filter((user) => user.event[0].id === params.row._id)
          .length;
      },
    },

    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      minWidth: 250,
      renderCell: (params) => (
        <EventActions data={events} users={users} {...{ params }} />
      ),
    },
  ];
  const csvOptions = { fileName: "event-log" };

  return (
    <Box
      m='1rem 2.5rem'
      position='relative'
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, ease: "easeInOut" }}
    >
      <Header title='EVENT LOGS' subtitle='Generate Event Reports.' />
      <Box
        mt='20px'
        pb='20px'
        height='75vh'
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading}
          getRowId={(row) => row._id}
          rows={events || []}
          columns={columns}
          components={{ Toolbar: DataGridCustomToolbar }}
          componentsProps={{
            toolbar: { csvOptions, showExport: true, events },
          }}
        ></DataGrid>
      </Box>
    </Box>
  );
};

export default AdminEventLog;
