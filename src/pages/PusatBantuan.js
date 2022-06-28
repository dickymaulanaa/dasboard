import React from "react";
import { Container, FormControl, InputGroup, Button, Table, Pagination, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import BantuanAktif from "../components/pusatBantuan/BantuanAktif";
import BantuanSelesai from "../components/pusatBantuan/BantuanSelesai";
import PermintaanBantuan from "../components/pusatBantuan/PermintaanBantuan";
import "../css/pusatBantuan.css";

function PusatBantuan() {
	const tableBantuan = [
		{
			NoTiket: "001-SELLER",
			kategoriAkun: "Seller",
			kategoriBantuan: "Pencairan Dana",
			NamaAkun: "Gayus T.",
			TanggalPermintaan: " 11 Januari 2022",
		},
		{
			NoTiket: "001-SELLER",
			kategoriAkun: "Seller",
			kategoriBantuan: "Pencairan Dana",
			NamaAkun: "Gayus T.",
			TanggalPermintaan: " 11 Januari 2022",
		},
		{
			NoTiket: "001-SELLER",
			kategoriAkun: "Buyer",
			kategoriBantuan: "Barang Tidak Sesuai",
			NamaAkun: "Gayus T.",
			TanggalPermintaan: " 11 Januari 2022",
		},
		{
			NoTiket: "001-SELLER",
			kategoriAkun: "Buyer",
			kategoriBantuan: "Barang Tidak Sesuai",
			NamaAkun: "Gayus T.",
			TanggalPermintaan: " 11 Januari 2022",
		},
		{
			NoTiket: "001-SELLER",
			kategoriAkun: "Seller",
			kategoriBantuan: "Pencairan Dana",
			NamaAkun: "Gayus T.",
			TanggalPermintaan: " 11 Januari 2022",
		},
	];

	return (
		<>
			<Container fluid>
				<div className="ms-4 mt-3">
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item">
								<Link to="/pusatbantuan" style={{ textDecoration: "none", color: "#253863" }}>
									<div className="d-flex">
										<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M12 3.75001C10.3683 3.75001 8.77326 4.23387 7.41655 5.14039C6.05985 6.04691 5.00242 7.33538 4.378 8.84287C3.75358 10.3504 3.5902 12.0092 3.90853 13.6095C4.22686 15.2098 5.01259 16.6799 6.16638 17.8336C7.32016 18.9874 8.79017 19.7732 10.3905 20.0915C11.9909 20.4098 13.6497 20.2464 15.1571 19.622C16.6646 18.9976 17.9531 17.9402 18.8596 16.5835C19.7662 15.2268 20.25 13.6317 20.25 12C20.25 9.81198 19.3808 7.71356 17.8336 6.16638C16.2865 4.61921 14.188 3.75001 12 3.75001Z"
												stroke="#253863"
												stroke-width="1.5"
												stroke-miterlimit="10"
											/>
											<path
												d="M9.37499 9.48359C9.37499 9.48359 9.41437 8.66328 10.2923 7.95687C10.8131 7.53734 11.4375 7.41593 12 7.4075C12.5123 7.40093 12.9698 7.48578 13.2436 7.61609C13.7123 7.83921 14.625 8.3839 14.625 9.54218C14.625 10.7609 13.8281 11.3145 12.9201 11.9234C12.0122 12.5323 11.7656 13.1933 11.7656 13.8762"
												stroke="#253863"
												stroke-width="1.3125"
												stroke-miterlimit="10"
												stroke-linecap="round"
											/>
											<path
												d="M11.7187 17.2504C12.2365 17.2504 12.6562 16.8307 12.6562 16.3129C12.6562 15.7951 12.2365 15.3754 11.7187 15.3754C11.201 15.3754 10.7812 15.7951 10.7812 16.3129C10.7812 16.8307 11.201 17.2504 11.7187 17.2504Z"
												fill="#253863"
											/>
										</svg>
										<span className="breadcumb-label ms-1 mt-1">Tabel Pusat Bantuan</span>
									</div>
								</Link>
							</li>
							<li class="breadcrumb-item active mt-1 " aria-current="page">
								<div className="d-flex ">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										fill="none"
										viewBox="0 0 24 24"
										className="ms-2"
									>
										<g id="Group">
											<g id="IONIcon/C/chatbubble/ellipses/outline">
												<path
													id="Vector_____0_0_YJSFJKDPVH"
													stroke="#B1B1B1"
													stroke-linecap="round"
													stroke-miterlimit="10"
													stroke-width="1.5"
													d="M4.10065 17.8128C4.1569 17.6075 4.03361 17.3221 3.91596 17.1163C3.87948 17.0548 3.83974 16.9953 3.7969 16.9381C2.7878 15.4078 2.24996 13.615 2.25002 11.7819C2.23315 6.52018 6.59627 2.25034 11.9916 2.25034C16.6969 2.25034 20.625 5.51003 21.5424 9.83706C21.68 10.4786 21.7496 11.1328 21.75 11.7889C21.75 17.0581 17.5552 21.395 12.1599 21.395C11.3016 21.395 10.1442 21.1794 9.51283 21.0027C8.88142 20.826 8.25096 20.5916 8.0883 20.5288C7.92178 20.4648 7.74495 20.4319 7.56658 20.4317C7.37207 20.431 7.17944 20.4698 7.00033 20.5456L3.82033 21.6931C3.75084 21.7232 3.67719 21.7425 3.6019 21.7503C3.54234 21.7502 3.48341 21.7382 3.42852 21.7151C3.37363 21.692 3.32387 21.6582 3.2821 21.6157C3.24034 21.5733 3.20742 21.523 3.18523 21.4677C3.16304 21.4124 3.15203 21.3533 3.15283 21.2938C3.15674 21.2415 3.16617 21.1898 3.18096 21.1396L4.10065 17.8128Z"
												/>
												<path
													id="Vector_____0_1_LHKBTFXKPZ"
													fill="#B1B1B1"
													d="M7.49982 13.5005C8.32825 13.5005 8.99982 12.8289 8.99982 12.0005C8.99982 11.172 8.32825 10.5005 7.49982 10.5005C6.6714 10.5005 5.99982 11.172 5.99982 12.0005C5.99982 12.8289 6.6714 13.5005 7.49982 13.5005Z"
												/>
												<path
													id="Vector_____0_2_JYHSGYAKAI"
													fill="#B1B1B1"
													d="M12 13.5005C12.8285 13.5005 13.5 12.8289 13.5 12.0005C13.5 11.172 12.8285 10.5005 12 10.5005C11.1716 10.5005 10.5 11.172 10.5 12.0005C10.5 12.8289 11.1716 13.5005 12 13.5005Z"
												/>
												<path
													id="Vector_____0_3_WTMGBKUSOJ"
													fill="#B1B1B1"
													d="M16.5 13.5005C17.3284 13.5005 18 12.8289 18 12.0005C18 11.172 17.3284 10.5005 16.5 10.5005C15.6716 10.5005 15 11.172 15 12.0005C15 12.8289 15.6716 13.5005 16.5 13.5005Z"
												/>
											</g>
										</g>
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
						<div className="d-flex justify-content-between ">
							<p className="ms-4 mt-4 labelPusat">Pusat Bantuan</p>
							<div className="filterData   mx-4 mt-4 d-flex">
								<InputGroup className="mx-3">
									<FormControl placeholder="Cari Kata Kunci" aria-describedby="basic-addon1" className="inputFilter" />
									<InputGroup.Text id="basic-addon1" className="spanFilter">
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z"
												stroke="#253863"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M16.4431 16.4438L20.9995 21.0001"
												stroke="#253863"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</InputGroup.Text>
								</InputGroup>
								<Button
									className="btn-filter d-flex align-items-center justify-content-center"
									data-bs-toggle="collapse"
									data-bs-target="#filter-collapse"
								>
									<span>
										<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<g clip-path="url(#clip0_143_16625)">
												<path
													d="M22.1251 7.87513H1.87513C1.57677 7.87513 1.29062 7.75661 1.07964 7.54563C0.86866 7.33465 0.750134 7.0485 0.750134 6.75013C0.750134 6.45176 0.86866 6.16562 1.07964 5.95464C1.29062 5.74366 1.57677 5.62513 1.87513 5.62513H22.1251C22.4235 5.62513 22.7096 5.74366 22.9206 5.95464C23.1316 6.16562 23.2501 6.45176 23.2501 6.75013C23.2501 7.0485 23.1316 7.33465 22.9206 7.54563C22.7096 7.75661 22.4235 7.87513 22.1251 7.87513V7.87513Z"
													fill="white"
												/>
												<path
													d="M18.375 13.1255H5.62505C5.32668 13.1255 5.04053 13.007 4.82955 12.796C4.61857 12.585 4.50005 12.2989 4.50005 12.0005C4.50005 11.7021 4.61857 11.416 4.82955 11.205C5.04053 10.994 5.32668 10.8755 5.62505 10.8755H18.375C18.6734 10.8755 18.9596 10.994 19.1705 11.205C19.3815 11.416 19.5 11.7021 19.5 12.0005C19.5 12.2989 19.3815 12.585 19.1705 12.796C18.9596 13.007 18.6734 13.1255 18.375 13.1255Z"
													fill="white"
												/>
												<path
													d="M13.8751 18.3754H10.1251C9.8267 18.3754 9.54056 18.2569 9.32958 18.0459C9.1186 17.8349 9.00007 17.5488 9.00007 17.2504C9.00007 16.9521 9.1186 16.6659 9.32958 16.4549C9.54056 16.2439 9.8267 16.1254 10.1251 16.1254H13.8751C14.1734 16.1254 14.4596 16.2439 14.6706 16.4549C14.8815 16.6659 15.0001 16.9521 15.0001 17.2504C15.0001 17.5488 14.8815 17.8349 14.6706 18.0459C14.4596 18.2569 14.1734 18.3754 13.8751 18.3754Z"
													fill="white"
												/>
											</g>
										</svg>
									</span>
									<span>Filter</span>
								</Button>
							</div>
						</div>
						<div className="d-flex me-4 justify-content-end mt-2">
							<div class="collapse filterCollaps " id="filter-collapse">
								<div class="card-collapse-pengguna-seller d-flex flex-column shadow bg-white ">
									<span className="labelFilter mx-2 mt-1 p-1">Filter Data</span>
									<div className="checkboxFilter mt-3 mx-3">
										<Form>
											<Form.Check type="checkbox" label="Data Terbaru" id="checkTerbaru" />
											<Form.Check type="checkbox" label="Data Terakhir" id="checkTerakhir" />
											<Form.Check type="checkbox" label="Urutkan Sesuai Abjad" id="UrutAbjad" />
											<Form.Check type="checkbox" label="Urutkan Sesuai Status" id="UrutStatus" />
										</Form>
									</div>
									<div className="btn-filter-box d-flex justify-content-end p-3 mt-2">
										<Button
											variant="outline-danger"
											className="btn-hapus mx-2 d-flex align-items-center justify-content- center"
										>
											<span className="mx-2">Hapus</span>
										</Button>
										<Button className="btn-terapkan  d-flex align-items-center text-center">
											<span>Terapkan</span>
										</Button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="d-flex ms-3 ps-2 mt-3 ">
						<ul class="nav nav-pills" id="pills-tab" role="tablist">
							<li class="nav-item">
								<button
									class="nav-link  active btn-list-pusatBantuan px-0"
									data-bs-toggle="pill"
									data-bs-target="#pills-PermintaanBantuan"
									type="button"
								>
									Permintaan Bantuan (999)
								</button>
							</li>
							<li class="nav-item ms-5">
								<button
									class="nav-link btn-list-pusatBantuan px-0"
									data-bs-toggle="pill"
									data-bs-target="#pills-BantuanAktif"
									type="button"
								>
									Bantuan Aktif (888)
								</button>
							</li>
							<li class="nav-item ms-5">
								<button
									class="nav-link btn-list-pusatBantuan px-0"
									data-bs-toggle="pill"
									data-bs-target="#pills-BantuanSelesai"
									type="button"
								>
									Bantuan Selesai (777)
								</button>
							</li>
						</ul>
					</div>
					{/* Collap */}
					<div className="tab-content " id="pills-tabContent">
						{/* Permintaan Bantuan Start */}
						<div
							className="tab-pane fade show active "
							id="pills-PermintaanBantuan"
							role="tabpanel"
							aria-labelledby="pills-PermintaanBantuan"
						>
							<PermintaanBantuan/>
						</div>
						{/* Permintaan Bantuan End */}

						{/* Bantuan Aktif  Start*/}
						<div className="tab-pane fade " id="pills-BantuanAktif" role="tabpanel" aria-labelledby="pills-BantuanAktif">
							<BantuanAktif/>
						</div>
						{/* Bantuan Aktif  End*/}

						{/* Bantuan Selesai Start */}
						<div className="tab-pane fade " id="pills-BantuanSelesai" role="tabpanel" aria-labelledby="pills-BantuanSelesai">
							<BantuanSelesai/>
						
						</div>
						{/* Bantuan Selesai End */}
					</div>
				</div>
			</Container>
		</>
	);
}

export default PusatBantuan;
