import React from 'react';
import {
  HashLink
} from 'react-router-hash-link';
import ListIcon from '../Assets/list_white_24dp.svg';

import './Navbar.css';

export default function Navbar() {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbarBestStyle" >
        <div className="container-fluid containerBasic" >
          <HashLink className="navbar-brand" to="/">
            <img className = "logoImgStyle"
            src = "https://firebasestorage.googleapis.com/v0/b/m-tech-9d5da.appspot.com/o/Logo.svg?alt=media&token=81451f1d-1fa7-45c7-b577-4d053e551984"
            alt = "Img" />
          </HashLink>
          <div className="navbar-toggler" type="button" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <HashLink className="nav-link active navItemTextStyle1" aria-current="page" to="/Contact">
                  <button type="button" className="btn btn-info navbarContactBtn">Aloqa</button>
            </HashLink>
          </div>
          {/* <div className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <img className='iconForMobile' src={ListIcon} alt="Img" />
          </div> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <HashLink className="nav-link active navItemTextStyle" aria-current="page" to="/About">Biz haqimizda</HashLink>
              </li>
              <li className="nav-item">
                <HashLink  className="nav-link active navItemTextStyle" aria-current="page"  to="/#product">Mahsulotlarimiz</HashLink>
              </li>
              <li className="nav-item">
                <HashLink   className="nav-link active navItemTextStyle" aria-current="page" to="/#ourServise">Xizmatlarimiz</HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link active navItemTextStyle" aria-current="page" to="/#partners">Hamkorlarimiz</HashLink>
              </li> */}
              <li className="nav-item">
                <HashLink className="nav-link active navItemTextStyle1" aria-current="page" to="/Contact">
                  <button type="button" className="btn btn-info navbarContactBtn">Aloqa</button>
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

  )
}