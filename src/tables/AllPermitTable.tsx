import DataTable, { TableColumn } from "react-data-table-component";
import Button from "../components/button";
import dayjs from "dayjs";
const localizedFormat = require("dayjs/plugin/localizedFormat");

export type DataRow = {
  licensePlate: string;
  name: string;
  country: string;
  startDate: string;
  endDate: string;
  id: number;
};

type TableProps = {
  data: DataRow[];
  handleSelectEditData: (data: DataRow) => void;
};

function AllPermitTable({ data, handleSelectEditData }: TableProps) {
  dayjs.extend(localizedFormat);

  const columns: TableColumn<DataRow>[] = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "License Plate Number",
      selector: (row) => row.licensePlate,
      sortable: true,
    },

    {
      name: "Country",
      selector: (row) => row.country,
      sortable: true,
    },

    {
      name: "Start Date",
      selector: (row) => row.startDate,
      sortable: true,
      cell(row, rowIndex, column, id) {
        return <span>{dayjs(row.startDate).format("L LT")}</span>;
      },
    },

    {
      name: "End Date",
      selector: (row) => row.endDate,
      sortable: true,
      cell(row, rowIndex, column, id) {
        return <span>{dayjs(row.endDate).format("L LT")}</span>;
      },
    },

    {
      name: "Action",
      cell(row, rowIndex, column, id) {
        return (
          <Button onClick={() => handleSelectEditData(row)} type="secondary">
            Edit
          </Button>
        );
      },
    },
  ];
  return (
    <div>
      <DataTable columns={columns} data={data} selectableRows pagination />
    </div>
  );
}

export default AllPermitTable;
