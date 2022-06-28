import React, { useState } from "react";
import { Container, FormControl, InputGroup, Button, Table, Pagination, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModalPenyelesaian from "./ModalPenyelesaian";

function Pesan() {
     const [showKonfirmasi, setShowKonfirmasi] = useState(false);

	return (
		<>
			<Container fluid>
				<div className="ms-4 mt-3">
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item active " aria-current="page">
								<Link to="/pusatbantuan" style={{ textDecoration: "none", color: "#B1B1B1" }}>
									<div className="d-flex">
										<svg width="26" height="29" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M12 3.75001C10.3683 3.75001 8.77326 4.23387 7.41655 5.14039C6.05985 6.04691 5.00242 7.33538 4.378 8.84287C3.75358 10.3504 3.5902 12.0092 3.90853 13.6095C4.22686 15.2098 5.01259 16.6799 6.16638 17.8336C7.32016 18.9874 8.79017 19.7732 10.3905 20.0915C11.9909 20.4098 13.6497 20.2464 15.1571 19.622C16.6646 18.9976 17.9531 17.9402 18.8596 16.5835C19.7662 15.2268 20.25 13.6317 20.25 12C20.25 9.81198 19.3808 7.71356 17.8336 6.16638C16.2865 4.61921 14.188 3.75001 12 3.75001Z"
												stroke="#B1B1B1"
												stroke-width="1.5"
												stroke-miterlimit="10"
											/>
											<path
												d="M9.37499 9.48359C9.37499 9.48359 9.41437 8.66328 10.2923 7.95687C10.8131 7.53734 11.4375 7.41593 12 7.4075C12.5123 7.40093 12.9698 7.48578 13.2436 7.61609C13.7123 7.83921 14.625 8.3839 14.625 9.54218C14.625 10.7609 13.8281 11.3145 12.9201 11.9234C12.0122 12.5323 11.7656 13.1933 11.7656 13.8762"
												stroke="#B1B1B1"
												stroke-width="1.3125"
												stroke-miterlimit="10"
												stroke-linecap="round"
											/>
											<path
												d="M11.7187 17.2504C12.2365 17.2504 12.6562 16.8307 12.6562 16.3129C12.6562 15.7951 12.2365 15.3754 11.7187 15.3754C11.201 15.3754 10.7812 15.7951 10.7812 16.3129C10.7812 16.8307 11.201 17.2504 11.7187 17.2504Z"
												fill="#B1B1B1"
											/>
										</svg>
										<span className="breadcumb-label ms-1 mt-1">Tabel Pusat Bantuan</span>
									</div>
								</Link>
							</li>
							<li class="breadcrumb-item  mt-1 ">
								<div className="d-flex ">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M4.10065 17.8128C4.1569 17.6075 4.03361 17.3221 3.91596 17.1163C3.87948 17.0548 3.83974 16.9953 3.7969 16.9381C2.7878 15.4078 2.24996 13.615 2.25002 11.7819C2.23315 6.52018 6.59627 2.25034 11.9916 2.25034C16.6969 2.25034 20.625 5.51003 21.5424 9.83706C21.68 10.4786 21.7496 11.1328 21.75 11.7889C21.75 17.0581 17.5552 21.395 12.1599 21.395C11.3016 21.395 10.1442 21.1794 9.51283 21.0027C8.88142 20.826 8.25096 20.5916 8.0883 20.5288C7.92178 20.4648 7.74495 20.4319 7.56658 20.4317C7.37207 20.431 7.17944 20.4698 7.00033 20.5456L3.82033 21.6931C3.75084 21.7232 3.67719 21.7425 3.6019 21.7503C3.54234 21.7502 3.48341 21.7382 3.42852 21.7151C3.37363 21.692 3.32387 21.6582 3.2821 21.6157C3.24034 21.5733 3.20742 21.523 3.18523 21.4677C3.16304 21.4124 3.15203 21.3533 3.15283 21.2938C3.15674 21.2415 3.16617 21.1898 3.18096 21.1396L4.10065 17.8128Z"
											stroke="#253863"
											stroke-width="1.5"
											stroke-miterlimit="10"
											stroke-linecap="round"
										/>
										<path
											d="M7.49982 13.5005C8.32825 13.5005 8.99982 12.8289 8.99982 12.0005C8.99982 11.172 8.32825 10.5005 7.49982 10.5005C6.6714 10.5005 5.99982 11.172 5.99982 12.0005C5.99982 12.8289 6.6714 13.5005 7.49982 13.5005Z"
											fill="#253863"
										/>
										<path
											d="M12 13.5005C12.8285 13.5005 13.5 12.8289 13.5 12.0005C13.5 11.172 12.8285 10.5005 12 10.5005C11.1716 10.5005 10.5 11.172 10.5 12.0005C10.5 12.8289 11.1716 13.5005 12 13.5005Z"
											fill="#253863"
										/>
										<path
											d="M16.5 13.5005C17.3284 13.5005 18 12.8289 18 12.0005C18 11.172 17.3284 10.5005 16.5 10.5005C15.6716 10.5005 15 11.172 15 12.0005C15 12.8289 15.6716 13.5005 16.5 13.5005Z"
											fill="#253863"
										/>
									</svg>
									<span className="breadcumb-label ms-1">Pesan</span>
								</div>
							</li>
						</ol>
					</nav>
				</div>
			</Container>
			<Container fluid className="pb-5">
				<div className="box-table-PusatBantuan mt-3  ms-3  d-flex flex-column">
					<div>
						<div className="d-flex justify-content-between border-bottom">
							<p className="ms-4 mt-4 labelPusat">Pesan</p>
						</div>
						<div className="mx-auto d-flex container-pesan-pemohon justify-content-between pb-3 mt-4">
							<div className="pesanPempohon">
								<div className="infoBuyer">
									<span className="d-flex justify-content-center mt-4 labelPermohonan">Permohonan Bantuan</span>
									<div className="d-flex  nama-user justify-content-center align-items-center mt-3">
										<img src="https://www.greenscene.co.id/wp-content/uploads/2019/11/One-Piece.jpg" alt="foto" />
										<span className="labelNamaAkun  px-2">Monkey D Luffy</span>
									</div>
									<div className="p-3 mt-2 border-bottom list-info-user">
										<div className="row ">
											<div className="col-6 labelFillInfo">Nomor Tiket</div>
											<div className="col-6 text-end isiFillInfo">001-BUYER</div>
										</div>
										<div className="row py-2">
											<div className="col-6 labelFillInfo">Kategori Akun</div>
											<div className="col-6 text-end isiFillInfo">Buyer</div>
										</div>
										<div className="row ">
											<div className="col-6 labelFillInfo">Tanggal Permintaan</div>
											<div className="col-6 text-end isiFillInfo">11 Januari 2021</div>
										</div>
										<div className="row py-2">
											<div className="col-7 labelFillInfo">Nomor Transaksi</div>
											<div
												className="col-5  isiFillInfo text-wrap "
												style={{ height: "30px", overflowWrap: "break-word" }}
											>
												INV/20202020/XX/XV/554364534
											</div>
										</div>
										<div className="row ">
											<div className="col-6 labelFillInfo">Nama Brand</div>
											<div className="col-6 text-end isiFillInfo">Toko AA</div>
										</div>
									</div>
									<div className="px-2 border-bottom detail-bantuan-selesai pb-3">
										<span className="d-flex justify-content-center mt-3 labelPermohonan py-2">Detail Bantuan</span>
										<span className="labelHintBantuan ">
											Saya memesan barang dari Toko AAA dari bulan Januari dan sekarang Bulan Maret belum dikirim
											barangnya
										</span>
									</div>
									<div className="px-2 detail-bantuan-selesai border-bottom pb-4 ">
										<span className="d-flex justify-content-center mt-3 labelPermohonan py-2">Pihak Seller</span>
										<div className="d-flex  nama-user justify-content-center align-items-center mt-3 pb-3">
											<img
												src="https://images.tokopedia.net/img/cache/215-square/GAnVPX/2021/3/19/bd1af12c-30ad-4a20-a4f4-eae7f2f1af72.jpg"
												alt="foto"
											/>
											<span className="labelNamaAkun  px-2">Toko AAA</span>
										</div>
										<div className="row py-2 mt-3">
											<div className="col-7 labelFillInfo">Nomor Transaksi</div>
											<div
												className="col-5  isiFillInfo text-wrap "
												style={{ height: "30px", overflowWrap: "break-word" }}
											>
												INV/20202020/XX/XV/554364534
											</div>
										</div>
										<div className="row ">
											<div className="col-6 labelFillInfo">Kategori Akun</div>
											<div className="col-6 text-center isiFillInfo">Seller</div>
										</div>
									</div>
									<div className="box-btn-bantuan d-flex align-items-end mb-3 mt-5">
										<div className=" d-flex flex-column justify-content-center w-100  align-items-center">
											<button className="btn-moderasi-bantuan w-50 my-1 py-2" onClick={() => setShowKonfirmasi(true)}>Tandai Selesai</button>
                                                       <ModalPenyelesaian showKonfirmasiPenyelesaian={showKonfirmasi} closePenyelesaian={() => setShowKonfirmasi(false)}/>
											<button className="btn-tutup-bantuan w-50 py-2">Tutup</button>
										</div>
									</div>
								</div>
							</div>
							<div className="box-pesan d-flex flex-column justify-content-between">
								<div className="isi-chat">box chat</div>
								<div className="chat-text d-flex">
									<div className="w-75 ">
										<div className="textarea-pesan">
											<textarea
												class="form-control"
												id="exampleFormControlTextarea1"
												rows="3"
												placeholder="Ketik Pesan Disini"
											></textarea>
										</div>
									</div>
									<div className="w-25  d-flex justify-content-end ">
										<div class="image-upload  align-items-end d-flex mb-1">
											<label for="file-input">
												<div className="btn-icon-upload"></div>
											</label>
											<input id="file-input" type="file" />
										</div>
										<button className="btn-kirim-pesan ms-2 ">Kirim</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}

export default Pesan;
