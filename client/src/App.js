import React, { useState } from 'react';
import './App.css';
import { Button, Alert, Badge, Breadcrumb, BreadcrumbItem, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function App() {
	const [isOpen, setOpen] = useState(false);
	const toggle = () => setOpen(!isOpen);

	return (
		<div className="jumbotron text-center">
			<div className="container mt-2">
				<div className="row">
					<Alert color="primary">
						This is a primary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
					</Alert>
				</div>
				<div className="row">
					<Badge color="primary" pill>Primary</Badge>
					<Badge color="secondary" pill>Secondary</Badge>
				</div>
				<div className="row">
				<Breadcrumb tag="nav" listTag="div">
					<BreadcrumbItem tag="a" href="#">Home</BreadcrumbItem>
					<BreadcrumbItem tag="a" href="#">Library</BreadcrumbItem>
					<BreadcrumbItem tag="a" href="#">Data</BreadcrumbItem>
					<BreadcrumbItem active tag="span">Bootstrap</BreadcrumbItem>
				</Breadcrumb>
				</div>
				<div className="row">
				<ButtonDropdown isOpen={isOpen} toggle={toggle}>
					<DropdownToggle caret color="primary">
						Text
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem header>Header</DropdownItem>
						<DropdownItem disabled>Action</DropdownItem>
						<DropdownItem>Another Action</DropdownItem>
						<DropdownItem divider/>
						<DropdownItem>Another Action</DropdownItem>
					</DropdownMenu>
				</ButtonDropdown>
				</div>
			</div>
		</div>
	);
}

export default App;
