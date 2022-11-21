import React, { useState ,useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import axiosInstance from '../../api/AxiosInstance';

import { styles } from './style';

const Login =  ({navigation}) => {
 const[email, setEmail] = useState ('');
 const[senha, setSenha] = useState('');
 
 const handleLogin = async () =>{
  console.log(`Email: ${email} - Senha: ${senha}`)
  
  try{
    const retorno = await axiosInstance.post('/auth/login', {
      email:email,
      password:senha
    });

    if(retorno.status === 200)
      console.log('Retorno: ' + JSON.stringify(retorno.data));
      navigation.navigate('Home'); 
  }else{
      console.log('Erro ao realizar autenticação');
    }

  } catch (error){
    console.log('Erro ao autenticar - ' + JSON.stringify(error));
    //vai imprimir o erro e dizer o que foi que aconteceu
  }
}

  return (
    <View style={styles.container}>

      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>Bem-Vindo</Text>
      </View>

      <View style={styles.conteudo}>

        <TextInput style={styles.input} placeholder='E-mail'onChangeText={setEmail}value={email}/>
        <TextInput style={styles.input} placeholder='Senha' secureTextEntry={true} onChangeText={setSenha} value={senha} />

      </View>

      <View style={styles.rodape}>
          <TouchableOpacity style={styles.botao}onPress={() => handleLogin()}>
            <Text style={styles.textoBotao}>Login</Text>
          </TouchableOpacity>
      </View>
      
    </View>
  );
;



export default Login;