import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";

function ProfilPemilik() {
	return (
		<Container fluid className="boxProfileUsaha ">
			<div>
				<div className=" pt-3 label-info d-flex align-items-center py-2">
					<p className="basicInfo ms-3">Basic Info</p>
				</div>
				<div className="info mx-3 mt-4 pb-5">
					<Row>
						<Col className="label-form">Nama Pemilik</Col>
						<Col className="input-form">
							<input type="text" className="form-control" placeholder="Patrick Star" />
						</Col>
					</Row>
					<Row className="  my-3">
						<Col className="label-form">Jenis Kelamin</Col>
						<Col className="input-form">
							<input type="text" className="form-control" placeholder="Perempuan" />
						</Col>
					</Row>
					<Row className="  my-3">
						<Col className="label-form">Tanggal Lahir</Col>
						<Col className="input-form">
							<input type="text" className="form-control" placeholder="21-07-2000" />
						</Col>
					</Row>
					<Row className="  my-3">
						<Col className="label-form">Alamat Pemilik</Col>
						<Col className="input-form">
							<textarea
								class="form-control"
								aria-label="With textarea"
								placeholder="Jl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at magna mollis, fermentum metus nec, feugiat odio. Aenean iaculis diam at odio feugiat placerat. In molestie tincidunt libero"
							/>
						</Col>
					</Row>
					<Row className="  my-3">
						<Col className="label-form">Nomor Telepon</Col>
						<Col className="input-form">
							<input type="text" className="form-control" placeholder="08977882661" />
						</Col>
					</Row>
					<Row className="  my-3">
						<Col className="label-form">Alamat e-mail</Col>
						<Col className="input-form">
							<input type="text" className="form-control" placeholder="contactus@redbull.com" />
						</Col>
					</Row>
				</div>
				<div className="box-btn-ubah d-flex justify-content-end align-items-center ms-3">
					<span className="me-5 pe-5">
						<Button className="btn-ubah">Ubah Profil</Button>
					</span>
				</div>
			</div>
		</Container>
	);
}

export default ProfilPemilik;
