import React from "react";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import DashboardBar from "../components/DashboardBar";
import Footer from "../components/Footer";
import "./HealthUserConsultDoctor.css";
//Connect2ic
import { useCanister } from "@connect2ic/react";
//

const HealthUserConsultDoctor = () => {
  //Connect2ic
  const [mvp_backend] = useCanister("mvp_backend");
  //
  const [displayBool, setDisplayBool] = useState(false);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const [idValue, setIdValue] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("1990-01-01T00:00");

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  //Table

  const columnsBookAppointment = [
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Occupation",
      accessorKey: "occupation",
    },
    {
      header: "Description",
      accessorKey: "description",
    },
    {
      header: "Start Time",
      accessorKey: "startTime",
    },
    {
      header: "End Time",
      accessorKey: "endTime",
    },
    {
      header: "Charge",
      accessorKey: "charge",
    },
    {
      header: "Book",
      accessorKey: "id",
      cell: (info) => (
        <button
          onClick={() => {
            onOpenModal();
            setIdValue(info.getValue());
            setAppointmentTime("2023-10-01T00:00");
          }}
          className="button1"
        >
          <div className="button2">Book</div>
        </button>
      ),
    },
  ];

  const columnsPastOrders = [
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

  //
  const navigate = useNavigate();

  const onDashboardSectionClick = useCallback(() => {
    navigate("/healthuserdashboard");
  }, [navigate]);

  const onProfileSectionClick = useCallback(() => {
    navigate("/healthuserprofile");
  }, [navigate]);

  const onConsultDoctorSectionClick = useCallback(() => {
    navigate("/healthuserconsultdoctor");
  }, [navigate]);

  const onPurchaseServiceSectionClick = useCallback(() => {
    navigate("/healthuserpurchase");
  }, [navigate]);

  const onSignOutSectionClick = useCallback(() => {
    navigate("/explore");
  }, [navigate]);

  const onDashboardIconSectionClick = useCallback(() => {
    navigate("/healthuserdashboard");
  }, [navigate]);

  const onProfileIconSectionClick = useCallback(() => {
    navigate("/healthuserprofile");
  }, [navigate]);

  const onConsultDoctorIconSectionClick = useCallback(() => {
    navigate("/healthuserconsultdoctor");
  }, [navigate]);

  const onPurchaseServiceIconSectionClick = useCallback(() => {
    navigate("/healthuserpurchase");
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

  const getAvailabilityInfo = async () => {
    const value = await mvp_backend.getAvailableServiceProfessionals();
    Object.keys(value).forEach((key) => {
      if (key == "ok") {
        const tempDataList = value[key].map((pair) => {
          let tempSdate = new Date(Number(pair.meetingAvailability.startTime));
          let tempEdate = new Date(Number(pair.meetingAvailability.endTime));
          return {
            id: pair.ID,
            name: pair.meetingAvailability.name,
            occupation: pair.meetingAvailability.occupation,
            description: pair.meetingAvailability.description,
            startTime: tempSdate,
            endTime: tempEdate,
            charge: Number(pair.meetingAvailability.charge),
          };
        });
        setData(tempDataList);
        setColumns(columnsBookAppointment);
        setDisplayBool(true);
      } else {
        alert(value[key]);
      }
    });
  };

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
        setColumns(columnsPastOrders);
        setDisplayBool(true);
      } else {
        alert(value[key]);
      }
    });
  };

  const BookAppointment = async (event) => {
    event.preventDefault();

    let tempTime = new Date(appointmentTime);
    tempTime = tempTime.getTime();

    const value = await mvp_backend.scheduleAppointment(
      idValue,
      Number(tempTime)
    );
    Object.keys(value).forEach((key) => {
      alert(value[key]);
    });
    onCloseModal();
  };

  const handleChange = (event) => {
    setAppointmentTime(event.target.value);
  };

  return (
    <div className="healthuserconsultdoctor">
      <DashboardBar
        imageSize="/solidicon31.svg"
        imageSizeCode="/solidicon32.svg"
        imageCode="/solidicon39.svg"
        imageCode2="/solidicon40.svg"
        imageCodeUrl="/solidicon22.svg"
        imageCodeUrl2="/solidicon35.svg"
        imageCodeUrl3="/solidicon24.svg"
        imageCodeUrl4="/solidicon41.svg"
        imageCodeUrl5="/solidicon42.svg"
        imageCode3="/solidicon43.svg"
        onFrameButtonClick={onDashboardSectionClick}
        onFrameButton1Click={onProfileSectionClick}
        onFrameButton2Click={onConsultDoctorSectionClick}
        onFrameButton3Click={onPurchaseServiceSectionClick}
        onFrameButton4Click={onSignOutSectionClick}
        onFrameButton5Click={onDashboardIconSectionClick}
        onFrameButton6Click={onProfileIconSectionClick}
        onFrameButton7Click={onConsultDoctorIconSectionClick}
        onFrameButton8Click={onPurchaseServiceIconSectionClick}
        onFrameButton9Click={onSignOutIconSectionClick}
      />
      <div className="buttonframe-wrapper">
        <div className="buttonframe">
          <button
            onClick={getAvailabilityInfo}
            className="button1"
          >
            <div className="button2">Book Appointment</div>
          </button>
          <button
            onClick={fetchOrderInfo}
            className="button1"
          >
            <div className="button2">Past Orders</div>
          </button>
        </div>
      </div>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
      >
        <div>
          <form>
            <div className="inputsection-date-div">
              <label className="information-text">
                Please give time to schedule Appointment.
              </label>
              <div className="inputvalue-date-div ">
                <input
                  type="datetime-local"
                  value={appointmentTime}
                  onChange={handleChange}
                ></input>
              </div>
              <button
                className="button1"
                onClick={BookAppointment}
              >
                <div className="button2">Book Appointment</div>
              </button>
            </div>
          </form>
        </div>
      </Modal>
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
          Choose to Book Appointment or view past orders by using above buttons
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

export default HealthUserConsultDoctor;
