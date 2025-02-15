
import { cilBuilding, cilClipboard, cilOptions, cilUser } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CAvatar, CButton, CCard, CCardBody, CCardText, CCardTitle, CCol, CContainer, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CNavItem, CRow, CNavLink, CFormInput, CFormLabel, CFormText } from "@coreui/react";
import { Box, Button, Container, Drawer, Menu, MenuItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { NavLink } from "react-router-dom";
import ContainerTitle from "./Utils/ContainerTitle";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ListView from "../../../components/ListView/ListView";


const CardCidadao = ({data, areaData, liderData}) => {

    const [colorBordeStart, setColorBordeStart] = useState('border-start-success')

    const {nome,area,email,codigo,nascimento,telefones,lider, endereco} = data 

    const [areaDataS] = areaData.filter((e) => e.codigo === area)
    const [liderDataS] = liderData.filter((e) => e.codigo === lider)

    useEffect(()=>{
        if (liderDataS === undefined){
            setColorBordeStart('border-start-secondary')
        }
    },[])
    


    const [anchorEl, setAnchorEl] = useState(null);

    const [openDrawer, setOpenDrawer] = useState(false);

    const handleDrawer = () => {
        setOpenDrawer(!openDrawer)
        setAnchorEl(null);
    }

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(false);
    };

    const url = `/cidadoes/historico/${codigo}`

    const BoxInfo = ({ title, value, icon}) => {
        return (
            <Box sx={{ marginBottom: 2 }}>
                <CFormLabel htmlFor="exampleFormControlInput1" style={{ marginBottom: 1, fontSize: 12 }}>
                    {title}
                </CFormLabel>
                <CFormText as="h5" style={{ color: '#000', fontSize: 15, marginTop: 1 }} id="exampleFormControlInputHelpInline">
                {value}
                </CFormText>
            </Box>
        )
    }

    const IconIf = ({ icon }) => {
        if (icon === 'whatsapp') {
            return (
                <WhatsAppIcon />
            )
        } else {
            return (
                <LocalPhoneIcon />
            )
        }
    }

    return (
        <>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem >
                    <EditIcon sx={{ marginRight: 1 }} />
                    Editar
                </MenuItem>
                <MenuItem >
                    <DeleteIcon sx={{ marginRight: 1 }} />
                    Deletar</MenuItem>
                <MenuItem onClick={handleDrawer}>
                    <RemoveRedEyeIcon sx={{ marginRight: 1 }} />
                    Ver</MenuItem>
            </Menu>

            <Box className={`w-100 mb-3 border rounded p-3 border-start border-start-5 ${colorBordeStart}`}>
                <Box sx={{ display: 'flex', width: "100%" }}>

                    <CNavLink style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-evenly' }} to={url} as={NavLink}>
                        <Box sx={{ width: '6%', marginRight: 3, marginLeft:1 }}>
                            <CIcon icon={cilUser} customClassName="nav-icon" />
                            {/* <CAvatar src={imgT} size="xl" /> */}
                        </Box>

                        <ContainerTitle
                            title={'Cidadão'}
                            info={nome}
                        />

                        <ContainerTitle
                            title={'Nascimento'}
                            info={nascimento}
                        />

                        <ContainerTitle
                            title={'Codigo'}
                            info={codigo}
                        />


                    </CNavLink>
                    <Box sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <CIcon icon={cilOptions} size="lg" aria-haspopup="true" />

                        </Button>

                    </Box>
                </Box>
            </Box>



            <Drawer open={openDrawer} anchor={'right'} onClose={() => setOpenDrawer(false)}>
                

                
                <Box sx={{
                    width: "22vw",
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 1,
                    marginTop: 0,
                    bgcolor: '#f9faf5',
                    
                    
                }}>
                    {/* <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: 1, marginTop: 2 }}>
                        <CAvatar src={imgT}
                            style={{ width: '110px', height: '110px', border: '0.5px solid #ccd1d7' }} />
                    </Box> */}

                    <Box sx={{
                        height: '100%', 
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                        justifyContent: 'space-around',
                        marginTop: 2,
                        border: '1px solid #ccd1d7',
                        padding: 5,
                        borderRadius: 5,
                        textTransform: 'uppercase',
                        bgcolor: '#ffff',
                        overflow:'auto'
                    }}>

                        <BoxInfo
                            title={'Cidadão'}
                            value={nome}
                        />

                        
                        <BoxInfo
                            title={'Data de Nascimento'}
                            value={nascimento}
                        />
                        <BoxInfo
                            title={'Codigo Cidadão'}
                            value={codigo}
                        />


                        <BoxInfo
                            title={'Area Vinculada'}
                            value={`${areaDataS.tipo} ${areaDataS.area} [${areaDataS.codigo}]`}
                        />

                        <BoxInfo
                            title={'Lider Responsavel'}
                            value={
                                liderDataS != undefined ? `${liderDataS.nome} [${liderDataS.codigo}]` : 'Sem Lider'}
                        />

                        <BoxInfo
                        
                            title={'Email'}
                            value={email}
                        />

                        <BoxInfo
                            title={'Endereço'}
                            value={`${endereco.lougadoro}, nº ${endereco.casa}, q ${endereco.quadra}, ${endereco.bairro}, ${endereco.cidade}`}
                        />
                        <Box>
                            <CFormLabel htmlFor="exampleFormControlInput1" style={{ marginBottom: 1, fontSize: 12 }}>Contatos</CFormLabel>
                            {
                                telefones.map((tel) => {
                                    return (
                                        <CFormText as="h5" style={{ color: '#000', fontSize: 15, marginTop: 1 }} id="exampleFormControlInputHelpInline">

                                            <IconIf icon={tel.type} /> {tel.number}

                                        </CFormText>
                                    )
                                })
                            }

                        </Box>

                        <Box sx={{
                            alignSelf: 'center',
                            marginTop: 3,
                        }}>
                            <CButton color="danger" onClick={handleDrawer}>
                                Fechar
                            </CButton>

                        </Box>


                    </Box>

                </Box>
               
            </Drawer>
        </>
    )
}


export default React.memo(CardCidadao)
