import React, {useState,useContext,useEffect} from 'react';
import {Paragraph, Dialog, Portal} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {
  Button,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {styles} from './style';
import AxiosInstance from '../../api/AxiosInstance';
import { DataContext } from '../../context/DataContext';


const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const{armazenaDadosUsuario} = useContext (DataContext);
  const handleLogin = async () => {
    console.log(`Email: ${email} - Senha: ${senha}`);

    var tokenJwt:any = null;
    try {
      const retorno = await AxiosInstance.post('/auth/login', {
        email: email,
        password: senha,
      });

      if (retorno.status === 200) {
        Alert.alert('Seja bem-vindo!');
        console.log('Retorno: ' + JSON.stringify(retorno.data));
       tokenJwt = retorno.data;
       //atribuir a variavel tokenJwt o conteudo do retorno.data
        armazenaDadosUsuario (tokenJwt["jwt token"])

//passando pro metodo
        navigation.navigate('BottomNavigatorScreen');
      } else {
        console.log('Erro ao realizar a autenticação');
      }
    } catch (error) {
      Alert.alert(
        'Erro ao realizar login',
        'Por favor, verifique se o e-mail e a senha estão corretos.',
        [
          {
            text: 'Voltar',
            style: 'cancel',
          },
        ],
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>Bem-Vindo</Text>
      </View>

      <View style={styles.conteudo}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={setSenha}
          value={senha}
        />
      </View>

      <View style={styles.rodape}>
        <TouchableOpacity style={styles.botao} onPress={() => handleLogin()}>
          <Text style={styles.textoBotao}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;