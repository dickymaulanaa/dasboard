// // import '../css/Marketing.css'
// import {Button, FormControl, Form, Nav,Table, Pagination, Col,Row} from 'react-bootstrap'
// import React, { useState, useEffect } from "react";
// // import iklan from '../image/iklan.png';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import iconX from '../image/Icon.png';




// function Marketing(){

//     const [hideHapus, setHideHapus] = useState(true)
//     const [cekAll, setCekAll] = useState(false)
//     const [isCheck, setIsCheck] = useState([]);
//     const [isCheckAll, setIsCheckAll] = useState(false);
//     const [x, setX] = useState(true);
//     const [hideModalTambahV, setHideModalTambahV] = useState(true);
//     const [hideBg, setHideBg] = useState(true)




//     function tambahPromo(){
//         if(hideModalTambahV == true){
//             setHideModalTambahV(false)
//             setX(false)
//             setHideBg(false)
//         }
//     }

//     function hideHapusBtn(){

//         for(let i = 0; i <= data.length; i++){
//             if(hideHapus == true ){
//                 setHideHapus(false)
//             }
//             else{
//                 setHideHapus(true)
//             }
//         }
        
//     }
//     const handleClick = e => {
//         const { id, checked } = e.target;
//         setIsCheck([...isCheck, id]);
//         setHideHapus(false)
//         let elem = document.getElementById(id)
//         elem.style.backgroundColor = '#F1F5FC'

//         for(let i = 0 ; i>id.length; i++){
//             if(checked){
//                 setHideHapus(true)
//             }else{
//                 setHideHapus(false)
//             }

//         }
        
//         if (!checked > 1) {
//           setIsCheck(isCheck.filter(item => item !== id));
//           setHideHapus(false)
//           elem.style.backgroundColor = '#F1F5FC'
//         }if(checked.length == 0 ){
//         setIsCheck(isCheck.filter(item => item !== id));
//           setHideHapus(false)
//           elem.style.backgroundColor = '#F1F5FC'
//         }if(checked >= 1) {
//             setIsCheck(isCheck.filter(item => item !== id));
//             setHideHapus(false)
//             elem.style.backgroundColor = '#F1F5FC'
//         }if(checked == 1){
//             setHideHapus(false)
//             elem.style.backgroundColor = '#F1F5FC'
//         }
//         else{
//             setIsCheck(isCheck.filter(item => item !== id));
//             setHideHapus(true)
//             elem.style.backgroundColor = 'white'
//         }
//       };

//     function checkAll(){
//             setCekAll(true)
//             setIsCheck(data.map(li => li.id));
//             if (cekAll) {
//             setIsCheck([]);
//             setCekAll(false)
//             setHideHapus(true)
//             }else{
//                 setHideHapus(false)
//             }
//         }
//         function xHide(){
//             if(hideModalTambahV == true){
//                 setX(false)
//             }else{
//                 setX(true)
//                 setHideModalTambahV(true)
//                 setHideBg(true)

//             }
//         }

//     let data = [{ id: 1, namaIklan: 'Iklan Brand Mantap', tanggalMulai: '25 Mei 2020', tanggalSelesai: '25 Mei 2020', kategori:'Iklan Produk' }, 
//                 { id: 2, namaIklan: 'Iklan Brand Mantap', tanggalMulai: '25 Mei 2020', tanggalSelesai: '25 Mei 2020', kategori:'Iklan Produk' }, 
//                 { id: 3, namaIklan: 'Iklan Brand Mantap', tanggalMulai: '25 Mei 2020', tanggalSelesai: '25 Mei 2020', kategori:'Iklan Produk' }, 
//                 { id: 4, namaIklan: 'Iklan Brand Mantap', tanggalMulai: '25 Mei 2020', tanggalSelesai: '25 Mei 2020', kategori:'Iklan Produk' }, 
//                 { id: 5, namaIklan: 'Iklan Brand Mantap', tanggalMulai: '25 Mei 2020', tanggalSelesai: '25 Mei 2020', kategori:'Iklan Produk' }, 
//                 { id: 6, namaIklan: 'Iklan Brand Mantap', tanggalMulai: '25 Mei 2020', tanggalSelesai: '25 Mei 2020',kategori:'Iklan Produk'  },
//                 { id: 6, namaIklan: 'Iklan Brand Mantap', tanggalMulai: '25 Mei 2020', tanggalSelesai: '25 Mei 2020',kategori:'Iklan Produk'  }];
                    
//     return(

//         <>
//         <div className="bgModal" style={{backgroundColor:'red',width:'100%', height:'100%'}} hidden={hideBg}>
//         <div className="modal-tambahB" hidden={hideModalTambahV}>
//         <img src={iconX} onClick={xHide} hidden={x} className="iconXB" />

//               <h5 className="text-tambahVoucher">Tambah Banner</h5>
//               <input type="file" className="inputFoto"/>

//               <Row className="mb-3" >
//               <div class="wrapper">
//                     <div class="container">
//                         <div class="border-container">
//                             <p><a href="#" id="file-browser">Click here</a> to upload image
//                             <svg style={{marginLeft:'10px'}} width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M4.12871 7.00006L4.12871 13.743C4.1365 14.2361 4.33784 14.7063 4.68928 15.0523C5.04072 15.3982 5.51409 15.5921 6.00722 15.5921C6.50036 15.5921 6.97372 15.3982 7.32517 15.0523C7.67661 14.7063 7.87795 14.2361 7.88574 13.743L7.89183 4.90475C7.89695 4.48331 7.81835 4.06505 7.66061 3.67421C7.50287 3.28337 7.26912 2.92773 6.97291 2.6279C6.6767 2.32807 6.32392 2.09003 5.93503 1.92756C5.54613 1.76509 5.12885 1.68143 4.70738 1.68143C4.28591 1.68143 3.86863 1.76509 3.47974 1.92756C3.09084 2.09003 2.73806 2.32807 2.44185 2.6279C2.14564 2.92773 1.91189 3.28337 1.75415 3.67421C1.59641 4.06505 1.51782 4.48331 1.52293 4.90475L1.52293 13.8026C1.51434 14.3959 1.62379 14.985 1.8449 15.5356C2.06602 16.0863 2.39439 16.5875 2.81093 17.0101C3.22747 17.4327 3.72386 17.7683 4.27125 17.9974C4.81864 18.2264 5.40611 18.3444 5.99949 18.3444C6.59287 18.3444 7.18034 18.2264 7.72773 17.9974C8.27512 17.7683 8.77151 17.4327 9.18805 17.0101C9.60459 16.5875 9.93296 16.0863 10.1541 15.5356C10.3752 14.985 10.4846 14.3959 10.4761 13.8026V5.48787" stroke="#353535" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
//                             </svg>
//                             </p>
                            
//                         </div>
//                     </div>
//                     <p style={{ marginTop:'-10px', fontSize:'16px'}}><sup style={{ color: "red" }}>*</sup>
//                      The uploaded image must be 322px width and 100px height
//                         </p>                    
//                     </div>



//                     {/* <div class="drag-area">
//                         <div class="icon"><i class="fas fa-cloud-upload-alt"></i></div>
//                         <header>Drag & Drop to Upload File</header>
//                         <span>OR</span>
//                         <button>Browse File</button>
//                         <input type="file" />
//                     </div>     */}
//             </Row>
//             <Row className="pt-5" >
//                 <Form.Group as={Col} controlId="formGridEmail" style={{paddingTop:'10px'}}>
//                 <Form.Label className="form-label">Nama Banner (id)</Form.Label>
//                 <Form.Control style={{backgroundColor:'#F7F7F7'}} type="text" placeholder="Masukan nama voucher barunya..." />
//                 </Form.Group>

//                 <Form.Group as={Col} controlId="formGridPassword" style={{paddingTop:'10px'}}>
//                 <Form.Label className="form-label">Jenis Banner</Form.Label>
//                 <Form.Control style={{backgroundColor:'#F7F7F7'}} type="text" placeholder="Masukan kode voucher baru..." />
//                 </Form.Group>
//             </Row>

//             <Row style={{marginTop:'10px'}}>
//             <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//                 <Form.Label>Deskripsi</Form.Label>
//                 <Form.Control style={{backgroundColor:'#F7F7F7'}} as="textarea" rows={2} />
//             </Form.Group>
//             </Row>
//             <Row>
//                 <Form.Group>
//                 <Form.Label className="form-label">Section Banner</Form.Label>
//                     <Form.Select  aria-label="Default select example" style={{width:'100%', marginTop:'0px', backgroundColor:'#F7F7F7'}}>
//                         <option>Pilih Jenis Voucher</option>
//                         <option value="1">One</option>
//                         <option value="2">Two</option>
//                         <option value="3">Three</option>
//                     </Form.Select>
//                     </Form.Group>
//             </Row>
            

//             <h6 style={{marginTop:'20px'}} className="text-durasiV">Durasi Banner</h6>

//             <Row className="mb-3">
//                 <Form.Group as={Col} controlId="formGridEmail">
//                 <Form.Label className="form-label">Dari Tanggal</Form.Label>
//                 <Form.Control style={{backgroundColor:'#F7F7F7'}} type="date" placeholder="Pilih tanggal" />
//                 </Form.Group>

//                 <Form.Group as={Col} controlId="formGridPassword">
//                 <Form.Label className="form-label">Hinggal Tanggal</Form.Label>
//                 <Form.Control style={{backgroundColor:'#F7F7F7'}} type="date" placeholder="Pilih tanggal" />
//                 </Form.Group>
//             </Row>

//             <Button onClick={tambahPromo} style={{backgroundColor:'#253863', width:'150px', height:'40px',marginTop:'10px', marginLeft:'79%'}}>Tambah Banner</Button>
//               </div>
//               </div>

//                 <div className="isiMarketing" style={{padding:'2px',width: '78%',height:'20%', marginLeft:'18%', marginTop:'1%'}}>
//                     <div className="d-flex" style={{height:'30px', marginBottom:'30px'}}>
//                     <h1 className="title">Banner Iklan</h1>
//                     <Form className="kananJudul d-flex">
//                         <FormControl
//                         placeholder="Cari Banner"
//                         className="cari search-box me-2"
//                         aria-label="Search"
//                         style={{backgroundColor:'#F5F8FA', marginTop:'8px', height:'40px'}}
//                         />
//                         <span><svg style={{marginTop:'15px', marginLeft:'-40px'}} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M8.875 16.75C13.2242 16.75 16.75 13.2242 16.75 8.875C16.75 4.52576 13.2242 1 8.875 1C4.52576 1 1 4.52576 1 8.875C1 13.2242 4.52576 16.75 8.875 16.75Z" stroke="#253863" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         <path d="M14.4431 14.4438L18.9994 19.0001" stroke="#253863" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         </svg>
//                         </span>
                          
//                         <Button  onClick={tambahPromo} style={{backgroundColor:'#253863', width:'300px', height:'40px',marginTop:'8px', marginRight:'10px'}}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
//                                                                     <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
//                                                                     </svg>Tambah Banner</Button>
//                     </Form>
//                     </div>

//                     <div className="section d-flex ">
//                     <Nav variant="tabs" defaultActiveKey="section1" className="tabz d-flex ">
//                         <Nav.Item className="border-0" >
//                             <Nav.Link  type="checkbox" className="item-tab border-bottom mb-3" href="#" eventKey="section1" title="section1">Section 1</Nav.Link>
//                         </Nav.Item>
//                         <Nav.Item >
//                             <Nav.Link className="item-tab border-bottom" eventKey="link-1" >Section 2</Nav.Link>
//                         </Nav.Item>
//                         <Nav.Item>
//                             <Nav.Link className="item-tab border-bottom" eventKey="disabled" >
//                             Section 3
//                             </Nav.Link>
//                         </Nav.Item>
                        
//                         </Nav>

//                         <Button hidden={hideHapus} style={{backgroundColor:'white', width:'150px', height:'40px',marginBottom:'-10px', marginLeft:'610px', color:'red', borderColor:'red'}}>Hapus Banner</Button>


//                     </div>


//                     <div className="app container ">
//                             <table class="table table-hover ">
//                                 <thead >
//                                 <tr style={{backgroundColor:'#FBFBFB'}}>
//                                     <th scope="col" ><Form.Check handleClick={checkAll} isChecked={isCheckAll} aria-label="option 1" onClick={checkAll} style={{align:'center'}} /></th>
//                                     <th className="MjudulTable"  scope="col">Asset</th>
//                                     <th className="MjudulTable"  scope="col">Nama Iklan</th>
//                                     <th className="MjudulTable"  scope="col">Tanggal Mulai</th>
//                                     <th className="MjudulTable"  scope="col">Tanggal Selesai</th>
//                                     <th className="MjudulTable"  scope="col">Kategori</th>
//                                     <th scope="col"></th>

//                                 </tr>
//                                 </thead>
//                                 <tbody style={{borderColor:'grey', borderStyle:'none'}}>
//                                 {data.map(function({id, namaIklan, tanggalMulai, tanggalSelesai, kategori}){
                                
//                                     return (
//                                         <tr id={id}>
//                                         <td  >{<Form.Check aria-label="option 1" className="cekbox" type="checkbox" onClick={handleClick} id={id} name="foo" style={{align:'center', paddingTop:'10px', color:'#253863'}} />}</td>
//                                         <td><img src="https://github.com/YoshuaLangkay/admin-dashboard-tokrum/blob/merketing/src/image/iklan.png?raw=true" alt="iklan" width={'90px'}/></td>
//                                         <td className="MisiTable" style={{paddingTop:'15px'}}>{namaIklan}</td>
//                                         <td className="MisiTable" style={{paddingTop:'15px'}}>{tanggalMulai}</td>
//                                         <td className="MisiTable" style={{paddingTop:'15px'}}>{tanggalSelesai}</td>
//                                         <td className="MisiTable" style={{paddingTop:'15px'}}>{kategori}</td>
//                                         <td  style={{paddingTop:'15px'}}><a href="#" className="Mselengkapnya">Selengkapnya</a></td>
//                                         </tr>
//                                         );
//                                     })}
                                    
//                                     </tbody>
//                                     </table>
                                    
//                             </div>

                           

//                 </div>

                
        
//         </>
//     )
// }

// export default Marketing;