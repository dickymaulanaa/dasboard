import React from "react";
import {  Col, Container, Row } from "react-bootstrap";
import "../css/DetailBuyer.css";

function DetailBuyer() {
	return (
		<Container fluid className="pb-5  ">
			<div className="detail  d-flex flex-column  mx-auto mt-3  ms-3">
				<div className="box-profile mx-auto pb-4 pt-3 d-flex ">
					<div className="d-flex  name-profile ">
						<div className="pict-buyer ">
							<img src="https://i.pinimg.com/736x/0c/d7/cf/0cd7cfd63876a6579e68e53e10b4214e.jpg" alt="foto " />
						</div>

						<div className="d-flex flex-column justify-content-between ms-3">
							<span>
								<div>
									<span className="buyerName">Patrick Star </span>
									<span>
										<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M8.82113 3.25867C9.5243 1.89383 11.4757 1.89383 12.1789 3.25867V3.25867C12.6014 4.07878 13.5546 4.47361 14.4333 4.19247V4.19247C15.8956 3.7246 17.2754 5.10445 16.8075 6.56674V6.56674C16.5264 7.44542 16.9212 8.39861 17.7413 8.82113V8.82113C19.1062 9.5243 19.1062 11.4757 17.7413 12.1789V12.1789C16.9212 12.6014 16.5264 13.5546 16.8075 14.4333V14.4333C17.2754 15.8956 15.8956 17.2754 14.4333 16.8075V16.8075C13.5546 16.5264 12.6014 16.9212 12.1789 17.7413V17.7413C11.4757 19.1062 9.5243 19.1062 8.82113 17.7413V17.7413C8.39861 16.9212 7.44542 16.5264 6.56674 16.8075V16.8075C5.10445 17.2754 3.7246 15.8956 4.19247 14.4333V14.4333C4.47361 13.5546 4.07878 12.6014 3.25867 12.1789V12.1789C1.89383 11.4757 1.89383 9.5243 3.25867 8.82113V8.82113C4.07878 8.39861 4.47361 7.44542 4.19247 6.56674V6.56674C3.7246 5.10445 5.10445 3.7246 6.56674 4.19247V4.19247C7.44542 4.47361 8.39861 4.07878 8.82113 3.25867V3.25867Z"
												fill="#00A3FF"
											/>
											<path
												d="M12.9997 8.04148C13.1786 7.83108 13.4554 7.82116 13.6658 8C13.8762 8.17884 13.8455 8.45626 13.6667 8.66667L10.3806 12.8238C10.199 13.0375 9.87711 13.06 9.66748 12.8737L7.41748 10.8737C7.21109 10.6902 7.1925 10.3742 7.37596 10.1678C7.55941 9.96142 7.87545 9.94283 8.08184 10.1263L9.94977 11.7867L12.9997 8.04148Z"
												fill="white"
											/>
										</svg>
									</span>
								</div>
								<div className="mt-2">
									<span>
									<span>
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
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
									<span className="buyerHint ms-2">Buyer</span>
								</div>
							</span>
							<div className="mt-2 d-flex">
								<div className="jml d-flex  flex-column justify-content-center p-2 me-3">
									<span className="jml-num ">30</span>
									<span className="jml-hint">Total Transaksi</span>
								</div>
								<div className="jml d-flex flex-column justify-content-center p-2">
									<span className="jml-num"> 2</span>
									<span className="jml-hint">Transaksi Aktif</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="tab-profile mx-auto mt-3">
					<ul className="nav nav-pills" id="pills-tab" role="tablist">
						<li className="nav-item">
							<button
								className="nav-link  active btn-list px-0 "
								data-bs-toggle="pill"
								data-bs-target="#pills-profile"
								type="button"
							>
								{" "}
								Profil User
							</button>
						</li>
					</ul>
				</div>
			</div>
			<div className="box-info-buyer bg-white mx-auto mt-3 ms-3  ">
				<div className="tab-content" id="pills-tabContent">
					<div className="tab-pane fade show active" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
						<div className=" pt-3 label-info d-flex align-items-center py-2">
							<p className="basicInfo ms-3">Basic Info</p>
						</div>
						<div className="info mx-3 mt-4 pb-5">
							<Row>
								<Col className="label-form">Nama User</Col>
								<Col className="input-form">
									<input type="text" disabled className="form-control" placeholder="Patrick Star" />
								</Col>
							</Row>
							<Row className="my-3">
								<Col className="label-form">Tanggal Registrasi</Col>
								<Col className="input-form">
									<input type="text" disabled className="form-control" placeholder="22-12-2022" />
								</Col>
							</Row>
							<Row className="  my-3">
								<Col className="label-form">Jenis Kelamin</Col>
								<Col className="input-form">
									<input type="text" disabled className="form-control" placeholder="Perempuan" />
								</Col>
							</Row>
							<Row className="  my-3">
								<Col className="label-form">Tanggal Lahir</Col>
								<Col className="input-form">
									<input type="text" disabled className="form-control" placeholder="21-07-2000" />
								</Col>
							</Row>
							<Row className="  my-3">
								<Col className="label-form">Alamat Pengiriman</Col>
								<Col className="input-form">
									<textarea
										className="form-control"
										aria-label="With textarea"
										placeholder="Jl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at magna mollis, fermentum metus nec, feugiat odio. Aenean iaculis diam at odio feugiat placerat. In molestie tincidunt libero"
										disabled
									/>
									<textarea
										className="form-control my-2"
										aria-label="With textarea"
										placeholder="Jl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at magna mollis, fermentum metus nec, feugiat odio. Aenean iaculis diam at odio feugiat placerat. In molestie tincidunt libero"
										disabled
									/>
									<textarea
										className="form-control"
										aria-label="With textarea"
										placeholder="Jl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at magna mollis, fermentum metus nec, feugiat odio. Aenean iaculis diam at odio feugiat placerat. In molestie tincidunt libero"
										disabled
									/>
								</Col>
							</Row>
							<Row className="  my-3">
								<Col className="label-form">Nomor Telepon</Col>
								<Col className="input-form">
									<input type="text" disabled className="form-control" placeholder="08977882661" />
								</Col>
							</Row>
							<Row className="  my-3">
								<Col className="label-form">Alamat e-mail</Col>
								<Col className="input-form">
									<input type="text" disabled className="form-control" placeholder="contactus@redbull.com" />
								</Col>
							</Row>
							<div className="labelRekning">
								<p>Rekening Dana</p>
							</div>
							<Row className="  my-3 d-flex align-items-center">
								<Col className="label-form">Nomor Handphone DANA</Col>
								<Col className="input-form">
									<input type="text" disabled className="form-control" placeholder="0877328123129" />
								</Col>
							</Row>
							<Row className="mt-4 ">
								<Col className="label-form">Status</Col>
								<Col className="statusDana ms-3">
									<span className="me-1">Terverifikasi</span>
									<span>
										<svg width="20" height="20" viewBox="0 2 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M10.0813 3.7242C10.8849 2.16438 13.1151 2.16438 13.9187 3.7242V3.7242C14.4016 4.66147 15.4909 5.1127 16.4951 4.79139V4.79139C18.1663 4.25668 19.7433 5.83365 19.2086 7.50485V7.50485C18.8873 8.50905 19.3385 9.59842 20.2758 10.0813V10.0813C21.8356 10.8849 21.8356 13.1151 20.2758 13.9187V13.9187C19.3385 14.4016 18.8873 15.491 19.2086 16.4951V16.4951C19.7433 18.1663 18.1663 19.7433 16.4951 19.2086V19.2086C15.491 18.8873 14.4016 19.3385 13.9187 20.2758V20.2758C13.1151 21.8356 10.8849 21.8356 10.0813 20.2758V20.2758C9.59842 19.3385 8.50905 18.8873 7.50485 19.2086V19.2086C5.83365 19.7433 4.25668 18.1663 4.79139 16.4951V16.4951C5.1127 15.491 4.66147 14.4016 3.7242 13.9187V13.9187C2.16438 13.1151 2.16438 10.8849 3.7242 10.0813V10.0813C4.66147 9.59842 5.1127 8.50905 4.79139 7.50485V7.50485C4.25668 5.83365 5.83365 4.25668 7.50485 4.79139V4.79139C8.50905 5.1127 9.59842 4.66147 10.0813 3.7242V3.7242Z"
												fill="#40B03D"
											/>
											<path
												d="M14.8568 9.19026C15.0612 8.9498 15.3776 8.93846 15.618 9.14285C15.8585 9.34724 15.8234 9.6643 15.619 9.90476L11.8635 14.6558C11.6559 14.9 11.2881 14.9258 11.0485 14.7128L8.47708 12.4271C8.2412 12.2174 8.21995 11.8562 8.42962 11.6203C8.63929 11.3845 9.00047 11.3632 9.23635 11.5729L11.3711 13.4705L14.8568 9.19026Z"
												fill="white"
											/>
										</svg>
									</span>
								</Col>
							</Row>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
}

export default DetailBuyer;
