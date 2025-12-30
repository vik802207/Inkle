import { useEffect, useState } from "react";
import { getTaxes } from "../api/taxesApi";
import Table from "../components/Table";
import EditModal from "../components/EditModal";

export default function Home() {
  const [data, setData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    fetchTaxes();
  }, []);

  const fetchTaxes = async () => {
    const res = await getTaxes();
    setData(res.data);
  };

  return (
    <div style={{ padding: 24 }}>
      <Table data={data} onEdit={setSelectedRow} />

      {selectedRow && (
        <EditModal
          row={selectedRow}
          onClose={() => setSelectedRow(null)}
          onSuccess={fetchTaxes}
        />
      )}
    </div>
  );
}
