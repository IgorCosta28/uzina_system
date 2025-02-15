import { cilSearch } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CButton, CCol, CFormInput, CFormSelect, CInputGroup } from "@coreui/react";
import React, { useState } from "react";

const HeaderSeach = ({ placeholder, select, fillterCallback}) => {

    const [fillter, setFillter] = useState({})

    const onfillter = (e) =>{
        const { value, id } = e.target
        let d = {
        ...fillter,
        }
        d[id] = value
        setFillter(d)

        
    }

    const handleClickFillter  = () => {
        fillterCallback(fillter)
    }

    return (
        <CCol style={{marginBottom:15}}>
            <CInputGroup className="mb-3">
                <CFormInput
                    onChange={onfillter}
                    id="fillInput"
                    placeholder={placeholder}
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                />
                <CButton type="button" color="secondary" variant="outline" id="button-addon2" onClick={handleClickFillter}>
                    <CIcon icon={cilSearch} style={{ marginRight: 10 }} />
                    Buscar
                </CButton>
            </CInputGroup>

            <CInputGroup style={{
                alignItems: 'center',
                gap: 10
            }}>
                <span>Filtros: </span>

                <div style={{display:'flex'}}>

                    {
                        select.map((label, index) => {
                            let Idd = "fillSelect" + index
                            return (
                                <CFormSelect
                                    onChange={onfillter}
                                    id={Idd}
                                    style={{
                                        width:'auto',
                                        marginRight:10
                                    }}
                                    aria-label="area"
                                    options={label.labels}
                                />
                            )
                        })
                    }


                </div>

            </CInputGroup>
        </CCol>
    )
}

export default React.memo(HeaderSeach)