import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// import AddCertETH from "./components/addCert";
// import GetAllCertificates from "./components/getAllCert";
// import Sidebar from './components/sidebar'
// import Admin from './components/admin'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
         <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="users">
            <Route index element={<List/>}/>
            <Route path=":userId" element={<Single/>}/>
            <Route path="new" element={<New/>}/>
          </Route>
          <Route path="products">
            <Route index element={<List/>}/>
            <Route path=":productId" element={<Single/>}/>
            <Route path="new" element={<New/>}/>
          </Route>
         </Route>
        </Routes>
      </BrowserRouter>
    </div>
    //  <Sidebar/>
    //  <Admin></Admin>
    //  <BlogviewPage></BlogviewPage>
    // {/* <AddCertETH/> */}
  );
}

export default App;
