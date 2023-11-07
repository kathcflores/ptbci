import React, { useState } from 'react';
import {
    Grid, TextField, FormControl, InputLabel, Select, MenuItem, Button, Container, useTheme
} from '@mui/material';
import { tokens } from "../theme";

const ReferralForm = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    //states for form fields
    const [reasonForReferral, setReasonForReferral] = useState('');
    const [screeningChoice, setScreeningChoice] = useState('');
    const [highRiskGroup, setHighRiskGroup] = useState('');
    const [otherReason, setOtherReason] = useState(''); // State for the "Others" TextField input
    const [decentralizeChoice, setDecentralizeChoice] = useState('');

    //states for text fields
    const [caseNumber, setCaseNumber] = useState('');
    const [referringFacility, setReferringFacility] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState('');
    const [facilityAddress, setFacilityAddress] = useState('');
    const [patientName, setPatientName] = useState('');
    const [age, setAge] = useState('');

    const handleReasonChange = (event) => {
        setScreeningChoice('');
        setReasonForReferral(event.target.value);
    };

    const handleScreeningChoiceChange = (event) => {
        setScreeningChoice(event.target.value);
        if (event.target.value !== 'Others') {
            setOtherReason(''); // Reset 'otherReason' if 'Others' is not selected
        }
    };

    const handleDecentralizeChoiceChange = (event) => {
        setDecentralizeChoice(event.target.value);
    }

    const handleHighRiskGroupChange = (event) => {
        setHighRiskGroup(event.target.value);
    };

    const handleOtherReasonChange = (event) => {
        setOtherReason(event.target.value);
    };

    //handleChange functions for text fields
    const handleCaseNumberChange = (event) => setCaseNumber(event.target.value);
    const handleReferringFacilityChange = (event) => setReferringFacility(event.target.value);
    const handleContactNumberChange = (event) => setContactNumber(event.target.value);
    const handleEmailChange = (event) => setEmail(event.target.value);
    const handleFacilityAddressChange = (event) => setFacilityAddress(event.target.value);
    const handlePatientNameChange = (event) => setPatientName(event.target.value);
    const handleAgeChange = (event) => setAge(event.target.value);

    return (
        <Container component="main" maxWidth="md" style={{backgroundColor: colors.blueAccent[800], padding: '3rem'}}>
            <div className="patient-form">
                {/* ... your existing components ... */}

                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="TB/TPT Case Number"
                            value={caseNumber}
                            onChange={handleCaseNumberChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Name of Referring Facility/Unit"
                            value={referringFacility}
                            onChange={handleReferringFacilityChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Contact Number"
                            value={contactNumber}
                            onChange={handleContactNumberChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Address of Referring Facility/Unit"
                            value={facilityAddress}
                            onChange={handleFacilityAddressChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Patient’s Full Name"
                            value={patientName}
                            onChange={handlePatientNameChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Age"
                            value={age}
                            type="number" // Ensures only numbers can be input
                            onChange={handleAgeChange}
                        />
                    </Grid>
                </Grid>
                
                <Grid item xs={12}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel id="reason-for-referral-label">Reason for Referral</InputLabel>
                        <Select
                            labelId="reason-for-referral-label"
                            id="reason-for-referral"
                            value={reasonForReferral}
                            label="Reason for Referral"
                            onChange={handleReasonChange}
                        >
                            <MenuItem value="Screening">For Screening</MenuItem>
                            {/* ... other MenuItems for other reasons ... */}
                        </Select>
                    </FormControl>
                    {reasonForReferral === 'Screening' && (
                        <React.Fragment>
                            <FormControl fullWidth variant="outlined" style={{ marginTop: 8 }}>
                                <InputLabel id="screening-choice-label">Screening Choices</InputLabel>
                                <Select
                                    labelId="screening-choice-label"
                                    id="screening-choice"
                                    value={screeningChoice}
                                    label="Screening Choices"
                                    onChange={handleScreeningChoiceChange}
                                >
                                    <MenuItem value="HighRiskClinicalGroup">High Risk Clinical Group</MenuItem>
                                    <MenuItem value="HighRiskPopulation">High Risk Population</MenuItem>
                                    <MenuItem value="OtherRiskFactors">Other Risk Factors</MenuItem>
                                    <MenuItem value="TBTreatment">For start of TB Treatment</MenuItem>
                                    <MenuItem value="StartTPT">For start of TPT</MenuItem>
                                    <MenuItem value="TransferOut">For continuation of treatment/transfer out</MenuItem>
                                    <MenuItem value="Decentralize">For continuation of treatment/decentralize</MenuItem>
                                    <MenuItem value="Others">Others, kindly specify</MenuItem>
                                    {/* ... other nested MenuItems ... */}
                                </Select>
                            </FormControl>
                            {screeningChoice === 'OtherRiskFactors' && (
                                <FormControl fullWidth variant="outlined" style={{ marginTop: 8 }}>
                                    <InputLabel id="high-risk-group-label">High Risk Group</InputLabel>
                                    <Select
                                        labelId="high-risk-group-label"
                                        id="high-risk-group"
                                        value={highRiskGroup}
                                        label="High Risk Group"
                                        onChange={handleHighRiskGroupChange}
                                    >
                                        <MenuItem value="ContactOfConfirmedCase">Contact of a confirmed DS/DR-TB case</MenuItem>
                                        <MenuItem value="Retreatment">Retreatment</MenuItem>
                                    </Select>
                                </FormControl>
                            )}
                            {screeningChoice === 'Others' && (
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    label="Specify Other Reason"
                                    value={otherReason}
                                    onChange={handleOtherReasonChange}
                                    style={{ marginTop: 8 }}
                                />
                            )}
                            {screeningChoice === 'Decentralize' && (
                                <FormControl  fullWidth variant="outlined" style={{ marginTop: 8}}>
                                  <InputLabel id="decentralize-choice-label">Decentralize Choices</InputLabel>
                            <Select
                                labelId="decentralize-choice-label"
                                id="decentralize-choice"
                                value={decentralizeChoice}
                                label="Decentralize Choices"
                                onChange={handleDecentralizeChoiceChange}
                            >
                                <MenuItem value="BC/CD">Bacteriological Status [BC/CD]</MenuItem>
                                <MenuItem value="P/EP">Anatomical Site [P/EP]</MenuItem>
                                <MenuItem value="DS/DR/Unk">Drug-susceptibility [DS/DR/Unk]</MenuItem>
                                <MenuItem value="New/Retreatment">Treatment History [New/Retreatment]</MenuItem>
                            </Select>  
                                </FormControl>  
                            )}
                        </React.Fragment>
                    )}
                </Grid>

                {/* ... the rest of your grid items ... */}

                <Grid container justifyContent="center" style={{marginTop: '1rem'}}>
                    <Button variant="contained" color="primary" type="submit" style={{backgroundColor: colors.greenAccent[600]}}>
                        Submit
                    </Button>
                </Grid>
            </div>
        </Container>
    );
};

export default ReferralForm;
