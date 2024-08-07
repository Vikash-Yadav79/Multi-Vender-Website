import React, { useRef, useState } from "react";
import logo from "./assest/images/simpexLogo.jpg";
import logo_two from "./assest/images/logo_two.png";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import toast from "react-hot-toast";

import axios from "axios";

function Navbar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const options = [
    "ACCOUNTANT",
    "ACTUARY",
    "ADVISOR",
    "AIDE",
    "ANIMATOR",
    "ARCHER",
    "ARTIST",
    "ASTRONAUT",
    "ASTRONOMER",
    "ATHLETE",
    "ATTORNEY",
    "AUCTIONEER",
    "AUTHOR",
    "AC REPAIR",
    "ANIMAL TRAINER",
    "ADVOCAT",
    "ANTHROPOLOGIST",
    "ATTENDANT",
    "BABYSITTER",
    "BAKER",
    "BANKER",
    "BARBER",
    "BASEBALL PLAYER",
    "BASKETHBALL PLAYER",
    "BELLHOP",
    "BIOLOGIST",
    "BLACKSMITH",
    "BOOKKEEPER",
    "BOWLER",
    "BUILDER",
    "BUTCHER",
    "BUTLER",
    "BUSINESS ANALYST",
    "BULDER",
    "BELLBOY",
    "CAB DRIVER",
    "CALLIGRAPHER",
    "CAPTAIN",
    "CAREGIVER",
    "CARPENTER",
    "CARTOGRAPHER",
    "CARTOONIST",
    "CASHIER",
    "CATCHER",
    "CATERER",
    "CELLIST",
    "CHAPLAIN",
    "CHAUFFEUR",
    "CHEF",
    "CHEMIST",
    "CLERGYMAN",
    "COACH",
    "COBBLER",
    "COMPOSER",
    "CONCIERGE",
    "CONSUL",
    "CONTRACTOR",
    "COOK",
    "CORONER",
    "COURIER",
    "CRYPTOGRAPHER",
    "CUSTODIAN",
    "CUSTUME DESIGNER",
    "CREATIVE ENGINEERING",
    "COMEDIAN",
    "CONSTRUCTION WORKER",
    "COACHMAKER",
    "CABINET MAKER",
    "CASER",
    "COACH MAKER",
    "GARBAGEMAN",
    "HAIRDRESSER",
    "HANDYMAN",
    "HARPIST",
    "HIGHWAY PATROL",
    "HUNTER",
    "MACHINE",
    "MINER",
    "ILLUSTRATOR",
    "IMPORTER",
    "INSTRUCTOR",
    "INTERN",
    "INTERNIST",
    "INTERPRETER",
    "INVENTOR",
    "INVESTIGATOR",
    "JANITOR",
    "JOURNALIST",
    "JEWELER",
    "KARATE",
    "TEACHER",
    "LABORER",
    "LANDLORD",
    "LANDSCAPER",
    "LAWYER",
    "LECTURE",
    "LEGAL AIDE",
    "LIBRARIAN",
    "LIBRETTIST",
    "LIFEGUARD",
    "LINGUIST",
    "LOBBYIST",
    "LOCKSMITH",
    "LYRICIST",
    "MAGICIAN",
    "MAID",
    "MAIL CARRIER",
    "MANUFACTURER",
    "MARINE",
    "MARKETER",
    "MASON",
    "MATHEMATICIAN",
    "MECHANIC",
    "MINER",
    "MUSICIAN",
    "NAVIGATOR",
    "NEGOTIATOR",
    "NOTARY",
    "NOVELIST",
    "NUN",
    "NURSE",
    "PALEONTOLOGIST",
    "PARALEGAL",
    "PARK RANGER",
    "PATHOLOGIST",
    "PAWNBROKER",
    "PEDDLER/ FARIWALA",
    "PEDIATRICIAN",
    "PERCUSSIONIST",
    "PERFORMER",
    "PHARMACIST",
    "PHILOSOPHER",
    "PHOTOGRAPHER",
    "PHYSICIAN",
    "PHYSICIST",
    "PAINIST",
    "PITCHER",
    "PLUMBER",
    "PRIVATE DETECTIVE",
    "PROFESSOR",
    "PROGRAMMER",
    "PSYCHIATRIST",
    "PSYCHOLOGIST",
    "PUBLISHER",
    "PANDITJI",
    "QUARTERBACK",
    "QUILTER",
    "DANCER",
    "DENTIST",
    "DERMATOLOGIST",
    "DESIGNER",
    "DETECTIVE",
    "DISC JOCKEY",
    "DIVER",
    "DOCTOR",
    "DOORMAN",
    "DRIVER",
    "DRUMMER",
    "DRY CLEANER",
    "DELIVERY BOY",
    "DECORATOR",
    "ECOLOGIST",
    "ECONOMIST",
    "EDITOR",
    "EDUCATOR",
    "ELECTRICIAN",
    "ENGINEER",
    "FARMER",
    "FINANCIER",
    "FIREFIGHTER",
    "FISHERMAN",
    "FLUTIST",
    "FOOTBALL PLAYER",
    "FORMAN",
    "FACTORY WORKER",
    "FARMER",
    "FIREFIGHTER",
    "GAME DESIGNER",
    "GARBAGE MAN",
    "GARDENER",
    "GATHERER",
    "GEMCUTTER",
    "GENETICIST",
    "GEOGRAPHER",
    "GEOLOGIST",
    "GOLFER",
    "GROCER",
    "GUIDE",
    "GAS STATION",
    "RADIOLOGIST",
    "RANCHER",
    "RANGER",
    "REAL ESTATE AGENT",
    "RECEPTIONIST",
    "REFEREE",
    "REGISTRAR",
    "REPORTER",
    "REPRESENTATIVE",
    "RESEARCHER",
    "RESTAURATEUR",
    "RETAILER",
    "RETIREE",
    "SAILOR",
    "SALESPERSON",
    "SAXOPHONIST",
    "SCOUT",
    "SCUBA DIVER",
    "SECURITY GUARD",
    "SENATOR",
    "SHERIFF",
    "SINGER",
    "SMITH",
    "SOCIALITE",
    "SPY",
    "STOCK BROKER",
    "STREET SWEEPER",
    "SURVEYOR",
    "SWIMMER",
    "TAILOR",
    "TAXI DRIVER",
    "TAXIDERMIST",
    "TEACHER",
    "TECHNICIAN",
    "TENNIS PLAYER",
    "TEST PILOT",
    "TILER",
    "TOOLMAKER",
    "TRADER",
    "TRAINER",
    "TRANSLATOR",
    "TRAVEL AGENT",
    "TRUCK DRIVER",
    "TUTOR",
    "TYPEWRITER",
    "TEA GARDEN LABORER",
    "THERAPIST",
    "TOUR GUIDE",
    "UNDERTAKER",
    "USHER",
    "VALET",
    "VETERAN",
    "VETERINARIAN",
    "VICAR",
    "VIOLINIST",
    "WAITER",
    "WAITRESS",
    "WARDEN",
    "WATCHMAKER",
    "WEAVER",
    "WELDER",
    "WOODCARVER",
    "WORKMAN",
    "WRANGLER",
    "WRITER",
    "YODELER",
    "ZOOKEEPER",
    "ZOOLOGIST",
    "VEGETABLE GARDEN",
    "TEA GARDEN",
    "FLOWER GARDEN",
    "FIELD",
    "NURSERY",
    "FISHING POND",
    "POULTRY FARM",
    "DAIRY FARM",
    "GARDEN",
    "PLANTATION",
    "ORGANIC FARMING",
    "SUBSISTENCE FARMING",
    "PLANTATION AGRICULTURE",
    "HARVESTING",
    "IRRIGATION",
    "LIVESTOCK FARMING",
    "SHIFTING FARMING",
    "AQUACULTURE",
    "ARABLE FARMING",
    "COMMERCIAL FARMING",
    "COVER CROPPING",
    "HYDROPONICS",
    "PLANTING",
    "AGRICULTURAL COMMUNICATION",
    "AGROFORESTRY",
    "HORTICULTURE",
    "MIXED FARMING",
    "NOMADIC HERDING",
    "SOWING",
    "INTEGRATING TREES",
    "ANIMALS AND FORAGE",
    "AGROFORESTRY",
    "VERTICAL FARMING",
    "REGENERATIVE AGRICULTURE",
    "PRECISION AGRICULTURE",
    "AQUAPONICS",
    "DRY LAND FARMING",
    "MEDITERRANEAN FARMING",
    "TOLET",
    "FARMING MACHINE",
    "FARM VEHICLES",
    "HOME APPLIANCES MACHINES",
    "INDUSTRIAL MACHINES",
    "FURNITURE",
    "ELECTRICAL& ELECTRONICS",
    "VEHICLES",
    "TRANSPORT VEHICLES",
    "E BIKE & SCOOTER",
    "FACTORY",
    "ALL CONSTRUCTION",
    "BUILDERS",
    "INDUSTRIAL PLANTS",
    "SUPPLIES",
    "MACHINERY & EQUIPMENT",
    "REAL ESTATE",
    "MEDICAL INSTRUMENT",
    "MECHANICAL PARTS",
    "ALLIED INDUSTRIES",
    "IT SERVICES",
    "FERTILIZER",
  ];

  const [jobOptions, setJobOptions] = useState(options.sort());

  const [formData, setFormData] = useState({
    NAME: "",
    EMAIL: "",
    PHONE: "",
    CATEGORIES: "",
    JOB_PROFILE: "",
    IMAGE: "",
    VIDEO: "",
  });



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    /* const response = await axios.post(
      "http://localhost:5000/listing",
      formData
    );
    if (response.status === 201) {
      toast.success("List Added Successfully...");
      handleClose();
    } */
    toast.success("List Added Successfully...");
    handleClose();

  };
  return (
    <>
      {/* <!-- Header Start --> */}
      <header className="header can-sticky">
        <div className="container ">
          <div className="header_inner">
            {/* <!-- logo --> */}
            <div className="logo">
              <Link to="/" className="d-flex h-100">
                <img src={logo} alt="logo" className="image-fit-contain" />
                <img src={logo_two} alt="logo" className="image-fit-contain" />
              </Link>
            </div>
            {/* <!-- logo --> */}
            {/* <!-- Nav & Actions --> */}
            <div className="nav_actions">
              {/* <!-- Navigation --> */}
              <nav className="navigation">
                <ul className="main-menu">
                  <li className="menu-item">
                    <Link to="/home" className="active">
                      Home
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/explore">Explore</Link>
                  </li>
                  {/* <li className="menu-item">
                    <Link to="/explore">Categories</Link>
                  </li> */}
                  {/* <li className="menu-item menu-item-has-children">
                    <Link to="#">Categeries</Link>
                    <ul className="sub-menu">
                      <li className="menu-item menu-item-has-children">
                        <Link to="#">Listing Grid</Link>
                        <ul className="sub-menu">
                          <li className="menu-item">
                            <Link to="/listing_grid">Full Width</Link>
                          </li>
                          <li className="menu-item">
                            <Link to="/listing_grid_left">Left Sidebar</Link>
                          </li>
                          <li className="menu-item">
                            <Link to="/listing_grid_right">Right Sidebar</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item">
                        <Link to="/listing_details">Listing Details</Link>
                      </li>
                    </ul>
                  </li> */}
                  <li className="menu-item ">
                    <Link to="/blog_details">Blog</Link>
                    {/* <ul className="sub-menu">
                      <li className="menu-item menu-item-has-children">
                        <Link to="#">Blog Grid</Link>
                        <ul className="sub-menu">
                          <li className="menu-item">
                            <Link to="/blog_grid">Full Width</Link>
                          </li>
                          <li className="menu-item">
                            <Link to="/blog_grid_left">Left Sidebar</Link>
                          </li>
                          <li className="menu-item">
                            <Link to="/blog_grid_right">Right Sidebar</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item">
                        <Link to="/blog_details">Blog Details</Link>
                      </li>
                    </ul> */}
                  </li>
                  <li className="menu-item menu-item-has-children">
                    <Link to="#">Services</Link>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        <Link to="/services"> All Services</Link>
                      </li>
                      {/* <li className="menu-item">
                        <Link to="/login">Login</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/register">SignUp</Link>
                      </li> */}
                    </ul>
                  </li>
                  <li className="menu-item">
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
              {/*      <!-- Navigation --> */}
              {/*  <!-- Header Actions --> */}
              <div className="header_actions">
                <ul>
                  <li>
                    <Link to="/login" className="login_btn">
                      <i className="fal fa-user-circle me-2"></i>
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="thm-btn btn-rounded"
                      onClick={handleShow}
                    >
                      <i className="bi-plus"></i>
                      <Link to="/listing" className="text-light">
                        Add Listing
                      </Link>
                    </button>
                  </li>
                </ul>
                <div className="hamburger">
                  <div className="hamburger_btn">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
              {/* <!-- Header Actions --> */}
            </div>
            {/*     <!-- Nav & Actions --> */}
          </div>
        </div>
      </header>
      {/*  <!-- Header End --> */}

      {/* modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Listing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="NAME"
                placeholder="NAME"
                className="form-control"
                value={formData.NAME}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="EMAIL"
                placeholder="EMAIL"
                className="form-control"
                value={formData.EMAIL}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                name="PHONE"
                placeholder="PHONE"
                className="form-control"
                value={formData.PHONE}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <select
                name="CATEGORIES"
                className="form-control"
                onChange={handleChange}
                required
              >
                <option value="">CATEGORIES</option>
                <option value="SERVICES">SERVICES</option>
                <option value="LEASE">LEASE</option>
                <option value="RENT">RENT</option>
                <option value="PROFESSIONAL">PROFESSIONAL</option>
              </select>
            </div>
            <div className="form-group">
              <select
                name="JOB_PROFILE"
                className="form-control"
                onChange={handleChange}
                required
              >
                <option value="">LIST YOUR JOB PROFILE</option>
                {jobOptions.map((items, index) => {
                  return (
                    <option value={items} key={index}>
                      {items}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="" className="pe-4">
                Upload Image:{" "}
              </label>
              <input
                type="file"
                name="IMAGE"
                accept="image/*"
                value={formData.IMAGE}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="" className="pe-4">
                Upload Video:{" "}
              </label>

              <input
                type="file"
                name="VIDEO"
                accept="video/*"
                value={formData.VIDEO}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Add
              </Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Navbar;
