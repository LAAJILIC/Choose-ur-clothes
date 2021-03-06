import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const OptionContainerStyles = css`
     padding: 10px 15px;
     cursor: pointer;
`;

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    @media screen and (max-width: 800px) {
        height: 60px;
        padding: 10px;
        margin-bottom: 20px;
    }
`;

export const LogoContainer = styled(Link)`
      height: 100%;
      width: 70px;
      padding: 25px;

      @media screen and (max-width: 800px) {
            width: 10%;
            padding: 10px;
    }
`;

export const ImgLogoContainer = styled.img`
      width: auto;
      height: 20%; 
      top:0; 
      left:0; 
      position: absolute;
      display: flex;
      padding: 25px;

      @media screen and (max-width: 800px) {
           height: 80px;
            width: 15%;
            padding: 20px;
    }
    
`;
export const OptionsContainer = styled.div`
     width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      @media screen and (max-width: 800px) {
            width: 80%;
            padding: 10px;
    }
`;

export const OptionLink = styled(Link)`
   ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
     ${OptionContainerStyles}
`;