import styled from "styled-components";

const Footer = ({ label, copyright }) => {
  return (
    <FooterStyle>
      {label && <div>{label}</div>}
      {copyright && <div>{copyright}</div>}
    </FooterStyle>
  );
};

const FooterStyle = styled.div`
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  background: #ffffff;
  color: gray;
  align-items: center;
  text-align: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export default Footer;
