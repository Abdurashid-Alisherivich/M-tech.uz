import React, { useState } from 'react'
import axios from 'axios'
import './Contcat.css'

export default function Contact() {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [service, setService] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      Name: name,
      Email: email,
      LastName: lastName,
      PhoneNumber: phoneNumber,
      Service: service,
      Date: new Date().toLocaleDateString(),
    }

    axios
      .post(
        'https://sheet.best/api/sheets/a639b390-d44c-4285-8183-4e1e7195b9ac',
        data,
      )
      .then((response) => {
        setName('')
        setLastName('')
        setEmail('')
        setPhoneNumber('')
        setService('')
      })
  }

  return (
    <div className="contactWrapper">
      <div className="container">
        <p className="contactBasicTitle">Biz bilan bog’lanish</p>
        <p className="contactDescription">
          Quyidagi shaklni to'ldiring, biz sizning qiziqishingizni <br />
          qadrlaymiz va tez orada siz bilan bo’lanamiz.
        </p>

        <div className="grtidSistemInContact">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-7 col-lg-7">
                <form
                  className="form-inline"
                  onSubmit={handleSubmit}
                  method="post"
                  id="sheetdb-form"
                >
                  <label
                    label
                    for="exampleFormControlInput1"
                    className="form-label allInputsName"
                  >
                    F.I.O
                  </label>
                  <div className="mb- inputsInlineBlocContact">
                    <div className="row">
                      <div className="col-sm-12 col-md-6 col-lg-6">
                        <input
                          type="text"
                          className="firtNameInput form-control"
                          id="exampleFormControlInput1"
                          placeholder="Ism"
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                        />
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-6">
                        <input
                          type="text"
                          className="firtNameInput form-control"
                          id="exampleFormControlInput1"
                          placeholder="Familya"
                          onChange={(e) => setLastName(e.target.value)}
                          value={lastName}
                        />
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-6">
                        <label className="labelInsideContact">
                          Elektron manzilingiz:
                        </label>
                        <input
                          type="email"
                          className="firtNameInput form-control"
                          id="exampleFormControlInput1"
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                        />
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-6">
                        <label className="labelInsideContact">
                          Telefon raqamingiz
                        </label>
                        <input
                          type="text"
                          className="firtNameInput form-control"
                          id="exampleFormControlInput1"
                          placeholder="Tel: +99 8"
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          value={phoneNumber}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="labelInsideContact">
                     Sizni qiziqtirayotgan xizmatlarimiz?
                    </label>
                    <div class="form-check checkRadiosContact">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        value="Software Development"
                        onChange={(e) => setService(e.target.value)}
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Software Development
                      </label>
                    </div>
                    <div class="form-check checkRadiosContact">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        value="UX/UI Design"
                        onChange={(e) => setService(e.target.value)}
                      />
                      <label class="form-check-label" for="flexRadioDefault2">
                        UX/UI Design
                      </label>
                    </div>
                    <div class="form-check checkRadiosContact">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault3"
                        value="IT Audit "
                        onChange={(e) => setService(e.target.value)}
                      />
                      <label class="form-check-label" for="flexRadioDefault3">
                        IT Audit 
                      </label>
                    </div>
                    <div class="form-check checkRadiosContact">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault4"
                        value="Business Automatization"
                        onChange={(e) => setService(e.target.value)}
                      />
                      <label class="form-check-label" for="flexRadioDefault4">
                        Business Automatization
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="submitButtonInContact">
                    Yuborish
                  </button>
                </form>
              </div>
              <div className="col-sm-12 col-md-5 col-lg-5 secondGridPhoneIcon">
                <div className="contactSocialMedia">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/m-tech-9d5da.appspot.com/o/telIcon.svg?alt=media&token=12ff48a7-b29e-4587-8953-0cb12b0cfdb9"
                    alt="Tel:"
                  />{' '}
                  <br /> <br />
                  <p className="contactSocialMediaTextStyle">
                    Telefon raqamimiz
                  </p>
                  <p className="contactSocialMediaNumberTextStyle">
                    +998 90 917-12-33
                  </p>
                  <div className="secondSocialContactStyle">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/m-tech-9d5da.appspot.com/o/mail.svg?alt=media&token=2d0c5400-ea89-4785-843e-288d8db56679"
                      alt="Tel:"
                    />{' '}
                    <br /> <br />
                    <p className="contactSocialMediaTextStyle">
                      Elektron manzilimiz:
                    </p>
                    <p className="contactSocialMediaNumberTextStyle">
                      <a href="mailto:mahorattech@gmail.com">
                        mahorattech@gmail.com
                      </a>
                    </p>
                  </div>
                  <div className="secondSocialContactStyle">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/m-tech-9d5da.appspot.com/o/location.svg?alt=media&token=ab5be4af-28df-4fb7-8e0a-1b85723c3cf7"
                      alt="Tel:"
                    />{' '}
                    <br /> <br />
                    <p className="contactSocialMediaTextStyle">Manzil:</p>
                    <p className="contactSocialMediaNumberTextStyle">
                      Shota Rustavili Street 53B
                    </p>
                    <p className="contactSocialMediaNumberTextStyle">
                      Tashkent, Uzbekistan 100003
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mapSectionInContact">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5996.346567646579!2d69.251601!3d41.283333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x672cf1e7743ccd33!2zNDHCsDE3JzAwLjAiTiA2OcKwMTUnMDUuOCJF!5e0!3m2!1sen!2s!4v1660822945274!5m2!1sen!2s"
          className="mapRealContact"
        ></iframe>
      </div>
    </div>
  )
}
