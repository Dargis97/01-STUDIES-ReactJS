import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';
import Create from './components/Create';
import DataContext from './components/DataContext.jsx';
import Edit from './components/Edit';
import List from './components/List';
import Msg from './components/Msg';
import { create, read, destroy, update } from './functions/localStorage';
import rand from './functions/rand';

const key = 'things_shelf';

function App() {
  const [things, setThings] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [editData, setEditData] = useState(null);

  const [msgs, setMsgs] = useState([]);

  //READ
  useEffect(() => {
    setThings(read(key));
  }, [lastUpdate]);

  //CREATE
  useEffect(() => {
    if (null === createData) {
      return;
    }
    create(key, createData);
    setLastUpdate(Date.now());
    makeMsg('New THING was created!', 'success');
  }, [createData]);

  //DELETE
  useEffect(() => {
    if (null === deleteData) {
      return;
    }
    destroy(key, deleteData.id);
    setLastUpdate(Date.now());
    makeMsg('The THING was broken!', 'info');
  }, [deleteData]);

  //EDIT
  useEffect(() => {
    if (null === editData) {
      return;
    }
    update(key, editData, editData.id);
    setLastUpdate(Date.now());
  }, [editData]);

  const makeMsg = (text, type) => {
    const id = rand(1000000, 9999999);
    setMsgs((m) => [...m, { text, id, type }]);
    setTimeout(() => {
      setMsgs((m) => m.filter((ms) => ms.id !== id));
    }, 4000);
  };

  return (
    <DataContext.Provider
      value={{
        setCreateData,
        things,
        setDeleteData,
        modalData,
        setModalData,
        setEditData,
        msgs,
      }}
    >
      <div className='container'>
        <div className='bin'>
          <div className='box-1'>
            <Create />
          </div>
          <div className='box-2'>
            <List />
          </div>
        </div>
      </div>
      <Edit />
      <Msg />
    </DataContext.Provider>
  );
}

export default App;
