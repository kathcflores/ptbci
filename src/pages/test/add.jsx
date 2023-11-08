import React, { useState } from "react";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp
} from "firebase/firestore";
import { db } from "../../config/firestore";
import { useNavigate } from "react-router-dom";

//style
import Swal from 'sweetalert2';
import { Box, Button, TextField, Grid } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const Add = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

console.log(data)

  const handleAdd = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "sTreatmentPlan"), {
        ...data,
        timeStamp: serverTimestamp(),
      });
      navigate(-1)
    } catch (err) {
      console.log(err);
    }
  };

  return (
  <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{ minHeight: '100vh' }}
  >
      <Box m="20px">
      <Header title="Treatment Plan" subtitle="Sample Treatment Plan" />

          <form onSubmit={handleAdd}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                id="name"
                type="text"
                name="name"
                label="Name"
                onChange={handleInput}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                id="sdate"
                type="text"
                name="sdate"
                label="Start Date"
                onChange={handleInput}
                sx={{ gridColumn: "span 4" }}
              />
            <TextField
                fullWidth
                variant="filled"
                id="edate"
                type="text"
                name="edate"
                label="End Date"
                onChange={handleInput}
                sx={{ gridColumn: "span 4" }}
              />
             
             <TextField
                fullWidth
                variant="filled"
                id="status"
                type="text"
                name="status"
                label="Status"
                onChange={handleInput}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>

            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                SUBMIT
              </Button>
            </Box>

          </form>
    </Box>
    </Grid>

  );
};

export default Add;