import { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid'
import rows1 from './rows1';
import rows2 from './rows2';
import './App.css';

function App() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 300 },
    { field: 'first_name', headerName: 'Name',  width: 300}
  ];
  const [currentRows, setCurrentRows] = useState(rows1);

  const changeRows = () => {
    setCurrentRows(rows2);
  };

  return (
    <>
      <DataGrid
        autoHeight
        pageSize={10}
        columns={columns}
        rows={currentRows}

      />
      <button onClick={changeRows}>Change Rows</button>
    </>
  );
}

export default App;
