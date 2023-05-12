//@ts-nocheck
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
import { Data } from '../cummon/interface';
import axios from 'axios';

function createData(
  name: string,
  code: string,
  population: number,
  size: number,
): Data {
  const density = population / size;
  return { name, code, population, size, density };
}


const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];
console.log(apiData, "api")


const ContentList = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [data, setData] = useState([])

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
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
        <h3 style={{padding: '5px', background:'white' , display:'flex',justifyContent:'center',alignItems:'center', fontSize: '30px'  }}>Page Title</h3>
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
              {/* <TableRow hover role="checkbox">
                <TableCell>
                  h1
                </TableCell>
              </TableRow> */}
              {apiData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  console.log(row.attributes, "row")
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        console.log(column.id, "column")
                        const value = row.attributes[column.id];
                        console.log(value ,"value")
                        return (
                          <TableCell key={column.id} align={column.align} style={{cursor:"pointer"}}>
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
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
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