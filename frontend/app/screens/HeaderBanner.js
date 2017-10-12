import React from 'react';
import { Header, Title } from 'native-base';

class HeaderBanner extends React.Component {
  render() {
    return (
      <Header style={{ backgroundColor: '#C00A0A'}}>
          <Title style={{color: 'white', fontSize: 30,
            justifyContent: 'center', marginTop: 5}}>SnackAcademy</Title>
      </Header>
    );
  }
}

export default HeaderBanner;
