"use client";

import {
  createContext,
  useEffect,
  useState,
} from 'react';

import axios from 'axios';

export const AdminContext = createContext();

const AdminProvider = ({ children }) => {
  const [totalUser, setTotalUser] = useState([]);

//USERS
  useEffect(() => {
    const AllUser = async () => {
      const { data } = await axios.get("/api/alluser");
      setTotalUser(data.data);
    };
    AllUser();
  }, []);
  return(
    <AdminContext.Provider value={{ totalUser}}>
      {children}
    </AdminContext.Provider>
  );
};
export default AdminProvider;