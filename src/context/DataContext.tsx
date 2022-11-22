import React, {createContext, useState} from "react";
import jwt_decode from 'jwt-decode';
//importanto o DdadosUsuarioType
import { DadosUsuariosType } from "../models/DadosUsuarioType";

//Criando o contexto
export const DataContext =  createContext({});
//criando o provedor do contexto
export const DataProvider = ({children})=>{
    const[DadosUsuario,setDadosUsuario] = useState<DadosUsuariosType>(); 
    var tokenDecodificado:any
    const armazenaDadosUsuario = (jwt:any) =>{
       
        var tokenDecodificado:any = jwt_decode(jwt);

        var usuario = tokenDecodificado.usuario;
        
        
        usuario=JSON.parse(usuario);
        setDadosUsuario({
            id:usuario?.userId,
            nome:usuario?.usuarioNome,
            email:usuario?.userEmail,
            token: jwt
        });
    }
return(
    <DataContext.Provider value={{
        DadosUsuario,
        armazenaDadosUsuario
    }}>
    {children}
    </DataContext.Provider>
)
}
