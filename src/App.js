import "./styles.css";
import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";

export default function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("https://4rstzw-3001.csb.app/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  const handleName = (event) => {
    setNewName(event.target.value);
  };

  const handleNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber
    };
    if (
      persons.find((person) => {
        return person.name.toLowerCase().includes(newName.toLowerCase());
      }) !== undefined
    ) {
      alert(`${newName} is already added the phonebook`);
    } else {
      setPersons(persons.concat(personObject));
    }
    setNewName("");
    setNewNumber("");
  };

  return (
    <div className="App">
      <header>
        <h1>Phonebook</h1>
      </header>
      <Filter filter={filter} handleFilter={handleFilter} />
      <section className="form">
        <h2>Add a new</h2>
        <PersonForm
          handleSubmit={handleSubmit}
          newName={newName}
          handleName={handleName}
          newNumber={newNumber}
          handleNumber={handleNumber}
        />
      </section>
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} />
    </div>
  );
}
