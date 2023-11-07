import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@mui/material';
import AdapterDateFns from '@date-io/date-fns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const TreatmentModal = ({ open, handleClose, treatmentData, saveTreatmentData }) => {
  const [formData, setFormData] = useState({
    // ...initialize with your fields
  });

  useEffect(() => {
    if (treatmentData) {
      setFormData({
        ...treatmentData,
        medicationsUsed: treatmentData.medicationsUsed || [],
        // Add date fields initialization
        treatmentStartDate: treatmentData.treatmentStartDate || null,
        treatmentEndDate: treatmentData.treatmentEndDate || null,
      });
    } else {
      setFormData({
        // ...reset to default values
      });
    }
  }, [treatmentData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Date change handlers
  const handleStartDateChange = (date) => {
    setFormData(prev => ({
      ...prev,
      treatmentStartDate: date,
    }));
  };

  const handleEndDateChange = (date) => {
    setFormData(prev => ({
      ...prev,
      treatmentEndDate: date,
    }));
  };

  const handleSubmit = () => {
    saveTreatmentData({ ...treatmentData, ...formData });
    handleClose();
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Treatment</DialogTitle>
        <DialogContent>
          <DatePicker
            label="Treatment Start Date"
            value={formData.treatmentStartDate}
            onChange={handleStartDateChange}
            renderInput={(params) => (
              <TextField
                {...params}
                name="treatmentStartDate"
                fullWidth
                margin="dense"
              />
            )}
          />
          <DatePicker
            label="Treatment End Date"
            value={formData.treatmentEndDate}
            onChange={handleEndDateChange}
            renderInput={(params) => (
              <TextField
                {...params}
                name="treatmentEndDate"
                fullWidth
                margin="dense"
              />
            )}
          />
          {/* ...other form inputs */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </LocalizationProvider>
  );
};

export default TreatmentModal;
