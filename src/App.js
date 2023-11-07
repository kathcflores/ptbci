import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./pages/global/Sidebar";
import Dashboard from "./pages/dashboard";
import Patient_Info from "./pages/patient_info";
import Symptoms from "./pages/symptoms";
import Contacts from "./pages/contacts";
import Bar from "./pages/bar";
import Form from "./pages/form";
import Line from "./pages/line";
import Pie from "./pages/pie";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./pages/calendar";
import PatientGenForm from "./pages/patientgenform";
import Treatment_History from "./pages/treatmenthistory";
import ReferralForm from "./pages/referralform";
function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/patient_info" element={<Patient_Info />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/symptoms" element={<Symptoms />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/patientgenform" element={<PatientGenForm />} />
              <Route path="/treatmenthistory" element={<Treatment_History />} />
              <Route path="/referralform" element={<ReferralForm />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;