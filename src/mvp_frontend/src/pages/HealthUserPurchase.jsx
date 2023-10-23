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
import "./HealthUserPurchase.css";
//Connect2ic
import { useCanister } from "@connect2ic/react";
//

const HealthUserPurchase = () => {
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
  const [quantityNum, setQuantityNum] = useState(0);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  //TABLE

  const columnsOrderDetails = [
    {
      header: "Service Name",
      accessorKey: "serviceName",
    },
    {
      header: "Service Description",
      accessorKey: "serviceDescription",
    },
    {
      header: "No. of Items Available",
      accessorKey: "availableItems",
    },
    {
      header: "Unit",
      accessorKey: "unit",
    },
    {
      header: "Price per Item",
      accessorKey: "price",
    },
    {
      header: "Delivery Time in Days",
      accessorKey: "deliveryTime",
    },
    {
      header: "Purchase",
      accessorKey: "id",
      cell: (info) => (
        <button
          onClick={() => {
            onOpenModal();
            setIdValue(info.getValue());
            setQuantityNum(0);
          }}
          className="button1"
        >
          <div className="button2">Purchase</div>
        </button>
      ),
    },
  ];

  const columnsPastOrdersList = [
    {
      header: "Service Name",
      accessorKey: "serviceName",
    },
    {
      header: "Customer Name",
      accessorKey: "serviceDescription",
    },
    {
      header: "Order Status",
      accessorKey: "orderStatus",
    },
    {
      header: "Ordered Quantity",
      accessorKey: "orderedQuantity",
    },
    {
      header: "Order Time",
      accessorKey: "orderTime",
    },
    {
      header: "Price paid",
      accessorKey: "price",
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

  //TABLE

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

  const getOrdersInfo = async () => {
    const value = await mvp_backend.getAvailableServiceFacilities();
    Object.keys(value).forEach((key) => {
      if (key == "ok") {
        const tempordersinfo = value[key].map((pair) => {
          return {
            id: pair.ID,
            serviceName: pair.serviceAvailability.service.name,
            serviceDescription: pair.serviceAvailability.service.description,
            availableItems: Number(pair.serviceAvailability.availableQuantity),
            unit: pair.serviceAvailability.unit,
            price: Number(pair.serviceAvailability.price),
            deliveryTime: Number(pair.serviceAvailability.deliveryTime),
          };
        });
        setData(tempordersinfo);
        setColumns(columnsOrderDetails);
        setDisplayBool(true);
      } else {
        alert(value[key]);
      }
    });
  };

  const fetchInfo = async () => {
    const value = await mvp_backend.getOrders();
    Object.keys(value).forEach((key) => {
      if (key == "ok") {
        const tempPastOrderInfo = value[key].map((pair) => {
          return {
            serviceName: pair.service.name,
            serviceDescription: pair.service.description,
            orderStatus: Object.keys(pair.status)[0],
            orderedQuantity: Number(pair.quantity),
            orderTime: Number(pair.orderTime),
            price: Number(pair.charge),
          };
        });
        setData(tempPastOrderInfo);
        setColumns(columnsPastOrdersList);
        setDisplayBool(true);
      } else {
        alert(value[key]);
      }
    });
  };

  const purchaseItem = async (event) => {
    event.preventDefault();
    const value = await mvp_backend.purchaseOrder(idValue, Number(quantityNum));
    Object.keys(value).forEach((key) => {
      alert(value[key]);
    });
    onCloseModal();
    getOrdersInfo();
  };
  const handleChange = (event) => {
    setQuantityNum(event.target.value);
  };
  return (
    <div className="healthuserpurchaseservicelist">
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
            onClick={getOrdersInfo}
            className="button"
          >
            <div className="button1">Purchase Service</div>
          </button>
          <button
            onClick={fetchInfo}
            className="button"
          >
            <div className="button1">Past Orders</div>
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
                Please give number of Items to purchase
              </label>
              <div className="inputvalue-date-div ">
                <input
                  type="number"
                  value={quantityNum}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <button
                className="button1"
                onClick={purchaseItem}
              >
                <div className="button2">Purchase</div>
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
          Choose to Book Purchase Order or view past orders by using above
          buttons
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

export default HealthUserPurchase;
