import "./market-data-table.styles";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { useState } from "react";
import { ColDef } from "ag-grid-community"; // Import ColDef type from ag-grid
import { COMMON_SPACING } from "../../../utils/constants/shared.constants";

const MarketDataTable = () => {
  // Define row data type
  const rowData = [{ Date: "1", ClosingPrice: 2 }];

  // Define columnDefs with correct type
  const [columnDefs, setColumnDefs] = useState<ColDef[]>([
    { field: "Date" },
    { field: "ClosingPrice" },
  ]);

  return (
    <div className="ag-theme-quartz-dark" 
      style={{ height: COMMON_SPACING.table.height, width: COMMON_SPACING.table.width }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        rowSelection={"multiple"}
      ></AgGridReact>
    </div>
  );
};

export default MarketDataTable;
