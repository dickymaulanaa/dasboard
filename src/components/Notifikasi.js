import React from "react";
import { Table, Modal, Button } from "react-bootstrap";
import "../css/Notifikasi.css";

function Notifikasi(props) {
	const dataNotif = [
		{
			id: 1,
			status: "[Verifikasi]",
			notif: "Ada 1 Seller yang menunggu di Verifikasi.",
			waktu: "Apr 20, 10.30 PM",
		},
		{
			id: 2,
			status: "[Verifikasi]",
			notif: "Pengguna burhanudin.store mengajukan [Dokumen Sertifikat HAKI] baru untuk diverifikasi.",
			waktu: "Apr 20, 10.32 PM",
		},
		{
			id: 3,
			status: "[Komplain]",
			notif: "Ada 20 pengguna yang mengajukan komplain..",
			waktu: "Apr 20, 10.35 PM",
		},
		{
			id: 4,
			status: "[Verifikasi]",
			notif: "Pengguna burhanudin.store mengajukan [Dokumen Sertifikat HAKI] baru untuk diverifikasi.",
			waktu: "Apr 20, 10.39 PM",
		},
	];

	return (
		<Modal
			show={props.showNotif}
			onHide={props.closeNotif}
			dialogClassName="dialogModal white-text"
			backdropClassName="backModalNotif  "
			contentClassName="contentNotif shadow "
		>
			<Modal.Title className="d-flex px-2 -bottom py-3 justify-content-between">
				<span className="label-notif  ">Notifikasi</span>
				<div className="d-flex">
					<div className="d-flex me-3 label-tandai-notif py-2 ">
						<span className="me-1">Tanda dibaca semua</span>
						<span>
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M17.4999 10.0002C17.4999 5.85955 14.1405 2.50018 9.9999 2.50018C5.85928 2.50018 2.4999 5.85955 2.4999 10.0002C2.4999 14.1408 5.85928 17.5002 9.9999 17.5002C14.1405 17.5002 17.4999 14.1408 17.4999 10.0002Z"
									stroke="#5B96F5"
									stroke-width="1.5"
									stroke-miterlimit="10"
								/>
								<path
									d="M14.375 7.50055L10.0051 12.5005L8.13204 10.6255"
									stroke="#5B96F5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path d="M7.49798 12.5L5.62493 10.625" stroke="#5B96F5" stroke-linecap="round" stroke-linejoin="round" />
								<path
									d="M11.9417 7.50055L9.92804 9.80523"
									stroke="#5B96F5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</span>
					</div>
					<div className="lebel-new-notif   ">
						<span className="jml-notif py-1 px-3 fs-6">3 new</span>
					</div>
				</div>
			</Modal.Title>
			<Modal.Body className="px-0">
				<div className="isiModalNotif  mb-2 mx-0">
					<Table hover className="p-0">
						<tbody>
							{dataNotif.map((el, i) => {
								const ColorStatus =() =>{
									if(el.status === "[Verifikasi]"){
										return(
											<span style={{color:"#F9B40A"}}>{el.status}</span>
										)
									} else if(el.status ==="[Komplain]"){
										return(
											<span style={{color:"#FF0000"}}>{el.status}</span>
										)
									}
								}
								return (
									<tr key={el.id}>
										<td className="isi-notif">
											<ColorStatus/> <span>{el.notif}</span>
										</td>
										<td className="tgl-notif text-center">{el.waktu}</td>
									</tr>
								);
							})}
						</tbody>
					</Table>
					<div className=" d-flex justify-content-center">
						<Button className="btn-show-notif text-center"> Lihat Semua Notifikasi</Button>
					</div>
				</div>
			</Modal.Body>
		</Modal>
	);
}

export default Notifikasi;
