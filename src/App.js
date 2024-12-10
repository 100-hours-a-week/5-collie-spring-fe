import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from './pages/loginPage.jsx';
import JoinmemberPage from './pages/joinmemberPage'
import PostPage from './pages/postPage'
import EditprofilePage from './pages/editprofilePage';
import EditpwdPage from './pages/editpasswordPage';
import WritepostPage from './pages/writepostPage';
import EditpostPage from './pages/editpostPage';
import PostviewPage from './pages/PostviewPage';
import IntroPage from './pages/introPage.jsx';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/joinmember" element={<JoinmemberPage/>}/>
        <Route path="/post" element={<PostPage/>}/>
        <Route path="/editpwd" element={<EditpwdPage/>}/>
        <Route path="/editprofile" element={<EditprofilePage/>}/>
        <Route path="/writepost" element={<WritepostPage/>}/>
        <Route path="/post/:id" element={<PostviewPage/>}/> 
        <Route path="/editpost" element={<EditpostPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;