import React from 'react';
import {
  HashLink
} from 'react-router-hash-link';

export default function Home() {

  return (
    <div>
          <div className="homeWrapper">
        <p className='homeBigText'>
          Raqamli mahsulotlar bilan <br /> yorqin kelajak sari
        </p>
        <p className='homeSmallText'>
          Biz bilan istalgan turdagi raqamli mahsulotlarni to’laqonli va sifatli jarayonda, <br /> professional jamoa bilan quring.
        </p>
      </div>

      <div className="partnerShips" id="partners">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-3 col-lg-3">
              <img className='parnershipsLogoStyle1' src="https://firebasestorage.googleapis.com/v0/b/m-tech-9d5da.appspot.com/o/oodlyLogo.svg?alt=media&token=64826dbb-f5e1-4a88-b028-bb606887724c" alt="" />
            </div>
            <div className="col-sm-12 col-md-2 col-lg-2">
              <img className='parnershipsLogoStyle5' src="https://firebasestorage.googleapis.com/v0/b/m-tech-9d5da.appspot.com/o/Carbozor.uzLogo.svg?alt=media&token=f0a5ca0f-d6f4-4cd1-b83b-8ce1eac4c2cd" alt="" />
            </div>
            <div className="col-sm-12 col-md-2 col-lg-2">
              <img className='parnershipsLogoStyle3' src="https://firebasestorage.googleapis.com/v0/b/m-tech-9d5da.appspot.com/o/MahoratMLogo.svg?alt=media&token=468183bd-d768-4d87-b7f0-0e26ce3d6819" alt="" />
            </div>
            <div className="col-sm-12 col-md-2 col-lg-2">
              <img className='parnershipsLogoStyle4' src="https://firebasestorage.googleapis.com/v0/b/m-tech-9d5da.appspot.com/o/UzteaLogo.svg?alt=media&token=d60672ae-2612-43ed-a581-bedd9584b30c" alt="" />
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3">
              <img className='parnershipsLogoStyle2' src="https://firebasestorage.googleapis.com/v0/b/m-tech-9d5da.appspot.com/o/3min.uzLogo.svg?alt=media&token=5fd28a4e-83ed-4584-88ba-136607449c35" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="ourMissionWrapper" id='aboutUs'>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <img className='ourMIssionImg' src="https://firebasestorage.googleapis.com/v0/b/m-tech-9d5da.appspot.com/o/OurMissionImg.svg?alt=media&token=282e0f05-a620-4dfd-bcbc-c6d6f5ac75b1" alt="" />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6" >
              <p className='ourMissionBigText'>
                Bizning Maqsadimiz
              </p>
              <p className='ourMIssionSmallText'>
                <span className='numberStytle'>1.</span> Butun Respublikamiz bo’ylab yuqori sifatli, tizimli, puxta <br />
                reja bilan tayyorlangan, dunyo standartlariga javob <br />
                beradigan raqamli mahsulotlarni taqdim etish <br />
                <span className='numberStytle'>2.</span> Butun Respublikamizdagi katta va kichik bizneslarni <br />
                rivojlantirishga, hali tizimlashtirilib ulgurmagan barcha <br />
                bo’limlarni tizimlashtirishga hissa qo’shish <br />
                <span className='numberStytle'>3.</span> Dunyo tajribalari jamlangan jamoa bilan birgalikda raqamli <br />
                mahsulotlarni taqdim etish orqali mahalliy aholiga qulaylik <br />
                yaratish va ularning hayot tarzini yengillashtirish uchun <br />
                hissa qo’shish
              </p>
              <HashLink to="About">
                <button className='homeLinkAboutBtn'>Learn More</button>
              </HashLink>
            </div>
          </div>
        </div>
      </div>

      <div className="ourServiseWrapper" id='ourServise'>
        <p className='ourServiseBasicTitle'>Bizning xizmatlarimiz</p>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 ourServiseImg1" >
              <div className="card">
                <div className="layer">
                  <h1 className="testimonialTextStyle">Software Development</h1>

                  <p className="testimonialSmallTextAtyle">
                    Dasturiy ta'minotni ishlab chiqish, dasturiy ta'minotni yaratish, <br />
                    loyihalash, joylashtirish va qo'llab-quvvatlash xizmatlarini taklif <br />
                    etamiz.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 ourServiseImg2" >
              <div className="card">
                <div className="layer">
                  <h1 className="testimonialTextStyle">UX/UI Design</h1>

                  <p className="testimonialSmallTextAtyle">
                    Ma’ lum bir loyiha uchun UX ishlab chiqish va ushbu UX asosida <br />
                    optimal yechimga ega dizaynlarni ishlab chiqish
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 ourServiseImg3">
              <div className="card">
                <div className="layer">
                  <h1 className="testimonialTextStyle">IT Audit</h1>

                  <p className="testimonialSmallTextAtyle">
                    Bu axborot sohasidagi mavjud muammolarni xolisona baholash <br />
                    va ularni hal etish rejasini tayyorlash imkoniyatidir. <br />
                    Bu tashkilotning moddiy-texnik bazasini mustaqil professional <br />
                    baholash xizmati
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 ourServiseImg4" >
              <div className="card">
                <div className="layer">
                  <h1 className="testimonialTextStyle">Business automatization</h1>

                  <p className="testimonialSmallTextAtyle">
                    Katta va kichik bizneslar rivoji uchun ulardagi turli xil jarayonlarn <br />
                    tizimlashtirish va boshqaruvni osonlashtirish xizmati
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ourProductsWrap" id="product">
        <p className='ourProductsBasicTitle'>
          Mahsulotlarimiz
        </p>

        <div className="container">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item tryMarginLeft" role="presentation">
              <button className="nav-link active ourServiseInsideNavStyle" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">CRM</button>
            </li>
            <li className="nav-item tryMarginLeft" role="presentation" >
              <button className="nav-link ourServiseInsideNavStyle" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">E-commmerce</button>
            </li>
            <li className="nav-item tryMarginLeft" role="presentation" >
              <button className="nav-link ourServiseInsideNavStyle" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false"> Web sites</button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <p className='insideNavTitleStyle'>
                      Goodly CRM
                    </p>
                    <p className='insideNavSmallTextStyle'>
                      Goodly Customer Relationship Management System - Uzoq <br />
                      muddatli davr mobaynida shakllangan, mashg’ulot zallarining <br />
                      ish jarayonidagi chalkashliklarni, tushunmovchiliklarni bartaraf <br />
                      etish maqsadida, mashg’ulot zallarining ish faoliyatidagi har bir <br />
                      bo’limini tizimlashtirish, jarayonni esa keskin osonlashtirish, <br />
                      boshqaruvni mustahkamlashga mo’ljallangan puxta va maxsus ishlab <br />
                      chiqilgan tizim hisoblanadi.Tizimdan foydalangan <br />
                      holatda, istalgan zal o’z ish jarayonini, xususan, mijozlar bilan <br />
                      o’zaro munosabatni, kirim - chiqim, xodimlar boshqaruvi, jihozlar <br />
                      aktivligini, ijtimoiy tarmoqlar orqali kelib tushadigan <br />
                      qiziqishlarni tizimlashtirishlari mumkin.
                    </p>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6" >
                    <img className="ourProductImgStyle2" src="https://firebasestorage.googleapis.com/v0/b/m-tech-9d5da.appspot.com/o/ourProductCRM.svg?alt=media&token=dcac6c16-a83f-4f0b-b640-f998c8f0b66e" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <p className='insideNavTitleStyle'>
                      Fierte.uz
                    </p>
                    <p className='insideNavSmallTextStyle'>
                      Ayollar uchun qimmatbaho zargarlik buyumlari jamlangan <br />
                      do’konlarni birlashtiruvchi elektron tijorat <br />
                      tizimi.Bu tijorat tizimi mahsulot egasi va mijoz orasida yaxshi munosabat <br />
                      o’rnatish uchun, ularga yuqori darajada qulaylik yaratish uchun <br />
                      tizimli, aniq reja asosida ishlab chiqilgan.Shunindek, tizim o’z <br />
                      ichida foydalanuvchi uchun yoqimli, qulay interfeyslar va <br />
                      ma’lumotlar uchun xavfsiz dasturiy ta’minotni ham o’z ichiga <br />
                      oladi.Shu bilan birga, do’kondor uchun tizimlashtirilgan <br />
                      boshqaruvni, mijoz uchun esa mahsulotlarni sifatini o’zaro <br />
                      solishtirish, vaqtni va mablag’ni tejagan holatda natijali xaridni <br />
                      va’da qiladi
                    </p>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6" >
                    <img className="ourProductImgStyle" src="https://firebasestorage.googleapis.com/v0/b/m-tech-9d5da.appspot.com/o/ECommersImg.svg?alt=media&token=6f4e688f-fdd8-4b0c-bcd3-67b0684a294d" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <p className='insideNavTitleStyle'>
                      Mahorat Management.uz
                    </p>
                    <p className='insideNavSmallTextStyle'>
                      Ushbu web site foydalanuvchilar uchun maksimal <br />
                      qulayliklarga ega foydalanuvchi tajribasini va jozibali <br />
                      interfeyslarni o’z ichiga oladi.Shu bilan birgalikda, xavfsiz <br />
                      dasturiy ta’ minotni hamkafolatlaydi va web site sizga <br />
                      o’zining sifatli, ishonchli xizmatlarini va’da qiladi
                    </p>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6" >
                    <img className="ourProductImgStyle3" src="https://firebasestorage.googleapis.com/v0/b/m-tech-9d5da.appspot.com/o/m%26m.svg?alt=media&token=a65fb3a9-d052-4715-b85c-2e3a52c1d61b" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
