import React from 'react';
import { View, Image } from 'react-native'
import { Header, Title} from 'native-base';

class HeaderBanner extends React.Component {
  render() {
    return (
      <View style={{flex: 1.2, backgroundColor: '#C00A0A', justifyContent: 'center', alignItems: 'center'}}>
        <Image style={{width: '70%', height: '85%', marginTop: 5}} resizeMode="cover" source={{uri: 'https://res.cloudinary.com/dql6mlrow/image/upload/v1510548598/SnackAcademyLogo.png'}} />
      </View>
    );
  }
}

export default HeaderBanner;

  // <Image source={{uri: "https://res.cloudinary.com/dql6mlrow/image/upload/v1510548598/SnackAcademyLogo.png"}} />

  // <Header style={{ backgroundColor: '#C00A0A'}}>
  //     <Title style={{color: 'white', fontSize: 30,
  //       justifyContent: 'center', marginTop: 5}}>SnackAcademy</Title>
  // </Header>
