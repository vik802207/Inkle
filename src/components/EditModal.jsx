import { useEffect, useState } from "react";
import { getCountries } from "../api/countriesApi";
import { updateTax } from "../api/taxesApi";
import "../styles/modal.css"

export default function EditModal({ row, onClose, onSuccess }) {
  const [name, setName] = useState(row.name);
  const [country, setCountry] = useState(row.country);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCountries().then((res) => setCountries(res.data));
  }, []);

  const handleSave = async () => {
    setLoading(true);

    await updateTax(row.id, {
      ...row,
      name,
      country,
    });

    setLoading(false);
    onClose();
    onSuccess();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>Edit Customer</h3>

        <label>Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Country</label>
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          {countries.map((c) => (
            <option key={c.id} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>

        <div className="modal-actions">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleSave} disabled={loading}>
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
