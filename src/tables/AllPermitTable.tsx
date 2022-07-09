import DataTable, { TableColumn } from "react-data-table-component";

type DataRow = {
  licensePlate: string;
  name: string;
  country: string;
  startDate: string;
  endDate: string;
};

const data = [
  {
    licensePlate: "SKO1234",
    name: "Collins Ogbuzuru",
    country: "Germany",
    startDate: "Novermber 1st 2022",
    endDate: "December 2nd 2021",
  },
];
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
  },

  {
    name: "End Date",
    selector: (row) => row.endDate,
    sortable: true,
  },
];

function AllPermitTable() {
  return (
    <div>
      <DataTable columns={columns} data={data} selectableRows pagination />
    </div>
  );
}

export default AllPermitTable;
