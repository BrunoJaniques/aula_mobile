import React, { useState,useContext ,useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import axiosInstance from '../../api/AxiosInstance';
import { DataContext } from '../../context/DataContext';
import { DadosEditoraType } from '../../models/DadosEditoraTaype';
const Home = () =>{

  const{dadosUsuario} = useContext(DataContext);
 const[dadosEditora,setDadosEditora]=useState<DadosEditoraType[]>([]);

  useEffect(()=> {
    getAllEditoras();
  },[]);

  const getAllEditoras = async () => {
    axiosInstance.get(
      '/editoras',
      {headers: {"Authorization" : `Bearer ${dadosUsuario?.token}`}}
    ).then(resultado => {
      console.log('Dados das editoras: ' + resultado.data);
      setDadosEditora(resultado.data);
    }).catch((error)=>{
      console.log('Ocorreu um erro ao recuperar os dados das Editoras :' JSON.stringify(error))
    });
    
  }
    return(
        <view >
            <text>{'home'}</text>
            <text>Bem-Vindo,{dadosUsuario?.nome}</text>
        </view>

    );

}
export default Home;