import React, { useState } from 'react';
import { Box, useTheme } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import TreatmentModal from '../components/TreatmentModal';
import { mockDataPatients } from '../data/mockData'; // Import mock data

const Treatment_History = () => {
  const theme = useTheme();

  // define state for table rows and editing ID
  const [rows, setRows] = useState(mockDataPatients);
  const [editingId, setEditingId] = useState(null);

  // closing of modal and reseting editingid
  const handleClose = () => setEditingId(null);

  // saving of treatment data
  const saveTreatmentData = (updatedTreatmentData) => {
    const updatedRows = rows.map((row) => (
      row.id === editingId ? { ...row, ...updatedTreatmentData } : row
    ));
    setRows(updatedRows);
    handleClose();
  };

  // columns for datagrid component
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'patientName', headerName: 'Patient Name', width: 150 },
    { field: 'treatmentStartDate', headerName: 'Treatment Start Date', type: 'Date', editable: true, width: 180 },
    { field: 'treatmentEndDate', headerName: 'Treatment End Date', type: 'Date', editable: true, width: 180 },
    { field: 'treatmentFacility', headerName: 'Treatment Facility', editable: true, width: 180 },
    {
      field: 'reasonForPreviousTreatment',
      headerName: 'Reason for Previous Treatment',
      type: 'singleSelect',
      valueOptions: ['New TB Case', 'Relapse', 'Treatment Failure', 'Others'],
      editable: true,
      width: 220,
    },
    {
      field: 'treatmentOutcome',
      headerName: 'Treatment Outcome',
      type: 'singleSelect',
      valueOptions: ['Cured', 'Completed Treatment', 'Treatment Failure', 'Transferred Out' , 'Others'],
      editable: true,
      width: 220,
    },
    {
      field: 'medicationsUsed',
      headerName: 'Medications Used',
      editable: true,
      width: 180
    },
    {
      field: 'adherenceToPreviousTreatment',
      headerName: 'Adherence to Previous Treatment',
      type: 'singleSelect',
      valueOptions: ['Good', 'Fair', 'Poor'],
      editable: true,
      width: 230,
    },
    { field: 'adverseReactions', headerName: 'Adverse Reactions', editable: true, width: 200 },
  ];

  return (
    <Box m="20px">
      <h1>TREATMENT HISTORY</h1>
      <Box
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: `1px solid ${theme.palette.divider}`,
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.primary.contrastText,
            borderBottom: `1px solid ${theme.palette.divider}`,
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: theme.palette.background.paper,
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: `1px solid ${theme.palette.divider}`,
            backgroundColor: theme.palette.background.paper,
          },
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          components={{
            Toolbar: GridToolbar,
          }}
          onCellEditCommit={(params) => {
            // to open the modal for fields that require dropdowns or special input types
            if (params.field === 'reasonForPreviousTreatment' || params.field === 'treatmentOutcome' || params.field === 'medicationsUsed') {
              setEditingId(params.id);
            }
          }}
          // add more datagrid properties if required
        />
      </Box>

      {editingId && (
        <TreatmentModal
          open={Boolean(editingId)}
          handleClose={handleClose}
          treatmentData={rows.find((row) => row.id === editingId)}
          saveTreatmentData={saveTreatmentData}
        />
      )}
    </Box>
  );
};

export default Treatment_History;
