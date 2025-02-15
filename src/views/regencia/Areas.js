import React, { useEffect, useState } from 'react'
import ModalDash from '../../components/Modal/ModalDash'

import { cilTerrain, cilSearch } from '@coreui/icons'
import { CButton, CCol, CContainer, CFormInput, CFormSelect, CFormText, CInputGroup, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import HeaderSeach from '../../components/header/HeaderSeach'
import CardArea from './Cards/CardArea'
import { Box, Container } from '@mui/material'
import ListView from '../../components/ListView/ListView'
import { areas } from '../../data/areas'

const Areas = () => {

  const [Areas, setAreas] = useState([])

  const [parea, setArea] = useState({})

  useEffect(()=>{
    setAreas(areas)
  },[])

  const submitArea = (e) => {
    const { value, id } = e.target
    let d = {
      ...parea,
    }
    d[id] = value
    setArea(d)
  }

  const submitDataArea = () => {
    console.log(parea);
  }

  const callfilter = (fillter) => {
    console.log(fillter);

  }

  return (
    <>
      <HeaderSeach placeholder={'Buscar área'} fillterCallback={callfilter} select={[
        {
          labels: [
            { label: 'tipo de área', value: '' },
            { label: 'bairro', value: 'bairro' },
            { label: 'conjunto', value: 'conjunto' }
          ]
        }
      ]}
      />

      <ListView>
        {
          Areas.map((data)=>{
            return(
              <CardArea key={data.id}  data={data} />
            )
          })
        }

      </ListView>

      <ModalDash title={'Nova Area'} icon={cilTerrain} submit={submitDataArea} >

        <CCol>
          <CFormInput
            type="text"
            id="nameArea"
            floatingClassName="mb-3"
            floatingLabel="Nome da Area"
            placeholder="bairro ou conjunto"
            onChange={submitArea}
          />
          <CFormSelect
            id="typeArea"
            floatingLabel="Tipo"
            aria-label="Floating label select example"
            onChange={submitArea}
          >
            <option>tipo de área</option>
            <option value="bairro">Bairro</option>
            <option value="conjunto">Conjunto</option>

          </CFormSelect>
        </CCol>

      </ModalDash>
    </>
  )
}

export default Areas
