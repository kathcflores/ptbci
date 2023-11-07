// function App() {
//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <div className="app">
//           {shouldShowSidebar() && <Sidebar isSidebar={isSidebar} />}
//           <main className="content">
//             <Routes>
//               <Route path="/" element={<Login />} />
//               <Route path="/login" element={<Login />} />
//               <Route path="/signup" element={<Signup />} />
//               <Route path="/form" element={<Form />} />

//               <Route path="/dashboard" element={<Dashboard />} />
//               <Route path="/patient_info" element={<Patient_Info />} />
//               <Route path="/contacts" element={<Contacts />} />
//               <Route path="/symptoms" element={<Symptoms />} />
//               <Route path="/form" element={<Form />} />
//               <Route path="/bar" element={<Bar />} />
//               <Route path="/pie" element={<Pie />} />
//               <Route path="/line" element={<Line />} />
//               <Route path="/calendar" element={<Calendar />} />
//             </Routes>
//           </main>
//         </div>
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// }
import {useState} from 'react';
import { useLocation } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Sidebar from "./pages/global/Sidebar";

import { Outlet } from 'react-router-dom';

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar] = useState(true);
  const location = useLocation();

  // Function to check if the current location matches certain paths
    const shouldShowSidebar = () => {
    const { pathname } = location;
    return !['/form', '/login', '/signup'].includes(pathname);
  };

  return (
      <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {shouldShowSidebar() && <Sidebar isSidebar={isSidebar} />}
          <Outlet />
        </div>
       </ThemeProvider>
     </ColorModeContext.Provider>
  );
}

export default App;
