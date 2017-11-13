import React from 'react';
import { View, Image } from 'react-native'
import { Header, Title} from 'native-base';

class HeaderBanner extends React.Component {
  render() {
    return (
      <View style={{flex: 1.3, backgroundColor: '#C00A0A', justifyContent: 'center', alignItems: 'center'}}>
        <Image style={{width: '70%', height: '85%', marginTop: 10}} resizeMode="cover" source={{uri: 'https://res.cloudinary.com/dql6mlrow/image/upload/v1510548598/SnackAcademyLogo.png'}} />
      </View>
    );
  }
}

export default HeaderBanner;
