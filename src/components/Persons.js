export default function Persons({ persons, filter }) {
  return (
    <ul className="numbers">
      {persons
        .filter((person) => {
          return person.name.toLowerCase().includes(filter.toLowerCase());
        })
        .map((person) => (
          <li key={person.name}>
            {person.name} - {person.number}
          </li>
        ))}
    </ul>
  );
}
