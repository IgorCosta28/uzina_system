import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ModalDash from '../../components/Modal/ModalDash'
import HeaderSeach from '../../components/header/HeaderSeach'
import ListView from '../../components/ListView/ListView'
import CardCidadao from './Cards/CardCidadao'

import { areas } from '../../data/areas'
import { lideres } from '../../data/lideres'
import { cidadoes } from '../../data/cidadoes'
import { CCol, CFormInput, CFormLabel, CFormSelect } from '@coreui/react'
import { Box } from '@mui/material'
import { cilUser } from '@coreui/icons'


const Cidadoes = () => {

  const [area, setArea] = useState([])
  const [lider, setLider] = useState([])
  const [cidadao, setCidadao] = useState([])
  
  const {fill} = useParams()

  const fillterCall = (data)=>{

  }

   useEffect(()=>{
      if (fill == 'all'){
        setCidadao(cidadoes)
      }else {
        setCidadao(cidadoes.filter((e)=> e.lider === fill))
      }
      setArea(areas)
      setLider(lideres)
      
    },[fill])
  
  return (
    <>
       <ModalDash title="Novo Cidadão" icon={cilUser}>
        <ListView>

        {/* <CContainer 
        onClick={handleClickImg}
        style={{width:'100%', display:'flex', justifyContent:'center', marginBottom:20}}>
          <input type='file' hidden id='inputimg'/>
          <CAvatar src={imgCreateLider} style={{ width: '110px', height: '110px',border:'0.5px solid #ccd1d7', cursor:'pointer'}} />
        </CContainer> */}
         <CCol>
            <CFormInput
              type="text"
              id="nameArea"
              floatingClassName="mb-3"
              floatingLabel="Nome"
              placeholder="bairro ou conjunto"
              
            />

           
            <CFormInput
              type="email"
              id="nameArea"
              floatingClassName="mb-3"
              floatingLabel="Email"
              placeholder="email@gmail.com"
            />

            <Box>

            <CFormLabel style={{padding:3}}>
                Contato
              </CFormLabel>

              <CFormInput
                type="email"
                id="nameArea"
                floatingClassName="mb-3"
                floatingLabel="Telefone"
                placeholder="email@gmail.com"
                />

              <CFormInput
                type="email"
                id="nameArea"
                floatingClassName="mb-3"
                floatingLabel="whatsapp"
                placeholder="email@gmail.com"
                />

              </Box>


            <Box>
              <CFormLabel style={{padding:3}}>
                Endereço
              </CFormLabel>
              <CFormInput
                type="text"
                id="nameArea"
                floatingClassName="mb-3"
                floatingLabel="lougadoro"
                placeholder="lougadoro"
              />

              <Box display={'flex'} gap={2}>
                <CFormInput
                type="text"
                id="nameArea"
                floatingClassName="mb-3"
                floatingLabel="Casa"
                placeholder="numero"
              /> 

              <CFormInput
                type="text"
                id="nameArea"
                floatingClassName="mb-3"
                floatingLabel="Quadra"
                placeholder="Quadra"
              />
              </Box>
              <CFormInput
                type="text"
                id="nameArea"
                floatingClassName="mb-3"
                floatingLabel="Bairro"
                placeholder="lougadoro"
              />

              <CFormInput
                type="text"
                id="nameArea"
                floatingClassName="mb-3"
                floatingLabel="Cidade"
                placeholder="lougadoro"
              />

            </Box>

             
            
            <Box>
            <CFormLabel style={{padding:3}}>
                Atuação
              </CFormLabel>

            <CFormSelect
              id="typeArea"
              floatingLabel="Area Responsavel"
              aria-label="Floating label select example"
              >
              <option>Area</option>
              {/* {
                areasS.map((area)=>
                  <option value={area.codigo}> {area.tipo} {area.area} </option>
              )
            } */}
            </CFormSelect>
            </Box>
          </CCol>
        </ListView>
      </ModalDash>

      <HeaderSeach placeholder={'Buscar Cidadão'} fillterCallback={fillterCall} select={[
            {
              labels: [
                { label: 'Area', value: '' },
                { label: 'bairro', value: 'bairro' },
                { label: 'conjunto', value: 'conjunto' }
              ]
            },
            {
              labels: [
                { label: 'Lider', value: '' },
                { label: 'novo hizonte', value: 'novo hizonte' },
                { label: 'albatroz', value: 'albatroz' },
                { label: 'uniao', value: 'uniao' },
                {label:'sem lider', value:'sem lider'}

              ]
            }
          ]} 
        />

       <ListView>
            {
              cidadao.map((data)=>{
                return(
                  <CardCidadao
                    key={data.id}
                    data={data}
                    areaData={area}
                    liderData={lider}
                  />
                )
              })
            }
        </ListView>
  
    </>
  )
}

export default Cidadoes
