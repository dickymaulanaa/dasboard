import React from "react";
import { Container, Row, Col, Button, InputGroup, FormControl, Table, Pagination } from "react-bootstrap";

function Produk() {
	return (
		<Container fluid className="boxProfileUsaha ">
			<div className="d-flex flex-column">
				<div className="pt-3 label-info d-flex  py-2">
					<Row className=" w-100">
						<Col>
							<div className="d-flex flex-column">
								<p className="ms-3 mb-0 p-0">Tabel Produk</p>
								<span className="ms-3 prd-hintProduk p-0">Berikut semua Produk Anda</span>
							</div>
						</Col>
						<Col>
							<div className="filterData mx-5 d-flex">
								<InputGroup className="mx-3">
									<FormControl
										placeholder="Temukan Produk Anda"
										aria-label="Username"
										aria-describedby="basic-addon1"
										className="inputFilter"
									/>
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
						</Col>
					</Row>
				</div>
				<div className="prd-tabel mt-1 p-2 ">
					<Table className="">
						<thead className="prd-tabel-head">
							<tr>
								<th>Foto Produk</th>
								<th>Nama Produk</th>
								<th>Berat</th>
								<th>Kategori</th>
								<th>Jumlah Stok</th>
								<th>Harga</th>
								<th></th>
							</tr>
						</thead>
						<tbody className="prd-tbody ">
							<tr>
								<td className="prd-img">
									<img src="https://s.kaskus.id/images/2019/10/11/8308943_20191011095126.jpg" alt="prd-image" />
								</td>
								<td className="py-3">Kue Coklat</td>
								<td className="py-3">720gr</td>
								<td className="py-3">Cake</td>
								<td className="py-3">200pcs</td>
								<td className="py-3">Rp. 100.000</td>
								<td className="text-center">
									<Button className="ds-btn-table p-0 px-3">Selengkapnya</Button>
								</td>
							</tr>
							<tr>
								<td className="prd-img">
									<img src="https://s.kaskus.id/images/2019/10/11/8308943_20191011095126.jpg" alt="prd-image" />
								</td>
								<td className="py-3">Kue Coklat</td>
								<td className="py-3">720gr</td>
								<td className="py-3">Cake</td>
								<td className="py-3">200pcs</td>
								<td className="py-3">Rp. 100.000</td>
								<td className="text-center">
									<Button className="ds-btn-table p-0 px-3">Selengkapnya</Button>
								</td>
							</tr>
							<tr>
								<td className="prd-img">
									<img src="https://s.kaskus.id/images/2019/10/11/8308943_20191011095126.jpg" alt="prd-image" />
								</td>
								<td className="py-3">Kue Coklat</td>
								<td className="py-3">720gr</td>
								<td className="py-3">Cake</td>
								<td className="py-3">200pcs</td>
								<td className="py-3">Rp. 100.000</td>
								<td className="text-center">
									<Button className="ds-btn-table p-0 px-3">Selengkapnya</Button>
								</td>
							</tr>
							<tr>
								<td className="prd-img">
									<img src="https://s.kaskus.id/images/2019/10/11/8308943_20191011095126.jpg" alt="prd-image" />
								</td>
								<td className="py-3">Kue Coklat</td>
								<td className="py-3">720gr</td>
								<td className="py-3">Cake</td>
								<td className="py-3">200pcs</td>
								<td className="py-3">Rp. 100.000</td>
								<td className="text-center">
									<Button className="ds-btn-table p-0 px-3">Selengkapnya</Button>
								</td>
							</tr>
							<tr>
								<td className="prd-img">
									<img src="https://s.kaskus.id/images/2019/10/11/8308943_20191011095126.jpg" alt="prd-image" />
								</td>
								<td className="py-3">Kue Coklat</td>
								<td className="py-3">720gr</td>
								<td className="py-3">Cake</td>
								<td className="py-3">200pcs</td>
								<td className="py-3">Rp. 100.000</td>
								<td className="text-center">
									<Button className="ds-btn-table p-0 px-3">Selengkapnya</Button>
								</td>
							</tr>
							<tr>
								<td className="prd-img">
									<img src="https://s.kaskus.id/images/2019/10/11/8308943_20191011095126.jpg" alt="prd-image" />
								</td>
								<td className="py-3">Kue Coklat</td>
								<td className="py-3">720gr</td>
								<td className="py-3">Cake</td>
								<td className="py-3">200pcs</td>
								<td className="py-3">Rp. 100.000</td>
								<td className="text-center">
									<Button className="ds-btn-table p-0 px-3">Selengkapnya</Button>
								</td>
							</tr>
						</tbody>
					</Table>
				</div>
				<div className="d-flex justify-content-center">
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
			</div>
		</Container>
	);
}

export default Produk;
