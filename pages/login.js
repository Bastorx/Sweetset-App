'use strict';

import React, {
  Component,
  View,
  TextInput,
  Image,
  Text
} from 'react-native';
import Button from 'react-native-button';
import styles from '../css.js';


class login extends Component {
  constructor(props) {
      super(props);
      this.state = {
          user: "",
          password: ""
      };
  }
  render() {
    return (
      <Image source={require('../public/img/2.jpg')} style={styles.background}>
        <View style={styles.containerlogin}>
        <View style={{borderBottomWidth: 1, borderBottomColor: 'darkgrey', width: 200, justifyContent:"center", alignItems:"center"}}>
          <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Se connecter</Text>
        </View>
          <View style={{marginTop: 30}}/>          
          <TextInput
              style={{height: 40, width: 150, borderColor: '#FFFFFF', borderWidth: 1, backgroundColor: 'rgba(250, 250, 250, 0.2)'}}
              placeholder={"Nom d'Utilisateur"}
              placeholderTextColor={'rgba(250, 250, 250, 0.3)'}
              onChangeText={(user) => this.setState({user})}
              value={this.state.user} 
              />
        <View style={{marginTop: 20}}/>          
          <TextInput
              style={{height: 40, width: 150, borderColor: '#FFFFFF', borderWidth: 1, backgroundColor: 'rgba(250, 250, 250, 0.2)'}}
              placeholder={"Mot de passe"}
              placeholderTextColor={'rgba(250, 250, 250, 0.3)'}
              secureTextEntry={true}
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
              />
        <View style={{marginTop: 30, borderBottomWidth: 1, borderBottomColor: 'darkgrey', width: 200, justifyContent:"center", alignItems:"center"}}/>          
          <Button
            style={{fontSize: 20, color: 'black'}}
            styleDisabled={{color: 'red'}}
            onPress={() => this._handlePress()}
          >
            Connexion
          </Button>
        </View>        
    </Image>
    );
  }
  _handlePress() {
    this.props.setUser({user: this.state.user, password: this.state.password});
  }
}

export default login;