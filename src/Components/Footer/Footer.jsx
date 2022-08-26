import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  HashLink
} from 'react-router-hash-link';




function Footer() {

  return (
    <div className="footerWrapper">
      <div className="container">
        <div className="row footerTopStyle">
          <div className="col-sm-6 col-md-2 col-lg-2">
            <img
              className="FooimgTer"
              src="https://firebasestorage.googleapis.com/v0/b/m-tech-9d5da.appspot.com/o/Logo.svg?alt=media&token=81451f1d-1fa7-45c7-b577-4d053e551984"
              alt=""
            />
            <p className="footerSmallTextStyle">
              Biz bilan istalgan turdagi raqamli mahsulotlarni to’laqonli va
              sifatli jarayonda, professional jamoa bilan quring
            </p>
          </div>
          <div className="col-sm-6 col-md-2 col-lg-2">
            <img
              className="footerLogo1"
              src="https://firebasestorage.googleapis.com/v0/b/m-tech-9d5da.appspot.com/o/oodlyLogo.svg?alt=media&token=64826dbb-f5e1-4a88-b028-bb606887724c"
              alt=""
            />
            <HashLink
               onClick={() =>
          window.scrollTo({
            left: 0,
            top: 0,
            behavior: "smooth",
          })
        }
              to="/About">
              <p className="footerBigAllTextStyle">Biz haqimizda</p>
            </HashLink>
          </div>
          <div className="col-sm-6 col-md-2 col-lg-2">
            <img
              className="footerLogo5"
              src="https://firebasestorage.googleapis.com/v0/b/m-tech-9d5da.appspot.com/o/UzteaLogo.svg?alt=media&token=d60672ae-2612-43ed-a581-bedd9584b30c"
              alt=""
            />
            <HashLink
            to="/#ourServise">
              <p className="footerBigAllTextStyle">Xizmatlarimiz</p>
            </HashLink>
          </div>
          <div className="col-sm-6 col-md-2 col-lg-2 allSocialMediaFooter">
            <img
              className="footerLogo3"
              src="https://firebasestorage.googleapis.com/v0/b/m-tech-9d5da.appspot.com/o/Carbozor.uzLogo.svg?alt=media&token=f0a5ca0f-d6f4-4cd1-b83b-8ce1eac4c2cd"
              alt=""
            />
            <HashLink to="/#product">
              <p className="footerBigAllTextStyle">Mahsulotlarimiz</p>
            </HashLink>
          </div>
          <div className="col-sm-6 col-md-2 col-lg-2">
            <img
              className="footerLogo4"
              src="https://firebasestorage.googleapis.com/v0/b/m-tech-9d5da.appspot.com/o/MahoratMLogo.svg?alt=media&token=468183bd-d768-4d87-b7f0-0e26ce3d6819"
              alt=""
            />
            <HashLink to="/#partners">
              <p className="footerBigAllTextStyle">Hamkorlarimiz</p>
            </HashLink>
          </div>
          <div className="col-sm-6 col-md-2 col-lg-2">
            <img
              className="footerLogo2"
              src="https://firebasestorage.googleapis.com/v0/b/m-tech-9d5da.appspot.com/o/3min.uzLogo.svg?alt=media&token=5fd28a4e-83ed-4584-88ba-136607449c35"
              alt=""
            />{' '}
            <br />
            <img
              className="footerSocialMedia"
              src="https://firebasestorage.googleapis.com/v0/b/m-tech-9d5da.appspot.com/o/telegramIMG.svg?alt=media&token=50d19143-df32-453f-88e4-567da5909ba6"
              alt=""
            />
            <a href="https://www.instagram.com/mahorat_official/">
              <img
                className="footerSocialMedia"
                src="https://firebasestorage.googleapis.com/v0/b/m-tech-9d5da.appspot.com/o/InstagramIMG.svg?alt=media&token=5add3421-11c0-43bc-a36a-e0b6be96d64b"
                alt=""
              />
            </a>
            <a href="https://www.facebook.com/MTech-112451601571884">
              <img
                className="footerSocialMedia"
                src="https://firebasestorage.googleapis.com/v0/b/m-tech-9d5da.appspot.com/o/FasebookIMG.svg?alt=media&token=4703a08c-6e6e-48a8-9fa1-d3d9600f26d7"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
