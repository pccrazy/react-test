import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";

const ConnectionsCards = props => {
  const [getConnections, setConnections] = useState([]);

  useEffect(() => {
    const fetchConnections = async () => {
      try {
        setConnections({ connections: [], isFetching: true });

        const response = [
          {
            EmployeeName: "",
            CompanyNumber: "",
            Status: "1"
          },
          {
            EmployeeName: "",
            CompanyNumber: "",
            Status: "0"
          },
          {
            EmployeeName: "",
            CompanyNumber: "",
            Status: "0"
          },
          ,
          {
            EmployeeName: "Al Jahwari, Ahmed IDW4X",
            CompanyNumber: "MUCE993",
            Status: "0"
          },
          {
            EmployeeName: "Al Jahwari, Ahmed IDW4X",
            CompanyNumber: "MUCE993",
            Status: "0"
          },
          {
            EmployeeName: "Al Jahwari, Ahmed IDW4X",
            CompanyNumber: "MUCE993",
            Status: "0"
          },
          {
            EmployeeName: "Al Jahwari, Ahmed IDW4X",
            CompanyNumber: "MUCE993",
            Status: "0"
          },
          {
            EmployeeName: "Al Jahwari, Ahmed IDW4X",
            CompanyNumber: "MUCE993",
            Status: "0"
          },
          {
            EmployeeName: "Al Jahwari, Ahmed IDW4X",
            CompanyNumber: "MUCE993",
            Status: "0"
          },
          {
            EmployeeName: "Al Jahwari, Ahmed IDW4X",
            CompanyNumber: "MUCE993",
            Status: "0"
          },
          {
            EmployeeName: "Al Jahwari, Ahmed IDW4X",
            CompanyNumber: "MUCE993",
            Status: "0"
          },
          {
            EmployeeName: "Al Jahwari, Ahmed IDW4X",
            CompanyNumber: "MUCE993",
            Status: "0"
          }
        ];
        setConnections({ connections: response, isFetching: false });
      } catch (e) {
        console.log(e);
        // setData({ users: data.users, isFetching: false });
      }
    };
    fetchConnections();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {getConnections.connections != null &&
        getConnections.connections.map(function(params, i) {
          return <UserCard Params={params}></UserCard>;
        })}
    </div>
  );
};
export default ConnectionsCards;
