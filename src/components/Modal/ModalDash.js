import CIcon from '@coreui/icons-react'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import { Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import React, {useState } from 'react'

const ModalDash = ({ title, icon, children, submit}) => {

    const [visible, setVisible] = useState(false)

    const handleModalVisible = () => {
        setVisible(!visible)
    }

    return (
        <>
            <CModal
                visible={visible}
                onClose={() => setVisible(false)}
            >
                <CModalHeader>
                    <CIcon icon={icon} customClassName="nav-icon" style={{width:"7%",marginRight:10}}/>
                    <CModalTitle>{title}</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    {children}
                </CModalBody>
                <CModalFooter>
                    <CButton color="secondary"
                    onClick={handleModalVisible}>Fechar</CButton>
                    <CButton color="primary"
                    onClick={submit}>Salvar </CButton>
                </CModalFooter>
            </CModal>

            <Fab
                sx={{ position: 'fixed', bottom: 30, right: 30, bgcolor: '#fd2', '&:hover': { bgcolor: "#f12" }, }}
                aria-label={'Add'}
                color='#25f'
                onClick={handleModalVisible}
            >
                <AddIcon color='#f2f' />
            </Fab>
        </>
    )
}

export default React.memo(ModalDash)