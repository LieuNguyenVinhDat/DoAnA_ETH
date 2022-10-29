import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import AppSidebar from "./components/sidebar";
import AddCert from "./components/addCert";
import GetAllCertificates from "./components/getAllCert";
import GetDetailsWithDocID from "./components/getDetails.jsx";
import Sidebar from './components/sidebar'
function App() {
  return (

  //  <AppSidebar>
     
  //  </AppSidebar>
 
    <Sidebar/>

  );
}

export default App;
