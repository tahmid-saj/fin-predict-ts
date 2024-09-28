import "./market-data-table.styles";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { Fragment, useContext, useState } from "react";
import { ColDef } from "ag-grid-community"; // Import ColDef type from ag-grid
import { COMMON_SPACING } from "../../../utils/constants/shared.constants";
import { MarketDataContext } from "../../../contexts/market/market.context";

const MarketDataTable = () => {
  const { marketData } = useContext(MarketDataContext)

  if (!marketData || !marketData.queryResults) {
    return <Fragment/>
  }

  const { queryResults } = marketData

  // Define row data type
  const rowData = queryResults.map((queryResult) => {
    return {
      Date: queryResult.time,
      ClosingPrice: queryResult.closing
    }
  })

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
