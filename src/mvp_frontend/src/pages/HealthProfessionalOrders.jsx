import React from "react";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DashboardBarProfessional from "../components/DashboardBarProfessional";
import Footer from "../components/Footer";
import "./HealthProfessionalOrders.css";
//Connect2ic
import { useCanister } from "@connect2ic/react";
//

const HealthProfessionalOrders = () => {
  //Connect2ic
  const [mvp_backend] = useCanister("mvp_backend");
  //
  const [displayBool, setDisplayBool] = useState(false);
  const [data, setData] = useState([]);
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");

  const columns = [
    {
      header: "Customer Name",
      accessorKey: "userName",
    },
    {
      header: "Professional Name",
      accessorKey: "professionalName",
    },
    {
      header: "Appointment Time",
      accessorKey: "appointmentTime",
    },
    {
      header: "Charge paid",
      accessorKey: "chargePaid",
    },
    {
      header: "Meeting Link",
      accessorKey: "meetingLink",
      cell: (info) => (
        <button className="button1">
          <a
            className="button2"
            href={info.getValue()}
            target="_blank"
          >
            Launch
          </a>
        </button>
      ),
    },
  ];

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

  const navigate = useNavigate();

  const onDashboardSectionClick = useCallback(() => {
    navigate("/healthprofessionaldashboard");
  }, [navigate]);

  const onProfileSectionClick = useCallback(() => {
    navigate("/healthprofessionalprofile");
  }, [navigate]);

  const onUpdateAvailabilitySectionClick = useCallback(() => {
    navigate("/healthprofessionalserviceavalibility");
  }, [navigate]);

  const onOrderListSectionClick = useCallback(() => {
    navigate("/healthprofessionalorders");
  }, [navigate]);

  const onSignOutSectionClick = useCallback(() => {
    navigate("/explore");
  }, [navigate]);

  const onDashboardIconSectionClick = useCallback(() => {
    navigate("/healthprofessionaldashboard");
  }, [navigate]);

  const onProfileIconSectionClick = useCallback(() => {
    navigate("/healthprofessionalprofile");
  }, [navigate]);

  const onUpdateAvailabilityIconSectionClick = useCallback(() => {
    navigate("/healthprofessionalserviceavalibility");
  }, [navigate]);

  const onOrderListIconSectionClick = useCallback(() => {
    navigate("/healthprofessionalorders");
  }, [navigate]);

  const onSignOutIconSectionClick = useCallback(() => {
    navigate("/explore");
  }, [navigate]);

  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onExploreClick = useCallback(() => {
    navigate("/explore");
  }, [navigate]);

  const onFeaturesClick = useCallback(() => {
    navigate("/features");
  }, [navigate]);

  const onAboutUsClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const fetchOrderInfo = async () => {
    const value = await mvp_backend.getAppointment();
    Object.keys(value).forEach((key) => {
      if (key == "ok") {
        const tempinfo = value[key].map((pair) => {
          const tempDate = new Date(Number(pair.appointmentTime));
          return {
            userName: pair.user,
            professionalName: pair.professional,
            appointmentTime: tempDate,
            chargePaid: Number(pair.charge),
            meetingLink: pair.meetingLink,
          };
        });
        setData(tempinfo);
        setDisplayBool(true);
      } else {
        alert(value[key]);
      }
    });
  };

  useEffect(() => {
    fetchOrderInfo();
  }, []);

  return (
    <div className="healthprofessionalorders">
      <DashboardBarProfessional
        solidIcon="/solidicon18.svg"
        solidIcon1="/solidicon19.svg"
        solidIcon2="/solidicon20.svg"
        solidIcon3="/solidicon21.svg"
        solidIcon4="/solidicon22.svg"
        solidIcon5="/solidicon23.svg"
        solidIcon6="/solidicon24.svg"
        solidIcon7="/solidicon25.svg"
        solidIcon8="/solidicon16.svg"
        solidIcon9="/solidicon17.svg"
        onFrameButtonClick={onDashboardSectionClick}
        onFrameButton1Click={onProfileSectionClick}
        onFrameButton2Click={onUpdateAvailabilitySectionClick}
        onFrameButton3Click={onOrderListSectionClick}
        onFrameButton4Click={onSignOutSectionClick}
        onFrameButton5Click={onDashboardIconSectionClick}
        onFrameButton6Click={onProfileIconSectionClick}
        onFrameButton7Click={onUpdateAvailabilityIconSectionClick}
        onFrameButton8Click={onOrderListIconSectionClick}
        onFrameButton9Click={onSignOutIconSectionClick}
      />
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
        <div className="information-text">
          Please wait while list is being Load...
        </div>
      )}
      <Footer
        footerBoxSizing="border-box"
        footerHeight="unset"
        onHomeClick={onHomeClick}
        onExploreClick={onExploreClick}
        onFeaturesClick={onFeaturesClick}
        onAboutUsClick={onAboutUsClick}
      />
    </div>
  );
};

export default HealthProfessionalOrders;
