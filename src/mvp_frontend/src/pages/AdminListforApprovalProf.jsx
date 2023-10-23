import React from "react";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { useState } from "react";
import "./AdminListforApprovalProf.css";
//Connect2ic
import { useCanister } from "@connect2ic/react";
//

const AdminListforApprovalProf = () => {
  //Connect2ic
  const [mvp_backend] = useCanister("mvp_backend");
  //

  const [displayBool, setDisplayBool] = useState(false);
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");

  const columnsProf = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Occupation",
      accessorKey: "occupation",
    },
    {
      header: "Certification ID",
      accessorKey: "certificationID",
    },
    {
      header: "Company",
      accessorKey: "company",
    },
    {
      header: "Approve",
      accessorKey: "id",
      cell: (info) => (
        <button
          className="button1"
          onClick={() => approveProf(info.getValue())}
        >
          <div className="button2">Approve</div>
        </button>
      ),
    },
  ];

  const columnsFaci = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Registration ID",
      accessorKey: "registrationID",
    },
    {
      header: "Service Name",
      accessorKey: "serviceName",
    },
    {
      header: "Service Category",
      accessorKey: "serviceCategory",
    },
    {
      header: "Service Description",
      accessorKey: "serviceDescription",
    },
    {
      header: "Approve",
      accessorKey: "id",
      cell: (info) => (
        <button
          className="button1"
          onClick={() => approveFaci(info.getValue())}
        >
          <div className="button2">Approve</div>
        </button>
      ),
    },
  ];

  const DisplayProf = async () => {
    await getListProf();
    await setColumns(columnsProf);
    setDisplayBool(true);
  };

  const DisplayService = async () => {
    await getListService();
    await setColumns(columnsFaci);
    setDisplayBool(true);
  };

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setFiltering,
  });

  const approveProf = async (id) => {
    const value = await mvp_backend.approveProfessional(id);
    Object.keys(value).forEach((key) => {
      alert(value[key]);
    });
  };
  const approveFaci = async (id) => {
    const value = await mvp_backend.approveFacility(id);
    Object.keys(value).forEach((key) => {
      alert(value[key]);
    });
  };
  const getListProf = async () => {
    const value = await mvp_backend.getListOfProfessionalToApprove();
    Object.keys(value).forEach((key) => {
      if (key == "ok") {
        const tempDataListProf = value[key].map((pair) => {
          return {
            id: pair.ID,
            name: pair.professional.Name,
            occupation: pair.professional.Occupation,
            certificationID: pair.professional.CertificationID,
            company: pair.professional.Company,
          };
        });
        setData(tempDataListProf);
      } else {
        alert(value[key]);
      }
    });
  };

  const getListService = async () => {
    const value = await mvp_backend.getListOfServiceToApprove();
    Object.keys(value).forEach((key) => {
      if (key == "ok") {
        const tempDataListFaci = value[key].map((pair) => {
          return {
            id: pair.ID,
            name: pair.facility.FacilityName,
            registrationID: pair.facility.RegistrationID,
            serviceName: pair.facility.Service.name,
            serviceCategory: pair.facility.Service.category,
            serviceDescription: pair.facility.Service.description,
          };
        });
        setData(tempDataListFaci);
      } else {
        alert(value[key]);
      }
    });
  };

  //
  return (
    <div className="adminlistforapprovalprof">
      <div className="infoframe">
        <div className="buttonframe">
          <button
            onClick={DisplayProf}
            className="button1"
          >
            <div className="button2">Professional</div>
          </button>
          <button
            onClick={DisplayService}
            className="button1"
          >
            <div className="button2">Service</div>
          </button>
        </div>
      </div>

      {displayBool ? (
        <div>
          <input
            type="text"
            value={filtering}
            onChange={(e) => {
              setFiltering(e.target.value);
            }}
          ></input>
          <table>
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {
                        {
                          asc: "⬆",
                          desc: "⬇",
                        }[header.column.getIsSorted() ?? null]
                      }
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td
                      data-column={flexRender(
                        cell.column.columnDef.header,
                        cell.getContext()
                      )}
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <button onClick={() => table.setPageIndex(0)}>First Page</button>
            <button
              disabled={!table.getCanPreviousPage()}
              onClick={() => table.previousPage()}
            >
              Previous Page
            </button>
            <button
              disabled={!table.getCanNextPage()}
              onClick={() => table.nextPage()}
            >
              Next Page
            </button>
            <button
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            >
              Last Page
            </button>
          </div>
        </div>
      ) : (
        <div>Click on Button on which list you want to Display</div>
      )}
    </div>
  );
};

export default AdminListforApprovalProf;
