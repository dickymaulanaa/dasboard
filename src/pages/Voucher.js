import "../css/Voucher.css";
import {
  Button,
  FormControl,
  Form,
  Nav,
  Table,
  Tab,
  Tabs,
  Pagination,
  Modal,
  Row,
  Col,
} from "react-bootstrap";
import React, { useState, useEffect } from "react";
import iklan from "../image/iklan.png";
import "bootstrap/dist/css/bootstrap.min.css";
import iconX from "../image/Icon.png";

function Voucher() {

  let aktif = 15
  let nonaktif = 0

  const [hideHapus, setHideHapus] = useState(true);
  const [cekAll, setCekAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [hideModalTambahV, setHideModalTambahV] = useState(true);
  const [x, setX] = useState(true);
  const [hideYakinHapus, setHideYakinHapus] = useState(true);
  const [hideTerhapus, setHideTerhapus] = useState(true);
  const [hideBatalterhapus, setBatalterhapus] = useState(true);
  const [hideSilahkan, setHideSilahkan] = useState(true);
  const [contoh, setContoh] = useState('')

  // modal-tambah
  const [modalV, setModalV] = useState(false);
  const handleClose = () => setModalV(false);
  const handleShow = () => setModalV(true);
  // modal-hapus
  const [showHapus, setShowHapus] = useState(false);
  const handleCloseHapus = () => setShowHapus(false);
  const handleShowHapus = () => setHideYakinHapus(false);

  function tambahPromo() {
    if (hideModalTambahV == true) {
      setHideModalTambahV(false);
      setX(false);
    }

    // let elem = document.getElementById("form");
    // elem.style.backgroundColor = "#F1F5FC";
    // let elem2 = document.getElementById("form2");
    // elem2.style.backgroundColor = "#F1F5FC";
    // let elem3 = document.getElementById("form3");
    // elem3.style.backgroundColor = "#F1F5FC";
    // let elem4 = document.getElementById("form4");
    // elem4.style.backgroundColor = "#F1F5FC";
    // let elem5 = document.getElementById("form5");
    // elem5.style.backgroundColor = "#F1F5FC";
    // let elem6 = document.getElementById("form6");
    // elem6.style.backgroundColor = "#F1F5FC";


    if(contoh == ''){
      setHideSilahkan(false)
      // elem.style.borderColor = "red";
      // elem2.style.borderColor = "red";
      // elem3.style.borderColor = "red";
      // elem4.style.borderColor = "red";
      // elem5.style.borderColor = "red";
      // elem6.style.borderColor = "red";
    }
  }

  function batalHapus() {
    setHideYakinHapus(true);
    setHideModalTambahV(true);
    setBatalterhapus(false);
    setTimeout(() => {
      setBatalterhapus(true);
    }, 2000);
  }
  function yakinHapus() {
    setHideYakinHapus(true);
    setHideModalTambahV(true);
    setHideTerhapus(false);
    setTimeout(() => {
      setHideTerhapus(true);
    }, 2000);
  }
  function xHide() {
    if (hideModalTambahV == true) {
      setX(false);
    } else {
      setX(true);
      setHideModalTambahV(true);
    }
  }

  function tambahVoucher() {
    if (modalV == true) {
      setModalV(false);
    } else {
      setModalV(true);
    }
  }

  function hapusVoucher() {
    setHideYakinHapus(false);
  }

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    setHideHapus(false);
    let elem = document.getElementById(id);
    elem.style.backgroundColor = "#F1F5FC";

    for (let i = 0; i > id.length; i++) {
      if (checked) {
        setHideHapus(true);
      } else {
        setHideHapus(false);
      }
    }

    if (!checked > 1) {
      setIsCheck(isCheck.filter((item) => item !== id));
      setHideHapus(false);
      elem.style.backgroundColor = "#F1F5FC";
    }
    if (checked.length == 0) {
      setIsCheck(isCheck.filter((item) => item !== id));
      setHideHapus(false);
      elem.style.backgroundColor = "#F1F5FC";
    }
    if (checked >= 1) {
      setIsCheck(isCheck.filter((item) => item !== id));
      setHideHapus(false);
      elem.style.backgroundColor = "#F1F5FC";
    }
    if (checked == 1) {
      setHideHapus(false);
      elem.style.backgroundColor = "#F1F5FC";
    } else {
      setIsCheck(isCheck.filter((item) => item !== id));
      setHideHapus(true);
      elem.style.backgroundColor = "white";
    }
  };

  function checkAll() {
    setCekAll(true);
    setIsCheck(data.map((li) => li.id));
    if (cekAll) {
      setIsCheck([]);
      setCekAll(false);
      setHideHapus(true);
    } else {
      setHideHapus(false);
    }
  }

  let dataNonaktif = [
    {
      id: 1,
      namaVoucher: "INFLNCR01",
      jenisVoucher: "Potongan Harga",
      penanggungJawab: "TokoRumahan",
      tanggalAktif: "11 Januari 2020",
      tanggalSelesai: "20 Januari 2020",
    },
    {
      id: 2,
      namaVoucher: "ONGKIRHEMAT",
      jenisVoucher: "Gratis Ongkos Kirim",
      penanggungJawab: "AnterAja",
      tanggalAktif: "11 Januari 2020",
      tanggalSelesai: "20 Januari 2020",
    },
    {
      id: 3,
      namaVoucher: "ONGKIRHEMAT",
      jenisVoucher: "Gratis Ongkos Kirim",
      penanggungJawab: "AnterAja",
      tanggalAktif: "11 Januari 2020",
      tanggalSelesai: "20 Januari 2020",
    }
  ]

  let data = [
    {
      id: 1,
      namaVoucher: "INFLNCR01",
      jenisVoucher: "Potongan Harga",
      penanggungJawab: "TokoRumahan",
      tanggalAktif: "11 Januari 2020",
      tanggalSelesai: "20 Januari 2020",
    },
    {
      id: 2,
      namaVoucher: "ONGKIRHEMAT",
      jenisVoucher: "Gratis Ongkos Kirim",
      penanggungJawab: "AnterAja",
      tanggalAktif: "11 Januari 2020",
      tanggalSelesai: "20 Januari 2020",
    },
    {
      id: 3,
      namaVoucher: "ONGKIRHEMAT",
      jenisVoucher: "Gratis Ongkos Kirim",
      penanggungJawab: "AnterAja",
      tanggalAktif: "11 Januari 2020",
      tanggalSelesai: "20 Januari 2020",
    },
    {
      id: 4,
      namaVoucher: "ONGKIRHEMAT",
      jenisVoucher: "Gratis Ongkos Kirim",
      penanggungJawab: "AnterAja",
      tanggalAktif: "11 Januari 2020",
      tanggalSelesai: "20 Januari 2020",
    },
    {
      id: 5,
      namaVoucher: "INFLNCR01",
      jenisVoucher: "Potongan Harga",
      penanggungJawab: "TokoRumahan",
      tanggalAktif: "11 Januari 2020",
      tanggalSelesai: "20 Januari 2020",
    },
    {
      id: 6,
      namaVoucher: "INFLNCR01",
      jenisVoucher: "Potongan Harga",
      penanggungJawab: "TokoRumahan",
      tanggalAktif: "11 Januari 2020",
      tanggalSelesai: "20 Januari 2020",
    },
    {
      id: 7,
      namaVoucher: "ONGKIRHEMAT",
      jenisVoucher: "Gratis Ongkos Kirim",
      penanggungJawab: "AnterAja",
      tanggalAktif: "11 Januari 2020",
      tanggalSelesai: "20 Januari 2020",
    },
    {
      id: 8,
      namaVoucher: "ONGKIRHEMAT",
      jenisVoucher: "Gratis Ongkos Kirim",
      penanggungJawab: "AnterAja",
      tanggalAktif: "1 Januari 2020",
      tanggalSelesai: "20 Januari 2020",
    },
  ];

  return (
    <>
      <div
        className="MKmodal-hapus"
        hidden={hideYakinHapus}
        onHide={handleCloseHapus}
      >
        <svg
          style={{ marginTop: "30px" }}
          width="56"
          height="54"
          viewBox="0 0 56 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.36521 52.2622H50.6357C51.3709 52.2621 52.0936 52.0712 52.733 51.7082C53.3724 51.3452 53.9068 50.8225 54.2837 50.1913C54.6607 49.56 54.8675 48.8417 54.8839 48.1067C54.9002 47.3716 54.7256 46.6448 54.377 45.9974L31.7431 3.96228C30.1374 0.981973 25.8635 0.981973 24.2578 3.96228L1.62388 45.9974C1.27532 46.6448 1.10067 47.3716 1.11702 48.1067C1.13336 48.8417 1.34013 49.56 1.71712 50.1913C2.09412 50.8225 2.62843 51.3452 3.26786 51.7082C3.90728 52.0712 4.62994 52.2621 5.36521 52.2622V52.2622Z"
            stroke="#FFC600"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M27.2376 18.9494L27.9999 35.1526L28.7609 18.9561C28.7656 18.8525 28.7492 18.7491 28.7125 18.6522C28.6759 18.5552 28.6199 18.4667 28.5479 18.3922C28.476 18.3176 28.3895 18.2584 28.294 18.2184C28.1984 18.1783 28.0956 18.1582 27.9919 18.1592V18.1592C27.8901 18.1602 27.7895 18.1816 27.6961 18.2221C27.6027 18.2626 27.5183 18.3215 27.448 18.3951C27.3777 18.4688 27.3228 18.5558 27.2867 18.651C27.2505 18.7462 27.2338 18.8477 27.2376 18.9494V18.9494Z"
            stroke="#FFC600"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M28 45.7571C27.4746 45.7571 26.9611 45.6013 26.5243 45.3094C26.0874 45.0175 25.747 44.6027 25.5459 44.1173C25.3449 43.632 25.2923 43.0979 25.3948 42.5826C25.4973 42.0674 25.7503 41.5941 26.1217 41.2226C26.4932 40.8511 26.9665 40.5981 27.4818 40.4956C27.9971 40.3931 28.5311 40.4457 29.0165 40.6468C29.5019 40.8478 29.9167 41.1883 30.2086 41.6251C30.5005 42.0619 30.6562 42.5755 30.6562 43.1008C30.6562 43.8053 30.3764 44.4809 29.8783 44.9791C29.3801 45.4772 28.7045 45.7571 28 45.7571Z"
            fill="#FFC600"
          />
        </svg>

        <h1 style={{ fontSize: "16px", marginTop: "50px" }}>
          Apakah anda akan menghapus data yang dipilih?
        </h1>

        <div
          style={{
            marginTop: "50px",
            paddingBotton: "20px",
          }}
        >
          <Button className="btnHapusV" onClick={yakinHapus}>
            Hapus
          </Button>
          <Button className="btnBatalV" onClick={batalHapus}>
            Batal
          </Button>
        </div>
      </div>

      {/* modal batal hapus */}
      <div
        className="MKmodal-terhapus"
        style={{ width: "20%" }}
        hidden={hideBatalterhapus}
      >
        <svg
          style={{ marginTop: "30px" }}
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.0002 0.374756C12.768 0.374756 0.375244 12.7675 0.375244 27.9998C0.375244 43.232 12.768 55.6247 28.0002 55.6247C43.2325 55.6247 55.6252 43.232 55.6252 27.9998C55.6252 12.7675 43.2325 0.374756 28.0002 0.374756ZM38.0023 34.9976C38.208 35.193 38.3724 35.4276 38.486 35.6875C38.5995 35.9474 38.6599 36.2274 38.6635 36.511C38.6672 36.7946 38.614 37.0761 38.5071 37.3388C38.4003 37.6016 38.2419 37.8403 38.0413 38.0408C37.8407 38.2414 37.6021 38.3998 37.3393 38.5066C37.0766 38.6135 36.7951 38.6667 36.5115 38.663C36.2279 38.6594 35.9479 38.599 35.688 38.4855C35.428 38.3719 35.1935 38.2075 34.9981 38.0019L28.0002 31.0053L21.0023 38.0019C20.6006 38.3836 20.0656 38.5932 19.5115 38.5861C18.9574 38.579 18.428 38.3557 18.0361 37.9639C17.6443 37.572 17.421 37.0426 17.4139 36.4885C17.4068 35.9344 17.6164 35.3994 17.9981 34.9976L24.9947 27.9998L17.9981 21.0019C17.6164 20.6001 17.4068 20.0651 17.4139 19.511C17.421 18.9569 17.6443 18.4275 18.0361 18.0356C18.428 17.6438 18.9574 17.4205 19.5115 17.4134C20.0656 17.4063 20.6006 17.616 21.0023 17.9976L28.0002 24.9942L34.9981 17.9976C35.3999 17.616 35.9349 17.4063 36.489 17.4134C37.0431 17.4205 37.5725 17.6438 37.9644 18.0356C38.3562 18.4275 38.5795 18.9569 38.5866 19.511C38.5937 20.0651 38.384 20.6001 38.0023 21.0019L31.0058 27.9998L38.0023 34.9976Z"
            fill="#FF1818"
          />
        </svg>

        <h1
          style={{ fontSize: "16px", marginTop: "50px", paddingBottom: "20px" }}
        >
          Tidak berhasil menghapus data
        </h1>
      </div>
      {/* modal batal hapus */}

      {/* //modal terhapus */}
      <div
        className="MKmodal-terhapus"
        style={{ width: "20%" }}
        hidden={hideTerhapus}
      >
        <svg
          style={{ marginTop: "30px" }}
          width="65"
          height="64"
          viewBox="0 0 65 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="32.5" cy="32" r="32" fill="#D6EED8" />
          <path
            d="M49.0627 18.2485L25.8752 44.7485L15.9377 34.811"
            stroke="#31AC3D"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <h1
          style={{ fontSize: "16px", marginTop: "50px", paddingBottom: "20px" }}
        >
          Data berhasil terhapus
        </h1>
      </div>
      {/* //modal terhapus */}

      <Modal className="modalShowVo " show={modalV} onHide={handleClose}>
        <h5 className="text-tambahVoucher">Tambah Voucher</h5>

        <Row className="mb-3 mt-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="form-label">Nama Voucher</Form.Label>
            <Form.Control
              style={{ backgroundColor: "#F7F7F7" }}
              type="email"
              placeholder="Masukan nama voucher barunya..."
            />
            <p className="silahkan" style={{
              fontSize:'11px'
            }} hidden={hideSilahkan}>Silahkan isi nama voucher</p>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label className="form-label">Kode Voucher</Form.Label>
            <Form.Control
              style={{ backgroundColor: "#F7F7F7" }}
              type="text"
              placeholder="Masukan kode voucher baru..."
            />
            <p className="silahkan" style={{
              fontSize:'11px'
            }} hidden={hideSilahkan}>Silahkan isi kode voucher</p>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group>
            <Form.Label className="form-label">Kode Voucher</Form.Label>
            <Form.Select
              aria-label="Default select example"
              style={{
                width: "100%",
                marginTop: "0px",
                backgroundColor: "#F7F7F7",
              }}
            >
              <option>Pilih Jenis Voucher</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <p className="silahkan" style={{
              fontSize:'11px'
            }} hidden={hideSilahkan}>Silahkan isi jenis voucher</p>
          </Form.Group>
        </Row>

        <Row>
          <Form.Group className="mt-3 mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Deskripsi Voucher</Form.Label>
            <Form.Control
              style={{ backgroundColor: "#F7F7F7" }}
              as="textarea"
              rows={3}
            />
            <p className="silahkan" style={{
              fontSize:'11px'
            }} hidden={hideSilahkan}>Silahkan isi deskripsi voucher</p>
          </Form.Group>
        </Row>

        <h6 className="text-durasiV">Durasi Voucher</h6>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="form-label">Dari Tanggal</Form.Label>
            <Form.Control
              style={{ backgroundColor: "#F7F7F7" }}
              type="date"
              placeholder="Pilih tanggal"
            />
            <p className="silahkan" style={{
              fontSize:'11px'
            }} hidden={hideSilahkan}>Silahkan isi tanggal</p>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label className="form-label">Hingga Tanggal</Form.Label>
            <Form.Control
              style={{ backgroundColor: "#F7F7F7" }}
              type="date"
              placeholder="Pilih tanggal"
            />
            <p className="silahkan" style={{
              fontSize:'11px'
            }} hidden={hideSilahkan}>Silahkan isi tanggal</p>
          </Form.Group>
        </Row>

        <h6 className="text-durasiV">Detail Voucher</h6>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="form-label">
              Minimum Pembelian (Rp)
            </Form.Label>
            <Form.Control
              style={{ backgroundColor: "#F7F7F7" }}
              type="email"
              placeholder="Berapa minimum pembeliannya?"
            />
            <p className="silahkan" style={{
              fontSize:'11px'
            }} hidden={hideSilahkan}>Silahkan isi nominal pembelian</p>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label className="form-label">
              Nominal Diskon (Rp / %)
            </Form.Label>
            <Form.Control
              style={{ backgroundColor: "#F7F7F7" }}
              type="text"
              placeholder="Berapa besaran promonya?"
            />
            <p className="silahkan" style={{
              fontSize:'11px'
            }} hidden={hideSilahkan}>Silahkan isi besaran promo</p>
          </Form.Group>
        </Row>

        <Row>
          <Form.Group>
            <Form.Label className="form-label">
              Pilih Produk/Merchant
            </Form.Label>
            <Form.Select
              aria-label="Default select example"
              style={{
                width: "100%",
                marginTop: "0px",
                backgroundColor: "#F7F7F7",
              }}
            >
              <option>Pilih Jenis Voucher</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <p className="silahkan" style={{
              fontSize:'11px'
            }} hidden={hideSilahkan}>Silahkan isi nama produk / merchant</p>
          </Form.Group>
        </Row>

        <Button
          onClick={tambahPromo}
          style={{
            backgroundColor: "#253863",
            width: "150px",
            height: "40px",
            marginTop: "20px",
            marginLeft: "79%",
          }}
        >
          Tambah Promo
        </Button>
      </Modal>

      <div
        className="isiMarketing"
        style={{
          padding: "2px",
          width: "78%",
          height: "20%",
          marginLeft: "18%",
          marginTop: "1%",
        }}
      >
        <div
          className="d-flex"
          style={{ height: "30px", marginBottom: "30px" }}
        >
          <h1 className="MKtitle">Voucher</h1>
          <Form className="VkananJudul d-flex">
            <FormControl
              placeholder="Cari Voucher"
              className="search-box me-2"
              aria-label="Search"
              style={{
                backgroundColor: "#F5F8FA",
                marginTop: "8px",
                height: "40px",
              }}
            />
            <span>
              <svg
                style={{ marginTop: "15px", marginLeft: "-40px" }}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.875 16.75C13.2242 16.75 16.75 13.2242 16.75 8.875C16.75 4.52576 13.2242 1 8.875 1C4.52576 1 1 4.52576 1 8.875C1 13.2242 4.52576 16.75 8.875 16.75Z"
                  stroke="#253863"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.4431 14.4438L18.9994 19.0001"
                  stroke="#253863"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>

            <Button
              onClick={tambahVoucher}
              style={{
                backgroundColor: "#253863",
                width: "300px",
                height: "40px",
                marginTop: "8px",
                marginRight: "10px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-plus-lg"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                />
              </svg>
              Tambah Voucher
            </Button>
          </Form>
        </div>

        <div className="section d-flex ">
          <Button
            onClick={hapusVoucher}
            hidden={hideHapus}
            style={{
              backgroundColor: "white",
              width: "150px",
              height: "40px",
              marginBottom: "-50px",
              marginLeft: "960px",
              color: "red",
              borderColor: "red",
            }}
          >
            Hapus Voucher
          </Button>
        </div>


        {/* /// */}
        <div className="appTable container ">
        
        <Tabs className="tabz d-flex mb-3" defaultActiveKey="aktiv" id="uncontrolled-tab-example">
          <Tab className="item-tab" eventKey="aktiv" title={`Aktif ${`(`+data.length}`+`)`}>
          <table class="table table-hover ">
            <thead>
              <tr style={{ backgroundColor: "#FBFBFB" }}>
                <th className="MjudulTable" scope="col" style={{
    
                }}>
                  <Form.Check
                    className="cekbox"
                    handleClick={checkAll}
                    isChecked={isCheckAll}
                    aria-label="option 1"
                    onClick={checkAll}
                    style={{ align: "center", }}
                  />
                </th>
                <th
                  className="MjudulTable"
                  style={{ textAlign: "left" }}
                  scope="col"
                >
                  Nama Voucher
                </th>
                <th
                  className="MjudulTable"
                  style={{ textAlign: "left" }}
                  scope="col"
                >
                  Jenis Voucher
                </th>
                <th
                  className="MjudulTable"
                  style={{ textAlign: "left" }}
                  scope="col"
                >
                  Penanggung Jawab
                </th>
                <th
                  className="MjudulTable"
                  style={{ textAlign: "left" }}
                  scope="col"
                >
                  Tanggal Aktif
                </th>
                <th
                  className="MjudulTable"
                  style={{ textAlign: "left" }}
                  scope="col"
                >
                  Tanggal Selesai
                </th>
                <th className="MjudulTable" scope="col"></th>
              </tr>
            </thead>
            <tbody style={{ borderColor: "grey", borderStyle: "none" }}>
              {data.map(function ({
                id,
                namaVoucher,
                jenisVoucher,
                penanggungJawab,
                tanggalAktif,
                tanggalSelesai,
              }) {
                return (
                  <tr id={id}>
                    <td className="MisiTable">
                      {
                        <Form.Check
                          aria-label="option 1"
                          className="cekbox"
                          type="checkbox"
                          onClick={handleClick}
                          id={id}
                          name="foo"
                          style={{
                            align: "center",
                            paddingTop: "10px",
                            color: "#253863",
                          }}
                        />
                      }
                    </td>
                    <td
                      className="MisiTable"
                      style={{ paddingTop: "15px", textAlign: "left" }}
                    >
                      {namaVoucher}
                    </td>
                    <td
                      className="MisiTable"
                      style={{ paddingTop: "15px", textAlign: "left" }}
                    >
                      {jenisVoucher}
                    </td>
                    <td
                      className="MisiTable"
                      style={{ paddingTop: "15px", textAlign: "left" }}
                    >
                      {penanggungJawab}
                    </td>
                    <td
                      className="MisiTable"
                      style={{ paddingTop: "15px", textAlign: "left" }}
                    >
                      {tanggalAktif}
                    </td>
                    <td
                      className="MisiTable"
                      style={{ paddingTop: "15px", textAlign: "left" }}
                    >
                      {tanggalSelesai}
                    </td>

                    <td className="MisiTable" style={{ paddingTop: "15px" }}>
                      <a href="#" className="Mselengkapnya">
                        Selengkapnya
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          </Tab>
          <Tab className="item-tab" eventKey="nonaktif" title={`Nonaktif ${`(`+dataNonaktif.length}`+`)`} >
            {/* section 2 */}

            <table class="table table-hover ">
            <thead>
              <tr style={{ backgroundColor: "#FBFBFB" }}>
                <th className="MjudulTable" scope="col">
                  <Form.Check
                  className="cekbox"
                    handleClick={checkAll}
                    isChecked={isCheckAll}
                    aria-label="option 1"
                    onClick={checkAll}
                    style={{ align: "center" }}
                  />
                </th>
                <th
                  className="MjudulTable"
                  style={{ textAlign: "left" }}
                  scope="col"
                >
                  Nama Voucher
                </th>
                <th
                  className="MjudulTable"
                  style={{ textAlign: "left" }}
                  scope="col"
                >
                  Jenis Voucher
                </th>
                <th
                  className="MjudulTable"
                  style={{ textAlign: "left" }}
                  scope="col"
                >
                  Penanggung Jawab
                </th>
                <th
                  className="MjudulTable"
                  style={{ textAlign: "left" }}
                  scope="col"
                >
                  Tanggal Aktif
                </th>
                <th
                  className="MjudulTable"
                  style={{ textAlign: "left" }}
                  scope="col"
                >
                  Tanggal Selesai
                </th>
                <th className="MjudulTable" scope="col"></th>
              </tr>
            </thead>
            <tbody style={{ borderColor: "grey", borderStyle: "none" }}>
              {dataNonaktif.map(function ({
                id,
                namaVoucher,
                jenisVoucher,
                penanggungJawab,
                tanggalAktif,
                tanggalSelesai,
              }) {
                return (
                  <tr id={id}>
                    <td className="MisiTable">
                      {
                        <Form.Check
                          aria-label="option 1"
                          className="cekbox"
                          type="checkbox"
                          onClick={handleClick}
                          id={id}
                          name="foo"
                          style={{
                            align: "center",
                            paddingTop: "10px",
                            color: "#253863",
                          }}
                        />
                      }
                    </td>
                    <td
                      className="MisiTable"
                      style={{ paddingTop: "15px", textAlign: "left" }}
                    >
                      {namaVoucher}
                    </td>
                    <td
                      className="MisiTable"
                      style={{ paddingTop: "15px", textAlign: "left" }}
                    >
                      {jenisVoucher}
                    </td>
                    <td
                      className="MisiTable"
                      style={{ paddingTop: "15px", textAlign: "left" }}
                    >
                      {penanggungJawab}
                    </td>
                    <td
                      className="MisiTable"
                      style={{ paddingTop: "15px", textAlign: "left" }}
                    >
                      {tanggalAktif}
                    </td>
                    <td
                      className="MisiTable"
                      style={{ paddingTop: "15px", textAlign: "left" }}
                    >
                      {tanggalSelesai}
                    </td>

                    <td className="MisiTable" style={{ paddingTop: "15px" }}>
                      <a href="#" className="Mselengkapnya">
                        Selengkapnya
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          </Tab>
        </Tabs>
          </div>
      </div>
    </>
  );
}

export default Voucher;
