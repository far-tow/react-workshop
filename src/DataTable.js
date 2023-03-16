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
	const [students, setStudents] = useState({
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
			<thead>
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
		const showStudentInfo = () => {
			setStudents(props.studenData);
			setShowDetails(true);
		};
		return (
			<button className="btn btn-info" onClick={showStudentInfo}>
				Details
			</button>
		);
	};

	const TableRow = (props) => {
		const tableRows = props.info;
		return (
			<tbody>
				{tableRows.map((students) => {
					const rows = (
						<tr className="text-info" key={students.id}>
							<td>{students.id}</td>
							<td>{students.firstName}</td>
							<td>{students.lastName}</td>
							<td>{students.age}</td>
							<td>{students.birthDate}</td>
							<td>{students.country}</td>
							<td>{students.city}</td>
							<td>
								<TableAction studenData={students} />
							</td>
						</tr>
					);
					return rows;
				})}
			</tbody>
		);
	};

	const ShowStudentDetails = () => {
		if (showDetails === true) {
			return (
				<div className="card">
					<div className="card-header bg-dark text-white">
						<h2>Student information</h2>
					</div>
					<div className="card-body">
						<p>Id: {students.id}</p>
						<p>First Name: {students.firstName}</p>
						<p>Last Name: {students.lastName}</p>
						<p>Age: {students.age}</p>
						<p>Birth Date: {students.birthDate}</p>
						<p>Country: {students.country}</p>
						<p>City: {students.city}</p>
						<button
							className="btn btn-danger"
							onClick={() => {
								setStudents({});
								setShowDetails(false);
							}}
						>
							Hide
						</button>
					</div>
				</div>
			);
		}
	};

	return (
		<div className="container">
			<table className="table table-striped table-dark border">
				<TableHeader />
				<TableRow info={studenList} />
			</table>
			<ShowStudentDetails students={students} />
		</div>
	);
};

export default DataTable;
