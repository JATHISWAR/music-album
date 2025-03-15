import React, { useState } from 'react'
import Header from '../../components/header/Header'
import Paper from '@mui/material/Paper'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { Checkbox, FormControl, IconButton, InputLabel, ListItemText, MenuItem, Select, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import './LandingPage.css'

export default function LandingPage() {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const options = ['Album', 'EP', 'Single']; 

    const handleSelectChange = (event) => {
        setSelectedOptions(event.target.value);
    };

    const rows = [
        { name: 'Collection 1', artist: 'Artist 1', type: 'Album', songCount: 10, duration: '40:00', size: '100MB', releasedOn: '2023-01-01' },
        { name: 'Collection 2', artist: 'Artist 2', type: 'EP', songCount: 5, duration: '20:00', size: '50MB', releasedOn: '2023-02-01' },
        { name: 'Collection 2', artist: 'Artist 2', type: 'EP', songCount: 5, duration: '20:00', size: '50MB', releasedOn: '2023-02-01' },
        { name: 'Collection 2', artist: 'Artist 2', type: 'EP', songCount: 5, duration: '20:00', size: '50MB', releasedOn: '2023-02-01' },
        { name: 'Collection 2', artist: 'Artist 2', type: 'EP', songCount: 5, duration: '20:00', size: '50MB', releasedOn: '2023-02-01' },
        { name: 'Collection 2', artist: 'Artist 2', type: 'EP', songCount: 5, duration: '20:00', size: '50MB', releasedOn: '2023-02-01' },
        { name: 'Collection 2', artist: 'Artist 2', type: 'EP', songCount: 5, duration: '20:00', size: '50MB', releasedOn: '2023-02-01' },
        { name: 'Collection 2', artist: 'Artist 2', type: 'EP', songCount: 5, duration: '20:00', size: '50MB', releasedOn: '2023-02-01' },
        { name: 'Collection 2', artist: 'Artist 2', type: 'EP', songCount: 5, duration: '20:00', size: '50MB', releasedOn: '2023-02-01' },
        { name: 'Collection 2', artist: 'Artist 2', type: 'EP', songCount: 5, duration: '20:00', size: '50MB', releasedOn: '2023-02-01' },
        { name: 'Collection 2', artist: 'Artist 2', type: 'EP', songCount: 5, duration: '20:00', size: '50MB', releasedOn: '2023-02-01' },
        { name: 'Collection 2', artist: 'Artist 2', type: 'EP', songCount: 5, duration: '20:00', size: '50MB', releasedOn: '2023-02-01' },
        { name: 'Collection 2', artist: 'Artist 2', type: 'EP', songCount: 5, duration: '20:00', size: '50MB', releasedOn: '2023-02-01' },
        { name: 'Collection 2', artist: 'Artist 2', type: 'EP', songCount: 5, duration: '20:00', size: '50MB', releasedOn: '2023-02-01' },
        { name: 'Collection 2', artist: 'Artist 2', type: 'EP', songCount: 5, duration: '20:00', size: '50MB', releasedOn: '2023-02-01' },
        { name: 'Collection 2', artist: 'Artist 2', type: 'EP', songCount: 5, duration: '20:00', size: '50MB', releasedOn: '2023-02-01' },
    ];

    return (
       <div className='landing-page'>
              <Header title="Overview" />
              <div className='content'>
                  <Paper 
                      className='content-paper spacing/space-200'
                  >
                    <div className='toolbar-content'>
                        <div className='search-multiselect-container'>
                            <div className='search-container'>
                                <TextField
                                    variant="outlined"
                                    placeholder="Search..."
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <SearchIcon />
                                            </InputAdornment>
                                        ),
                                        style: { height: '34px', width: '310px', maxWidth: '340px' } 
                                    }}
                                />
                            </div>
                            <div className='multiselect-container'>
                                <FormControl variant="outlined" className='form-control'>
                                    <InputLabel
                                    sx={{ fontSize: '0.75rem', top: '-8px' }} 
                                    >Type</InputLabel>
                                    <Select
                                        multiple
                                        value={selectedOptions}
                                        onChange={handleSelectChange}
                                        renderValue={(selected) => selected.join(', ')}
                                        className='select'
                                    >
                                        {options.map((option) => (
                                            <MenuItem key={option} value={option}>
                                                <Checkbox checked={selectedOptions.indexOf(option) > -1} />
                                                <ListItemText primary={option} /> 
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                    </div>
                    <TableContainer component={Paper} sx={{ maxHeight: 900, overflowY: 'auto' }}>
                        <Table stickyHeader>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Collection Name</TableCell>
                                    <TableCell>Type</TableCell>
                                    <TableCell>Song Count</TableCell>
                                    <TableCell>Duration</TableCell>
                                    <TableCell>Size</TableCell>
                                    <TableCell>Released On</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell>
                                            <Typography variant="h6">{row.name}</Typography>
                                            <Typography variant="subtitle2" color="textSecondary">{row.artist}</Typography>
                                        </TableCell>
                                        <TableCell>{row.type}</TableCell>
                                        <TableCell>{row.songCount}</TableCell>
                                        <TableCell>{row.duration}</TableCell>
                                        <TableCell>{row.size}</TableCell>
                                        <TableCell>{row.releasedOn}</TableCell>
                                        <TableCell>
                                            <IconButton color="primary">
                                                <VisibilityIcon />
                                                <span className='view-details-title'>View Details</span>
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                  </Paper>
              </div>
       </div>
    )
}