import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/pusatBantuan.css";

function PusatBantuanSeller() {
	return (
		<>
		<Container fluid>
				<div className="ms-4 mt-3">
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item active  mt-1 " aria-current="page">
								<Link to="/pusatbantuan" style={{ textDecoration: "none", color: "#253863" }}>
									<div className="d-flex ">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
											<g id="Group">
												<g id="IONIcon/H/help/circle/outline">
													<path
														id="Vector_____0_0_YAKSDCBGAM"
														stroke="#B1B1B1"
														stroke-miterlimit="10"
														stroke-width="1.5"
														d="M12 3.75001C10.3683 3.75001 8.77326 4.23387 7.41655 5.14039C6.05985 6.04691 5.00242 7.33538 4.378 8.84287C3.75358 10.3504 3.5902 12.0092 3.90853 13.6095C4.22686 15.2098 5.01259 16.6799 6.16638 17.8336C7.32016 18.9874 8.79017 19.7732 10.3905 20.0915C11.9909 20.4098 13.6497 20.2464 15.1571 19.622C16.6646 18.9976 17.9531 17.9402 18.8596 16.5835C19.7662 15.2268 20.25 13.6317 20.25 12C20.25 9.81198 19.3808 7.71356 17.8336 6.16638C16.2865 4.61921 14.188 3.75001 12 3.75001Z"
													/>
													<path
														id="Vector_____0_1_VNHNIALUUM"
														stroke="#B1B1B1"
														stroke-linecap="round"
														stroke-miterlimit="10"
														stroke-width="1.3125"
														d="M9.37499 9.48359C9.37499 9.48359 9.41437 8.66328 10.2923 7.95687C10.8131 7.53734 11.4375 7.41593 12 7.4075C12.5123 7.40093 12.9698 7.48578 13.2436 7.61609C13.7123 7.83921 14.625 8.3839 14.625 9.54218C14.625 10.7609 13.8281 11.3145 12.9201 11.9234C12.0122 12.5323 11.7656 13.1933 11.7656 13.8762"
													/>
													<path
														id="Vector_____0_2_NMWRXJFPJU"
														fill="#B1B1B1"
														d="M11.7187 17.2504C12.2365 17.2504 12.6562 16.8307 12.6562 16.3129C12.6562 15.7951 12.2365 15.3754 11.7187 15.3754C11.201 15.3754 10.7812 15.7951 10.7812 16.3129C10.7812 16.8307 11.201 17.2504 11.7187 17.2504Z"
													/>
												</g>
											</g>
										</svg>
										<span className="breadcumb-label ms-1">Tabel Pusat Bantuan</span>
									</div>
								</Link>
							</li>
							<li class="breadcrumb-item  mt-1 " aria-current="page">
								<div className="d-flex ">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
										<g id="Group">
											<g id="IONIcon/I/information/circle/outline">
												<path
													id="Vector_____0_0_ZDGUAQEWBM"
													stroke="#253863"
													stroke-miterlimit="10"
													stroke-width="1.5"
													d="M11.6249 3.00235C6.86194 3.00235 2.99991 6.86438 2.99991 11.6273C2.99991 16.3903 6.86194 20.2523 11.6249 20.2523C16.3879 20.2523 20.2499 16.3903 20.2499 11.6273C20.2499 6.86438 16.3879 3.00235 11.6249 3.00235Z"
												/>
												<g id="Vector_____0_1_JIMLHWJTGZ">
													<path fill="#253863" d="M10.3125 10.3132H11.8125V15.7507" />
													<path
														stroke="#253863"
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="1.5"
														d="M10.3125 10.3132H11.8125V15.7507"
													/>
												</g>
												<path
													id="Vector_____0_2_GTZUPPYTRN"
													stroke="#253863"
													stroke-linecap="round"
													stroke-miterlimit="10"
													stroke-width="1.5"
													d="M9.74986 15.9376H13.8749"
												/>
												<path
													id="Vector_____0_3_BQEDKCJQYP"
													fill="#253863"
													d="M11.6248 6.09524C11.3838 6.09524 11.1482 6.16672 10.9477 6.30063C10.7473 6.43455 10.5911 6.62489 10.4989 6.84759C10.4066 7.07029 10.3825 7.31534 10.4295 7.55175C10.4765 7.78817 10.5926 8.00533 10.7631 8.17577C10.9335 8.34622 11.1507 8.46229 11.3871 8.50932C11.6235 8.55634 11.8685 8.53221 12.0912 8.43997C12.3139 8.34772 12.5043 8.19151 12.6382 7.99109C12.7721 7.79067 12.8436 7.55503 12.8436 7.31399C12.8436 6.99075 12.7152 6.68076 12.4866 6.4522C12.2581 6.22364 11.9481 6.09524 11.6248 6.09524V6.09524Z"
												/>
											</g>
										</g>
									</svg>
									<span className="breadcumb-label ms-1">
                                             <Link to="/pusatbantuan/seller" style={{ textDecoration: "none", color: "#253863" }}>Detail Bantuan</Link>
                                                  </span>
								</div>
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
			<Container fluid className="pb-5  ">
				<div className="detail  d-flex flex-column  mx-auto mt-3  ms-3">
					<div className="box-profile mx-auto pb-1  pt-3 d-flex ">
						<div className="d-flex  box-profile-seller ">
							<div className="pict-bantuan-seller ">
								<img src="https://www.greenscene.co.id/wp-content/uploads/2019/11/One-Piece.jpg" alt="foto " />
							</div>

							<div className="d-flex flex-column justify-content-between ms-3 ">
								<span>
									<div>
										<span className="sellerName">Luffy</span>
									</div>
									<div className="mt-2">
										<span>
											<span>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													fill="none"
													viewBox="0 0 24 24"
												>
													<g id="Group">
														<g id="IONIcon/P/person/circle/outline">
															<path
																id="Vector_____0_0_PVCGCEMOGD"
																fill="#909090"
																d="M12.1359 2.24979C6.65242 2.17572 2.17586 6.65229 2.24992 12.1357C2.32305 17.3946 6.60508 21.6767 11.864 21.7498C17.3484 21.8248 21.824 17.3482 21.749 11.8648C21.6768 6.60494 17.3948 2.32291 12.1359 2.24979ZM18.0618 17.5896C18.0431 17.6098 18.0202 17.6257 17.9948 17.636C17.9693 17.6464 17.9418 17.651 17.9144 17.6496C17.8869 17.6481 17.8601 17.6407 17.8358 17.6277C17.8116 17.6148 17.7904 17.5966 17.774 17.5746C17.3547 17.0261 16.8412 16.5564 16.2576 16.1876C15.0641 15.4217 13.5519 14.9998 11.9999 14.9998C10.4479 14.9998 8.9357 15.4217 7.74226 16.1876C7.15861 16.5563 6.64515 17.0257 6.22586 17.5742C6.20939 17.5962 6.18827 17.6143 6.16401 17.6273C6.13975 17.6402 6.11293 17.6477 6.08547 17.6491C6.058 17.6505 6.03056 17.6459 6.00508 17.6355C5.9796 17.6252 5.95672 17.6093 5.93805 17.5892C4.56258 16.1043 3.78344 14.1641 3.74992 12.1404C3.67352 7.579 7.41648 3.76104 11.9798 3.74979C16.543 3.73854 20.2499 7.444 20.2499 11.9998C20.2515 14.0723 19.4699 16.0689 18.0618 17.5896V17.5896Z"
															/>
															<path
																id="Vector_____0_1_EYBWXOZWRB"
																fill="#909090"
																d="M12 6.75115C11.0756 6.75115 10.2398 7.09756 9.64594 7.72709C9.05204 8.35662 8.75532 9.22709 8.82235 10.1613C8.95829 12.0012 10.3838 13.5011 12 13.5011C13.6163 13.5011 15.0389 12.0012 15.1777 10.1618C15.247 9.23646 14.9527 8.37396 14.3489 7.73272C13.7527 7.0999 12.9183 6.75115 12 6.75115Z"
															/>
														</g>
													</g>
												</svg>
											</span>
										</span>
										<span className="sellerHint ms-2">seller</span>
									</div>
								</span>
								<div className="mt-2 d-flex   ">
									<div className="jml-total d-flex  flex-column justify-content-center p-2 me-3">
										<span className="jml-num ">Rp.75.000.000</span>
										<span className="jml-hint">Pendapartan Total</span>
									</div>
									<div className="jml-produk d-flex flex-column justify-content-center p-2 ms-1">
										<span className="jml-num"> 178</span>
										<span className="jml-hint">Produk</span>
									</div>
									<div className="jml-trans d-flex flex-column justify-content-center p-2 ms-3">
										<span className="jml-num"> 980.000</span>
										<span className="jml-hint">Tansaksi</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="box-info-bantuan-buyer bg-white mx-auto mt-3 ms-3  ">
					<div className="tab-content" id="pills-tabContent">
						<div className="tab-pane fade show active" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
							<div className=" pt-3 label-info d-flex align-items-center py-2">
								<p className="basicInfo ms-3">Detail Bantuan</p>
							</div>
							<div className="info mx-3 mt-4 pb-5">
								<Row>
									<Col className="label-form">Nomor Tiket</Col>
									<Col className="input-form">
										<input type="text" disabled className="form-control" placeholder="001- SELLER" />
									</Col>
								</Row>
								<Row className="my-3">
									<Col className="label-form">Kategori Bantuan</Col>
									<Col className="input-form">
										<input type="text" disabled className="form-control" placeholder="Pencairan Dana" />
									</Col>
								</Row>
								<Row className="  my-3">
									<Col className="label-form">Tanggal Pengajuan</Col>
									<Col className="input-form">
										<input type="text" disabled className="form-control" placeholder="21-07-2000" />
									</Col>
								</Row>
								<Row className="  my-3">
									<Col className="label-form">Detail Bantuan</Col>
									<Col className="input-form">
										<textarea
											className="form-control"
											aria-label="With textarea"
											placeholder="Saya sebagai Seller tidak bisa melakukan pencairan DANA
                                                       padahal saya sudah melakukan pengajuan pencairan 1x24
                                                        "
											disabled
										/>
									</Col>
								</Row>
								<div className="basicInfo border-bottom">
									<p>Info Pengguna</p>
								</div>
								<Row className="mt-4">
									<Col className="label-form">Nama Brand</Col>
									<Col className="input-form">
										<input type="text" disabled className="form-control" placeholder="Toko AAA" />
									</Col>
								</Row>
								<Row className="my-3">
									<Col className="label-form">Jenis Kelamin</Col>
									<Col className="input-form">
										<input type="text" disabled className="form-control" placeholder="Laki-Laki" />
									</Col>
								</Row>
								<Row className="my-3">
									<Col className="label-form">Tanggal Lahir</Col>
									<Col className="input-form">
										<input type="text" disabled className="form-control" placeholder="21-07-2022" />
									</Col>
								</Row>
								<Row className="  my-3">
									<Col className="label-form">Alamat</Col>
									<Col className="input-form">
										<textarea
											className="form-control"
											aria-label="With textarea"
											placeholder="Jl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at magna mollis, fermentum metus nec, feugiat odio. Aenean iaculis diam at odio feugiat placerat. In molestie tincidunt libero"
											disabled
										/>
									</Col>
								</Row>
								<Row className="my-3">
									<Col className="label-form">Nomor Telepon</Col>
									<Col className="input-form">
										<input type="text" disabled className="form-control" placeholder="08323198642" />
									</Col>
								</Row>
								<Row className="my-3">
									<Col className="label-form">Alamat Email</Col>
									<Col className="input-form">
										<input type="text" disabled className="form-control" placeholder="patrik@mail.com" />
									</Col>
								</Row>
								<div className="box-btn-hubungiUser d-flex justify-content-end align-items-center ms-3">
									<span className="me-5 pe-5">
										<Button className="btn-hubungiUser">Hubungi Pengguna</Button>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}

export default PusatBantuanSeller;
