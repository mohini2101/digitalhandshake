import logo from './logo.svg';
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Login from './Components/login/login'
import ChangePassword from './Components/ChangePassword/ChangePassword';
import SendOTP from './Components/SendOtp/SendOTP';
import CreateNewPassword from './Components/CreateNewPassword/CreateNewPassword';
import SuccessDialog from './Components/Dialog/SuccessDialog';
import SignUp from './Components/SignUp/SignUp';
import TeamVisitingCardList from './Components/TeamVisitingCardList/TeamVisitingCardList';
import ProtectedRouting from './Middleware/protectedRouting';
import TextField from '@mui/material/TextField';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProtectedRouting Component={Login}/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/SignUp' element={<SignUp/>} />
          <Route path='/ChangePassword' element={<ProtectedRouting Component={ChangePassword}/>} />
          <Route path='/CreateNewPassword' element={<ProtectedRouting Component={CreateNewPassword}/>} />
          <Route path='/SuccessDialog' element={<ProtectedRouting Component={SuccessDialog}/>} />
          <Route path='/TeamVisitingCardList' element={<ProtectedRouting Component={TeamVisitingCardList}/>} />
        </Routes>
      </BrowserRouter>

      {/* <Login /> */}
      {/* <ChangePassword/> */}
      {/* <SendOTP/> */}
      {/* <CreateNewPassword/> */}
      {/* <SuccessDialog/> */}
      {/* <SignUp/> */}
    </div>
  );
}

export default App;
