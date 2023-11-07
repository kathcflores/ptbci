import {
    Grid, TextField, FormControl, InputLabel, Select, MenuItem, Typography, Button, RadioGroup, FormControlLabel, Radio, Container, useTheme
} from '@mui/material';
import { tokens } from "../theme";

const PatientGenForm = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
      return (
        <Container component="main" maxWidth="md" style={{backgroundColor: colors.blueAccent[800], padding: '3rem'}}>
          <div className="patient-form">
          <Typography variant="h2" gutterBottom style={{color: colors.white, fontWeight: 'bold', fontSize: '2.5rem'}}>
            Patient General Information
          </Typography>
          <Typography variant="subtitle1" gutterBottom style={{color: colors.greenAccent[500], fontSize: '1rem'}}>
            Please fill up the patient general information form
          </Typography>
    
              <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextField fullWidth label="Full Name" placeholder="Full Name" variant="outlined" />
                </Grid>
                <Grid item xs={6}>
                    <TextField fullWidth label="Alias (if applicable)" placeholder="Alias" variant="outlined" />
                </Grid>

                <Grid item xs={3}>
                    <TextField fullWidth label="Birthdate" type="date" variant="outlined" InputLabelProps={{ shrink: true }} />
                </Grid>

                <Grid item xs={3}>
                    <TextField fullWidth label="Height (ft)" placeholder="Height (ft)" variant="outlined" />
                </Grid>

                <Grid item xs={3}>
                    <TextField fullWidth label="Weight (kg)" placeholder="Weight (kg)" variant="outlined" />
                </Grid>

                <Grid item xs={3}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel>Gender</InputLabel>
                        <Select label="Gender">
                            <MenuItem value="">
                                <em>Choose...</em>
                            </MenuItem>
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={6}>
                    <TextField fullWidth label="Parent/Guardian Name" placeholder="Full Name" variant="outlined" />
                </Grid>
                <Grid item xs={6}>
                    <TextField fullWidth label="Parent/Guardian Email" placeholder="Email" variant="outlined" />
                </Grid>
                  <Grid item xs={6}>
                      <TextField fullWidth label="Parent/Guardian Contact Number" type="tel" placeholder="Contact Number" variant="outlined" />
                  </Grid>
                  <Grid item xs={6}>
                      <FormControl fullWidth variant="outlined">
                          <InputLabel>Relationship to Patient</InputLabel>
                          <Select label="Relationship to Patient">
                              <MenuItem value="">
                                  <em>Choose...</em>
                              </MenuItem>
                              <MenuItem value="father">Father</MenuItem>
                              <MenuItem value="mother">Mother</MenuItem>
                              <MenuItem value="sibling">Siblings</MenuItem>
                              <MenuItem value="grandparents">Grandparents</MenuItem>
                              <MenuItem value="legalguardian">Legal Guardian</MenuItem>
                          </Select>
                      </FormControl>
                  </Grid>
                  
                  <Grid item xs={6}>
                      <TextField fullWidth label="Secondary Contact (Another parent/guardian)" placeholder="Name" variant="outlined" />
                  </Grid>
                  <Grid item xs={6}>
                      <TextField fullWidth label="Secondary Contact Number" type="tel" placeholder="Contact Number" variant="outlined" />
                  </Grid>
  
                  <Grid item xs={6}>
                      <TextField fullWidth label="Emergency Contact Person" placeholder="Full Name" variant="outlined" />
                  </Grid>
                  <Grid item xs={6}>
                      <TextField fullWidth label="Emergency Contact Number" type="tel" placeholder="Contact Number" variant="outlined" />
                  </Grid>
                  
                  <Grid item xs={4}>
                      <TextField fullWidth label="House Name/Block/Street No." variant="outlined" />
                  </Grid>
                  <Grid item xs={4}>
                      <TextField fullWidth label="Barangay" variant="outlined" />
                  </Grid>
                  <Grid item xs={2}>
                      <TextField fullWidth label="City" variant="outlined" />
                  </Grid>
                  <Grid item xs={2}>
                      <TextField fullWidth label="Province" variant="outlined" />
                  </Grid>
  
                  <Grid item xs={4}>
                      <Typography variant="body1" gutterBottom>Annual chest x-ray available:</Typography>
                      <RadioGroup row name="xray">
                          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                          <FormControlLabel value="no" control={<Radio />} label="No" />
                      </RadioGroup>
                  </Grid>
  
                  <Grid item xs={4}>
                      <Typography variant="body1" gutterBottom>History of TB drug treatment (of the child):</Typography>
                      <RadioGroup row name="tbHistory">
                          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                          <FormControlLabel value="no" control={<Radio />} label="No" />
                      </RadioGroup>
                  </Grid>
  
                  <Grid item xs={4}>
                      <Typography variant="body1" gutterBottom>Experiencing symptoms in the past 2 weeks:</Typography>
                      <RadioGroup row name="symptoms">
                          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                          <FormControlLabel value="no" control={<Radio />} label="No" />
                      </RadioGroup>
                  </Grid>
  
                  <Grid container justifyContent="center" style={{marginTop: '1rem'}}>
                    <Button variant="contained" color="primary" type="submit" style={{backgroundColor: colors.greenAccent[600]}}>
                        Submit
                    </Button>
                  </Grid>
              </Grid>
          </div>
        </Container>
      );
  };
  
  export default PatientGenForm;
  