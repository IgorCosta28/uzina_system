import { cilHealing } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { Movie } from "@mui/icons-material";
import { Box, InputLabel } from "@mui/material";
import React, { useEffect, useState } from "react";
import DateRangeIcon from '@mui/icons-material/DateRange';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Diversity3Icon from '@mui/icons-material/Diversity3';
const TimeLine = ({data,date})=>{

    const [iconeServico, setIconeServico ] = useState('')
    const [colorBordeStatus, setColorBordeStatus] = useState('border-start-success')
    const [tipo, setTipo] =  useState('saude')
    

    const iconsServicos = {
        'saude':<FavoriteIcon/>,
        'social':<Diversity3Icon/>
    }

    useEffect(()=>{
        
    },[])

    return (
    <Box sx={{width:'90%', display:'flex', height:'auto', marginLeft:10}} >
        <Box sx={{width:'190px', display:'flex', }} >
            <Box sx={{width:'120x', display:'flex',justifyContent:'start', alignItems:'end', marginRight:5, flexDirection:'column'}}>
                <InputLabel style={{marginTop:22, color:'#fff'}}>
                    {date}
                </InputLabel>
                {/* <InputLabel style={{color:'#fff'}}>
                    {horaCriacao}
                </InputLabel> */}
            </Box>
            <Box sx={{width:'8%', display:'flex', flexDirection:'column',alignItems:'center', justifyContent:'start'}}>
                <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', padding:2, border:'1px solid #fff', borderRadius:'50%'}}>
                <DateRangeIcon/>
                </Box>
                <Box sx={{height:'100%', width:'3px' ,bgcolor:'#fff',  }} ></Box>
            </Box>
        </Box>
        <Box sx={{display:'flex', width:'60%' ,flexDirection:'column'}}>
        {
            data.map((data)=>{
                const {tipo,dataConsulta, horaConsulta,motivo,codigo,codigoGerente,dataCriacao,horaCriacao, status} = data
                
                return (
                <Box sx={{bgcolor:'#fff', width:'100%', marginTop:0, marginBottom:6, borderRadius:5, padding:3,borderLeft:'7px solid '}}
                className={`${ status === 'on' ? 'border-start-success' :'border-start-danger'}`}>
                    <Box sx={{display:'flex',justifyContent:'space-between' }}>
                        <h5  style={{color:'#000',textTransform:'uppercase',display:'flex', gap:7}}>
                            {iconsServicos[tipo]}
                            {tipo}
                        </h5>
                        <h5  style={{color:'#000',textTransform:'uppercase'}}>
                        {codigo}
                        </h5>

                    </Box>

                    <Box sx={{display:'flex',justifyContent:'space-between' }} >
                        <InputLabel style={{color:'#000'}}>
                            {
                            tipo == 'saude' ? `Consulta:`: `Serviço:` }
                            <strong>{motivo}</strong>
                        </InputLabel>
                        <InputLabel style={{color:'#000'}}>
                            <strong className={status === 'on' ? "text-success" : 'text-danger'}>
                                { status === 'on' ? "Presente" : 'Faltou'}
                            </strong>
                        </InputLabel>
                    </Box>
                    <InputLabel style={{color:'#000'}}>
                            Data de Comparecimento: <strong>{dataConsulta} - {horaConsulta}</strong>
                        </InputLabel>
                    
                        <InputLabel style={{color:'#000'}}>
                        Adicionado por :<i> {codigoGerente} - {horaCriacao} </i>
                        </InputLabel>
                    
                </Box>
                )
            })
        }

        </Box>
       
    </Box>
    )
}

export default React.memo(TimeLine)