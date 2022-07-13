import React from "react";
import { Form, Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/dasboard.css";
import { useState } from "react";
import blueLine from "../image/blueLine.png";
import linePolos from "../image/linePolos.png";
import ceklis from "../image/ceklis.png";
import iconX from "../image/Icon.png";
import iconBerhasil from "../image/Ellipse 8.png";
import bg from "../image/bg2.png";

function VerifikasiSeller() {
  //modal
  const [modalShow, setModalShow] = React.useState(false);
  const [namaForm, setNamaForm] = useState("");
  const [hidenModal, setHidenModal] = useState(true);
  const [hidenModalTolak, setModalTolak] = useState(true);
  const [hidenModalBerhasil, setModalBerhasil] = useState(true)

  //form 0
  const [toggleState, setToggleState] = useState(1);
  const [formStep, setFormStep] = React.useState(0);
  const [namaDepan, setNamaDepan] = useState("");
  const [namaBelakang, setNamaBelakang] = useState("");
  const [tempatLahir, setTempatLahir] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");

  const [prov, setProvinsi] = useState("");
  const [kotaKab, setKota] = useState("");
  const [kec, setKecamatan] = useState("");
  const [kodePos, setKodePos] = useState("");
  const [alamatLengkap, setAlamat] = useState("");
  const [noKtp, setNoKtp] = useState("");
  const [kel, setKel] = useState("");

  //form 1
  const [uploadFotoUsaha, setFotoUsaha] = useState("");
  const [KepemilikanUsaha, setKepemilikanUsaha] = useState("");
  const [website, setWebsite] = useState("");
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [tiktok, setTiktok] = useState("");
  const [kategori, setKategoriUsaha] = useState("");

  //form 2
  const [Npwp, setNpwp] = useState("");
  const [sertifikatHalal, setSertifikatHalal] = useState("");
  const [sertifikatNIB, setSertifikatNIB] = useState("");
  const [halal, setHalal] = useState(true);
  const [nib, setNIB] = useState(true);

  //form 3
  const [namaBrand, setnamaBrand] = useState("");
  const [haki, setHaki] = useState("");

  //form bank
  const [namaBank, setNamaBank] = useState("");
  const [pemilikRek, setPemilikRek] = useState("");
  const [noRek, setNoRek] = useState("");
  //modal

  //form 0
  const completeFormStep0 = () => {
    setFormStep(1);
    setModalShow(true);
  };

  //form 1
  const completeFormStep1 = () => {
    setFormStep(2);
  };

  //form 2
  const completeFormStep2 = () => {
    setFormStep(3);
  };

  //form 3
  const completeFormStep3 = () => {
    setFormStep(5);
  };

  //form 4
  const completeFormStep4 = () => {
    setFormStep(5);
  };
  //form last/5
  const completeFormStepLast = () => {
    setHidenModal(false);
    setTimeout(() => {
      setHidenModal(true);
    }, 5000);
  };

  const completeFormStepVerif = () => {
    setModalBerhasil(false);
    setTimeout(() => {
      setModalBerhasil(true);
    }, 5000);
  };

  const completeFormStepTolak2 = () => {
    setModalTolak(false);
    setTimeout(() => {
      setModalTolak(true);
    }, 5000);
  };

  const completeFormStepTolak = () => {
    setFormStep(6);
  };

  const setelahStep2 = () => {
    setFormStep(4);
  };

  function changeNamaDepan(e) {
    const value = e.target.value;
    setNamaDepan(value);
  }
  function changeNamaBank(e) {
    const value = e.target.value;
    setNamaBank(value);
  }

  function changeNoRek(e) {
    const value = e.target.value;
    setNoRek(value);
  }

  function changePemilikRek(e) {
    const value = e.target.value;
    setPemilikRek(value);
  }

  function changeNamaDepan(e) {
    const value = e.target.value;
    setNamaDepan(value);
  }

  function changeNamaBelakang(e) {
    const value = e.target.value;
    setNamaBelakang(value);
  }

  function changeTempatLahir(e) {
    const value = e.target.value;
    setTempatLahir(value);
  }

  function changeAlamatLengkap(e) {
    const value = e.target.value;
    setAlamat(value);
  }

  function changeTanggalLahir(e) {
    const value = e.target.value;
    setTanggalLahir(value);
  }
  function changeJenisKelamin(e) {
    const value = e.target.value;
    setJenisKelamin(value);
  }

  function changeProv(e) {
    const value = e.target.value;
    setProvinsi(value);
  }

  function changeKotaKab(e) {
    const value = e.target.value;
    setKota(value);
  }

  function changeKec(e) {
    const value = e.target.value;
    setKecamatan(value);
  }

  function changeKel(e) {
    const value = e.target.value;
    setKel(value);
  }

  function changeKota(e) {
    const value = e.target.value;
    setKota(value);
  }
  function changeKecamatan(e) {
    const value = e.target.value;
    setKecamatan(value);
  }

  function changeKodePos(e) {
    const value = e.target.value;
    setKodePos(value);
  }
  function changeAlamat(e) {
    const value = e.target.value;
    setAlamat(value);
  }
  function changeNoKtp(e) {
    const value = e.target.value;
    setNoKtp(value);
  }
  function changeFotoUsaha(e) {
    const value = e.target.value;
    setFotoUsaha(value);
  }

  function changeNpwp(e) {
    const value = e.target.value;
    setNpwp(value);
  }

  function changeWebsite(e) {
    const value = e.target.value;
    setWebsite(value);
  }

  function changeFacebook(e) {
    const value = e.target.value;
    setFacebook(value);
  }

  function changeInstagram(e) {
    const value = e.target.value;
    setInstagram(value);
  }

  function changeTiktok(e) {
    const value = e.target.value;
    setTiktok(value);
  }

  function changeTwitter(e) {
    const value = e.target.value;
    setTwitter(value);
  }

  function changeKategoriUsaha(e) {
    const value = e.target.value;
    setKategoriUsaha(value);
  }
  function changeKepemilikanUsaha(e) {
    const value = e.target.value;
    setKepemilikanUsaha(value);
  }
  function changenamaBrand(e) {
    const value = e.target.value;
    setnamaBrand(value);
  }
  function changeNpwp(e) {
    const value = e.target.value;
    setNpwp(value);
  }
  function changeHaki(e) {
    const value = e.target.value;
    setHaki(value);
  }
  function changeSertifikatHalal(e) {
    const value = e.target.value;
    setSertifikatHalal(value);
  }
  function changeSertifikatNIB(e) {
    const value = e.target.value;
    setSertifikatNIB(value);
  }

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="body">
      <div className="VKpopup-berhasil" hidden={hidenModalTolak}>
        <Modal.Dialog>
          <Modal.Body>
            <img src={iconBerhasil} alt="berhasil" className="icon-berhasil" />
            <p className="text-tolak">Penolakan Seller Berhasil</p>
          </Modal.Body>
        </Modal.Dialog>
      </div>

      <div className="VKpopup-berhasilVerif" hidden={hidenModalBerhasil}>
        <Modal.Dialog>
          <Modal.Body>
            <img src={iconBerhasil} alt="berhasil" className="icon-berhasil" />
            <p className="text-tolak">Seller Berhasil Diverifikasi</p>
          </Modal.Body>
        </Modal.Dialog>
      </div>

      <Modal className="VKmodal" show={show} onHide={handleClose}>
        <form className="formModal">
          {formStep === 0 && (
            <section className="sec">
              <h1 className="judulVerif">Verifikasi Seller</h1>

              <div className="tabsss d-flex">
                <div className="steps1 d-flex">
                  <div className="step-1">
                    <div className="container">
                      <h5
                        className="kotak-nomor rounded  text-center pt-2 text-light shadow"
                        style={{
                          width: "40px",
                          height: "40px",
                          backgroundColor: "#5979C0",
                        }}
                      >
                        1
                      </h5>
                      <h5 className="txt-on text-center">Identitas Pemilik</h5>
                    </div>
                  </div>

                  <img className="icon-garis" src={linePolos} alt="garis" />

                  <div className="steps2">
                    <div className="container">
                      <h5
                        className=" kotak-nomor rounded  pt-2 text-center shadow"
                        style={{
                          width: "40px",
                          height: "40px",
                          backgroundColor: "#EEEEEE",
                          color: "#8F90A6",
                        }}
                      >
                        2
                      </h5>
                      <h5 className="txt-judul  text-center text-secondary">
                        Identitas Usaha
                      </h5>
                    </div>
                  </div>
                </div>

                <img className="icon-garis" src={linePolos} alt="garis" />

                <div className="steps3">
                  <div className="container">
                    <h5
                      className=" kotak-nomor rounded  pt-2 text-center shadow"
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#EEEEEE",
                        color: "#8F90A6",
                      }}
                    >
                      3
                    </h5>
                    <h5 className="txt-judul text-center  text-secondary">
                      Legalitas & Izin Usaha
                    </h5>
                  </div>
                </div>

                <img className="icon-garis" src={linePolos} alt="garis" />

                <div className="steps4">
                  <div className="container">
                    <h5
                      className=" kotak-nomor rounded pt-2 text-center shadow"
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#EEEEEE",
                        color: "#8F90A6",
                      }}
                    >
                      4
                    </h5>
                    <h5 className="txt-judul text-center text-secondary">
                      Nama & Rekening Bank
                    </h5>
                  </div>
                </div>

                <img className="icon-garis" src={linePolos} alt="garis" />

                <div className="steps5">
                  <div className="container">
                    <h5
                      className=" kotak-nomor rounded  pt-2 text-center shadow"
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#EEEEEE",
                        color: "#8F90A6",
                      }}
                    >
                      5
                    </h5>
                    <h5 className="txt-judul text-center ms-3 text-secondary">
                      Brand
                    </h5>
                  </div>
                </div>
              </div>

              <h3 className="title">Identitas Pemilik Usaha</h3>

              <div class="form-row d-flex justify-content-center">
                <div class="form-group col-md-5 ">
                  <label for="contoh1">Nama Depan</label>
                  <sup className="required" style={{ color: "red" }}>
                    *
                  </sup>
                  <input
                    style={{ backgroundColor: "#F0F4FA" }}
                    className="bg-form"
                    type="text"
                    value={namaDepan}
                    class="form-control"
                    id="validationDefault01"
                    placeholder="Nama Lengkap Anda"
                    onChange={changeNamaDepan}
                    required
                  />
                </div>
                <div class="form-group col-md-5 ">
                  <label for="contoh2">Nama Belakang</label>
                  <sup className="required" style={{ color: "red" }}>
                    *
                  </sup>
                  <input
                    style={{ backgroundColor: "#F0F4FA" }}
                    type="text"
                    class="form-control"
                    id="contoh2"
                    placeholder="Nama Belakang Anda"
                    value={namaBelakang}
                    onChange={changeNamaBelakang}
                    required
                  />
                </div>
              </div>

              <div className="form-row d-flex">
                <div className="form-group  ">
                  <label
                    className="label-jeniskelamin form-check-label"
                    for="flexRadioDefault1"
                  >
                    Jenis Kelamin
                  </label>
                  <sup className="required" style={{ color: "red" }}>
                    *
                  </sup>
                  <Form.Select
                    style={{ backgroundColor: "#F0F4FA", color: "#909090" }}
                    className="jenisKelamin col-md-5"
                    aria-label="Default select example"
                  >
                    <option value="1">Laki-Laki</option>
                    <option value="2">Perempuan</option>
                  </Form.Select>
                </div>

                <div class="form-row d-flex" style={{ marginTop: "-1px" }}>
                  <div className="ktp form-group col-md-5">
                    <label for="contoh1">No. KTP </label>
                    <sup className="required" style={{ color: "red" }}>
                      *
                    </sup>
                    <input
                      style={{ backgroundColor: "#F0F4FA" }}
                      type="file"
                      className="ktp-form form-control"
                      id="contoh5"
                      placeholder="Masukan No.KTP"
                      value={noKtp}
                      onChange={changeNoKtp}
                      required
                    />
                  </div>
                </div>
              </div>

              <div class="form-row d-flex justify-content-center">
                <div class="form-group col-md-5 ">
                  <label for="contoh1">Tanggal Lahir</label>
                  <sup className="required" style={{ color: "red" }}>
                    *
                  </sup>
                  <input
                    style={{ backgroundColor: "#F0F4FA", color: "#909090" }}
                    className="bg-form"
                    type="date"
                    value={namaDepan}
                    class="form-control"
                    id="validationDefault01"
                    onfocus="(this.type='date')"
                    onChange={changeNamaDepan}
                    required
                  />
                </div>
                <div class="form-group col-md-5 ">
                  <label for="contoh2">Foto KTP</label>
                  <sup className="required" style={{ color: "red" }}>
                    *
                  </sup>
                  <input
                    style={{ backgroundColor: "#F0F4FA" }}
                    type="text"
                    class="form-control"
                    id="contoh2"
                    placeholder="Masukan Foto KTP"
                    value={namaBelakang}
                    onChange={changeNamaBelakang}
                    required
                  />
                </div>
              </div>

              <div class="form-row d-flex justify-content-center">
                <div class="form-group col-md-5 ">
                  <label for="contoh1">Alamat Lengkap</label>
                  <sup className="required" style={{ color: "red" }}>
                    *
                  </sup>
                  <input
                    style={{ backgroundColor: "#F0F4FA" }}
                    className="bg-form"
                    type="text"
                    value={namaDepan}
                    class="form-control"
                    id="validationDefault01"
                    placeholder="Masukan Alamat Lengkap"
                    onChange={changeNamaDepan}
                    required
                  />
                </div>
                <div class="form-group col-md-5 ">
                  <label for="contoh2">Kota / Kabupaten</label>
                  <sup className="required" style={{ color: "red" }}>
                    *
                  </sup>
                  <input
                    style={{ backgroundColor: "#F0F4FA" }}
                    type="text"
                    class="form-control"
                    id="contoh2"
                    placeholder="Kota / Kabupaten"
                    value={namaBelakang}
                    onChange={changeNamaBelakang}
                    required
                  />
                </div>
              </div>

              <div class="form-row d-flex justify-content-center">
                <div class="form-group col-md-5 ">
                  <label for="contoh1">Kecamatan</label>
                  <sup className="required" style={{ color: "red" }}>
                    *
                  </sup>
                  <input
                    style={{ backgroundColor: "#F0F4FA" }}
                    className="bg-form"
                    type="text"
                    value={namaDepan}
                    class="form-control"
                    id="validationDefault01"
                    placeholder="Kecamatan"
                    onChange={changeNamaDepan}
                    required
                  />
                </div>
                <div class="form-group col-md-5 ">
                  <label for="contoh2">Kelurahan</label>
                  <sup className="required" style={{ color: "red" }}>
                    *
                  </sup>
                  <input
                    style={{ backgroundColor: "#F0F4FA" }}
                    type="text"
                    class="form-control"
                    id="contoh2"
                    placeholder="Kelurahan"
                    value={namaBelakang}
                    onChange={changeNamaBelakang}
                    required
                  />
                </div>
              </div>

              <div class="form-row d-flex justify-content-center">
                <div class="form-group col-md-5 ">
                  <label for="contoh1">Provinsi</label>
                  <sup className="required" style={{ color: "red" }}>
                    *
                  </sup>
                  <input
                    style={{ backgroundColor: "#F0F4FA" }}
                    className="bg-form"
                    type="text"
                    value={namaDepan}
                    class="form-control"
                    id="validationDefault01"
                    placeholder="Provinsi"
                    onChange={changeNamaDepan}
                    required
                  />
                </div>
                <div class="form-group col-md-5 ">
                  <label for="contoh2">Kode Pos</label>
                  <sup className="required" style={{ color: "red" }}>
                    *
                  </sup>
                  <input
                    style={{ backgroundColor: "#F0F4FA" }}
                    type="text"
                    class="form-control"
                    id="contoh2"
                    placeholder="Kode Pos"
                    value={namaBelakang}
                    onChange={changeNamaBelakang}
                    required
                  />
                </div>
              </div>

              <div class="col-12 mt-4 d-flex justify-content-end pe-5">
                <button
                  onClick={completeFormStep0}
                  class="btn text-light"
                  style={{
                    width: "150px",
                    height: "44px",
                    backgroundColor: "#253863",
                  }}
                  type="submit"
                >
                  Selanjutnya
                </button>
              </div>
            </section>
          )}

          {formStep === 1 && (
            <section>
              <h1 className="judulVerif">Verifikasi Seller</h1>

              <div className="tabsss d-flex">
                <div className="steps1 d-flex">
                  <div className="step-1">
                    <div className="container">
                      <h5
                        className=" kotak-nomor rounded  pt-2 text-center shadow"
                        style={{
                          width: "40px",
                          height: "40px",
                          backgroundColor: "#EEEEEE",
                          color: "#8F90A6",
                        }}
                      >
                        1
                      </h5>
                      <h5 className="txt-on text-center">Identitas Pemilik</h5>
                    </div>
                  </div>

                  <img className="icon-garis" src={linePolos} alt="garis" />

                  <div className="steps2">
                    <div className="container">
                      <h5
                        className="kotak-nomor rounded  text-center pt-2 shadow"
                        style={{
                          width: "40px",
                          height: "40px",
                          backgroundColor: "#5979C0",
                          color: "#FAFAFC",
                        }}
                      >
                        2
                      </h5>
                      <h5 className="txt-judul  text-center text-secondary">
                        Identitas Usaha
                      </h5>
                    </div>
                  </div>
                </div>

                <img className="icon-garis" src={linePolos} alt="garis" />

                <div className="steps3">
                  <div className="container">
                    <h5
                      className=" kotak-nomor rounded  pt-2 text-center shadow"
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#EEEEEE",
                        color: "#8F90A6",
                      }}
                    >
                      3
                    </h5>
                    <h5 className="txt-judul text-center  text-secondary">
                      Legalitas & Izin Usaha
                    </h5>
                  </div>
                </div>

                <img className="icon-garis" src={linePolos} alt="garis" />

                <div className="steps4">
                  <div className="container">
                    <h5
                      className=" kotak-nomor rounded  pt-2 text-center shadow"
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#EEEEEE",
                        color: "#8F90A6",
                      }}
                    >
                      4
                    </h5>
                    <h5 className="txt-judul text-center text-secondary">
                      Nama & Rekening Bank
                    </h5>
                  </div>
                </div>

                <img className="icon-garis" src={linePolos} alt="garis" />

                <div className="steps5">
                  <div className="container">
                    <h5
                      className=" kotak-nomor rounded  pt-2 text-center shadow"
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#EEEEEE",
                        color: "#8F90A6",
                      }}
                    >
                      5
                    </h5>
                    <h5 className="txt-judul text-center ms-3 text-secondary">
                      Brand
                    </h5>
                  </div>
                </div>
              </div>

              <h3 className="title">Identitas Usaha</h3>

              <div class="form-row d-flex justify-content-center">
                <div class="form-group col-md-5 ">
                  <label for="contoh2">Foto Tempat Usaha</label>
                  <sup className="required" style={{ color: "red" }}>
                    *
                  </sup>
                  <input
                    style={{ backgroundColor: "#F0F4FA" }}
                    type="file"
                    class="form-control"
                    id="contoh2"
                    placeholder="Nama Belakang Anda"
                    value={namaBelakang}
                    onChange={changeNamaBelakang}
                    required
                  />
                </div>
                <div class="form-group col-md-5 ">
                  <label for="contoh2">Kota / Kabupaten</label>
                  <sup className="required" style={{ color: "red" }}>
                    *
                  </sup>
                  <input
                    style={{ backgroundColor: "#F0F4FA" }}
                    type="text"
                    class="form-control"
                    id="contoh2"
                    placeholder="Kota / Kabupaten"
                    value={namaBelakang}
                    onChange={changeNamaBelakang}
                    required
                  />
                </div>
              </div>

              <div class="form-row d-flex justify-content-center">
                <div class="form-group col-md-5 ">
                  <label for="contoh2">Kategori Usaha</label>
                  <sup className="required" style={{ color: "red" }}>
                    *
                  </sup>
                  <input
                    style={{ backgroundColor: "#F0F4FA" }}
                    type="text"
                    class="form-control"
                    id="contoh2"
                    placeholder="Nama Belakang Anda"
                    value={namaBelakang}
                    onChange={changeNamaBelakang}
                    required
                  />
                </div>
                <div class="form-group col-md-5 ">
                  {/* <label for="contoh2">Kota / Kabupaten</label>
                        <sup className="required" style={{ color: "red" }}>*</sup>
                        <input style={{ backgroundColor: "#F0F4FA"}} type="text" class="form-control" id="contoh2" placeholder="Kota / Kabupaten" value={namaBelakang} onChange={changeNamaBelakang} required /> */}
                </div>
              </div>

              <h3 className="title" style={{ marginTop: "20px" }}>
                Sosial Media
              </h3>

              <div class="form-row d-flex justify-content-center">
                <div class="form-group col-md-5 ">
                  <label for="contoh2">Website</label>
                  <sup className="required" style={{ color: "red" }}>
                    *
                  </sup>
                  <input
                    style={{ backgroundColor: "#F0F4FA" }}
                    type="text"
                    class="form-control"
                    id="contoh2"
                    placeholder="Masukan Website Anda"
                    value={namaBelakang}
                    onChange={changeNamaBelakang}
                    required
                  />
                </div>
                <div class="form-group col-md-5 ">
                  <label for="contoh2">Facebook</label>
                  <sup className="required" style={{ color: "red" }}>
                    *
                  </sup>
                  <input
                    style={{ backgroundColor: "#F0F4FA" }}
                    type="text"
                    class="form-control"
                    id="contoh2"
                    placeholder="Masukan Facebook Anda"
                    value={namaBelakang}
                    onChange={changeNamaBelakang}
                    required
                  />
                </div>
              </div>

              <div class="form-row d-flex justify-content-center">
                <div class="form-group col-md-5 ">
                  <label for="contoh2">Instagram</label>
                  <sup className="required" style={{ color: "red" }}>
                    *
                  </sup>
                  <input
                    style={{ backgroundColor: "#F0F4FA" }}
                    type="text"
                    class="form-control"
                    id="contoh2"
                    placeholder="Masukan Instagram Anda"
                    value={namaBelakang}
                    onChange={changeNamaBelakang}
                    required
                  />
                </div>
                <div class="form-group col-md-5 ">
                  <label for="contoh2">Twitter</label>
                  <sup className="required" style={{ color: "red" }}>
                    *
                  </sup>
                  <input
                    style={{ backgroundColor: "#F0F4FA" }}
                    type="text"
                    class="form-control"
                    id="contoh2"
                    placeholder="Masukan Twitter Anda"
                    value={namaBelakang}
                    onChange={changeNamaBelakang}
                    required
                  />
                </div>
              </div>

              <div class="form-row d-flex justify-content-center">
                <div class="form-group col-md-5 ">
                  <label for="contoh2">Tiktok</label>
                  <sup className="required" style={{ color: "red" }}>
                    *
                  </sup>
                  <input
                    style={{ backgroundColor: "#F0F4FA" }}
                    type="text"
                    class="form-control"
                    id="contoh2"
                    placeholder="Masukan Tiktok Anda"
                    value={namaBelakang}
                    onChange={changeNamaBelakang}
                    required
                  />
                </div>
                <div class="form-group col-md-5 ">
                  {/* <label for="contoh2">Facebook</label>
                        <sup className="required" style={{ color: "red" }}>*</sup>
                        <input style={{ backgroundColor: "#F0F4FA"}} type="text" class="form-control" id="contoh2" placeholder="Kota / Kabupaten" value={namaBelakang} onChange={changeNamaBelakang} required /> */}
                </div>
              </div>

              <div class="col-12 mt-4 d-flex justify-content-end pe-5">
                <button
                  onClick={setelahStep2}
                  class="btn text-light"
                  style={{
                    width: "150px",
                    height: "44px",
                    backgroundColor: "#253863",
                  }}
                  type="submit"
                >
                  Selanjutnya
                </button>
              </div>
            </section>
          )}

          {formStep === 3 && (
            <section>
              <h1 className="judulVerif">Verifikasi Seller</h1>

              <div className="tabsss d-flex">
                <div className="steps1 d-flex">
                  <div className="step-1">
                    <div className="container">
                      <h5
                        className=" kotak-nomor rounded  pt-2 text-center shadow"
                        style={{
                          width: "40px",
                          height: "40px",
                          backgroundColor: "#EEEEEE",
                          color: "#8F90A6",
                        }}
                      >
                        1
                      </h5>
                      <h5 className="txt-on text-center">Identitas Pemilik</h5>
                    </div>
                  </div>

                  <img className="icon-garis" src={linePolos} alt="garis" />

                  <div className="steps2">
                    <div className="container">
                      <h5
                        className=" kotak-nomor rounded  pt-2 text-center shadow"
                        style={{
                          width: "40px",
                          height: "40px",
                          backgroundColor: "#EEEEEE",
                          color: "#8F90A6",
                        }}
                      >
                        2
                      </h5>
                      <h5 className="txt-judul  text-center text-secondary">
                        Identitas Usaha
                      </h5>
                    </div>
                  </div>
                </div>

                <img className="icon-garis" src={linePolos} alt="garis" />

                <div className="steps3">
                  <div className="container">
                    <h5
                      className=" kotak-nomor rounded  pt-2 text-center shadow"
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#EEEEEE",
                        color: "#8F90A6",
                      }}
                    >
                      3
                    </h5>
                    <h5 className="txt-judul text-center  text-secondary">
                      Legalitas & Izin Usaha
                    </h5>
                  </div>
                </div>

                <img className="icon-garis" src={linePolos} alt="garis" />

                <div className="steps4">
                  <div className="container">
                    <h5
                      className=" kotak-nomor rounded  text-center pt-2 shadow"
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#5979C0",
                        color: "#FAFAFC",
                      }}
                    >
                      4
                    </h5>
                    <h5 className="txt-judul text-center text-secondary">
                      Nama & Rekening Bank
                    </h5>
                  </div>
                </div>

                <img className="icon-garis" src={linePolos} alt="garis" />

                <div className="steps5">
                  <div className="container">
                    <h5
                      className=" kotak-nomor rounded  pt-2 text-center shadow"
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#EEEEEE",
                        color: "#8F90A6",
                      }}
                    >
                      5
                    </h5>
                    <h5 className="txt-judul text-center ms-3 text-secondary">
                      Brand
                    </h5>
                  </div>
                </div>
              </div>

              <h3 className="title">Nama & Rekening Bank</h3>

              <div
                class="form-row d-flex justify-content-center"
                style={{ marginTop: "50px" }}
              >
                <div class="form-group col-md-5 ">
                  <label for="contoh1">Nama Bank</label>
                  <sup className="required" style={{ color: "red" }}>
                    *
                  </sup>
                  <input
                    style={{ backgroundColor: "#F0F4FA" }}
                    className="bg-form"
                    type="text"
                    value={namaDepan}
                    class="form-control"
                    id="validationDefault01"
                    placeholder="Bank Mandiri"
                    onChange={changeNamaDepan}
                    required
                  />
                </div>
                <div class="form-group col-md-5 ">
                  <label for="contoh2">Nama Pemilik Rekening Bank</label>
                  <sup className="required" style={{ color: "red" }}>
                    *
                  </sup>
                  <input
                    style={{ backgroundColor: "#F0F4FA" }}
                    type="text"
                    class="form-control"
                    id="contoh2"
                    placeholder="Ramli Ramadan"
                    value={namaBelakang}
                    onChange={changeNamaBelakang}
                    required
                  />
                </div>
              </div>

              <div
                class="form-row d-flex justify-content-center"
                style={{ marginTop: "10px" }}
              >
                <div class="form-group col-md-5 ">
                  <label for="contoh1">Nomor Rekening Bank</label>
                  <sup className="required" style={{ color: "red" }}>
                    *
                  </sup>
                  <input
                    style={{ backgroundColor: "#F0F4FA" }}
                    className="bg-form"
                    type="number"
                    value={namaDepan}
                    class="form-control"
                    id="validationDefault01"
                    placeholder="77372912810"
                    onChange={changeNamaDepan}
                    required
                  />
                </div>
                <div class="form-group col-md-5 ">
                  {/* <label for="contoh2">Nama Belakang</label>
                      <sup className="required" style={{ color: "red" }}>*</sup>
                      <input style={{ backgroundColor: "#F0F4FA"}} type="text" class="form-control" id="contoh2" placeholder="Nama Belakang Anda" value={namaBelakang} onChange={changeNamaBelakang} required /> */}
                </div>
              </div>

              <div class="col-12 mt-4 d-flex justify-content-end pe-5">
                <button
                  onClick={completeFormStep4}
                  class="btn text-light"
                  style={{
                    width: "150px",
                    height: "44px",
                    backgroundColor: "#253863",
                    marginTop: "200px",
                  }}
                  type="submit"
                >
                  Selanjutnya
                </button>
              </div>
            </section>
          )}

          {/* //BADAN USAHA// */}
          {formStep === 4 && (
            <section>
              <h1 className="judulVerif">Verifikasi Seller</h1>

              <div className="tabsss d-flex">
                <div className="steps1 d-flex">
                  <div className="step-1">
                    <div className="container">
                      <h5
                        className=" kotak-nomor rounded  pt-2 text-center shadow"
                        style={{
                          width: "40px",
                          height: "40px",
                          backgroundColor: "#EEEEEE",
                          color: "#8F90A6",
                        }}
                      >
                        1
                      </h5>
                      <h5 className="txt-on text-center">Identitas Pemilik</h5>
                    </div>
                  </div>

                  <img className="icon-garis" src={linePolos} alt="garis" />

                  <div className="steps2">
                    <div className="container">
                      <h5
                        className=" kotak-nomor rounded  pt-2 text-center shadow"
                        style={{
                          width: "40px",
                          height: "40px",
                          backgroundColor: "#EEEEEE",
                          color: "#8F90A6",
                        }}
                      >
                        2
                      </h5>
                      <h5 className="txt-judul  text-center text-secondary">
                        Identitas Usaha
                      </h5>
                    </div>
                  </div>
                </div>

                <img className="icon-garis" src={linePolos} alt="garis" />

                <div className="steps3">
                  <div className="container">
                    <h5
                      className=" kotak-nomor rounded  text-center pt-2 shadow"
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#5979C0",
                        color: "#FAFAFC",
                      }}
                    >
                      3
                    </h5>
                    <h5 className="txt-judul text-center  text-secondary">
                      Legalitas & Izin Usaha
                    </h5>
                  </div>
                </div>

                <img className="icon-garis" src={linePolos} alt="garis" />

                <div className="steps4">
                  <div className="container">
                    <h5
                      className=" kotak-nomor rounded  pt-2 text-center shadow"
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#EEEEEE",
                        color: "#8F90A6",
                      }}
                    >
                      4
                    </h5>
                    <h5 className="txt-judul text-center text-secondary">
                      Nama & Rekening Bank
                    </h5>
                  </div>
                </div>

                <img className="icon-garis" src={linePolos} alt="garis" />

                <div className="steps5">
                  <div className="container">
                    <h5
                      className=" kotak-nomor rounded  pt-2 text-center shadow"
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#EEEEEE",
                        color: "#8F90A6",
                      }}
                    >
                      5
                    </h5>
                    <h5 className="txt-judul text-center ms-3 text-secondary">
                      Brand
                    </h5>
                  </div>
                </div>
              </div>

              <h3 className="title">Legalitas & Izin Usaha</h3>

              <div
                class="form-row d-flex justify-content-center"
                style={{ marginTop: "50px" }}
              >
                <div class="form-group col-md-5 ">
                  <label for="contoh1">Nomor NPWP</label>
                  <sup className="required" style={{ color: "red" }}>
                    *
                  </sup>
                  <input
                    style={{ backgroundColor: "#F0F4FA" }}
                    className="bg-form"
                    type="text"
                    value={namaDepan}
                    class="form-control"
                    id="validationDefault01"
                    placeholder="Nama Lengkap Anda"
                    onChange={changeNamaDepan}
                    required
                  />
                </div>
                <div class="form-group col-md-5 ">
                  <label for="contoh2">Foto Sertifikat Halal</label>
                  <sup className="required" style={{ color: "red" }}>
                    *
                  </sup>
                  <input
                    style={{ backgroundColor: "#F0F4FA" }}
                    type="file"
                    class="form-control"
                    id="contoh2"
                    placeholder="Nama Belakang Anda"
                    value={namaBelakang}
                    onChange={changeNamaBelakang}
                    required
                  />
                </div>
              </div>

              <div
                class="form-row d-flex justify-content-center"
                style={{ marginTop: "10px" }}
              >
                <div class="form-group col-md-5 ">
                  <label for="contoh1">Nomor Induk Usaha</label>
                  <sup className="required" style={{ color: "red" }}>
                    *
                  </sup>
                  <input
                    style={{ backgroundColor: "#F0F4FA" }}
                    className="bg-form"
                    type="file"
                    value={namaDepan}
                    class="form-control"
                    id="validationDefault01"
                    placeholder="Nama Lengkap Anda"
                    onChange={changeNamaDepan}
                    required
                  />
                </div>
                <div class="form-group col-md-5 ">
                  {/* <label for="contoh2">Nama Belakang</label>
                      <sup className="required" style={{ color: "red" }}>*</sup>
                      <input style={{ backgroundColor: "#F0F4FA"}} type="text" class="form-control" id="contoh2" placeholder="Nama Belakang Anda" value={namaBelakang} onChange={changeNamaBelakang} required /> */}
                </div>
              </div>

              {/* <div className="d-flex">
                      <div class="col-4 d-flex justify-content-start ms-5 ps-3">
                        <button onClick={backFormStep4} class="btn text-light" style={{ width: "30%", backgroundColor: "#f16e60" }} type="button">Kembali</button>
                      </div>

                      <div class="col-7 d-flex justify-content-end ms-1 ps-1 pe-3" style={{ left: "30px" }}>
                        <button onClick={completeFormStep4} class="btn text-light" style={{ width: "20%", backgroundColor: "#f16e60" }} type="submit">Lanjut</button>
                      </div>
                    </div> */}
              <div class="col-12 mt-4 d-flex justify-content-end pe-5">
                <button
                  onClick={completeFormStep2}
                  class="btn text-light"
                  style={{
                    width: "150px",
                    height: "44px",
                    backgroundColor: "#253863",
                    marginTop: "195px",
                  }}
                  type="submit"
                >
                  Selanjutnya
                </button>
              </div>
            </section>
          )}

          {formStep === 5 && (
            <section>
              <h1 className="judulVerif">Verifikasi Seller</h1>

              <div className="tabsss d-flex">
                <div className="steps1 d-flex">
                  <div className="step-1">
                    <div className="container">
                      <h5
                        className=" kotak-nomor rounded  pt-2 text-center shadow"
                        style={{
                          width: "40px",
                          height: "40px",
                          backgroundColor: "#EEEEEE",
                          color: "#8F90A6",
                        }}
                      >
                        1
                      </h5>
                      <h5 className="txt-on text-center">Identitas Pemilik</h5>
                    </div>
                  </div>

                  <img className="icon-garis" src={linePolos} alt="garis" />

                  <div className="steps2">
                    <div className="container">
                      <h5
                        className=" kotak-nomor rounded  pt-2 text-center shadow"
                        style={{
                          width: "40px",
                          height: "40px",
                          backgroundColor: "#EEEEEE",
                          color: "#8F90A6",
                        }}
                      >
                        2
                      </h5>
                      <h5 className="txt-judul  text-center text-secondary">
                        Identitas Usaha
                      </h5>
                    </div>
                  </div>
                </div>

                <img className="icon-garis" src={linePolos} alt="garis" />

                <div className="steps3">
                  <div className="container">
                    <h5
                      className=" kotak-nomor rounded  pt-2 text-center shadow"
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#EEEEEE",
                        color: "#8F90A6",
                      }}
                    >
                      3
                    </h5>
                    <h5 className="txt-judul text-center  text-secondary">
                      Legalitas & Izin Usaha
                    </h5>
                  </div>
                </div>

                <img className="icon-garis" src={linePolos} alt="garis" />

                <div className="steps4">
                  <div className="container">
                    <h5
                      className=" kotak-nomor rounded  pt-2 text-center shadow"
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#EEEEEE",
                        color: "#8F90A6",
                      }}
                    >
                      4
                    </h5>
                    <h5 className="txt-judul text-center text-secondary">
                      Nama & Rekening Bank
                    </h5>
                  </div>
                </div>

                <img className="icon-garis" src={linePolos} alt="garis" />

                <div className="steps5">
                  <div className="container">
                    <h5
                      className=" kotak-nomor rounded  text-center pt-2 shadow"
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#5979C0",
                        color: "#FAFAFC",
                      }}
                    >
                      5
                    </h5>
                    <h5 className="txt-judul text-center ms-3 text-secondary">
                      Brand
                    </h5>
                  </div>
                </div>
              </div>

              <h3 className="title">Brand</h3>

              <div
                class="form-row d-flex justify-content-center"
                style={{ marginTop: "50px" }}
              >
                <div class="form-group col-md-5 ">
                  <label for="contoh1">Nama Brand</label>
                  <sup className="required" style={{ color: "red" }}>
                    *
                  </sup>
                  <input
                    style={{ backgroundColor: "#F0F4FA" }}
                    className="bg-form"
                    type="text"
                    value={namaDepan}
                    class="form-control"
                    id="validationDefault01"
                    placeholder="YumaJu"
                    onChange={changeNamaDepan}
                  />
                </div>
                <div class="form-group col-md-5 ">
                  <label for="contoh2">Nomor Sertifikat Halal</label>
                  <sup className="required" style={{ color: "red" }}>
                    *
                  </sup>
                  <input
                    style={{ backgroundColor: "#F0F4FA" }}
                    type="text"
                    class="form-control"
                    id="contoh2"
                    placeholder="Ramli Ramadan"
                    value={namaBelakang}
                    onChange={changeNamaBelakang}
                  />
                </div>
              </div>

              <div
                class="form-row d-flex justify-content-center"
                style={{ marginTop: "10px" }}
              >
                <div class="form-group col-md-5 ">
                  <label for="contoh1">Foto Sertifikat HAKI</label>
                  <sup className="required" style={{ color: "red" }}>
                    *
                  </sup>
                  <input
                    style={{ backgroundColor: "#F0F4FA" }}
                    className="bg-form"
                    type="file"
                    value={namaDepan}
                    class="form-control"
                    id="validationDefault01"
                    placeholder="77372912810"
                    onChange={changeNamaDepan}
                  />
                </div>
                <div class="form-group col-md-5 ">
                  {/* <label for="contoh2">Nama Belakang</label>
                      <sup className="required" style={{ color: "red" }}>*</sup>
                      <input style={{ backgroundColor: "#F0F4FA"}} type="text" class="form-control" id="contoh2" placeholder="Nama Belakang Anda" value={namaBelakang} onChange={changeNamaBelakang} required /> */}
                </div>
              </div>

              <div class="col-12 mt-4 d-flex justify-content-end pe-5">
                <button
                  onClick={completeFormStepVerif}
                  class="btn text-light me-2"
                  style={{
                    width: "150px",
                    height: "44px",
                    backgroundColor: "#253863",
                    marginTop: "195px",
                  }}
                  type="submit"
                >
                  Verifikasi Seller
                </button>
                <button
                  onClick={completeFormStepTolak}
                  class="btn text-danger"
                  style={{
                    width: "100px",
                    height: "44px",
                    backgroundColor: "white",
                    borderColor: "red",
                    marginTop: "195px",
                  }}
                  type="submit"
                >
                  Tolak
                </button>
              </div>
            </section>
          )}

          {formStep === 6 && (
            <section className="tlk" style={{ marginLeft: "15px" }}>
              <div className="tabsss ms-4">
                <h1
                  className="title-tolak"
                  style={{
                    color: "#3E4094",
                    fontSize: "26px",
                    marginTop: "-40px",
                  }}
                >
                  Form Penolakan Verifikasi
                </h1>

                <div>
                  <img src={bg} alt="background" className="bg" />
                </div>

                <div className="kotak-warning d-flex">
                  <h4
                    className="logo-warning text-center"
                    style={{
                      backgroundColor: "#FFC600",
                      width: "30px",
                      height: "30px",
                      borderRadius: "20px",
                      color: "#F89C47",
                    }}
                  >
                    !
                  </h4>
                  <p
                    className="anda-menolak"
                    style={{ marginTop: "-130px", marginLeft: "10px" }}
                  >
                    Anda Menolak Verifikasi Seller
                  </p>{" "}
                  <br />
                </div>
                <p
                  className="untuk-kenyamanan"
                  style={{
                    marginTop: "-115px",
                    width: "700px",
                    marginLeft: "70px",
                    fontSize: "16px",
                  }}
                >
                  Untuk kenyamanan calon Seller, anda diharuskan mengisi
                  keterangan penolakan verifikasi <br />
                  dengan memberikan alasan secara jelas alasan penolakan{" "}
                </p>

                <h3
                  className="title"
                  style={{ marginTop: "30px", marginLeft: "5px" }}
                >
                  keterangan
                </h3>

                <p
                  className="alasan"
                  style={{
                    marginTop: "10px",
                    width: "700px",
                    marginLeft: "5px",
                    color: "#646464",
                  }}
                >
                  Alasan Penolakan
                </p>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                  style={{ backgroundColor: "#F5F8FA", width: "95%" }}
                >
                  <Form.Control
                    as="textarea"
                    rows={3}
                    style={{ backgroundColor: "#F5F8FA" }}
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                  />
                </Form.Group>
              </div>

              <div class="col-12 mt-4 d-flex justify-content-end pe-5">
                <button
                  onClick={completeFormStep4}
                  class="btn text-light me-2"
                  style={{
                    width: "150px",
                    height: "44px",
                    backgroundColor: "#253863",
                    marginTop: "145px",
                  }}
                  type="submit"
                >
                  Kembali
                </button>
                <button
                  onClick={completeFormStepTolak2}
                  class="btn text-danger"
                  style={{
                    width: "100px",
                    height: "44px",
                    backgroundColor: "white",
                    borderColor: "red",
                    marginTop: "145px",
                  }}
                  type="submit"
                >
                  Tolak
                </button>
              </div>
            </section>
          )}
        </form>
      </Modal>

      {/* <div className="container">
        <div className="content-tabs" >
          <div>

          
            <div className="form-user shadow  mt-5 pb-5 container">
            
            
              
            </div>
          </div>
        </div>
      </div> */}
      <br />
      <br />
    </div>
  );
}

export default VerifikasiSeller;
