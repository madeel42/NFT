import logo from './logo.svg';
import './App.css';
import NFTFORM from './Component/NFTforn/NFT'
import {Nftitem} from './Component/Item/Nftitem'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const  App = ()=> {
  return <Router>

     <div>
      <Routes>
        <Route exact path="/" element={<NFTFORM />} />
        <Route  path="/nftitem/:id" element={<Nftitem />} />
      </Routes>
   </div>
  </Router>
}

export default App;
