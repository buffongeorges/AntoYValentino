import { SocialIcon } from "react-social-icons";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";

export const Home = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const zoomSVG = {
    icon: "M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z",
    mask: "M0,0v64h64V0H0z M39.6,22l-2.8,0c-2.2,0-2.6,1.1-2.6,2.6V28h5.3l-0.7,5.3h-4.6V47h-5.5V33.3H24V28h4.6V24 c0-4.6,2.8-7,6.9-7c2,0,3.6,0.1,4.1,0.2V22z",
    color: "#3b5998",
  };

  const Background = "/images/artists.jpg";

  return (
    <div className="container">
      <div
        id="logo-and-background-artists"
        style={{
          width: "100%",
          height: "35rem",
          backgroundImage: `url(${Background})`,
          backgroundSize: 'cover'
        }}
      >
        {/* <img src="/images/artists.jpg" style={{width: '50rem', height: '20rem'}}></img> */}
      </div>
      <div id="about-us-and-dates" style={{
          borderTop: "1rem solid #FCED94",
          paddingTop: "1rem",
          paddingBottom: "1rem",
        }}>
        <Row>
          <Col style={{ borderRight: "0.15rem solid black" }}>
            <Accordion defaultActiveKey="0" alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header style={{ backgroundColor: "red" }}>
                  <span
                    style={{
                      fontSize: "2rem",
                      color: "black",
                      borderBottom: "0.2rem solid black",
                      paddingBottom: "0.5rem",
                    }}
                  >
                    ABOUT US
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  ANTO IS A SPANISH AND FRENCH SINGER TROMBONIST AND COMPOSITOR.
                  RAISED WITH LATIN MUSIC FROM HIS YOUNG HAVE, HE BECAME A MUSIC
                  TEACHER IN ST MARTIN, CARIBBEAN ISLAND, WHERE HE DEVELOP ALL
                  HIS CREATIVITY FOR SALSA AND BACHATA, UNTIL REGETON AND KOMPA
                  MUSIC TAKE ALL THE SPACE IN HIS HEART.
                  <br />
                  <br />
                  VALENTINO, RAISED IN ARGENTINA, ALSO NAMED “EL VIEJO CHOTO”,
                  IS A GUITARIST AND SONGWRITER PASSIONATED WITH POP AND ROCK.
                  HIS PREDILECTION GUITAR IS A 12 SRINGS, VERY USED IN SALSA
                  MUSIC. AFTER 15 YEARS IN COLOMBIA, HE STARTED A NEW LIFESTYLE
                  IN ST MARTIN WHERE HE METS ANTO.
                  <br />
                  <br />
                  THEM COLLABORATION STARTED IN A BAND NAMED “LATIN SUGAR”. WHEN
                  THEY DECIDE TO CREATE ORIGINAL SONGS, THEM BECAME ANTO y
                  VALENTINO, A DYNAMIC AND DUO, PLAYING TYPES OF MUSIC LIKE
                  REGETON WITH A LIVE BAND, AND MIXING DIFFERENT LANGUAGES TO
                  MAKETHEM SONGS UNIVERSAL.
                </Accordion.Body>
              </Accordion.Item>
              {/* <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item> */}
            </Accordion>
          </Col>
          <Col>
            <Row id="first-date-container" style={{ marginLeft: "2rem" }}>
              <Col>
                <div
                  id="the-date"
                  style={{
                    display: "flex",
                    width: "10rem",
                    height: "10rem",
                    backgroundColor: "#FEDD14",
                    border: "0.8rem solid black",
                  }}
                >
                  <p style={{ margin: "auto", fontSize: "5rem" }}> 20</p>
                </div>
              </Col>
              <Col>
                <div
                  id="the-month-and-performance"
                  style={{ marginLeft: "-2rem", fontSize: "1.5rem" }}
                >
                  <div>
                    <strong>OCTOBER 2022</strong>
                  </div>
                  <div style={{ marginTop: "0.8rem" }}> NEW VIDEO</div>
                  <span> DAME TU BACO – FT.TWENY MONTANA</span>
                </div>
              </Col>
            </Row>
            <Row
              id="second-date-container"
              style={{ marginLeft: "2rem", marginTop: "2rem" }}
            >
              <Col>
                <div
                  id="the-date"
                  style={{
                    display: "flex",
                    width: "10rem",
                    height: "10rem",
                    backgroundColor: "#FEDD14",
                    border: "0.8rem solid black",
                  }}
                >
                  <p style={{ margin: "auto", fontSize: "5rem" }}> 17</p>
                </div>
              </Col>
              <Col>
                <div
                  id="the-month-and-performance"
                  style={{ marginLeft: "-2rem", fontSize: "1.5rem" }}
                >
                  <div>
                    <strong>NOVEMBER 2022</strong>
                  </div>
                  <div style={{ marginTop: "0.8rem" }}> SABA FESTIVAL</div>
                  <span> BOOK NOW</span>
                </div>
              </Col>
            </Row>
            <Row
              id="third-date-container"
              style={{ marginLeft: "2rem", marginTop: "2rem" }}
            >
              <Col>
                <div
                  id="the-date"
                  style={{
                    display: "flex",
                    width: "10rem",
                    height: "10rem",
                    backgroundColor: "#FEDD14",
                    border: "0.8rem solid black",
                  }}
                >
                  <p style={{ margin: "auto", fontSize: "5rem" }}> 31</p>
                </div>
              </Col>
              <Col>
                <div
                  id="the-month-and-performance"
                  style={{ marginLeft: "-2rem", fontSize: "1.5rem" }}
                >
                  <div>
                    <strong>DECEMBER 2022</strong>
                  </div>
                  <div style={{ marginTop: "0.8rem" }}> NEW YEARS EVE</div>
                  <span> ST BARTH – FRENCH WEST INDIES </span>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div
        id="music-styles"
        style={{
          marginTop: "2rem",
          borderTop: "1rem solid #FCED94",
          backgroundColor: "#D9D9D9",
          paddingTop: "1rem",
          paddingBottom: "1rem",
        }}
      >
        <Row>
          <Col style={{ textAlign: "center" }}>
            <span
              style={{
                fontSize: "2rem",
                color: "black",
                borderBottom: "0.2rem solid black",
                paddingBottom: "0.5rem",
              }}
            >
              BACHATA
            </span>
            <div>
              <div id="first-album-picture" style={{ marginTop: "2rem" }}>
                <img
                  src="https://www.nopcommerce.com/images/thumbs/0005720_coming-soon-page.jpeg"
                  style={{
                    mixBlendMode: "multiply",
                    width: "10rem",
                    height: "10rem",
                    padding: "1rem 1rem 1rem 1rem",
                    border: "1px solid black",
                  }}
                ></img>
              </div>
              <div id="second-album-picture" style={{ marginTop: "2rem" }}>
                <img
                  src="https://www.nopcommerce.com/images/thumbs/0005720_coming-soon-page.jpeg"
                  style={{
                    mixBlendMode: "multiply",
                    width: "10rem",
                    height: "10rem",
                    padding: "1rem 1rem 1rem 1rem",
                    border: "1px solid black",
                  }}
                ></img>
              </div>
            </div>
            <div>
              <img />
            </div>
          </Col>
          <Col
            style={{ textAlign: "center", borderLeft: "0.1rem solid black" }}
          >
            <span
              style={{
                fontSize: "2rem",
                color: "black",
                borderBottom: "0.2rem solid black",
                paddingBottom: "0.5rem",
              }}
            >
              REGETON
            </span>
            <div>
              <div id="first-album-picture" style={{ marginTop: "2rem" }}>
                <img
                  src="https://www.nopcommerce.com/images/thumbs/0005720_coming-soon-page.jpeg"
                  style={{
                    mixBlendMode: "multiply",
                    width: "10rem",
                    height: "10rem",
                    padding: "1rem 1rem 1rem 1rem",
                    border: "1px solid black",
                  }}
                ></img>
              </div>
              <div id="second-album-picture" style={{ marginTop: "2rem" }}>
                <img
                  src="https://www.nopcommerce.com/images/thumbs/0005720_coming-soon-page.jpeg"
                  style={{
                    mixBlendMode: "multiply",
                    width: "10rem",
                    height: "10rem",
                    padding: "1rem 1rem 1rem 1rem",
                    border: "1px solid black",
                  }}
                ></img>
              </div>
            </div>
          </Col>
          <Col
            style={{ textAlign: "center", borderLeft: "0.1rem solid black" }}
          >
            <span
              style={{
                fontSize: "2rem",
                color: "black",
                borderBottom: "0.2rem solid black",
                paddingBottom: "0.5rem",
              }}
            >
              KOMPATON
              <div>
                <div id="first-album-picture" style={{ marginTop: "2rem" }}>
                  <img
                    src="https://www.nopcommerce.com/images/thumbs/0005720_coming-soon-page.jpeg"
                    style={{
                      mixBlendMode: "multiply",
                      width: "10rem",
                      height: "10rem",
                      padding: "1rem 1rem 1rem 1rem",
                      border: "1px solid black",
                    }}
                  ></img>
                </div>
                <div id="second-album-picture" style={{ marginTop: "2rem" }}>
                  <img
                    src="https://www.nopcommerce.com/images/thumbs/0005720_coming-soon-page.jpeg"
                    style={{
                      mixBlendMode: "multiply",
                      width: "10rem",
                      height: "10rem",
                      padding: "1rem 1rem 1rem 1rem",
                      border: "1px solid black",
                    }}
                  ></img>
                </div>
              </div>
            </span>
            <div>
              <img />
            </div>
          </Col>
        </Row>
      </div>
      <div
        id="social-medias"
        style={{
          borderTop: "1rem solid #FCED94",
          paddingTop: "1rem",
          paddingBottom: "1rem",
        }}
      >
        <Row style={{ textAlign: "center" }}>
          <Col>
            <div
              style={{
                fontSize: "1.5rem",
                alignItems: "center",
                minHeight: "100%",
                display: "grid",
              }}
            >
              <strong>SHOP ONLINE</strong>
            </div>
          </Col>
          <Col
            style={{
              borderLeft: "0.1rem solid black",
              borderRight: "0.1rem solid black",
            }}
          >
            <div id="contact-us-title" style={{ fontSize: "1.5rem" }}>
              <strong>CONTACT US</strong>
            </div>
            <div id="social-media-contact-us">
              <SocialIcon
                network="facebook"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  console.log("go to twitter");
                  openInNewTab("https://google.com");
                }}
              />
              <SocialIcon
                network="instagram"
                style={{ cursor: "pointer", marginLeft: "1rem" }}
                onClick={() => {
                  console.log("go to twitter");
                  openInNewTab("https://google.com");
                }}
              />
              <SocialIcon
                network="twitter"
                style={{ cursor: "pointer", marginLeft: "1rem" }}
                onClick={() => {
                  console.log("go to twitter");
                  openInNewTab("https://google.com");
                }}
              />
              <SocialIcon
                network="whatsapp"
                style={{ cursor: "pointer", marginLeft: "1rem" }}
                onClick={() => {
                  console.log("go to twitter");
                  openInNewTab("https://google.com");
                }}
              />
            </div>
          </Col>
          <Col>
            <div id="our-music-title" style={{ fontSize: "1.5rem" }}>
              <strong>LISTEN TO OUR MUSIC</strong>
            </div>
            <div id="social-media-our-music">
              <SocialIcon
                network="telegram"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  console.log("go to twitter");
                  openInNewTab("https://google.com");
                }}
              />
              <a
                className="social-icon"
                aria-label="tiktok"
                style={{
                  display: "inline-block",
                  width: "60px",
                  height: "60px",
                  position: "relative",
                  overflow: "hidden",
                  verticalAlign: "middle",
                  cursor: "pointer",
                  marginLeft: "1rem",
                }}
              >
                <div
                  className="social-container"
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  {/* <svg
                    className="social-svg"
                    viewBox="0 0 64 64"
                    style={{borderRadius: '50%', position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%', fillRule: 'evenodd'}}
                  >
                    <g
                      className="social-svg-background"
                      style={{transition: 'fill 170ms ease-in-out 0s', fill: 'transparent'}}
                    >
                      <circle cx="32" cy="32" r="31"></circle>
                    </g>
                    <g
                      className="social-svg-icon"
                      style={{transition: 'fill 170ms ease-in-out 0s', fill: 'transparent'}}
                    >
                      <path d="M 0,0 H 64 V 64 H 0 Z"></path>
                    </g>
                    <g
                      className="social-svg-mask"
                      style={{transition: 'fill 170ms ease-in-out 0s', fill: 'rgb(0, 0, 0)'}}
                    >
                      <path d="M 0 0 L 0 64 L 64 64 L 64 0 L 0 0 z M 33.330078 16 L 38.845703 16 C 38.841484 16.464979 38.879928 16.930827 38.960938 17.388672 L 38.962891 17.388672 C 39.347214 19.450699 40.563022 21.263117 42.324219 22.402344 C 43.560373 23.223837 45.011906 23.660664 46.496094 23.660156 L 46.496094 24.853516 C 46.499654 24.854516 46.504312 24.854771 46.507812 24.855469 L 46.507812 29.123047 C 43.760055 29.129293 41.080342 28.271577 38.847656 26.669922 L 38.847656 37.882812 C 38.835889 43.478203 34.296575 48.007827 28.701172 48.007812 C 26.63222 48.048166 24.599665 47.449168 22.884766 46.291016 C 22.767781 46.167585 22.658664 46.038312 22.548828 45.910156 C 19.166219 43.334883 17.735525 38.905122 19.021484 34.820312 C 20.351327 30.5961 24.272588 27.726928 28.701172 27.736328 C 29.158607 27.742889 29.614526 27.781926 30.066406 27.853516 L 30.054688 33.488281 C 29.612312 33.350917 29.152646 33.277637 28.689453 33.273438 C 26.564626 33.28434 24.721455 34.740631 24.216797 36.804688 C 23.712137 38.868744 24.676556 41.009904 26.556641 42 C 27.215641 42.344292 27.967447 42.505495 28.710938 42.511719 C 31.19892 42.507676 33.238354 40.539029 33.330078 38.052734 L 33.330078 16 z">
                      </path>
                    </g>
                  </svg> */}
                  <img src={"/images/zoom.png"}></img>
                </div>
              </a>
              <SocialIcon
                network="youtube"
                style={{ cursor: "pointer", marginLeft: "1rem" }}
                onClick={() => {
                  console.log("go to twitter");
                  openInNewTab("https://google.com");
                }}
              />
              <SocialIcon
                network="tiktok"
                style={{ cursor: "pointer", marginLeft: "1rem" }}
                onClick={() => {
                  console.log("go to twitter");
                  openInNewTab("https://google.com");
                }}
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
