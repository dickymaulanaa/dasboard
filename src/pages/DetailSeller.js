import React from "react";
import { Button, Container, ProgressBar } from "react-bootstrap";
import IzinDokumen from "../components/penggunaSeller/IzinDokumen";
import Produk from "../components/penggunaSeller/Produk";
import ProfilPemilik from "../components/penggunaSeller/ProfilPemilik";
import ProfilUsaha from "../components/penggunaSeller/ProfilUsaha";
import Statistik from "../components/penggunaSeller/Statistik";
import "../css/DetailSeller.css";

function DetailSeller() {
	return (
		<Container fluid className="pb-5  ">
			<div className="detail  d-flex flex-column  mx-auto mt-3  ms-3">
				<div className="box-profile mx-auto pb-1  pt-3 d-flex ">
					<div className="d-flex  box-profile-seller ">
						<div className="pict-seller ">
							<img src="https://sulselekspres.com/wp-content/uploads/2018/02/pdip-1.jpg" alt="foto " />
						</div>

						<div className="d-flex flex-column justify-content-between ms-3 ">
							<span>
								<div>
									<span className="sellerName">Red Bull</span>
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
						<div className="btn-status-call  d-flex align-items-end flex-column justify-content-between">
							<Button className="btn-call-seller">Hubungi Pengguna</Button>
							<div className="progres    ">
								<div className="d-flex justify-content-between">
									<span className="label-profil-status">Profil Status</span>
									<span className="jml-profil-status">68 %</span>
								</div>
								<ProgressBar now="68" />
							</div>
						</div>
					</div>
				</div>
				<div className="tab-profile mx-auto mt-3">
					<ul class="nav nav-pills" id="pills-tab" role="tablist">
						<li class="nav-item">
							<button
								class="nav-link  active btn-list px-0"
								data-bs-toggle="pill"
								data-bs-target="#pills-profile"
								type="button"
							>
								Profil Usaha
							</button>
						</li>
						<li class="nav-item ms-4">
							<button class="nav-link btn-list px-0" data-bs-toggle="pill" data-bs-target="#pills-pemilik" type="button">
								Profil Pemilik
							</button>
						</li>
						<li class="nav-item ms-4">
							<button class="nav-link btn-list px-0" data-bs-toggle="pill" data-bs-target="#pills-produk" type="button">
								Produk
							</button>
						</li>
						<li class="nav-item ms-4">
							<button class="nav-link btn-list px-0" data-bs-toggle="pill" data-bs-target="#pills-izin" type="button">
								Izin & Dokumen
							</button>
						</li>
						<li class="nav-item ms-4">
							<button class="nav-link btn-list px-0" data-bs-toggle="pill" data-bs-target="#pills-statistik" type="button">
								Statistik
							</button>
						</li>
					</ul>
				</div>
			</div>
			<div className="box-info-seller mx-auto mt-3 ms-3">
				<div class="tab-content" id="pills-tabContent">
					<div class="tab-pane fade show active" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
						<ProfilUsaha />
					</div>
					<div class="tab-pane fade " id="pills-pemilik" role="tabpanel" aria-labelledby="pills-pemilik-tab">
						<ProfilPemilik/>
					</div>
					<div class="tab-pane fade " id="pills-produk" role="tabpanel" aria-labelledby="pills-produk-tab">
						<Produk />
					</div>
					<div class="tab-pane fade " id="pills-izin" role="tabpanel" aria-labelledby="pills-izin-tab">
						<IzinDokumen />
					</div>
					<div class="tab-pane fade " id="pills-statistik" role="tabpanel" aria-labelledby="pills-statistik-tab">
						<Statistik />
					</div>
				</div>
			</div>
		</Container>
	);
}

export default DetailSeller;
