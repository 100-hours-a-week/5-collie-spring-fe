import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from './pages/loginPage.jsx';
import JoinmemberPage from './pages/joinmemberPage'
import PostPage from './pages/postPage'
// import EditprofilePage from './pages/EditprofilePage';
import EditpwdPage from './pages/editpasswordPage';
// import WritepostPage from './pages/WritepostPage';
// import EditpostPage from './pages/EditpostPage';
// import PostviewPage from './pages/PostviewPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/joinmember" element={<JoinmemberPage/>}/>
        <Route path="/post" element={<PostPage/>}/>
        <Route path="/editpwd" element={<EditpwdPage/>}/>
        {/*<Route path="/editprofile" element={<EditprofilePage/>}/>
        <Route path="/editpwd" element={<EditpwdPage/>}/>
        <Route path="/writepost" element={<WritepostPage/>}/>
        <Route path="/editpost" element={<EditpostPage/>}/>
        <Route path="/postview" element={<PostviewPage/>}/> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;