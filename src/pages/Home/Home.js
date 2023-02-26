import React from "react";
import Container from "react-bootstrap/Container";
import Navigation from "../../Components/Navigation/Navigation";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import banner1 from "../../asset/banner1.png";
import banner2 from "../../asset/banner2.png";
import banner3 from "../../asset/banner3.png";
import banner4 from "../../asset/banner4.png";
import banner5 from "../../asset/banner5.png";
import banner6 from "../../asset/banner6.png";

const Home = () => {
   return (
      <div>
         <Container>
            <Navigation></Navigation>
            {/* secure banner */}
            <div className="banner-card">
               <Row xs={1} md={2} className="g-4">
                  <Col>
                     <Card className="text-center text-md-start bg-transparent text-light h-100">
                        <Card.Body className="d-flex flex-column justify-content-center">
                           <Card.Title className="mb-0">
                              <h1 className="text-uppercase mb-0">
                                 <span className="textBlue d-inline d-md-block">Secure </span>
                                 <span className="fw-semibold">your communication </span>
                                 <br />
                                 with
                                 <i>
                                    <svg width="60" height="60" viewBox="0 8 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path
                                          d="M38.2596 23.1707C40.6395 21.7966 43.6144 23.5142 43.6144 26.2623L43.6144 43.7368C43.6144 46.4849 40.6395 48.2024 38.2596 46.8284L23.1263 38.0911C20.7463 36.7171 20.7463 33.282 23.1263 31.9079L38.2596 23.1707Z"
                                          fill="url(#paint0_linear_156_40)"
                                          stroke="#0A0A0A"
                                          stroke-width="2.35748"
                                       />
                                       <path
                                          d="M35.5411 20.8024C40.6452 17.8556 47.0254 21.5391 47.0254 27.4329L47.0254 42.5671C47.0254 48.4609 40.6452 52.1444 35.5411 49.1976L22.4344 41.6305C17.3303 38.6836 17.3303 31.3164 22.4344 28.3696L35.5411 20.8024Z"
                                          stroke="white"
                                          stroke-width="1.57165"
                                       />
                                       <defs>
                                          <linearGradient id="paint0_linear_156_40" x1="58.0837" y1="37.0188" x2="19.9899" y2="22.0025" gradientUnits="userSpaceOnUse">
                                             <stop stop-color="#36D1DC" />
                                             <stop offset="1" stop-color="#5B86E5" />
                                          </linearGradient>
                                       </defs>
                                    </svg>
                                 </i>
                                 <span className="textBlue">bmail</span>
                              </h1>
                           </Card.Title>
                           <div>
                              <Card.Text className="text-uppercase fs-6" style={{ letterSpacing: "1px" }}>
                                 Exchange messages securely and directly between wallets.
                              </Card.Text>
                              <div className="position-relative d-inline-block">
                                 <button className="fw-semibold rounded-4 px-3 py-2 text-uppercase border-0 navButton text-white">get Bmail</button>
                              </div>
                           </div>
                        </Card.Body>
                     </Card>
                  </Col>
                  <Col>
                     <Card className="bg-transparent h-100">
                        <Card.Img variant="top" src={banner1} />
                     </Card>
                  </Col>
               </Row>
            </div>
            {/* bmail provide banner */}
            <div className="my-5 py-5">
               <h3 className="fw-light mt-5 w-100 text-uppercase text-white">
                  <span className="textBlue">bMail </span>provides a <span className="textBlue">secure and private </span>email solution using encryption and blockchain.
               </h3>
               <div>
                  <img src={banner2} className="w-100 mt-5 pt-2" alt="banner2" />
               </div>
            </div>
         </Container>
         {/* icon part */}
         <div id="iconBg" className="my-5 py-5">
            <Container className="my-5">
               <div className="d-flex gap-3 flex-wrap justify-content-around">
                  <div>
                     <div className="position-relative d-inline-block">
                        <div className="buttonShadow rounded-4"></div>
                        <div className="position-absolute top-50 start-50 translate-middle">
                           <svg width="42" height="35" viewBox="0 0 42 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                 d="M42 33.0692C41.9965 33.5798 41.7959 34.0686 41.4416 34.4299C41.0872 34.7911 40.6075 34.9959 40.1062 35H5.712C5.20955 34.9995 4.72786 34.7958 4.37275 34.4338C4.01765 34.0717 3.81818 33.5809 3.81818 33.0692V31.1111H38.1818V8.36111L22.9091 22.3611L3.81818 4.86111V1.94444C3.81818 1.42875 4.01932 0.934169 4.37734 0.569515C4.73537 0.20486 5.22095 0 5.72727 0H40.0909C40.5972 0 41.0828 0.20486 41.4408 0.569515C41.7989 0.934169 42 1.42875 42 1.94444V33.0692ZM8.46491 3.88889L22.9091 17.1306L37.3533 3.88889H8.46491ZM0 23.3333H15.2727V27.2222H0V23.3333ZM0 13.6111H9.54545V17.5H0V13.6111Z"
                                 fill="url(#paint0_linear_57_1871)"
                              />
                              <path
                                 d="M42 33.0692C41.9965 33.5798 41.7959 34.0686 41.4416 34.4299C41.0872 34.7911 40.6075 34.9959 40.1062 35H5.712C5.20955 34.9995 4.72786 34.7958 4.37275 34.4338C4.01765 34.0717 3.81818 33.5809 3.81818 33.0692V31.1111H38.1818V8.36111L22.9091 22.3611L3.81818 4.86111V1.94444C3.81818 1.42875 4.01932 0.934169 4.37734 0.569515C4.73537 0.20486 5.22095 0 5.72727 0H40.0909C40.5972 0 41.0828 0.20486 41.4408 0.569515C41.7989 0.934169 42 1.42875 42 1.94444V33.0692ZM8.46491 3.88889L22.9091 17.1306L37.3533 3.88889H8.46491ZM0 23.3333H15.2727V27.2222H0V23.3333ZM0 13.6111H9.54545V17.5H0V13.6111Z"
                                 fill="black"
                                 fillOpacity="0.2"
                              />
                              <defs>
                                 <linearGradient id="paint0_linear_57_1871" x1="43.5167" y1="8.75001" x2="0.506889" y2="16.4505" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#36D1DC" />
                                    <stop offset="1" stopColor="#5B86E5" />
                                 </linearGradient>
                              </defs>
                           </svg>
                        </div>
                     </div>
                     <p className="text-white cardText mt-1">WebMail</p>
                  </div>
                  <div>
                     <div className="position-relative d-inline-block">
                        <div className="buttonShadow rounded-4"></div>
                        <div className="position-absolute top-50 start-50 translate-middle">
                           <svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                 d="M41.7449 17.8288H37.9499V14.0338H21.9844L18.1894 10.2388H7.58992V36.8038H21.7206C22.4174 38.3268 23.5073 39.6367 24.878 40.5988H5.69242C5.18917 40.5988 4.70654 40.3989 4.35069 40.0431C3.99484 39.6872 3.79492 39.2046 3.79492 38.7013V8.34135C3.79492 7.8381 3.99484 7.35546 4.35069 6.99961C4.70654 6.64376 5.18917 6.44385 5.69242 6.44385H19.7605L23.5555 10.2388H39.8474C40.3507 10.2388 40.8333 10.4388 41.1892 10.7946C41.545 11.1505 41.7449 11.6331 41.7449 12.1363V17.8288ZM24.6674 21.6238H41.7449V32.9121C41.7449 34.7906 40.7943 36.5477 39.2099 37.5894L33.2062 41.5438L27.2025 37.5894C26.4257 37.0811 25.7874 36.3877 25.3449 35.5716C24.9024 34.7555 24.6696 33.8423 24.6674 32.914V21.6238ZM28.4624 32.9121C28.4624 33.5117 28.7698 34.0771 29.2897 34.4206L33.2062 37.0012L37.1226 34.4206C37.3748 34.2575 37.5825 34.0342 37.7269 33.7709C37.8714 33.5076 37.948 33.2124 37.9499 32.9121V25.4188H28.4624V32.9121Z"
                                 fill="url(#paint0_linear_57_1887)"
                              />
                              <path
                                 d="M41.7449 17.8288H37.9499V14.0338H21.9844L18.1894 10.2388H7.58992V36.8038H21.7206C22.4174 38.3268 23.5073 39.6367 24.878 40.5988H5.69242C5.18917 40.5988 4.70654 40.3989 4.35069 40.0431C3.99484 39.6872 3.79492 39.2046 3.79492 38.7013V8.34135C3.79492 7.8381 3.99484 7.35546 4.35069 6.99961C4.70654 6.64376 5.18917 6.44385 5.69242 6.44385H19.7605L23.5555 10.2388H39.8474C40.3507 10.2388 40.8333 10.4388 41.1892 10.7946C41.545 11.1505 41.7449 11.6331 41.7449 12.1363V17.8288ZM24.6674 21.6238H41.7449V32.9121C41.7449 34.7906 40.7943 36.5477 39.2099 37.5894L33.2062 41.5438L27.2025 37.5894C26.4257 37.0811 25.7874 36.3877 25.3449 35.5716C24.9024 34.7555 24.6696 33.8423 24.6674 32.914V21.6238ZM28.4624 32.9121C28.4624 33.5117 28.7698 34.0771 29.2897 34.4206L33.2062 37.0012L37.1226 34.4206C37.3748 34.2575 37.5825 34.0342 37.7269 33.7709C37.8714 33.5076 37.948 33.2124 37.9499 32.9121V25.4188H28.4624V32.9121Z"
                                 fill="black"
                                 fillOpacity="0.2"
                              />
                              <defs>
                                 <linearGradient id="paint0_linear_57_1887" x1="43.1153" y1="15.2188" x2="4.02443" y2="21.5248" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#36D1DC" />
                                    <stop offset="1" stopColor="#5B86E5" />
                                 </linearGradient>
                              </defs>
                           </svg>
                        </div>
                     </div>
                     <p className="text-white cardText mt-1">Secure Transfer</p>
                  </div>
                  <div>
                     <div className="position-relative d-inline-block">
                        <div className="buttonShadow rounded-4"></div>
                        <div className="position-absolute top-50 start-50 translate-middle">
                           <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clipPath="url(#clip0_57_1876)">
                                 <path
                                    d="M4.33594 17.8066C4.33494 16.3117 4.62882 14.8314 5.20076 13.4502C5.7727 12.0691 6.61147 10.8144 7.66902 9.7579C8.72657 8.70141 9.98214 7.8639 11.3638 7.29334C12.7455 6.72278 14.2262 6.43038 15.721 6.43288H30.9012C37.1876 6.43288 42.2863 11.5467 42.2863 17.8066V40.5882H15.721C9.43457 40.5882 4.33594 35.4744 4.33594 29.2145V17.8066ZM38.4912 36.7931V17.8066C38.4862 15.7962 37.6846 13.8697 36.2619 12.4492C34.8393 11.0287 32.9116 10.2299 30.9012 10.2279H15.721C14.7246 10.2254 13.7374 10.4197 12.8161 10.7995C11.8949 11.1793 11.0577 11.7373 10.3525 12.4414C9.64736 13.1455 9.08814 13.9819 8.70691 14.9025C8.32569 15.8232 8.12997 16.8101 8.13097 17.8066V29.2145C8.13599 31.2249 8.93763 33.1514 10.3603 34.5719C11.7829 35.9924 13.7106 36.7911 15.721 36.7931H38.4912ZM27.1061 21.613H30.9012V25.408H27.1061V21.613ZM15.721 21.613H19.5161V25.408H15.721V21.613Z"
                                    fill="url(#paint0_linear_57_1876)"
                                 />
                                 <path
                                    d="M4.33594 17.8066C4.33494 16.3117 4.62882 14.8314 5.20076 13.4502C5.7727 12.0691 6.61147 10.8144 7.66902 9.7579C8.72657 8.70141 9.98214 7.8639 11.3638 7.29334C12.7455 6.72278 14.2262 6.43038 15.721 6.43288H30.9012C37.1876 6.43288 42.2863 11.5467 42.2863 17.8066V40.5882H15.721C9.43457 40.5882 4.33594 35.4744 4.33594 29.2145V17.8066ZM38.4912 36.7931V17.8066C38.4862 15.7962 37.6846 13.8697 36.2619 12.4492C34.8393 11.0287 32.9116 10.2299 30.9012 10.2279H15.721C14.7246 10.2254 13.7374 10.4197 12.8161 10.7995C11.8949 11.1793 11.0577 11.7373 10.3525 12.4414C9.64736 13.1455 9.08814 13.9819 8.70691 14.9025C8.32569 15.8232 8.12997 16.8101 8.13097 17.8066V29.2145C8.13599 31.2249 8.93763 33.1514 10.3603 34.5719C11.7829 35.9924 13.7106 36.7911 15.721 36.7931H38.4912ZM27.1061 21.613H30.9012V25.408H27.1061V21.613ZM15.721 21.613H19.5161V25.408H15.721V21.613Z"
                                    fill="black"
                                    fillOpacity="0.2"
                                 />
                              </g>
                              <defs>
                                 <linearGradient id="paint0_linear_57_1876" x1="43.6567" y1="14.9717" x2="4.62098" y2="21.4429" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#36D1DC" />
                                    <stop offset="1" stopColor="#5B86E5" />
                                 </linearGradient>
                                 <clipPath id="clip0_57_1876">
                                    <rect width="45.5404" height="45.5404" fill="white" transform="translate(0.541016 0.740479)" />
                                 </clipPath>
                              </defs>
                           </svg>
                        </div>
                     </div>
                     <p className="text-white cardText mt-1">Messages</p>
                  </div>
                  <div>
                     <div className="position-relative d-inline-block">
                        <div className="buttonShadow rounded-4"></div>
                        <div className="position-absolute top-50 start-50 translate-middle">
                           <svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clipPath="url(#clip0_57_1883)">
                                 <path
                                    d="M7.47892 6.10256L23.0708 2.6377L38.6627 6.10256C39.0841 6.19623 39.4609 6.43076 39.731 6.76746C40.0011 7.10415 40.1484 7.52288 40.1484 7.95454V26.905C40.1483 28.7793 39.6855 30.6245 38.801 32.2769C37.9165 33.9293 36.6378 35.3378 35.0783 36.3774L23.0708 44.383L11.0633 36.3774C9.50409 35.338 8.22552 33.9298 7.34106 32.2778C6.45661 30.6257 5.99361 28.7808 5.99316 26.9069V7.95454C5.99324 7.52288 6.14048 7.10415 6.4106 6.76746C6.68071 6.43076 7.05755 6.19623 7.47892 6.10256ZM9.7882 9.47634V26.905C9.78822 28.1545 10.0967 29.3846 10.6862 30.4862C11.2758 31.5878 12.1281 32.5268 13.1677 33.22L23.0708 39.8233L32.9739 33.22C34.0132 32.527 34.8654 31.5883 35.4549 30.487C36.0445 29.3858 36.3531 28.156 36.3534 26.9069V9.47634L23.0708 6.5276L9.7882 9.47634Z"
                                    fill="url(#paint0_linear_57_1883)"
                                 />
                                 <path
                                    d="M7.47892 6.10256L23.0708 2.6377L38.6627 6.10256C39.0841 6.19623 39.4609 6.43076 39.731 6.76746C40.0011 7.10415 40.1484 7.52288 40.1484 7.95454V26.905C40.1483 28.7793 39.6855 30.6245 38.801 32.2769C37.9165 33.9293 36.6378 35.3378 35.0783 36.3774L23.0708 44.383L11.0633 36.3774C9.50409 35.338 8.22552 33.9298 7.34106 32.2778C6.45661 30.6257 5.99361 28.7808 5.99316 26.9069V7.95454C5.99324 7.52288 6.14048 7.10415 6.4106 6.76746C6.68071 6.43076 7.05755 6.19623 7.47892 6.10256ZM9.7882 9.47634V26.905C9.78822 28.1545 10.0967 29.3846 10.6862 30.4862C11.2758 31.5878 12.1281 32.5268 13.1677 33.22L23.0708 39.8233L32.9739 33.22C34.0132 32.527 34.8654 31.5883 35.4549 30.487C36.0445 29.3858 36.3531 28.156 36.3534 26.9069V9.47634L23.0708 6.5276L9.7882 9.47634Z"
                                    fill="black"
                                    fillOpacity="0.2"
                                 />
                              </g>
                              <defs>
                                 <linearGradient id="paint0_linear_57_1883" x1="41.3818" y1="13.074" x2="5.81422" y2="17.4159" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#36D1DC" />
                                    <stop offset="1" stopColor="#5B86E5" />
                                 </linearGradient>
                                 <clipPath id="clip0_57_1883">
                                    <rect width="45.5404" height="45.5404" fill="white" transform="translate(0.300781 0.740234)" />
                                 </clipPath>
                              </defs>
                           </svg>
                        </div>
                     </div>
                     <p className="text-white cardText mt-1">Encryption</p>
                  </div>
                  <div>
                     <div className="position-relative d-inline-block">
                        <div className="buttonShadow rounded-4"></div>
                        <div className="position-absolute top-50 start-50 translate-middle">
                           <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                 d="M39.8474 12.8213L36.0524 16.6163V7.58992H18.9749V17.0774H9.48743V37.9499H36.0524V32.7185L39.8474 28.9235V39.8626C39.8469 40.362 39.6482 40.8408 39.2949 41.1937C38.9416 41.5467 38.4626 41.7449 37.9632 41.7449H7.57665C7.32746 41.7432 7.08106 41.6924 6.85151 41.5954C6.62196 41.4984 6.41376 41.3572 6.23879 41.1798C6.06382 41.0023 5.92552 40.7922 5.83177 40.5613C5.73803 40.3304 5.69068 40.0833 5.69243 39.8341V15.1799L17.0831 3.79492H37.9461C38.9936 3.79492 39.8474 4.65828 39.8474 5.67724V12.8213ZM41.3237 16.7112L44.0067 19.3962L29.248 34.1549L26.5611 34.1511L26.5649 31.4719L41.3237 16.7112Z"
                                 fill="url(#paint0_linear_105_1554)"
                              />
                              <path
                                 d="M39.8474 12.8213L36.0524 16.6163V7.58992H18.9749V17.0774H9.48743V37.9499H36.0524V32.7185L39.8474 28.9235V39.8626C39.8469 40.362 39.6482 40.8408 39.2949 41.1937C38.9416 41.5467 38.4626 41.7449 37.9632 41.7449H7.57665C7.32746 41.7432 7.08106 41.6924 6.85151 41.5954C6.62196 41.4984 6.41376 41.3572 6.23879 41.1798C6.06382 41.0023 5.92552 40.7922 5.83177 40.5613C5.73803 40.3304 5.69068 40.0833 5.69243 39.8341V15.1799L17.0831 3.79492H37.9461C38.9936 3.79492 39.8474 4.65828 39.8474 5.67724V12.8213ZM41.3237 16.7112L44.0067 19.3962L29.248 34.1549L26.5611 34.1511L26.5649 31.4719L41.3237 16.7112Z"
                                 fill="black"
                                 fillOpacity="0.2"
                              />
                              <defs>
                                 <linearGradient id="paint0_linear_105_1554" x1="45.3903" y1="13.2824" x2="5.7955" y2="19.2467" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#36D1DC" />
                                    <stop offset="1" stopColor="#5B86E5" />
                                 </linearGradient>
                              </defs>
                           </svg>
                        </div>
                     </div>
                     <p className="text-white cardText mt-1">AI Writer</p>
                  </div>
               </div>
            </Container>
         </div>
         {/* component part */}
         <Container className="pt-5">
            <div className="banner-card">
               <Row xs={1} md={2} className="g-4 flex-column-reverse flex-md-row">
                  <Col>
                     <Card className="text-start bg-transparent text-light h-100">
                        <Card.Body className="d-flex flex-column justify-content-center">
                           <Card.Title className="my-0">
                              <h2 className="my-0">
                                 Send a <span className="textBlue">Privet Message</span>
                              </h2>
                           </Card.Title>
                           <div>
                              <Card.Text className="my-0 cardText">
                                 BMail sends encrypted messages to MetaMask addresses using the Ethereum network. The sender composes the email in the bMail dApp and specifies the recipient's MetaMask wallet address. The email is encrypted using the
                                 recipient's public key, and the recipient can read the message by opening the bMail dApp and navigating to their inbox.
                              </Card.Text>
                           </div>
                        </Card.Body>
                     </Card>
                  </Col>
                  <Col>
                     <Card className="bg-transparent h-100">
                        <Card.Img variant="top" src={banner3} />
                     </Card>
                  </Col>
               </Row>
            </div>
            {/*  */}
            <div className="banner-card">
               <Row xs={1} md={2} className="g-4">
                  <Col>
                     <Card className="bg-transparent h-100">
                        <Card.Img variant="top" src={banner4} />
                     </Card>
                  </Col>
                  <Col>
                     <Card className="text-start bg-transparent text-light h-100">
                        <Card.Body className="d-flex flex-column justify-content-center">
                           <Card.Title className="my-0">
                              <h2 className="my-0">
                                 <span className="textBlue">Securely Share </span>files using BMail
                              </h2>
                           </Card.Title>
                           <div>
                              <Card.Text className="my-0 cardText">
                                 BMail uses encryption and blockchain technology to share files securely. Files are uploaded, encrypted, and stored on the blockchain, and can be accessed by a recipient who enters their MetaMask address in the bMail
                                 dApp. The file is decrypted automatically using the recipient's private key to ensure security.
                              </Card.Text>
                           </div>
                        </Card.Body>
                     </Card>
                  </Col>
               </Row>
            </div>
            {/*  */}
            <div className="banner-card">
               <Row xs={1} md={2} className="g-4 flex-column-reverse flex-md-row">
                  <Col>
                     <Card className="text-start bg-transparent text-light h-100">
                        <Card.Body className="d-flex flex-column justify-content-center">
                           <Card.Title className="my-0">
                              <h2 className="my-0">
                                 Stay informed with latest <span className="textBlue">Crypto News</span>
                              </h2>
                           </Card.Title>
                           <div>
                              <Card.Text className="my-0 cardText">
                                 The bMail dApp features a crypto news blog that aggregates the latest news articles from popular and reliable crypto news sources. Users can access the news section within the bMail dApp, which provides a convenient
                                 way to stay up-to-date on the latest developments in the crypto industry.
                              </Card.Text>
                           </div>
                        </Card.Body>
                     </Card>
                  </Col>
                  <Col>
                     <Card className="bg-transparent h-100">
                        <Card.Img variant="top" src={banner5} />
                     </Card>
                  </Col>
               </Row>
            </div>
            <div>
               <img src={banner6} className="w-100" alt="" />
            </div>
         </Container>
         {/* footer */}
         <div className="footer py-5">
            <Container className="mb-5">
               <Row xs={1} md={2} lg={4} className="g-4">
                  <Col>
                     <div>
                        <a href="/">
                           <svg width="220" height="80" viewBox="15 24 220 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                 d="M120.355 59.8788C120.355 60.5911 120.229 61.3554 119.976 62.1716C119.739 62.9879 119.338 63.7447 118.774 64.4422C118.225 65.1397 117.505 65.7259 116.615 66.2008C115.725 66.6608 114.634 66.8909 113.343 66.8909H91.3716C90.9561 66.8909 90.5702 66.8167 90.2141 66.6683C89.8579 66.5199 89.5463 66.3195 89.2791 66.0672C89.0268 65.8001 88.8265 65.4885 88.6781 65.1323C88.5297 64.7761 88.4555 64.3903 88.4555 63.9747V37.8854C88.4555 37.4847 88.5297 37.1063 88.6781 36.7501C88.8265 36.3939 89.0268 36.0823 89.2791 35.8152C89.5463 35.548 89.8579 35.3403 90.2141 35.1919C90.5702 35.0435 90.9561 34.9693 91.3716 34.9693H110.738C111.451 34.9693 112.215 35.0954 113.031 35.3477C113.847 35.6 114.604 36.0081 115.302 36.572C116.014 37.1211 116.6 37.8409 117.06 38.7313C117.535 39.6217 117.773 40.7125 117.773 42.0036V43.0944C117.773 44.1183 117.602 45.2239 117.261 46.4112C116.919 47.5836 116.37 48.6966 115.613 49.7503C116.266 50.1509 116.875 50.6333 117.439 51.1972C118.017 51.7611 118.522 52.4141 118.952 53.1561C119.383 53.8981 119.724 54.7366 119.976 55.6716C120.229 56.6065 120.355 57.6379 120.355 58.7658V59.8788ZM114.567 58.7658C114.567 58.0089 114.448 57.3337 114.211 56.7401C113.973 56.1316 113.64 55.6122 113.209 55.1818C112.779 54.7515 112.259 54.425 111.651 54.2024C111.043 53.9649 110.36 53.8462 109.603 53.8462H96.5583V48.0139H106.999C107.755 48.0139 108.438 47.9026 109.046 47.68C109.655 47.4426 110.174 47.1087 110.605 46.6783C111.035 46.2479 111.362 45.7359 111.584 45.1423C111.822 44.5339 111.94 43.8512 111.94 43.0944V42.0036C111.94 41.1725 111.54 40.757 110.738 40.757H94.2432V61.1031H113.343C113.447 61.1031 113.573 61.0957 113.721 61.0809C113.87 61.066 114.003 61.0215 114.122 60.9473C114.241 60.8731 114.344 60.747 114.434 60.5689C114.523 60.3908 114.567 60.1459 114.567 59.8343V58.7658Z"
                                 fill="white"
                              />
                              <path
                                 d="M162.561 66.8909H156.729V47.8804L146.466 65.9337C146.214 66.3937 145.858 66.7425 145.398 66.9799C144.953 67.2174 144.47 67.3361 143.951 67.3361C143.446 67.3361 142.972 67.2174 142.526 66.9799C142.096 66.7425 141.755 66.3937 141.502 65.9337L131.196 47.8804V66.8909H125.408V37.4402C125.408 36.7724 125.601 36.1788 125.987 35.6593C126.387 35.1399 126.907 34.7912 127.545 34.6131C127.857 34.5389 128.168 34.5166 128.48 34.5463C128.792 34.5612 129.088 34.6279 129.37 34.7467C129.667 34.8505 129.934 35.0064 130.172 35.2141C130.409 35.4071 130.61 35.6445 130.773 35.9265L143.951 58.8326L157.129 35.9265C157.471 35.3625 157.938 34.9618 158.532 34.7244C159.14 34.487 159.771 34.4499 160.424 34.6131C161.047 34.7912 161.559 35.1399 161.96 35.6593C162.36 36.1788 162.561 36.7724 162.561 37.4402V66.8909ZM193.369 58.9216C193.369 59.723 193.228 60.5911 192.946 61.5261C192.664 62.4462 192.204 63.3069 191.566 64.1083C190.943 64.8948 190.119 65.5552 189.095 66.0895C188.086 66.6237 186.854 66.8909 185.4 66.8909H174.96C174.159 66.8909 173.29 66.7499 172.355 66.4679C171.435 66.186 170.575 65.7333 169.773 65.11C168.987 64.4719 168.326 63.6483 167.792 62.6391C167.258 61.6151 166.991 60.376 166.991 58.9216C166.991 58.1202 167.132 57.2521 167.414 56.3171C167.696 55.3822 168.148 54.5214 168.772 53.7349C169.41 52.9335 170.233 52.2657 171.242 51.7314C172.266 51.1972 173.506 50.9301 174.96 50.9301H185.4V56.4507H174.96C174.173 56.4507 173.565 56.6955 173.135 57.1853C172.704 57.6602 172.489 58.2538 172.489 58.9661C172.489 59.723 172.734 60.3166 173.224 60.747C173.728 61.1625 174.322 61.3703 175.004 61.3703H185.4C186.187 61.3703 186.795 61.1328 187.225 60.6579C187.656 60.183 187.871 59.5894 187.871 58.8771V50.7965C187.871 50.0396 187.634 49.4386 187.159 48.9934C186.699 48.5482 186.112 48.3256 185.4 48.3256H172.689V42.8272H185.4C186.202 42.8272 187.062 42.9682 187.982 43.2502C188.917 43.5321 189.778 43.9922 190.565 44.6303C191.366 45.2536 192.034 46.0773 192.568 47.1013C193.102 48.1104 193.369 49.3421 193.369 50.7965V58.9216ZM204.188 37.8854H198.4V32.6542H204.188V37.8854ZM204.188 66.8909H198.4V42.8272H204.188V66.8909ZM220.327 66.8909H217.745C216.914 66.8909 216.023 66.7499 215.073 66.4679C214.138 66.186 213.263 65.7259 212.447 65.0878C211.63 64.4348 210.955 63.5963 210.421 62.5723C209.887 61.5335 209.62 60.2647 209.62 58.7658V32.6542H215.407V58.7658C215.407 59.4781 215.63 60.0495 216.075 60.4798C216.52 60.8954 217.077 61.1031 217.745 61.1031H220.327V66.8909Z"
                                 fill="url(#paint0_linear_78_1079)"
                              />
                              <path
                                 d="M162.561 66.8909H156.729V47.8804L146.466 65.9337C146.214 66.3937 145.858 66.7425 145.398 66.9799C144.953 67.2174 144.47 67.3361 143.951 67.3361C143.446 67.3361 142.972 67.2174 142.526 66.9799C142.096 66.7425 141.755 66.3937 141.502 65.9337L131.196 47.8804V66.8909H125.408V37.4402C125.408 36.7724 125.601 36.1788 125.987 35.6593C126.387 35.1399 126.907 34.7912 127.545 34.6131C127.857 34.5389 128.168 34.5166 128.48 34.5463C128.792 34.5612 129.088 34.6279 129.37 34.7467C129.667 34.8505 129.934 35.0064 130.172 35.2141C130.409 35.4071 130.61 35.6445 130.773 35.9265L143.951 58.8326L157.129 35.9265C157.471 35.3625 157.938 34.9618 158.532 34.7244C159.14 34.487 159.771 34.4499 160.424 34.6131C161.047 34.7912 161.559 35.1399 161.96 35.6593C162.36 36.1788 162.561 36.7724 162.561 37.4402V66.8909ZM193.369 58.9216C193.369 59.723 193.228 60.5911 192.946 61.5261C192.664 62.4462 192.204 63.3069 191.566 64.1083C190.943 64.8948 190.119 65.5552 189.095 66.0895C188.086 66.6237 186.854 66.8909 185.4 66.8909H174.96C174.159 66.8909 173.29 66.7499 172.355 66.4679C171.435 66.186 170.575 65.7333 169.773 65.11C168.987 64.4719 168.326 63.6483 167.792 62.6391C167.258 61.6151 166.991 60.376 166.991 58.9216C166.991 58.1202 167.132 57.2521 167.414 56.3171C167.696 55.3822 168.148 54.5214 168.772 53.7349C169.41 52.9335 170.233 52.2657 171.242 51.7314C172.266 51.1972 173.506 50.9301 174.96 50.9301H185.4V56.4507H174.96C174.173 56.4507 173.565 56.6955 173.135 57.1853C172.704 57.6602 172.489 58.2538 172.489 58.9661C172.489 59.723 172.734 60.3166 173.224 60.747C173.728 61.1625 174.322 61.3703 175.004 61.3703H185.4C186.187 61.3703 186.795 61.1328 187.225 60.6579C187.656 60.183 187.871 59.5894 187.871 58.8771V50.7965C187.871 50.0396 187.634 49.4386 187.159 48.9934C186.699 48.5482 186.112 48.3256 185.4 48.3256H172.689V42.8272H185.4C186.202 42.8272 187.062 42.9682 187.982 43.2502C188.917 43.5321 189.778 43.9922 190.565 44.6303C191.366 45.2536 192.034 46.0773 192.568 47.1013C193.102 48.1104 193.369 49.3421 193.369 50.7965V58.9216ZM204.188 37.8854H198.4V32.6542H204.188V37.8854ZM204.188 66.8909H198.4V42.8272H204.188V66.8909ZM220.327 66.8909H217.745C216.914 66.8909 216.023 66.7499 215.073 66.4679C214.138 66.186 213.263 65.7259 212.447 65.0878C211.63 64.4348 210.955 63.5963 210.421 62.5723C209.887 61.5335 209.62 60.2647 209.62 58.7658V32.6542H215.407V58.7658C215.407 59.4781 215.63 60.0495 216.075 60.4798C216.52 60.8954 217.077 61.1031 217.745 61.1031H220.327V66.8909Z"
                                 fill="black"
                                 fillOpacity="0.2"
                              />
                              <path
                                 d="M56.8434 34.4251C60.3793 32.3836 64.7991 34.9354 64.7991 39.0183L64.7991 64.9803C64.7991 69.0632 60.3793 71.615 56.8434 69.5736L34.3596 56.5926C30.8237 54.5511 30.8237 49.4475 34.3596 47.4061L56.8434 34.4251Z"
                                 fill="url(#paint1_linear_78_1079)"
                                 stroke="#0A0A0A"
                                 strokeWidth="3.50254"
                              />
                              <path
                                 d="M52.8032 30.9065C60.3865 26.5283 69.8656 32.001 69.8656 40.7574L69.8656 63.2426C69.8656 71.999 60.3865 77.4717 52.8032 73.0935L33.3305 61.851C25.7472 57.4728 25.7472 46.5273 33.3305 42.1491L52.8032 30.9065Z"
                                 stroke="white"
                                 strokeWidth="2.33503"
                              />
                              <defs>
                                 <linearGradient id="paint0_linear_78_1079" x1="227.086" y1="36.3909" x2="98.2912" y2="81.7807" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#36D1DC" />
                                    <stop offset="1" stopColor="#5B86E5" />
                                 </linearGradient>
                                 <linearGradient id="paint1_linear_78_1079" x1="86.2964" y1="54.9994" x2="29.6999" y2="32.6894" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#36D1DC" />
                                    <stop offset="1" stopColor="#5B86E5" />
                                 </linearGradient>
                              </defs>
                           </svg>
                        </a>
                     </div>
                  </Col>
                  <Col>
                     <div className="d-flex flex-column gap-4 text-center text-md-start text-uppercase">
                        <a href="#" className="text-decoration-none text-light">
                           About
                        </a>
                        <a href="#" className="text-decoration-none text-light">
                           Team
                        </a>
                        <a href="#" className="text-decoration-none text-light">
                           Contact us
                        </a>
                        <a href="#" className="text-decoration-none text-light">
                           Blogs
                        </a>
                     </div>
                  </Col>
                  <Col>
                     <div className="d-flex flex-column gap-4 text-center text-md-start text-uppercase">
                        <a href="#" className="text-decoration-none text-light">
                           Privacy & Terms of Service
                        </a>
                        <a href="#" className="text-decoration-none text-light">
                           cookie notices
                        </a>
                     </div>
                  </Col>
                  <Col>
                     <div className="d-flex flex-column gap-4 text-center text-md-start text-uppercase text-light">
                        <p className="fw-bold">Socials</p>
                        <div>
                           <div className="d-flex gap-3 justify-content-center justify-content-md-start">
                              <a href="#" className="position-relative d-inline-block text-decoration-none text-light footerHover">
                                 <div className="footerShadow rounded-4"></div>
                                 <div className="position-absolute top-50 start-50 translate-middle">
                                    <i className="fa-brands fa-facebook-f fs-4"></i>
                                 </div>
                              </a>
                              <a href="#" className="position-relative d-inline-block text-decoration-none text-light footerHover">
                                 <div className="footerShadow rounded-4"></div>
                                 <div className="position-absolute top-50 start-50 translate-middle">
                                    <i className="fa-brands fa-twitter fs-4"></i>
                                 </div>
                              </a>
                              <a href="#" className="position-relative d-inline-block text-decoration-none text-light footerHover">
                                 <div className="footerShadow rounded-4"></div>
                                 <div className="position-absolute top-50 start-50 translate-middle">
                                    <i className="fa-brands fa-instagram fs-4"></i>
                                 </div>
                              </a>
                           </div>
                        </div>
                     </div>
                  </Col>
               </Row>
            </Container>
         </div>
      </div>
   );
};

export default Home;
