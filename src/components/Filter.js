export default function Filter({ filter, handleFilter }) {
  return (
    <div>
      Filter shown with: <input value={filter} onChange={handleFilter} />
    </div>
  );
}
