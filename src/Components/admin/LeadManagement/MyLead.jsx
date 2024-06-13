import React, { useEffect, useState } from "react";
import AdminNavbar from "../../admin/Navbar/AdminNavbar";
import AdminSidebar from "../../admin/Sidebar/AdminSidebar";
import "react-calendar/dist/Calendar.css";
import { useMain } from "../../../hooks/useMain";
import pluss from "../../images/pluss.png"
import search from "../../images/bx-search.png"
import fff from "../../images/fff.png"
import { NavLink, useNavigate } from "react-router-dom";
import OutsideClickHandler from 'react-outside-click-handler';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import toast from "react-hot-toast";


const MyLead = ({ setAlert, pop, setPop }) => {

    const navigate = useNavigate();

    const { user, getLead2, deleteLeads } = useMain();

    const [refreshFlag, setRefreshFlag] = useState(false);

    const [card, setCard] = useState(false);

    const stylepeer2 = {
        display: card ? "block" : "none"
    }

    const [filter, setFilter] = useState(false);

    const stylePeer3 = {
        display: filter ? "block" : "none"
    }

    const [allLead, setAllLead] = useState([]);

    const [allLeading , setAlleading] = useState([]);

    const fetchLead = async () => {
        const ans = await getLead2("", "", "", "");
        setAllLead(ans?.data);
        setAlleading(ans?.data);
    }

    const [filterInput , setFilterInput ] = useState();

    useEffect(() => {
        fetchLead();
    }, [refreshFlag])

    const deleteProject = async (id) => {
        confirmAlert({
            title: 'Are you sure to delete this data?',
            message: 'All related data to this will be deleted',
            buttons: [
                {
                    label: 'Yes, Go Ahead!',
                    style: {
                        background: "#FF5449"
                    },
                    onClick: async () => {
                        await deleteLeads(id);
                        toast.success("delete Successfully");
                        setRefreshFlag(!refreshFlag);
                    }
                },
                {
                    label: 'Cancel',

                    onClick: () => null
                }
            ]
        });

    };

    const [currentPage, setCurrentPage] = useState(1);

    let itemsPerPage = 10;

    const totalPages = Math.ceil(allLead.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;

    const endIndex = Math.min(startIndex + itemsPerPage, allLead.length);

    const currentItems = allLead.slice(startIndex, endIndex);

    const nextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const prevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };


   const [ sortDate, setSortDate] = useState("");
   
    useEffect(()=>{

         if(sortDate !== undefined && sortDate != "" && sortDate !== null){
 
            const sortedData = allLeading.filter((l) => {
                const { createAt } = l;

                const date = new Date(createAt);

const cyear = date.getFullYear(); 
const cmonth = date.getMonth() + 1; 
const cday = date.getDate(); 

const [nyear, nmonth, nday] = sortDate.split("-");


return cyear === parseInt(nyear) && cmonth === parseInt(nmonth) && cday === parseInt(nday);


              });

              setAllLead(sortedData);

         }
         else {
      setAllLead(allLeading);
         }

    },[sortDate])


    return (
        <>
            <div className="employee-dash h-full">
                <AdminSidebar pop={pop} setPop={setPop} />

                <div className="tm">
                    <AdminNavbar user={user} setAlert={setAlert} />

                    <div className="em">

                        <div className="leadThings">
                            <div className="lead_content1">
                                <h2>Lead Management</h2>
                                <p>Real-time insights and performance overview</p>
                            </div>
                            <div className="lead_content2">
                                <div className="leads_btn2">

                                    <button className="lead_btn2">
                                        <NavLink className="such_thing" to="/adminDash/createLead" >  <img src={pluss} alt="" /> <span className="colp"> Create New Lead </span> </NavLink>
                                    </button>

                                    <NavLink to="/adminDash/leadFile"><button className="refresh">
                                        <span className="ref1">Import Leads</span>
                                    </button></NavLink>
                                    <button
                                        id="dropdownDefaultButton"
                                        data-dropdown-toggle="dropdown"
                                        className="text-white silo   px-5 py-2.5 text-center inline-flex items-center"
                                        type="button"
                                        onClick={() => setCard(!card)}
                                    >
                                        Actions{" "}
                                        <svg className="ml-2" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.293 9.29303L12 13.586L7.70697 9.29303L6.29297 10.707L12 16.414L17.707 10.707L16.293 9.29303Z" fill="#666D76" />
                                        </svg>

                                    </button>

                                    <OutsideClickHandler
                                        onOutsideClick={() => {
                                            setCard(false);
                                        }}
                                    >
                                        <div
                                            id="dropdown"
                                            className="z-10 solaring hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                                            style={stylepeer2}
                                        >
                                            <ul
                                                className="py-2 faring text-sm text-gray-700 dark:text-gray-200"
                                                aria-labelledby="dropdownDefaultButton"
                                            >
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        Mass Delete
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        Mass Update
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        Mass Convert
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        Mass Email
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </OutsideClickHandler>
                                </div>
                            </div>
                        </div>

                        <div className="laed1">


                            <div>
                                <div className="leftlead1">

                                    <div onClick={() => setFilter(!filter)} className="inptsearch">
                                        <input type="text" placeholder="Search leads" />
                                        <span><img src={search} alt="" /></span>
                                    </div>

                                    <img src={fff} alt="" />

                                </div>

                                <div
                                    id="dropdown"
                                    className="z-10 dart hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                                    style={stylePeer3}
                                >
                                    <div className="filter_lead">
                                        <h2>Filter Leads by</h2>
                                    </div>
                                    <div className="trt_things">
                                        <div className="touched_things">
                                            <input type="checkbox" />
                                            <span>Touched Records</span>
                                        </div>
                                        <div className="fg">
                                            <span>By</span>
                                            <select className="testo" name="" id="">
                                                <option value="User & system">User & system</option>
                                            </select>
                                        </div>
                                        <div className="in_the">
                                            <select className="aloy1" name="" id="">
                                                <option value="In the last">In the last</option>
                                            </select>
                                            <div className="stoing">
                                               <input type="text" onChange={(e)=>setFilterInput(e.target.value)} placeholder="2"  />
                                            </div>
                                            <select className="aloy2" name="" id="">
                                                <option value="Days">Days</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="setting">
                                        <div className="some_things">
                                            <input type="checkbox" />
                                            <span>Untouched Records</span>
                                        </div>
                                        <div className="some_things">
                                            <input type="checkbox" />
                                            <span>Activities</span>
                                        </div>
                                        <div className="some_things">
                                            <input type="checkbox" />
                                            <span>Notes</span>
                                        </div>
                                        <div className="some_things">
                                            <input type="checkbox" />
                                            <span>Annual Revenue</span>
                                        </div>
                                        <div className="some_things">
                                            <input type="checkbox" />
                                            <span>Country</span>
                                        </div>
                                        <div className="some_things">
                                            <input type="checkbox" />
                                            <span>Created Time</span>
                                        </div>
                                        <div className="some_things">
                                            <input type="checkbox" />
                                            <span>Industry</span>
                                        </div>
                                        <div className="some_things">
                                            <input type="checkbox" />
                                            <span>Last Activity Time</span>
                                        </div>
                                        <div className="some_things">
                                            <input type="checkbox" />
                                            <span>Lead Owner</span>
                                        </div>
                                    </div>
                                    <div className="apply_footer">
                                        <div className="apply">
                                            <button onClick={()=>{
                                                if(filterInput === ""){
                                                    toast.error("Select the number of Days");
                                                    return ;
                                                }

                                            }}>Apply</button>
                                        </div>
                                        <div className="cancel">
                                            <button>Clear</button>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div className="leaftlead2">

                                <span>Sort by</span>
                                <input type="date" value={sortDate} onChange={(e)=>setSortDate(e.target.value)} />

                            </div>

                        </div>

                        <div>

                            <div className="table11">

                                <div className="my_open my_open1">
                                    <h3>My Leads</h3>

                                </div>

                                <div className="relative overflow-x-auto lonj">
                                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

                                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr className="thol saka">
                                                <th scope="col" className="px-6 py-3">
                                                    <input type="checkbox" placeholder="" />
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Lead Name
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Company
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Email
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Phone
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    First Name
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Last Name
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Lead Status
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Industry
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
 

                                            {
                                                currentItems?.map((item, index) => {
                                                    return (
                                                        <tr className="thol saka felas">
                                                            <th scope="col" className="px-6 py-3">
                                                                <input type="checkbox" placeholder="" />
                                                            </th>
                                                            <td scope="col" className="px-6 py-3">
                                                                {item?.LeadOwner?.fullName}
                                                            </td>
                                                            <td scope="col" className="px-6 py-3">
                                                                {item?.Company}
                                                            </td>
                                                            <td scope="col" className="px-6 py-3">
                                                                {item?.Email}
                                                            </td>
                                                            <td scope="col" className="px-6 py-3">
                                                                {item?.Phone}
                                                            </td>
                                                            <td scope="col" className="px-6 py-3">
                                                                {item?.FirstName}
                                                            </td>
                                                            <td scope="col" className="px-6 py-3">
                                                                {item?.LastName}
                                                            </td>
                                                            <td scope="col" className={`px-6 py-3 ${item?.LeadStatus === 'Follow-up' && "followUp"} ${item?.LeadStatus == 'Hot' && 'Hot'} ${item?.LeadStatus == 'Cold' && 'Cold'}  ${item?.LeadStatus == 'Warm' && 'Warm'}`}>
                                                                {item?.LeadStatus}
                                                            </td>
                                                            <td scope="col" className="px-6 py-3">
                                                                {item?.Industry}
                                                            </td>
                                                            <td className="px-6 py-3">
                                                                <OutsideClickHandler
                                                                    onOutsideClick={() => {
                                                                        if (!document.getElementById(`action_box${index}`).classList.contains('hidden')) {
                                                                            document.getElementById(`action_box${index}`).classList.add('hidden');
                                                                        }
                                                                    }}
                                                                >
                                                                    <div>
                                                                        <svg className="floyu" onClick={() => {
                                                                            document.getElementById(`action_box${index}`).classList.toggle('hidden');
                                                                        }} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H28C29.933 0.5 31.5 2.067 31.5 4V28C31.5 29.933 29.933 31.5 28 31.5H4C2.067 31.5 0.5 29.933 0.5 28V4Z" fill="#F5F9FF" />
                                                                            <path d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H28C29.933 0.5 31.5 2.067 31.5 4V28C31.5 29.933 29.933 31.5 28 31.5H4C2.067 31.5 0.5 29.933 0.5 28V4Z" stroke="#B3CBF7" />
                                                                            <path d="M16 14C14.9 14 14 14.9 14 16C14 17.1 14.9 18 16 18C17.1 18 18 17.1 18 16C18 14.9 17.1 14 16 14ZM16 8C14.9 8 14 8.9 14 10C14 11.1 14.9 12 16 12C17.1 12 18 11.1 18 10C18 8.9 17.1 8 16 8ZM16 20C14.9 20 14 20.9 14 22C14 23.1 14.9 24 16 24C17.1 24 18 23.1 18 22C18 20.9 17.1 20 16 20Z" fill="#49515C" />
                                                                        </svg>


                                                                        <div

                                                                            id={`action_box${index}`}
                                                                            className="z-10 taning hidden action_box bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                                                                        >
                                                                            <ul
                                                                                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                                                                aria-labelledby="dropdownActionButton"
                                                                            >
                                                                                <li className="sysok">

                                                                                    <a
                                                                                        onClick={() => navigate("/adminDash/editLead", { state: item })}
                                                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                                                    >
                                                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <path d="M9.71569 5.51667L10.4824 6.28333L2.93236 13.8333H2.16569V13.0667L9.71569 5.51667ZM12.7157 0.5C12.5074 0.5 12.2907 0.583333 12.1324 0.741667L10.6074 2.26667L13.7324 5.39167L15.2574 3.86667C15.5824 3.54167 15.5824 3.01667 15.2574 2.69167L13.3074 0.741667C13.1407 0.575 12.9324 0.5 12.7157 0.5ZM9.71569 3.15833L0.499023 12.375V15.5H3.62402L12.8407 6.28333L9.71569 3.15833Z" fill="#383838" />
                                                                                        </svg>

                                                                                        <span>Edit</span>
                                                                                    </a>
                                                                                </li>
                                                                                <li className="sysok">
                                                                                    <a
                                                                                        onClick={() => {
                                                                                            navigate(`/adminDash/importLead/${item._id}`);
                                                                                        }}
                                                                                        href="#"
                                                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                                                    >
                                                                                        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <path d="M10.0002 2.41667C13.1585 2.41667 15.9752 4.19167 17.3502 7C15.9752 9.80833 13.1585 11.5833 10.0002 11.5833C6.84183 11.5833 4.02516 9.80833 2.65016 7C4.02516 4.19167 6.84183 2.41667 10.0002 2.41667ZM10.0002 0.75C5.8335 0.75 2.27516 3.34167 0.833496 7C2.27516 10.6583 5.8335 13.25 10.0002 13.25C14.1668 13.25 17.7252 10.6583 19.1668 7C17.7252 3.34167 14.1668 0.75 10.0002 0.75ZM10.0002 4.91667C11.1502 4.91667 12.0835 5.85 12.0835 7C12.0835 8.15 11.1502 9.08333 10.0002 9.08333C8.85016 9.08333 7.91683 8.15 7.91683 7C7.91683 5.85 8.85016 4.91667 10.0002 4.91667ZM10.0002 3.25C7.9335 3.25 6.25016 4.93333 6.25016 7C6.25016 9.06667 7.9335 10.75 10.0002 10.75C12.0668 10.75 13.7502 9.06667 13.7502 7C13.7502 4.93333 12.0668 3.25 10.0002 3.25Z" fill="#383838" />
                                                                                        </svg>

                                                                                        <span>View</span>
                                                                                    </a>
                                                                                </li>
                                                                                <li className="sysok">
                                                                                    <a


                                                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                                                    >
                                                                                        <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <path d="M9.33317 5.5V13.8333H2.6665V5.5H9.33317ZM8.08317 0.5H3.9165L3.08317 1.33333H0.166504V3H11.8332V1.33333H8.9165L8.08317 0.5ZM10.9998 3.83333H0.999837V13.8333C0.999837 14.75 1.74984 15.5 2.6665 15.5H9.33317C10.2498 15.5 10.9998 14.75 10.9998 13.8333V3.83333Z" fill="#DE3730" />
                                                                                        </svg>

                                                                                        <span onClick={() => {
                                                                                            deleteProject(item?._id)
                                                                                        }}>Delete</span>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>

                                                                        </div>
                                                                    </div>
                                                                </OutsideClickHandler>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }


                                        </tbody>
                                    </table>

                                </div>


                                <div className="prev_next">

                                    <div className="next">
                                        <button onClick={prevPage} disabled={currentPage === 1}>
                                            <span>Prev</span>
                                            <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.08748 0L0.912476 1.175L4.72914 5L0.912476 8.825L2.08748 10L7.08748 5L2.08748 0Z" fill="#666D76" />
                                            </svg>

                                        </button>
                                    </div>

                                    <div className="on1">
                                        <p>{currentPage}</p>
                                    </div>

                                    <div className="next">
                                        <button onClick={nextPage} disabled={currentPage === totalPages}><span>Next</span>
                                            <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.08748 0L0.912476 1.175L4.72914 5L0.912476 8.825L2.08748 10L7.08748 5L2.08748 0Z" fill="#666D76" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default MyLead;
