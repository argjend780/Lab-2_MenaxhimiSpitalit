import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPacinet } from "../../actions/PacinetActions";
import { useSelector } from "react-redux";

const SearchPacinetPage = () => {
const dispatch = useDispatch();
  const pacinetSearch = useSelector((state) => state.pacinetReducerContent || {});
  const { loading = false, pacinets = [], error = null } = pacinetSearch;
  
  console.log("Pacientët e gjetur:", pacinets);

  const [term, setTerm] = useState("");
const [searched, setSearched] = useState(false);  // shto një state për kërkimin

const handleSearch = (e) => {
  e.preventDefault();
  if (term.trim().length >= 3) {
    dispatch(searchPacinet(term.trim()));
    setSearched(true);  // shëno që është bërë kërkimi
  } else {
    alert("Shkruaj së paku 3 shkronja për të kërkuar.");
  }
};
  return (
  <div className="container mx-auto p-4">
    <h2 className="text-2xl font-bold mb-4">Kërko Pacientë</h2>

    <form onSubmit={handleSearch} className="mb-6">
      <input
        type="text"
        placeholder="Shkruaj emër ose email"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Kërko
      </button>
    </form>

    {loading && <p>Duke kërkuar...</p>}
    {error && <p className="text-red-600">Gabim: {error}</p>}

   

    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2 text-left">Emri</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Adresa</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Gjinia</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Reparti</th>
        </tr>
      </thead>
      <tbody>
        {pacinets.map((pacient) => (
          <tr key={pacient.id} className="hover:bg-gray-50">
            <td className="border border-gray-300 px-4 py-2">{pacient.name}</td>
            <td className="border border-gray-300 px-4 py-2">{pacient.address}</td>
            <td className="border border-gray-300 px-4 py-2">{pacient.email}</td>
            <td className="border border-gray-300 px-4 py-2">{pacient.gjinia}</td>
            <td className="border border-gray-300 px-4 py-2">{pacient.repartiName || "Nuk ka repart"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

};

export default SearchPacinetPage;
