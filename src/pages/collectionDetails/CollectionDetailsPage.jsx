import React, { useState,useEffect} from 'react'
import { useParams, useLocation } from 'react-router-dom'
import './CollectionDetailsPage.css'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Header from '../../components/header/Header';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
export default function CollectionDetailsPage() {
  const { name } = useParams(); 
  const location = useLocation();
  const { artist, type, songCount, duration, size, releasedOn } = location.state || {};

  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetch('/collections/' + encodeURIComponent(name))
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setCollections(data);
      })
      .catch(error => console.error('Error fetching collections:', error));
  }, []);

  const dummyData = [
    { song: 'Song 1', performers: 'Artist 1', duration: '3:45', size: '3 MB' },
    { song: 'Song 2', performers: 'Artist 2', duration: '4:20', size: '4 MB' },
    { song: 'Song 3', performers: 'Artist 3', duration: '5:10', size: '5 MB' },
  ];

  return (
    <div className='collection-page'>
      <div className='breadcrumb-container'>
        <Breadcrumbs aria-label="breadcrumb-container" separator=">">
          <Link underline="hover" color="inherit" href="/">
            Overview
          </Link>
          <Typography color="text.primary">{decodeURIComponent(name)}</Typography> 
        </Breadcrumbs>
      </div>
      <div className='header-content'>
        <Header title={decodeURIComponent(name)} />
      </div>
      <div className='details-box'>
        <div className='details-header'>
          <div className='details-title'>Artist</div>
          <div className='details-title'>Type</div>
          <div className='details-title'>Song Count</div>
          <div className='details-title'>Total Size</div>
          <div className='details-title'>Total Duration</div>
          <div className='details-title'>Released On</div>
        </div>
        <div className='details-row'>
          <div className='details-data'>{artist}</div>
          <div className='details-data'>{type}</div>
          <div className='details-data'>{songCount}</div>
          <div className='details-data'>{size}</div>
          <div className='details-data'>{duration}</div>
          <div className='details-data'>{releasedOn}</div>
        </div>
      </div>
      <div className='songs-table'>
        <TableContainer component={Paper} sx={{ maxHeight: 900 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Song</TableCell>
                <TableCell>Performers</TableCell>
                <TableCell>Duration</TableCell>
                <TableCell>Size</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dummyData.map((data, index) => (
                <TableRow key={index}>
                  <TableCell>{data.song}</TableCell>
                  <TableCell>{data.performers}</TableCell>
                  <TableCell>{data.duration}</TableCell>
                  <TableCell>{data.size}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}