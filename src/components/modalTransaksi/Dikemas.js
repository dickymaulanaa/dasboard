import { Table, Form, Container, Modal, Col, Row } from "react-bootstrap";
import "../../css/modalTransaksi.css";

function Dikemas(props) {
	return (
		<Modal
			show={props.showDikemas}
			onHide={props.closeDikemas}
			dialogClassName="dialogModalTransaksi"
			contentClassName="contentModalTransaksi "
		>
			<div className="modalBayar ">
				<Modal.Header closeButton className="tr-modal-header">
					<Modal.Title className="ms-3 mt-3" style={{ fontSize: "36px" }}>
						Detail Transaksi
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="isiModal mb-5">
						<span className="title-modal">Informasi Transaksi</span>
						<Row className="mt-4 mb-3">
							<Col className="d-flex flex-column">
								<Form.Group className="mb-3">
									<Form.Label className="tr-label-trans">No Pesanan</Form.Label>
									<Form.Control placeholder="INV/20202020/XX/XV/554364534" readOnly className="tr-placeholder" />
								</Form.Group>
								<Form.Group className="mb-3">
									<Form.Label className="tr-label-trans">Nama Pemesan</Form.Label>
									<Form.Control placeholder="JFK" readOnly className="tr-placeholder" />
								</Form.Group>
								<Form.Group className="mb-3">
									<Form.Label className="tr-label-trans">Metode Pembayaran</Form.Label>
									<Row className="tr-img-form w-100 ">
										<Col className="d-flex align-items-center  tr-placeholder">
											<img
												src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Logo_dana_blue.svg/1280px-Logo_dana_blue.svg.png"
												alt="logo"
											/>
										</Col>
									</Row>
								</Form.Group>
							</Col>

							{/* asas */}
							<Col className="d-flex flex-column">
								<Form.Group className="mb-3">
									<Form.Label className="tr-label-trans">Tanggal Pembelian</Form.Label>
									<Form.Control placeholder="21-02-2002" readOnly className="tr-placeholder" />
								</Form.Group>
								<Form.Group className="mb-3">
									<Form.Label className="tr-label-trans">Status</Form.Label>
									<div className="tr-box-status-modal d-flex align-items-center">
										<span className="tr-modal-dikirim px-3 py-1">Dikemas</span>
									</div>
								</Form.Group>
								<Form.Group className="mb-3">
									<Form.Label className="tr-label-trans">Tanggal Diterima</Form.Label>
									<Form.Control placeholder="-" disabled className="tr-placeholder" />
								</Form.Group>
							</Col>
						</Row>
						{/* Catatan */}
						<Row >
							<Col className="mx-1">
							<Form.Group className="mb-3">
									<Form.Label className="tr-label-trans">Catatan Pembeli</Form.Label>
									<Form.Control as="textarea" placeholder="lorem"  readOnly className="tr-placeholder" />
								</Form.Group>
							</Col>
						</Row>
						{/* Pengiriman */}
						<span className="title-modal ">Pengiriman</span>
						<Row className="mt-4 mb-3">
							<Col className="d-flex flex-column">
								<Form.Group className="mb-3 mt-3">
									<Form.Label className="tr-label-trans">Metode Pengiriman</Form.Label>
									<Row className="tr-img-form w-100 ">
										<Col className="d-flex align-items-center ">
											<img src="https://anteraja.id/assets/img/Logo%20Anteraja-New-01.png" alt="logo" />
											<span className="tr-placeholder mx-2 py-3">(Sama Day)</span>
										</Col>
									</Row>
								</Form.Group>
								<Form.Group className="mb-3">
									<Form.Label className="tr-label-trans">Tanggal Pengiriman</Form.Label>
									<Form.Control placeholder="21-02-2002" readOnly className="tr-placeholder" />
								</Form.Group>
								<Form.Group className="mb-3">
									<Form.Label className="tr-label-trans">RT/RW</Form.Label>
									<Form.Control placeholder="01/04" readOnly className="tr-placeholder" />
								</Form.Group>
								<Form.Group className="mb-3">
									<Form.Label className="tr-label-trans">Kecamatan</Form.Label>
									<Form.Control placeholder="Coblong" readOnly className="tr-placeholder" />
								</Form.Group>
								<Form.Group className="mb-3">
									<Form.Label className="tr-label-trans">Kota / Kabupaten</Form.Label>
									<Form.Control placeholder="Bandung" readOnly className="tr-placeholder" />
								</Form.Group>
							</Col>

							<Col className="d-flex flex-column">
								<Form.Group className="mb-3 mt-3">
									<Form.Label className="tr-label-trans">Nomor Resi</Form.Label>
									<Form.Control placeholder="121214433211" readOnly className="tr-placeholder" />
								</Form.Group>
								<Form.Group className="mb-3">
									<Form.Label className="tr-label-trans">Alamat Lengkap</Form.Label>
									<Form.Control placeholder="Jl. Setiabudi no 49A" readOnly className="tr-placeholder" />
								</Form.Group>
								<Form.Group className="mb-3">
									<Form.Label className="tr-label-trans">Kode Pos</Form.Label>
									<Form.Control placeholder="40238" readOnly className="tr-placeholder" />
								</Form.Group>
								<Form.Group className="mb-3">
									<Form.Label className="tr-label-trans">Kelurahan</Form.Label>
									<Form.Control placeholder="Dago" readOnly className="tr-placeholder" />
								</Form.Group>
								<Form.Group className="mb-3">
									<Form.Label className="tr-label-trans">Provinsi</Form.Label>
									<Form.Control placeholder="Jawa Barat" readOnly className="tr-placeholder" />
								</Form.Group>
							</Col>
						</Row>

						<Table className="border-bottom">
							<thead className="tr-thead-modal">
								<tr>
									<th>Foto Produk</th>
									<th>Nama Produk</th>
									<th>Variasi Produk</th>
									<th>Jumlah Pesanan</th>
									<th>Harga</th>
								</tr>
							</thead>
							<tbody className="tr-tbody-modal">
								<tr>
									<td>
										<img
											src="https://assets-pergikuliner.com/cfeRp7_SZoNgDhop-thEtn-lVhw=/385x290/smart/https://assets-pergikuliner.com/uploads/image/picture/2013583/picture-1599458477.jpg"
											alt="produk"
										/>
									</td>
									<td className="py-3">Kue Cubit</td>
									<td className="py-3">Greentea</td>
									<td className="py-3">20</td>
									<td className="py-3">Rp. 10.0000</td>
								</tr>
								<tr>
									<td>
										<img
											src="https://assets-pergikuliner.com/cfeRp7_SZoNgDhop-thEtn-lVhw=/385x290/smart/https://assets-pergikuliner.com/uploads/image/picture/2013583/picture-1599458477.jpg"
											alt="produk"
										/>
									</td>
									<td className="py-3">Kue Cubit</td>
									<td className="py-3">Greentea</td>
									<td className="py-3">20</td>
									<td className="py-3">Rp. 10.0000</td>
								</tr>
							</tbody>
						</Table>
						<Container className="d-flex  justify-content-end mt-4">
							<span className="mx-4 tr-label-total">TOTAL</span>
							<span className="mx-4 tr-jml-total"> Rp. 10.000</span>
						</Container>
					</div>
				</Modal.Body>
			</div>
		</Modal>
	);
}

export default Dikemas;
