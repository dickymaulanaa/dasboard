import { Button } from "react-bootstrap";
import "../css/sidenav.css";
import iconTokrum from "../image/icontokrum.png";
import Dasboard from "./Dasboard";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserBuyer from "../pages/UserBuyer";
import UserSeller from "../pages/UserSeller";
import DetailBuyer from "../pages/DetailBuyer";
import DetailSeller from "../pages/DetailSeller";
import Marketing from "../pages/Marketing";
import Transaksi from "../pages/Transaksi";
import Notifikasi from "./Notifikasi";
import { useState } from "react";
import PusatBantuan from "../pages/PusatBantuan";
import PusatBantuanSeller from "../pages/PusatBantuanSeller";
import PusatBantuanBuyer from "../pages/PusatBantuanBuyer";
import Pesan from "./pusatBantuan/Pesan";

function SideNav() {
	const [showNotif, setShowNotif] = useState(false)
	return (
		<Router>
			<div className="dasboard d-flex ">
				<div className="side-nav">
					<div className="text-center icontokrum  d-flex justify-content-center align-items-center ">
					<Link to="/">	<img src={iconTokrum} alt="icon" /></Link>
					</div>
					<div className="mt-3 navbtn d-flex flex-column justify-content-center  ">
						<div className="accordion accordion-flush" id="accordionFlushExample">
							{/* Dasboard */}
							<div className="accordion-item">
								<h2 className="accordion-header " id="flush-headingOne">
									<Link to="/" style={{ textDecoration: "none" }}>
										<button
											className="accordion-button nonV "
											aria-current="true"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#flush-collapseOne"
											aria-expanded="true"
											aria-controls="flush-collapseOne"
										>
											<span className="iconDasboard me-2" />
											<span className="labelIcon">Dasboard</span>
										</button>
									</Link>
								</h2>
								<div
									id="flush-collapseOne"
									className="accordion-collapse collapse show"
									aria-labelledby="flush-headingOne"
									data-bs-parent="#accordionFlushExample"
								></div>
							</div>
							{/* Pengguna */}
							<div className="accordion-item">
								<h2 className="accordion-header  radius-top " id="flush-headingTwo">
									<button
										className="accordion-button collapsed radius-top"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#flush-collapseTwo"
										aria-expanded="false"
										aria-controls="flush-collapseTwo"
									>
										<span className="iconPengguna me-2" />
										<span className="labelIcon">Pengguna</span>
									</button>
								</h2>
								<div
									id="flush-collapseTwo"
									className="accordion-collapse collapse"
									aria-labelledby="flush-headingTwo"
									data-bs-parent="#accordionFlushExample"
								>
									<div className="accordion-body  body-collapse d-flex flex-column">
										<Link to="/buyer">
											<button type="button" className="listCollapse">
												<ul className="m-0">
													<li>Buyer</li>
												</ul>
											</button>
										</Link>
										<Link to="/seller">
											<button type="button" className="listCollapse">
												<ul className="m-0">
													<li>Seller</li>
												</ul>
											</button>
										</Link>
									</div>
								</div>
							</div>
							{/* Transaksi */}
							<div className="accordion-item">
								<h2 className="accordion-header" id="flush-headingThree">
								<Link to="/transaksi" style={{ textDecoration: "none" }}>
									<button
										className="accordion-button collapsed nonV "
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#flush-collapseEight"
										aria-expanded="false"
										aria-controls="flush-collapseEight"
									>
										<span className="iconTransaksi me-2" />
										<span className="labelIcon">Transaksi</span>
									</button>
									</Link>
								</h2>
								<div
									id="flush-collapseEight"
									className="accordion-collapse collapse"
									aria-labelledby="flush-headingEight"
									data-bs-parent="#accordionFlushExample"
								></div>
							</div>
							{/* Produk */}
							<div className="accordion-item">
								<h2 className="accordion-header" id="flush-headingThree">
									<button
										className="accordion-button collapsed nonV "
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#flush-collapseThree"
										aria-expanded="false"
										aria-controls="flush-collapseThree"
									>
										<span className="iconProduk me-2" />
										<span className="labelIcon">Produk</span>
									</button>
								</h2>
								<div
									id="flush-collapseThree"
									className="accordion-collapse collapse"
									aria-labelledby="flush-headingThree"
									data-bs-parent="#accordionFlushExample"
								></div>
							</div>
							{/* Chat */}
							<div className="accordion-item">
								<h2 className="accordion-header" id="flush-headingFour">
									<Link to="/pusatbantuan"  style={{ textDecoration: "none" }}>
									<button
										className="accordion-button collapsed nonV "
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#flush-collapseFour"
										aria-expanded="false"
										aria-controls="flush-collapseFour"
									>
										<span className="iconPusatBantuan me-2" />
										<span className="labelIcon">Pusat Bantuan</span>
									</button>
									</Link>

								</h2>
								<div
									id="flush-collapseFour"
									className="accordion-collapse collapse"
									aria-labelledby="flush-headingFour"
									data-bs-parent="#accordionFlushExample"
								></div>
							</div>
							{/* Marketing */}
							<div className="accordion-item">
								<h2 className="accordion-header radius-top" id="flush-headingFive">
									<button
										className="accordion-button collapsed radius-top"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#flush-collapseFive"
										aria-expanded="false"
										aria-controls="flush-collapseFive"
									>
										<span className="iconMarketing me-2" />
										<span className="labelIcon">Marketing</span>
									</button>
								</h2>
								<div
									id="flush-collapseFive"
									className="accordion-collapse collapse"
									aria-labelledby="flush-headingFive"
									data-bs-parent="#accordionFlushExample"
								>
									<div className="accordion-body  body-collapse d-flex flex-column">
										<button type="button" className="listCollapse  ">
											<ul className="m-0">
												<li>Voucers</li>
											</ul>
										</button>
										<button type="button" className="listCollapse">
											<ul className="m-0">
												<li>Ads Banner</li>
											</ul>
										</button>
									</div>
								</div>
							</div>
							{/* Garis  */}
							<div className="my-2 mt-4 " style={{ borderBottom: "1px solid #E5ECFC" }}></div>
							{/* Pengaturan */}
							<div className="accordion-item">
								<h2 className="accordion-header" id="flush-headingSix">
									<button
										className="accordion-button collapsed nonV"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#flush-collapsSix"
										aria-expanded="false"
										aria-controls="flush-collapsSix"
									>
										<span className="iconPengaturan me-2" />
										<span className="labelIcon">Pengaturan</span>
									</button>
								</h2>
								<div
									id="flush-collapsSix"
									className="accordion-collapse collapse"
									aria-labelledby="flush-headinSix"
									data-bs-parent="#accordionFlushExample"
								></div>
							</div>

						</div>
						<div className="boxExit  d-flex align-items-center justify-content-center  fixed-bottom ">
							<Button className="button-keluar mb-3 ">Keluar</Button>
						</div>
					</div>
				</div>

				{/* SIDE NAV */}

				<div className="content ">
					{/* <Profile /> */}
					<div className="profile d-flex align-items-center  d-flex justify-content-end ">
						<div className="isiProfile d-flex mb-2 me-5 ">

							<div className="iconNotif">
							<Button
								className="btn-notif d-flex align-items-center justify-content-center p-0 ms-3"
								onClick={() => setShowNotif(true)}
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="none" viewBox="0 0 50 50">
									<rect width="50" height="50" fill="#fff" rx="25" />
									<path
										fill="#253863"
										d="m35.786 20.002-.287.347c-1.288 1.56-2.068 2.5-2.068 6.915 0 2.285-.547 4.16-1.625 5.566-.794 1.039-1.868 1.827-3.284 2.41a.175.175 0 0 0-.048.038c-.509 1.706-1.902 2.848-3.474 2.848-1.571 0-2.964-1.142-3.473-2.846a.182.182 0 0 0-.048-.038c-3.303-1.36-4.909-3.969-4.909-7.977 0-4.415-.779-5.356-2.069-6.914l-.286-.347a2.059 2.059 0 0 1-.273-2.205c.362-.761 1.132-1.234 2.012-1.234h18.099c.875 0 1.64.472 2.003 1.23a2.061 2.061 0 0 1-.27 2.207ZM25 11.875a4.691 4.691 0 0 1 4.127 2.469.235.235 0 0 1-.207.344h-7.84a.235.235 0 0 1-.208-.344A4.692 4.692 0 0 1 25 11.875Z"
									/>
									<circle r="4" fill="#EA4335" transform="matrix(1 0 0 -1 32.2 34)" />
								</svg>
								</Button>
								<Notifikasi showNotif={showNotif} closeNotif={() =>setShowNotif(false)} />
							</div>
							
							<div className="d-flex flex-column mx-2">
								<span className="namaProfile">Sri Annisa</span>
								<span className="titleJob">Admin</span>
							</div>
							<div>
								<img
									src="https://assets.pikiran-rakyat.com/crop/0x455:1071x1326/x/photo/2022/06/07/1990436909.jpg"
									className="foto"
									alt="foto"
								/>
							</div>
						</div>
					</div>
		
					<div className="Container-fluid isi">
						<Routes>
							<Route path="/" element={<Dasboard />} />
							<Route path="/buyer" element={<UserBuyer />} />
							<Route path="/buyer/detail" element={<DetailBuyer />} />
							<Route path="/seller" element={<UserSeller />} />
							<Route path="/seller/detail" element={<DetailSeller />} />
							<Route path="/marketing" element={<Marketing />} />
							<Route path="/transaksi" element={<Transaksi />} />
							<Route path="/pusatbantuan" element={<PusatBantuan/>}/>
							<Route path="/pusatbantuan/pesan" element={<Pesan/>}/>

						</Routes>
					</div>
				</div>
			</div>
		</Router>
	);
}

export default SideNav;
