
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, InputLabel } from '@mui/material';
import { Height } from '@mui/icons-material';
import CIcon from '@coreui/icons-react';
import { cilHealing } from '@coreui/icons';
import ListView from '../../components/ListView/ListView';
import { servicos } from '../../data/consultas';
import TimerLine from '../../components/TimeLine/TimerLine';
import { CContainer } from '@coreui/react';
import { cidadoes } from '../../data/cidadoes';

const Historico = () => {

    const [servicoC, setServicoC] = useState({})
    const [cidadaoN, setCidadaoN] = useState({})


    const { cidadao } = useParams()

    useEffect(() => {
        const [cidS] = servicos.filter(cid => cid.cidadao === cidadao)

        const [cidN] = cidadoes.filter(cid => cidadao === cid.codigo)


        if (cidS !== undefined) {
            setServicoC(cidS.servicosCidadao)
        }
        setCidadaoN(cidN)

        

    }, [cidadao])


        return (
            <Box sx={{display:'flex', width:'100%', alignItems:'center', flexDirection:'column'}}>
               
            <h4 style={{marginBottom:10, position:'relative'}}>
                Historico de Serviços 
            </h4>
            <h4 style={{marginBottom:20, position:'relative'}}>
                {cidadaoN.nome} - Código: {cidadaoN.codigo}
            </h4>
                <CContainer style={{ overflow: 'auto', width: '100%', height: '65vh' }}>
                    {

                        Object.keys(servicoC).map((date) => {
                            return (
                                <TimerLine key={date} data={servicoC[date]} date={date} />
                            )
                        })

                    } 
                </CContainer>



            </Box>

        )
}

export default Historico
