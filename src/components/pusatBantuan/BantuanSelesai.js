import React, { useState } from "react";
import "../../css/pusatBantuan.css";
import maskot from "../../image/maskot.png";
import { Pagination, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function BantuanSelesai() {
	// -------------------  EMPTY STATE
	// return (
	// 	<>
	// 		<div className="tbl-PusatBantuan mx-auto mt-4 px-3 ">
	// 			<div className="d-flex flex-column justify-content-center align-items-center my-5">
	// 				<div className="my-2">
	// 					<img src={maskot} alt="maskot" className="w-75" />
	// 				</div>
	// 				<span className="text-center me-5 labelBlmSelesai mb-4">Duh, halaman ini masih bersih nih</span>
	// 			</div>
	// 		</div>
	// 	</>
	// );
	// -------------------  EMPTY STATE
	const [hideAlert, setHideAlert] = useState(true);
	const [showBantuan, setShowBantuan] = useState(false);
	const tableBantuan = [
		{
			NoTiket: "001-BUYER",
			kategoriBantuan: "Pesanan Belum Sampai",
			NamaAkun: "Gayus T.",
			pesan: " Pesanan yang saya pesan dari Barand AA belum sampai ",
			tanggal: "11 Nov 2022",
		},
	];
	const isiBantuan = () => {
		return (
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
						<div className="col-5  isiFillInfo text-wrap " style={{ height: "30px", overflowWrap: "break-word" }}>
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
						Saya memesan barang dari Toko AAA dari bulan Januari dan sekarang Bulan Maret belum dikirim barangnya
					</span>
				</div>
				<div className="px-2 detail-bantuan-selesai ">
					<span className="d-flex justify-content-center mt-3 labelPermohonan py-2">Solusi</span>
					<span className="labelHintBantuan ">
						Pihak Seller setuju mengirimkan barang kembali dengan biaya 100% ditanggung pihak Seller. Barang akan dikirimkan
						tanggal 12 September
					</span>
				</div>
				<div className="box-btn-bantuan d-flex align-items-end ">
					<div className=" d-flex flex-column justify-content-center w-100  align-items-center">
						<button className="btn-tutup-bantuan w-50 py-2" onClick={() => setShowBantuan(false)}>
							Tutup
						</button>
					</div>
				</div>
			</div>
		);
	};
	return (
		<>
			<div className="container-PusatBantuan mx-auto mt-4 px-3 d-flex justify-content-between">
				<div className="d-flex flex-column box-pusatBantuan">
					<div className="boxListPusatBantuan ms-1  ">
						{tableBantuan.map((el, i) => {
							return (
								<div
									className="listBantuan d-flex flex-column py-2 ps-3 mb-3 "
									tabIndex={i}
									onClick={() => setShowBantuan(true)}
								>
									<span className="labelUserBantuan pt-1">{el.NoTiket}</span>
									<span className="labelBantuan my-2">{el.kategoriBantuan}</span>
									<span className="labelHintBantuan">{el.pesan} </span>
									<div className="d-flex justify-content-between">
										<div className=" d-flex my-2">
											<span>
												<svg
													width="24"
													height="24"
													viewBox="0 0 24 24"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M12.1359 2.24979C6.65242 2.17572 2.17586 6.65229 2.24992 12.1357C2.32305 17.3946 6.60508 21.6767 11.864 21.7498C17.3484 21.8248 21.824 17.3482 21.749 11.8648C21.6768 6.60494 17.3948 2.32291 12.1359 2.24979ZM18.0618 17.5896C18.0431 17.6098 18.0202 17.6257 17.9948 17.636C17.9693 17.6464 17.9418 17.651 17.9144 17.6496C17.8869 17.6481 17.8601 17.6407 17.8358 17.6277C17.8116 17.6148 17.7904 17.5966 17.774 17.5746C17.3547 17.0261 16.8412 16.5564 16.2576 16.1876C15.0641 15.4217 13.5519 14.9998 11.9999 14.9998C10.4479 14.9998 8.9357 15.4217 7.74226 16.1876C7.15861 16.5563 6.64515 17.0257 6.22586 17.5742C6.20939 17.5962 6.18827 17.6143 6.16401 17.6273C6.13975 17.6402 6.11293 17.6477 6.08547 17.6491C6.058 17.6505 6.03056 17.6459 6.00508 17.6355C5.9796 17.6252 5.95672 17.6093 5.93805 17.5892C4.56258 16.1043 3.78344 14.1641 3.74992 12.1404C3.67352 7.579 7.41648 3.76104 11.9798 3.74979C16.543 3.73854 20.2499 7.444 20.2499 11.9998C20.2515 14.0723 19.4699 16.0689 18.0618 17.5896V17.5896Z"
														fill="#253863"
													/>
													<path
														d="M12 6.75115C11.0756 6.75115 10.2398 7.09756 9.64594 7.72709C9.05204 8.35662 8.75532 9.22709 8.82235 10.1613C8.95829 12.0012 10.3838 13.5011 12 13.5011C13.6163 13.5011 15.0389 12.0012 15.1777 10.1618C15.247 9.23646 14.9527 8.37396 14.3489 7.73272C13.7527 7.0999 12.9183 6.75115 12 6.75115Z"
														fill="#253863"
													/>
												</svg>
											</span>
											<span className="namaAkunBantuan py-2 px-1">{el.NamaAkun}</span>
										</div>
										<span className="tgl-bantuan mt-4 pe-3">{el.tanggal}</span>
									</div>
								</div>
							);
						})}
					</div>
						<div className="alert-konfirm d-flex justify-content-between p-2 border">
							<div className="d-flex">
								<svg
									className="mt-1"
									width="20"
									height="21"
									viewBox="0 0 20 21"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M5.52081 2.64585C6.29249 2.58427 7.02508 2.28082 7.61428 1.7787C8.98925 0.606968 11.0115 0.606968 12.3865 1.7787C12.9757 2.28082 13.7083 2.58427 14.48 2.64585C16.2808 2.78955 17.7107 4.21953 17.8544 6.02032C17.916 6.792 18.2195 7.52459 18.7216 8.11379C19.8933 9.48876 19.8933 11.511 18.7216 12.886C18.2195 13.4752 17.916 14.2078 17.8544 14.9795C17.7107 16.7803 16.2808 18.2103 14.48 18.354C13.7083 18.4155 12.9757 18.719 12.3865 19.2211C11.0115 20.3928 8.98925 20.3928 7.61428 19.2211C7.02508 18.719 6.29249 18.4155 5.52081 18.354C3.72002 18.2103 2.29004 16.7803 2.14634 14.9795C2.08476 14.2078 1.78131 13.4752 1.27919 12.886C0.107456 11.511 0.107456 9.48876 1.27919 8.11379C1.78131 7.52459 2.08476 6.792 2.14634 6.02032C2.29004 4.21953 3.72002 2.78955 5.52081 2.64585ZM14.4489 8.94843C14.9175 8.4798 14.9175 7.72 14.4489 7.25137C13.9803 6.78275 13.2205 6.78275 12.7519 7.25137L8.80039 11.2028L7.24892 9.65137C6.78029 9.18274 6.02049 9.18274 5.55186 9.65137C5.08323 10.12 5.08323 10.8798 5.55186 11.3484L7.95186 13.7484C8.42049 14.2171 9.18029 14.2171 9.64892 13.7484L14.4489 8.94843Z"
										fill="#49C2AE"
									/>
								</svg>

								<span className="txt-konfirmasi ">Konfirmasi Penolakan Dokumen telah dikirim</span>
							</div>

							<Button className="txt-tutup">Tutup</Button>
						</div>
					{/* Pagination start */}
					<div className="d-flex justify-content-end ">
						<Pagination className="d-flex align-items-center">
							<Pagination.Prev style={{ padding: "0px  !important" }}>
								<svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" fill="none" viewBox="0 -5 42 59">
									<path
										fill="#3E4094"
										d="M21.501 24.93a.572.572 0 0 1-.168-.404v-.29a.586.586 0 0 1 .168-.404l3.916-3.908a.381.381 0 0 1 .541 0l.541.54a.374.374 0 0 1 0 .534l-3.39 3.383 3.39 3.383a.38.38 0 0 1 0 .54l-.54.534a.381.381 0 0 1-.542 0l-3.916-3.909Z"
									/>
									<path
										fill="#BFBFDB"
										d="M24.381 47.242C11.755 47.242 1.52 37.007 1.52 24.38h-3.04c0 14.305 11.596 25.9 25.901 25.9v-3.04Zm22.86-22.861c0 12.626-10.234 22.86-22.86 22.86v3.04c14.305 0 25.9-11.595 25.9-25.9h-3.04ZM24.382 1.52c12.626 0 22.86 10.235 22.86 22.861h3.04c0-14.305-11.595-25.901-25.9-25.901v3.04Zm0-3.04C10.076-1.52-1.52 10.076-1.52 24.381h3.04C1.52 11.755 11.755 1.52 24.381 1.52v-3.04Z"
									/>
								</svg>
							</Pagination.Prev>
							<Pagination.Item>{1}</Pagination.Item>
							<Pagination.Item>{2}</Pagination.Item>
							<Pagination.Item>{3}</Pagination.Item>
							<Pagination.Item>{4} </Pagination.Item>
							<Pagination.Item>{5}</Pagination.Item>
							<Pagination.Ellipsis />
							<Pagination.Item>{30}</Pagination.Item>
							<Pagination.Next>
								<svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" fill="none" viewBox="0 -5 42 59">
									<path
										fill="#3E4094"
										d="M27.261 24.93a.572.572 0 0 0 .168-.404v-.29a.587.587 0 0 0-.168-.404l-3.916-3.908a.381.381 0 0 0-.541 0l-.541.54a.374.374 0 0 0 0 .534l3.39 3.383-3.39 3.383a.38.38 0 0 0 0 .54l.54.534a.381.381 0 0 0 .542 0l3.916-3.909Z"
									/>
									<path
										fill="#BFBFDB"
										d="M24.381 47.238c-12.624 0-22.857-10.233-22.857-22.857h-3.048c0 14.307 11.598 25.905 25.905 25.905v-3.048Zm22.857-22.857c0 12.624-10.233 22.857-22.857 22.857v3.048c14.307 0 25.905-11.598 25.905-25.905h-3.048ZM24.381 1.524c12.624 0 22.857 10.233 22.857 22.857h3.048c0-14.307-11.598-25.905-25.905-25.905v3.048Zm0-3.048c-14.307 0-25.905 11.598-25.905 25.905h3.048c0-12.624 10.233-22.857 22.857-22.857v-3.048Z"
									/>
								</svg>
							</Pagination.Next>
						</Pagination>
					</div>
					{/* Pagination end */}
				</div>

				{showBantuan ? <div className="isiBantuan  me-2 mb-3 ">{isiBantuan()} </div> : null}
			</div>
		</>
	);
}

export default BantuanSelesai;
