
import { cilBuilding, cilOptions, cilTerrain } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CButton, CCard, CCardBody, CCardText, CCardTitle, CContainer, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CFormLabel, CFormText, CNavLink, CRow } from "@coreui/react";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { NavLink } from "react-router-dom";

import ContainerTitle from "./Utils/ContainerTitle";


const CardArea = ({data}) => {

    const {area,codigo,tipo} = data

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDelete = () => {
        setAnchorEl(null);
    };

    const url = `/lideres/${codigo}`
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
                <MenuItem onClick={handleClose}>
                    <EditIcon sx={{ marginRight: 1 }} />
                    Editar
                </MenuItem>
                <MenuItem onClick={handleDelete}>
                    <DeleteIcon sx={{ marginRight: 1 }} />
                    Deletar
                </MenuItem>
            </Menu>
            <Box className="w-100 mb-3 border rounded p-3 border-start border-start-5 border-start-info">
                <Box sx={{ display: 'flex', width: "100%" }}>

                    <CNavLink style={{ display: 'flex', width: '100%',alignItems:'center', justifyContent:'space-evenly' }} to={url} as={NavLink}>
                        <Box sx={{width:'6%', marginRight:3,marginLeft:1}}>
                            <CIcon icon={cilTerrain} customClassName="nav-icon"/>
                        </Box>
                        
                        <ContainerTitle
                            title={'Area'}
                            info={area}
                        />

                        <ContainerTitle
                            title={'Tipo'}
                            info={tipo}
                        />

                        <ContainerTitle
                            title={'Codigo'}
                            info={codigo}
                        />

                    </CNavLink>
                    <Box sx={{alignItems:'center', justifyContent:'center', display:'flex'}}>
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
        </>
    )
}


export default React.memo(CardArea)
