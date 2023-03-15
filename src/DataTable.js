import React, { useState } from "react";

const DataTable = () => {
	const initialData = [
		{
			id: 1,
			firstName: "Farhad",
			lastName: "Towfighian",
			age: 31,
			birthDate: "1968-05-06",
			country: "Sweden",
			city: "Karlshamn",
		},
		{
			id: 2,
			firstName: "Liljana",
			lastName: "Ristevska",
			age: 32,
			birthDate: "1989-01-01",
			country: "Sweden",
			city: "Växjö",
		},
		{
			id: 3,
			firstName: "Nivethitha",
			lastName: "Vaithiam Jothikumar",
			age: 33,
			birthDate: "1989-01-02",
			country: "Sweden",
			city: "Göteborg",
		},
		{
			id: 4,
			firstName: "Samuel",
			lastName: "Svahn",
			age: 34,
			birthDate: "1989-01-03",
			country: "Sweden",
			city: "Karlskrona",
		},
	];

	const [studenList, setStudentList] = useState(initialData);
	const [showDetails, setShowDetails] = useState(false);
	const [showPerson, setShowPerson] = useState({
		id: 0,
		firstName: "",
		lastName: "",
		age: 0,
		birthDate: "",
		country: "",
		city: "",
	});

	const TableHeader = () => {
		return (
			<thead className="">
				<tr className="text-danger">
					<th>ID</th>
					<th>FIRST NAME</th>
					<th>LAST NAME</th>
					<th>AGE</th>
					<th>BIRTHDATE</th>
					<th>COUNTRY</th>
					<th>CITY</th>
					<th>ACTION</th>
				</tr>
			</thead>
		);
	};

	const TableAction = (props) => {
		const showPerson = () => {
			setShowPerson(props.showPerson);
			setShowDetails(true);
		};
		return (
			<button className="btn btn-info" onClick={showDetails}>
				Details
			</button>
		);
	};

	const TableRow = (props) => {
		const tableRows = props.info;
		return (
			<tbody>
				{tableRows.map((showPerson) => {
					const row = (
						<tr className="text-info" key={showPerson.id}>
							<td>{showPerson.id}</td>
							<td>{showPerson.firstName}</td>
							<td>{showPerson.lastName}</td>
							<td>{showPerson.age}</td>
							<td>{showPerson.birthDate}</td>
							<td>{showPerson.country}</td>
							<td>{showPerson.city}</td>
							<td>
								<TableAction personData={showPerson} />
							</td>
						</tr>
					);
					return row;
				})}
			</tbody>
		);
	};

	const ShowStudentDetails = () => {};

	return (
		<div className="container">
			<table className="table table-striped table-dark border">
				<TableHeader />
				<TableRow info={studenList} />
			</table>
		</div>
	);
};

export default DataTable;
