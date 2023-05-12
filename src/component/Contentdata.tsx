import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { columns, BASE_URL, apiData } from '../cummon/constant'
import { Data } from '../cummon/interface';
import axios from 'axios';

const Contentdata = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [data, setData] = useState([])
  return (
    <>
      <div className='' style={{ display: "flex", justifyContent: 'center', alignItems: 'center', height: "100%" }}>
        <Paper sx={{ width: '80%' }}>
          <h3 style={{ padding: '5px', background: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '30px' }}>Page Title</h3>
          <TableContainer >
            <Table stickyHeader aria-label="sticky table">
              <TableHead>

                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ top: 0, minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {apiData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row: any) => {
                    console.log(row.attributes, "row")
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} >
                        {columns.map((column: any) => {
                          const value = row.attributes[column.id];
                          return (
                            <TableCell key={column.id} align={column.align} style={{ cursor: "pointer" }}>
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}

                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    </>
  )
}

export default Contentdata
