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
import Event from './Components/Events/Event';
import Group from './Components/Groups/Group';
import Tag from './Components/tags/Tag';
import CreateTeam from './Components/TeamCreatePopUp/CreateTeam';
import TeamList from './Components/TeamList/TeamList';
import DetailedTeam from './Components/DetailedTeam/DetailedTeam';
import CameraFront from "./Components/CameraFront/CameraFront";
import DetailCard  from './Components/DetailCard/DetailCard';
import Frame from './Components/FramePage/Frame';
import Notify from "./Components/Notify/Notify";
import HomeDash from "./Components/HomeDashBoard/homeDash"
import SuccessPopup from './Components/SuccessFulLogin/SuccessPopup';
import Account from './Components/UserAccount/Account';
import TeamMemberList from './Components/TeamMemberList/TeamMemberList/MemberList';
import VisitingCardList from './Components/VisitingCardList/VisitingCardList';
import Team from './Components/TeamDashboard/Team';
import Card from './Components/CreateCard/Card';
import Success from './Components/Success/Success';
import MobileOTP from './Components/SignwithOTP/MobileOTP';


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
          <Route path='/tag' element={<ProtectedRouting Component={Tag}/>} />
          <Route path='/event' element={<ProtectedRouting Component={Event}/>} />
          <Route path='/group' element={<ProtectedRouting Component={Group}/>} />
          <Route path='/createteam' element={<ProtectedRouting Component={CreateTeam}/>} />
          <Route path='/teamlist' element={<ProtectedRouting Component={TeamList}/>} />
          <Route path='/detailedteam' element={<ProtectedRouting Component={DetailedTeam}/>} />
          <Route path="/CameraFront" element={< ProtectedRouting Component={CameraFront} />} />
          <Route path='/DetailCard' element={<ProtectedRouting Component={DetailCard}/>} />
          <Route path='/frame' element={<ProtectedRouting Component={Frame}/>} />
          <Route path="/Notify" element={< ProtectedRouting Component={Notify}/>} />
          <Route path="/HomeDash" element={<ProtectedRouting Component= {HomeDash }/>} />
          <Route path='/successpopup' element={<ProtectedRouting Component={SuccessPopup}/>} />
          <Route path='/teamdashboard' element={<ProtectedRouting Component={Team}/>} />
          <Route path='/teammemberlist' element={<ProtectedRouting Component={TeamMemberList}/>} />
          <Route path='/account' element={<ProtectedRouting Component={Account}/>} />
          <Route path='/VisitingCardList' element={<ProtectedRouting Component={VisitingCardList}/>} />
          <Route path='/card' element={<ProtectedRouting Component={Card}/>} />
          <Route path='/success' element={<ProtectedRouting Component={Success}/>} />
          <Route path='/mobileOTP' element={<MobileOTP />}></Route>
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




