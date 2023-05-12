import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { columns, BASE_URL, apiData } from '../cummon/constant'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ContentList = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [data, setData] = useState([])
  // const navigate = useNavigate()

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleOnClick = (id: any) => {

  }
  // useEffect(() => {
  //   axios.get(`${BASE_URL}/contents`)
  //     .then(function (response: any) {
  //       console.log(response.data, "data")
  //       setData(response)
  //       console.log(response);
  //     })
  // }, [])

  return (
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
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} >
                      {columns.map((column) => {
                        console.log(column.id, "column")
                        const value = row.attributes[column.id];
                        console.log(value, "value")
                        return (
                          <TableCell key={column.id} align={column.align} style={{ cursor: "pointer" }} onClick={() => { handleOnClick(value) }}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}

                    </TableRow>
                  );
                })
              }
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={apiData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
export default ContentList;