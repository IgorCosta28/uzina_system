import React, { useEffect, useState } from 'react'
import { cilClipboard } from '@coreui/icons'
import ModalDash from '../../components/Modal/ModalDash'
import HeaderSeach from '../../components/header/HeaderSeach'
import { lideres } from '../../data/lideres'
import ListView from '../../components/ListView/ListView'
import { areas } from '../../data/areas'
import { useParams } from 'react-router-dom'
import { CAvatar, CCol, CContainer, CFormInput, CFormLabel, CFormSelect } from '@coreui/react'
import imgT from '../../assets/images/avatars/1.jpg'
import CardLider from './Cards/CardLider'
import { Box } from '@mui/material'

const Lideres = () => {

  const {fill} = useParams()
  const [areasS, setAreas] = useState([])
  const [lideresS, setLideres] = useState([])
  const [imgCreateLider, setImgCreateLider ] = useState(null)


  const handleClickImg = ()=>{
    const img =  document.getElementById('inputimg')
    img.click()

    setImgCreateLider(img.value)
    console.log(img.target);
  }

  const fillterCall = (data)=>{

  }

  useEffect(()=>{
    if (fill == 'all'){
      setLideres(lideres)
    }else {
      setLideres(lideres.filter((e)=> e.area === fill))
    }
    setAreas(areas)
    
  },[fill])

  return (
    <>
      <ModalDash title="Novo Lider" icon={cilClipboard}>
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
              {
                areasS.map((area)=>
                  <option value={area.codigo}> {area.tipo} {area.area} </option>
              )
            }
            </CFormSelect>
            </Box>
          </CCol>
        </ListView>
      </ModalDash>

      <HeaderSeach placeholder={'Buscar Lideres'} fillterCallback={fillterCall} select={[
            {
              labels: [
                { label: 'tipo de area', value: '' },
                { label: 'bairro', value: 'bairro' },
                { label: 'conjunto', value: 'conjunto' }
              ]
            },
            {
              labels: [
                { label: 'areas', value: '' },
                { label: 'novo hizonte', value: 'novo hizonte' },
                { label: 'albatroz', value: 'albatroz' },
                { label: 'uniao', value: 'uniao' },

              ]
            }
          ]} 
        />

       <ListView>
            {
              lideresS.map((data)=>{
                return(
                  <CardLider
                    key={data.id}
                    data={data}
                    areaData={areasS}
                  />
                )
              })
            }
        </ListView>

    </>
  )
}

export default Lideres
