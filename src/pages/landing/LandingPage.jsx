import React, { useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
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
    const navigate = useNavigate();
    const [collections, setCollections] = useState([]);

    useEffect(() => {
      fetch('/collections')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setCollections(data);
        })
        .catch(error => console.error('Error fetching collections:', error));
    }, []);

    const handleSelectChange = (event) => {
        setSelectedOptions(event.target.value);
    };

    const handleViewDetails = (row) => {
        navigate(`/details/${encodeURIComponent(row.name)}`, {
            state: {
                artist: row.artist,
                type: row.type,
                songCount: row.songCount,
                duration: row.duration,
                size: row.size,
                releasedOn: row.releasedOn
            }
        });
    };

    const rows = [
        { name: 'Collection 1', artist: 'Artist 1', type: 'Album', songCount: 10, duration: '40:00', size: '100MB', releasedOn: '2023-01-01' },
        { name: 'Collection 2', artist: 'Artist 2', type: 'EP', songCount: 5, duration: '20:00', size: '50MB', releasedOn: '2023-02-01' },
        { name: 'Collection 3', artist: 'Artist 3', type: 'Single', songCount: 1, duration: '3:30', size: '10MB', releasedOn: '2023-03-01' },
        { name: 'Collection 4', artist: 'Artist 4', type: 'Album', songCount: 12, duration: '45:00', size: '120MB', releasedOn: '2023-04-01' },
        { name: 'Collection 5', artist: 'Artist 5', type: 'EP', songCount: 6, duration: '25:00', size: '60MB', releasedOn: '2023-05-01' },
        { name: 'Collection 6', artist: 'Artist 6', type: 'Single', songCount: 1, duration: '4:00', size: '12MB', releasedOn: '2023-06-01' },
        { name: 'Collection 7', artist: 'Artist 7', type: 'Album', songCount: 9, duration: '38:00', size: '95MB', releasedOn: '2023-07-01' },
        { name: 'Collection 8', artist: 'Artist 8', type: 'EP', songCount: 4, duration: '18:00', size: '45MB', releasedOn: '2023-08-01' },
        { name: 'Collection 9', artist: 'Artist 9', type: 'Single', songCount: 1, duration: '3:45', size: '11MB', releasedOn: '2023-09-01' },
        { name: 'Collection 10', artist: 'Artist 10', type: 'Album', songCount: 11, duration: '42:00', size: '110MB', releasedOn: '2023-10-01' },
        { name: 'Collection 11', artist: 'Artist 11', type: 'EP', songCount: 7, duration: '28:00', size: '70MB', releasedOn: '2023-11-01' },
        { name: 'Collection 12', artist: 'Artist 12', type: 'Single', songCount: 1, duration: '3:15', size: '9MB', releasedOn: '2023-12-01' },
    ];

    const filteredRows = selectedOptions.length > 0
        ? rows.filter(row => selectedOptions.includes(row.type))
        : rows;

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
                                        sx={{fontSize: '0.75rem',color: '#0b527f',fontWeight: 'bold'}}
                                        renderValue={(selected) => `Type(${selected.length})`}
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
                                    <TableCell>View Details</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredRows.map((row) => (
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
                                            <IconButton color="primary" onClick={() => handleViewDetails(row)}>
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