import React from "react";
import styled from "styled-components";

const FooterSection = styled.div`
  background-image: url(/Assets/footer_wave.svg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 250px;
  position: relative;

  span {
    position: absolute;
    bottom: 3rem;
    color: green;

    a {
      text-decoration: ;
    }
  }
`;
function Footer() {
  return (
    <FooterSection>
      <div className="Container">
        <span>
        ©{" "}
          <a
            href="https://github.com/ratulhasanshaon/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ratulhasanshaon
          </a>{" "}
        </span>
      </div>
    </FooterSection>
  );
}

export default Footer;
