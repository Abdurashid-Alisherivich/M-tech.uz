import React from 'react'
import './About.css'

export default function About() {
  return (
    <div className="aboutWrapper">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <p className="ABoutBasicTitle">Biz kimmiz?</p>
            <p className="aboutDescriptionTitile">
              Mahorat Tech mamlakatimizda bugungi kundagi Axborot <br />
              texnologoyalariga bog’liq muammolarga jahon standartlariga mos <br />
              ravishda yechim berish uchun, dunyoning rivojlangan mamlakatlarida <br />
              tajriba olgan mutaxassislarning birlashgan jamoasi va o’z qadryat- <br />
              an’analariga ega kompaniya.Kompaniya sizga istalgan murakkablikdagi <br />
              raqamli mahsulotlar uchun yaxlit, ishonchli, samarali yechimni va’da <br />
              qiladi.Shuningdek, har bir mahsulot sifati uchun alohida qayg’uriladi va <br />
              har bir mijozning xohish-istaklari hisobga olinib, ularning yuqori qoniqish <br />
              darajasi uchun harakat qilinadi.Kompaniyamiz mijozlarni shunchaki mijoz <br />
              sifatida emas, balki uzoq muddatli hamkor sifatida qabul qiladi. 
            </p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <img
              className="AboutImg"
              src="https://firebasestorage.googleapis.com/v0/b/m-tech-9d5da.appspot.com/o/about%201.svg?alt=media&token=8ff673a6-dde6-497a-80e9-7389669d5491"
              alt="Img"
            />
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6">
            <img
              className="AboutImg2"
              src="https://firebasestorage.googleapis.com/v0/b/m-tech-9d5da.appspot.com/o/about%202.svg?alt=media&token=48a839e6-fbdb-4e4a-aa4e-9f5662064acd"
              alt="Img"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <p className="ABoutBasicTitle2">Bizning maqsadimiz</p>
            <p className="aboutDescriptionTitile2">
              O’z qadryatlari, milliy an’analarni o’zida mujassam etgan va yaqin <br />
              kelajakda O’zbekistonning axborot texnologiya sohasi bo’yicha sezilarli <br />
              rivojlanish uchun harakat qilayotgan Mahorat tech ning o’z oldiga qo’ygan <br />
              missiyalari quyidagilardan iborat:

            <ol className='ulOlLiStyleAbout'>
              <li>                
                  Butun Respublikamiz bo’ylab yuqori sifatli, tizimli, puxta reja bilan <br />
                  tayyorlangan, dunyo standartlariga javob beradigan raqamli <br />
                  mahsulotlarni taqdim etish
              </li>
              <li>                
                  Butun Respublikamizdagi katta va kichik bizneslarni rivojlantirishga, <br />
                  hali tizimlashtirilib ulgurmagan barcha bo’limlarni tizimlashtirishga hissa <br />
                  qo’shish
              </li>
              <li>                
                  Dunyo tajribalari jamlangan jamoa bilan birgalikda raqamli <br />
                  mahsulotlarni taqdim etish orqali mahalliy aholiga qulaylik yaratish va <br />
                  ularning hayot tarzini yengillashtirish uchun hissa qo’shish
              </li>
            </ol>
            </p>
          </div>
          
                  
            <div className="col-sm-12 col-md-6 col-lg-6">
            <p className="ABoutBasicTitle3">Bizning afzalliklarimiz</p>
            <p className="aboutDescriptionTitile3">
              Mahorat tech ning mijozlarga xizmat ko’rsatish jarayonida boshqa <br />
              kompaniyalardan afzalliklari:
              <ol className='ulOlLiStyleAbout'>
                <li>
                  Har qanday qiyinlik darajasida bo’lgan raqamli mahsulotni 0 dan <br />
                  tugallanguniga qadar tayyorlay olish mahorati;
                </li>
                <li>
                  Mijozlar uchun maxsus qulayliklar va yuqori darajali xizmat ko’rsatish;
                </li>
                <li>
                  Qisqa muddatda ko’zlangan natijaga erisha olish imkoniyati;
                </li>
                <li>
                  Sifat uchun maxsus kafolat;
                </li>
                <li>
                  Rivojlangan mamlakatlarning tajribalaridan foydalana olish imkoniyati;
                </li>
                <li>
                  Samarali yechimlardan tashqari, biznesni rivojlantirish uchun maxsus <br />
                  maslahatlar to’plami;
                </li>
              </ol>
            </p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <img
              className="AboutImg3"
              src="https://firebasestorage.googleapis.com/v0/b/m-tech-9d5da.appspot.com/o/about%203.svg?alt=media&token=f56e2300-639a-47e9-bf04-3b9de63ea8f4"
              alt="Img"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
