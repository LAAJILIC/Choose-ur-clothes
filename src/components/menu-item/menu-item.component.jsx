import React from 'react';
import { withRouter } from 'react-router-dom';
import { MenuItemContainer, BackGroundImage, SubtitleContainer, ContentContainer, TitleContainer, } from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  //Functional component does't include a state
    <MenuItemContainer  className={`${size}`}
    onClick={()=> history.push(`${match.url}${linkUrl}`)}
    >
    <BackGroundImage
    style={{
        backgroundImage: `url(${imageUrl})`
    }}
    />
    <ContentContainer>
    <TitleContainer>{title.toUpperCase()}</TitleContainer>
    <SubtitleContainer>BUY NOW</SubtitleContainer>
    </ContentContainer>
    </MenuItemContainer>
);

export default withRouter(MenuItem);