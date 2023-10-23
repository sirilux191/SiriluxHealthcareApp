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
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import DashboardBarService from "../components/DashboardBarService";
import Footer from "../components/Footer";
import "./HealthServiceOrders.css";
//Connect2ic
import { useCanister } from "@connect2ic/react";
//

const HealthServiceOrders = () => {
  //Connect2ic
  const [mvp_backend] = useCanister("mvp_backend");
  //

  //Table
  const [displayBool, setDisplayBool] = useState(false);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const [idValue, setIdValue] = useState("");
  const [statusValue, setStatusValue] = useState("");
  const [orderIndexNum, setOrderIndexNum] = useState();

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const columns = [
    {
      header: "Service Name",
      accessorKey: "name",
    },
    {
      header: "Order Status",
      accessorKey: "status",
    },
    {
      header: "Ordered Quantity",
      accessorKey: "quantity",
    },
    {
      header: "Order Time",
      accessorKey: "orderTime",
    },
    {
      header: "Price paid",
      accessorKey: "price",
    },
    {
      header: "Change Order Status",
      accessorKey: "updateInfo",
      cell: (info) => (
        <button
          onClick={() => {
            setIdValue(info.getValue().userID);
            setOrderIndexNum(info.getValue().indexOrder);
            onOpenModal();
          }}
          className="button1"
        >
          <div className="button2">Change Status</div>
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

  //Table
  const navigate = useNavigate();

  const onDashboardSectionClick = useCallback(() => {
    navigate("/healthservicedashboard");
  }, [navigate]);

  const onProfileSectionClick = useCallback(() => {
    navigate("/healthserviceprofile");
  }, [navigate]);

  const onServiceAvailabilitySectionClick = useCallback(() => {
    navigate("/healthserviceserviceavalibility");
  }, [navigate]);

  const onOrderListSectionClick = useCallback(() => {
    navigate("/healthserviceorders");
  }, [navigate]);

  const onSignOutSectionClick = useCallback(() => {
    navigate("/explore");
  }, [navigate]);

  const onDashboardIconSectionClick = useCallback(() => {
    navigate("/healthservicedashboard");
  }, [navigate]);

  const onProfileIconSectionClick = useCallback(() => {
    navigate("/healthserviceprofile");
  }, [navigate]);

  const onServiceAvailabilityIconSectionClick = useCallback(() => {
    navigate("/healthserviceserviceavalibility");
  }, [navigate]);

  const onOrderListIconSectionClick = useCallback(() => {
    navigate("/healthserviceorders");
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

  const getOrdersInfo = async () => {
    const value = await mvp_backend.getOrdersByFacility();
    console.log(value);
    Object.keys(value).forEach((key) => {
      if (key == "ok") {
        let ordersinformation = [];
        const iterate = value[key].map((pair, index1) => {
          const singleUserOrdersArray = pair.orderArray.map((order, index2) => {
            return {
              name: order.service.name,
              status: Object.keys(order.status)[0],
              quantity: Number(order.quantity),
              orderTime: Number(order.orderTime),
              price: Number(order.charge),
              updateInfo: {
                userID: pair.ID,
                indexUser: index1,
                indexOrder: index2,
              },
            };
          });
          ordersinformation = [...ordersinformation, ...singleUserOrdersArray];
        });
        console.log(ordersinformation);
        setData(ordersinformation);
        setDisplayBool(true);
      } else {
        alert(value[key]);
      }
    });
  };
  const changeStatus = async (event) => {
    event.preventDefault();
    const value = await mvp_backend.updateStatusOfOrder(
      idValue,
      orderIndexNum,
      { [statusValue]: null }
    );
    Object.keys(value).forEach((key) => {
      alert(value[key]);
    });
  };
  const handleChange = (event) => {
    setStatusValue(event.target.value);
  };
  useEffect(() => {
    getOrdersInfo();
  }, []);

  return (
    <div className="healthserviceorders">
      <DashboardBarService
        imageSize="/solidicon13.svg"
        imageSizeLabel="/solidicon14.svg"
        imageSizeCode="/solidicon15.svg"
        imageSizeId="/solidicon16.svg"
        imageSizeCode2="/solidicon17.svg"
        imageCode="/solidicon13.svg"
        imageSizeDimensions="/solidicon14.svg"
        imageCode2="/solidicon15.svg"
        imageCode3="/solidicon16.svg"
        imageCode4="/solidicon17.svg"
        onFrameButtonClick={onDashboardSectionClick}
        onFrameButton1Click={onProfileSectionClick}
        onFrameButton2Click={onServiceAvailabilitySectionClick}
        onFrameButton3Click={onOrderListSectionClick}
        onFrameButton4Click={onSignOutSectionClick}
        onFrameButton5Click={onDashboardIconSectionClick}
        onFrameButton6Click={onProfileIconSectionClick}
        onFrameButton7Click={onServiceAvailabilityIconSectionClick}
        onFrameButton8Click={onOrderListIconSectionClick}
        onFrameButton9Click={onSignOutIconSectionClick}
      />
      <Modal
        open={open}
        onClose={onCloseModal}
        center
      >
        <div>
          <form>
            <div className="inputsection-date-div">
              <label className="information-text">Change Status of Order</label>
              <div className="inputvalue-date-div ">
                <select
                  value={statusValue}
                  onChange={handleChange}
                  required
                >
                  <option value="">None</option>
                  <option value="Processing">Processing</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
              <button
                className="button1"
                onClick={changeStatus}
              >
                <div className="button2">Change</div>
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
          Please wait while list is being load...
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

export default HealthServiceOrders;
