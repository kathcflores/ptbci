import { Box, Button, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../config/firestore";

const Test = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  const navigatesForm = () => {
    navigate('/add');
  };

  useEffect(() => {

    // LISTEN (REALTIME)
    const unsub = onSnapshot(
      collection(db, "sTreatmentPlan"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "sTreatmentPlan", id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      renderCell: (params) => {
        return (
        <div className="cellAction">
            <Link to="/add" >
              <div className="viewButton">Edit</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

// table
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
        field: "sdate",
        headerName: "Start Date",
        flex: 1,
      },
    {
      field: "edate",
      headerName: "End Date",
      flex: 1,
    },
    {
        field: "status",
        headerName: "Status",
        flex: 1,
      }, 
  ];

  return (
    <Box m="20px">
      <Header title="TREATMENT PLAN" subtitle="Treatment Progress of Patients" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={data} columns={columns.concat(actionColumn)} />

        <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained" onClick={navigatesForm}> 
                Add Patient TP
              </Button>
            </Box>
      </Box>
    </Box>
  );
};

export default Test;
