import { Table, Container, Button } from "react-bootstrap";
import "../css/dasboard.css";

function Dasboard() {
	const ProdukTerlaris = [
		{
			namaProduk: "Kemeja",
			jenis: "Fashion Pria",
			harga: 1300,
			foto: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//94/MTA-11816392/oem_kemeja_pria_lengan_panjang_kemeja_flanel_pria_casual_6527_full01_jud1zj75.jpg",
		},
		{
			namaProduk: "Kemeja bagus",
			jenis: "Fashion Pria",
			harga: 1400,
			foto: "https://www.bikin.co/konveksi-baju/wp-content/uploads/2019/11/Kemeja-Kantor-Lengan-Panjang.jpg",
		},
		{
			namaProduk: "Kemeja keren",
			jenis: "Fashion Pria",
			harga: 1500,
			foto: "https://1.bp.blogspot.com/-dxCx33BMkhI/YUvyF_h82gI/AAAAAAAABMM/cmzd-TqHfJkOMGiFUwTVh6kCBIqLt7cqACLcBGAsYHQ/s640/k%2B2.jpg",
		},
		{
			namaProduk: "Kemeja keren",
			jenis: "Fashion Pria",
			harga: 1500,
			foto: "https://1.bp.blogspot.com/-dxCx33BMkhI/YUvyF_h82gI/AAAAAAAABMM/cmzd-TqHfJkOMGiFUwTVh6kCBIqLt7cqACLcBGAsYHQ/s640/k%2B2.jpg",
		},
		{
			namaProduk: "Kemeja keren",
			jenis: "Fashion Pria",
			harga: 1500,
			foto: "https://1.bp.blogspot.com/-dxCx33BMkhI/YUvyF_h82gI/AAAAAAAABMM/cmzd-TqHfJkOMGiFUwTVh6kCBIqLt7cqACLcBGAsYHQ/s640/k%2B2.jpg",
		},
	];

	return (
		<Container fluid className="pb-5">
			<div className="box-dasboard mt-3  ms-3 d-flex justify-content-between">
				<div className="ds-kiri me-3 d-flex flex-column ">
					<div className="ds-transaksi  d-flex justify-content-between">
						<div className="ds-isi-transaksi bg-white d-flex flex-column  justify-content-center">
							<span className="ds-label-transaksi mx-3 ">
								Nominal Transaksi
								<span className="ms-1">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
										<path
											stroke="#BFBFDB"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="1.875"
											d="M10 17.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z"
										/>
										<path
											stroke="#BFBFDB"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="1.875"
											d="M9.375 9.688H10v4.062h.625"
										/>
										<path fill="#BFBFDB" d="M9.844 7.813a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" />
									</svg>
								</span>
							</span>
							<span className="label_jumlah_transaksi mx-3 mt-2"> Rp 50.000.000</span>
						</div>
						<div className="ds-isi-transaksi bg-white d-flex flex-column  justify-content-center">
							<span className="ds-label-transaksi mx-3 ">
								Total Transaksi
								<span className="ms-1">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
										<path
											stroke="#BFBFDB"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="1.875"
											d="M10 17.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z"
										/>
										<path
											stroke="#BFBFDB"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="1.875"
											d="M9.375 9.688H10v4.062h.625"
										/>
										<path fill="#BFBFDB" d="M9.844 7.813a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" />
									</svg>
								</span>
							</span>
							<span className="label_jumlah_transaksi mx-3 mt-1  "> 5555</span>
							<span className="hint_box_transaksi mx-3"> Transaksi</span>
						</div>
					</div>
					<div className="ds-user mt-4 d-flex justify-content-between">
						<div className="ds-isi-user d-flex flex-column bg-white  justify-content-center">
							<span className="ds-label-transaksi mx-3  ">Buyer Baru</span>
							<span className="label_jumlah_transaksi mx-3 my-1  "> 666</span>
							<span className="hint_box_transaksi mx-3"> User</span>
						</div>
						<div className="ds-isi-user d-flex flex-column bg-white  justify-content-center">
							<span className="ds-label-transaksi mx-3">Seller Baru</span>
							<span className="label_jumlah_transaksi mx-3 my-1  "> 777</span>
							<span className="hint_box_transaksi mx-3"> User</span>
						</div>
						<div className="ds-isi-user d-flex flex-column bg-white  justify-content-center">
							<span className="ds-label-transaksi mx-3  ">Menunggu Verifikasi</span>
							<span className="label_jumlah_transaksi mx-3 my-1  "> 8888</span>
							<span className="hint_box_transaksi mx-3"> User</span>
						</div>
					</div>
					<div className="ds-tabel mt-3 bg-white d-flex flex-column">
						<span className="ds-label-transaksi mb-2  mx-3 mt-3">Brand Terbaru</span>
						<div className="p-2">
							<Table className="ds-tabel-content ">
								<thead className="ds-tabel-head ">
									<tr>
										<th>Nama Brand</th>
										<th>Nama Pemilik</th>
										<th>Status</th>
										<th>Tanggal Registasi</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className="ds-tabel-isi  py-3 ">Harli Dapitson</td>
										<td className="ds-tabel-isi  py-3 ">Mang Donal Trum</td>
										<td>
											<span className="ds-status rounded p-1">Menunggu</span>
										</td>
										<td className="ds-tabel-isi py-3 ">Mang Donal Trum</td>
										<td className="text-center">
											<Button className="ds-btn-table p-0 px-3">Selengkapnya</Button>
										</td>
									</tr>
									<tr>
										<td className="ds-tabel-isi  py-3 ">Harli Dapitson</td>
										<td className="ds-tabel-isi  py-3 ">Mang Donal Trum</td>
										<td>
											<span className="ds-status rounded p-1">Menunggu</span>
										</td>
										<td className="ds-tabel-isi py-3 ">Mang Donal Trum</td>
										<td className="text-center">
											<Button className="ds-btn-table p-0 px-3">Selengkapnya</Button>
										</td>
									</tr>
									<tr>
										<td className="ds-tabel-isi  py-3 ">Harli Dapitson</td>
										<td className="ds-tabel-isi  py-3 ">Mang Donal Trum</td>
										<td>
											<span className="ds-status rounded p-1">Menunggu</span>
										</td>
										<td className="ds-tabel-isi py-3 ">Mang Donal Trum</td>
										<td className="text-center">
											<Button className="ds-btn-table p-0 px-3">Selengkapnya</Button>
										</td>
									</tr>
									<tr>
										<td className="ds-tabel-isi  py-3 ">Harli Dapitson</td>
										<td className="ds-tabel-isi  py-3 ">Mang Donal Trum</td>
										<td>
											<span className="ds-status rounded p-1">Menunggu</span>
										</td>
										<td className="ds-tabel-isi py-3 ">Mang Donal Trum</td>
										<td className="text-center">
											<Button className="ds-btn-table p-0 px-3">Selengkapnya</Button>
										</td>
									</tr>
								</tbody>
							</Table>
						</div>
					</div>
				</div>
				<div className="ds-kanan d-flex flex-column">
					<div className="ds-isi-kanan bg-white d-flex flex-column p-3 ">
						<div className="ds-box-label-produk  d-flex justify-content-between mt-2 pb-2 px-1">
							<span className="ds-label-produk">Produk Terlaris</span>
						</div>
						<div className="mt-3">
							{ProdukTerlaris.map((el, i) => (
								<ul className="d-flex ds-list-produk p-0 px-3 mb-2 " key={i}>
									<li className="ds-img-produk me-3">
										<img src={el.foto} alt="img-produk"/>
									</li>
									<li className="ds-box-nama-produk d-flex flex-column mt-2">
										<span className="ds-nama-produk">{el.namaProduk}</span>
										<span className="ds-jenis-produk">{el.jenis}</span>
									</li>
									<li className="ds-box-harga-produk d-flex flex-column mt-2">
										<span className="ds-harga-produk">{el.harga}</span>
										<span className="ds-terjual-produk">terjual</span>
									</li>
								</ul>
							))}
						</div>
					</div>
					{/* Bawah */}
					<div className="ds-isi-kanan bg-white d-flex flex-column pe-3 ps-3 pt-3 mt-3">
						<div className="ds-box-label-produk  d-flex justify-content-between mt-2 pb-2 px-1">
							<span className="ds-label-produk">Brand Terlaris</span>
						</div>
						<div className="mt-3">
							{ProdukTerlaris.map((el, i) => (
								<ul className="d-flex ds-list-produk p-0 px-3 mb-2" key={i}>
									<li className="ds-img-produk me-3">
										<img src={el.foto} alt="img-produk"/>
									</li>
									<li className="ds-box-nama-produk d-flex flex-column mt-2">
										<span className="ds-nama-produk">{el.namaProduk}</span>
										<span className="ds-jenis-produk">{el.jenis}</span>
									</li>
									<li className="ds-box-harga-produk d-flex flex-column mt-2">
										<span className="ds-harga-produk">{el.harga}</span>
										<span className="ds-terjual-produk">Penjualan</span>
									</li>
								</ul>
							))}
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
}

export default Dasboard;
