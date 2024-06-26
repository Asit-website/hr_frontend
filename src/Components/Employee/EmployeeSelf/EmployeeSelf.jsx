import React, { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import { useMain } from "../../../hooks/useMain";
import "../MySelf/myself.css"
import doc from "../../images/docu.png"
import AdminSidebar from "../../admin/Sidebar/AdminSidebar";
import { useLocation } from 'react-router-dom';
import AdminNavbar from "../../admin/Navbar/AdminNavbar";


const EmployeeSelf = ({ setAlert, pop1, setPop1 }) => {
   // =================punch in punch out concept==========
   const {
      user,
      postActivity,
      getStatisticsByUser,
      getUsers

   } = useMain();

   const location = useLocation();
   const state = location.state;

   //   let user1 = JSON?.parse(localStorage.getItem("hrms_user"));
   const [user1, setUser1] = useState({});

   const fetchUserDetails = async () => {
      const ans = await getUsers(state);
      setUser1(ans?.data);

   }

   console.log('user1 ', user1);

   useEffect(() => {
      fetchUserDetails();
   }, [])

   return (
      <>
         <div className="employee-dash h-full">

            <AdminSidebar />


            <div className="tm">
               <AdminNavbar
                  user={user}
                  setAlert={setAlert}
                  postActivity={postActivity}
                  getStatisticsByUser={getStatisticsByUser}
                  pop1={pop1}
                  setPop1={setPop1}
               />

               <div className="em manem">

                  <nav className="myselfNav">
                     <h2>{user1?.fullName} Details</h2>

                     <select name="" id="">
                        <option value="Document">Document</option>
                        <option value="Offer Latter">Offer Latter</option>
                        <option value="Experience Letter">Experience Letter</option>
                        <option value="Experience Letter">Experience Letter</option>
                        <option value="Experience Letter">Experience Letter</option>
                     </select>

                  </nav>


                  {/* first section  */}
                  <div className="myselfFirst">


                     <h3>Employee Detail</h3>

                     <hr />

                     <div className="allFristDe3tail">

                        <div className="singfirst">
                           <p>Employee ID :</p>
                           <span>{user1?.employeeCode}</span>
                        </div>

                        <div className="singfirst">
                           <p>Name :</p>
                           <span>{user1?.fullName}</span>
                        </div>

                        <div className="singfirst">
                           <p>Department :</p>
                           <span>{user1?.department}</span>
                        </div>

                        <div className="singfirst">
                           <p>Designation :</p>
                           <span>{user1?.designation}</span>
                        </div>

                        <div className="singfirst">
                           <p>Date of Joining :</p>
                           <span>{user1?.joiningDate}</span>
                        </div>

                        <div className="singfirst">
                           <p>Office Email :</p>
                           <span>{user1?.email}</span>
                        </div>

                     </div>

                  </div>

                  {/* second section  */}
                  <div className="myselfFirst">


                     <h3>Other Detail</h3>

                     <hr />

                     <div className="allFristDe3tail">

                        <div className="singfirst">
                           <p>Address :</p>
                           <span>{user1?.currentAddress}</span>
                        </div>

                        <div className="singfirst">
                           <p>Mobile :</p>
                           <span>{user1?.mobile}</span>
                        </div>

                        <div className="singfirst">
                           <p>Personal ID :</p>
                           <span>{user1?.email1}</span>
                        </div>

                        <div className="singfirst">
                           <p>Gender :</p>
                           <span>{user1?.gender}</span>
                        </div>

                        <div className="singfirst">
                           <p>Pan Number :</p>
                           <span>{user1?.pan}</span>
                        </div>

                        <div className="singfirst">
                           <p>Adhar Number :</p>
                           <span>{user1?.adhar}</span>
                        </div>

                        <div className="singfirst">
                           <p>Father Name :</p>
                           <span>{user1?.father}</span>
                        </div>

                        <div className="singfirst">
                           <p>Current  Address :</p>
                           <span>{user1?.currentAddress}</span>
                        </div>

                        <div className="singfirst">
                           <p>Current State :</p>
                           <span>{user1?.currentState}</span>
                        </div>

                        <div className="singfirst">
                           <p>Current City :</p>
                           <span>{user1?.currentCity}</span>
                        </div>

                        <div className="singfirst">
                           <p>Area Pincode :</p>
                           <span>{user1?.currentPin}</span>
                        </div>

                        <div className="singfirst">
                           <p>Permanent Address :</p>
                           <span>{user1?.residence}</span>
                        </div>

                        <div className="singfirst">
                           <p>Permanent State :</p>
                           <span>{user1?.perState}</span>
                        </div>

                        <div className="singfirst">
                           <p>Permanent City :</p>
                           <span>{user1?.perCity}</span>
                        </div>

                        <div className="singfirst">
                           <p>Permanent Pin :</p>
                           <span>{user1?.perPin}</span>
                        </div>

                        <div className="singfirst">
                           <p>Marital status :</p>
                           <span>{user1?.Martial}</span>
                        </div>

                        <div className="singfirst">
                           <p>Nationality :</p>
                           <span>{user1?.nationality}</span>
                        </div>

                        <div className="singfirst">
                           <p>Mother name :</p>
                           <span>{user1?.Mother}</span>
                        </div>

                     </div>

                  </div>

                  {/* thid  section  */}
                  <div className="myselfFirst">


                     <h3>Document Upload</h3>

                     <hr />

                     {/* <div className="allFristDe3tail2">

                        {
                           user1?.document?.map((item, index) => (
                              <div className="singleDoc" key={index}>

                                <a target="_blank" href={`${item?.url}`}><h2>{item?.name}</h2></a>
                                <a target="_blank" href={`${item?.url}`}><img src={item?.url} className="docuImgages" alt="" /></a>

                              </div>
                           ))
                        }


                     </div> */}
                     
                     <div className="allFristDe3tail2">

                        {
                           user1?.document?.map((item, index) => (
                              <div className="singleDoc" key={index}>

                                 {/* left */}
                                 <div className="sidocLeft">

                                  <a target="_blank" href={`${item?.url}`}><img src={doc} alt="" /></a>

                                    <div className="ffwrap">
                                     <a target="_blank" href={`${item?.url}`}><p className="ff"> {item?.name}</p></a>
                                      <a target="_blank" href={`${item?.url}`}> <p className="dd">{(item?.url).slice(50,80)}</p></a>
                                    </div>

                                 </div>

                                 {/* right  */}
                                 {/* <p className="singDocRight">{new Date().now()}</p> */}

                              </div>
                           ))
                        }


                     </div>

                  </div>


                  {/* fourth section  */}
                  <div className="myselfFirst">


                     <h3>Bank Account Detail</h3>

                     <hr />

                     <div className="allFristDe3tail">

                        <div className="singfirst">
                           <p>Salary Pay Mode</p>
                           <span>{user1?.SalaryPay}</span>
                        </div>

                        <div className="singfirst">
                           <p>Account No :</p>
                           <span>{user1?.AccountNumber}</span>
                        </div>

                        <div className="singfirst">
                           <p> Bank Name :</p>
                           <span>{user1?.SalaryBankName}</span>
                        </div>

                        <div className="singfirst">
                           <p>Beneficiary Name :</p>
                           <span>{user1?.BeneficiaryName}</span>
                        </div>

                        <div className="singfirst">
                           <p>Branch Ifsc Code :</p>
                           <span>{user1?.BankIfsc}</span>
                        </div>
                        <div className="singfirst">
                           <p>Bank Branch Name :</p>
                           <span>{user1?.Branch}</span>
                        </div>



                     </div>

                  </div>

                  <div className="myselfFirst">


                     <h3>Document Permission</h3>

                     <hr />

                     <div className="allFristDe3tail sinoid">

                        <div className="singfirst">
                           <p>Offer Latter :</p>
                           {/* <span>{user1?.SalaryPay}</span> */}
                         
                              <input className="inpo1" type="checkbox" />
                          

                        </div>

                        {/* <div className="singfirst">
                           <p>Account No :</p>
                           <span>{user1?.AccountNumber}</span>
                        </div> */}

                        {/* <div className="singfirst">
                           <p> Bank Name :</p>
                           <span>{user1?.SalaryBankName}</span>
                        </div> */}

                        <div className="singfirst">
                           <p>Experience Latter :</p>
                           
                              <input className="inpo2" type="checkbox" />
                          
                        </div>

                        <div className="singfirst">
                           <p>Offer Latter :</p>
                           
                              <input className="inpo1" type="checkbox" />
                          
                        </div>
                        {/* <div className="singfirst">
                           <p>Bank Branch Name :</p>
                           <span>{user1?.Branch}</span>
                        </div> */}



                     </div>

                  </div>


                  <div className="reqcahgng">

                     {/* <button className="rqbtn"><span>Request Change</span></button> */}

                  </div>


               </div>



            </div>
         </div>
      </>
   );
};

export default EmployeeSelf;
