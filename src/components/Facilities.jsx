import React from "react";
import { FaHandHoldingMedical } from "react-icons/fa6";
// import { FaLongArrowAltRight } from "react-icons/fa";
import { MdEmergencyShare } from "react-icons/md";

const Facilities = () => {
  return (
    <div className="Facilities">
      <div className="container">
        <div className="row m-0 g-0 p-0">
          <div className="col-md-6 py-5 FacilitiesPaddingRemove">
            <div className="row    FacilitiesPaddingRemove py-5">
              <div className="row aboutHeading">
                <h5>
                  <span>
                    <FaHandHoldingMedical fontSize={25} />
                  </span>{" "}
                  <span>Facilities</span>
                </h5>
              </div>
              <div className="row aboutSubheading">
                <h1>Facilities We Provide</h1>
              </div>
              <div className="row aboutDescription atSmallScreenReview">
                <p className="mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid deserunt pariatur perspiciatis quisquam nam totam,
                  esse consectetur officiis voluptas nulla? Rem minus odit
                  blanditiis veritatis alias deserunt quaerat eum quo?
                </p>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid deserunt pariatur perspiciatis quisquam nam totam,
                  esse consectetur officiis voluptas nulla? Rem minus odit
                  blanditiis veritatis alias deserunt quaerat eum quo?
                </p>
              </div>
              {/* <div className="row aboutDescription m-0 p-0">
                <ul>
                  <li>
                    <b>DIABETES REVERSAL PROGRAM </b>
                    <span>
                      Lorem ipsum dolor sit amet Lorem ipsum dolor sit, amet
                      consectetur adipisicing elit. Autem, debitis. Error
                      ratione, facilis necessitatibus non
                    </span>
                  </li>
                  <li>
                    <b>WEIGHT MANAGEMENT PROGRAM </b>{" "}
                    <span>
                      Lorem ipsum dolor sit amet Lorem ipsum dolor sit, amet
                      consectetur adipisicing elit. Autem, debitis. Error
                      ratione, facilis necessitatibus non
                    </span>
                  </li>
                  <li>
                    <b>THYROID REVERSAL PROGRAM</b>{" "}
                    <span>
                      Lorem ipsum dolor sit amet Lorem ipsum dolor sit, amet
                      consectetur adipisicing elit. Autem, debitis. Error
                      ratione, facilis necessitatibus non
                    </span>
                  </li>
                  <li>
                    <b>PCOD/PCOS REVERSAL PROGRAMS</b>{" "}
                    <span>
                      Lorem ipsum dolor sit amet Lorem ipsum dolor sit, amet
                      consectetur adipisicing elit. Autem, debitis. Error
                      ratione, facilis necessitatibus non
                    </span>
                  </li>
                  <li>
                    <b>THERAPEUTIC YOGA CLASSES</b>{" "}
                    <span>
                      Lorem ipsum dolor sit amet Lorem ipsum dolor sit, amet
                      consectetur adipisicing elit. Autem, debitis. Error
                      ratione, facilis necessitatibus non
                    </span>
                  </li>
                  <li>
                    <b> 1-1 CUSTOMISED DIET PLAN WITH DOCTOR CONSULTATION </b>{" "}
                    <span>
                      Lorem ipsum dolor sit amet Lorem ipsum dolor sit, amet
                      consectetur adipisicing elit. Autem, debitis. Error
                      ratione, facilis necessitatibus non
                    </span>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
          <div className="col-md-6 py-5 ">
            <div className="row paddingSetFac">
              <div className="col-6 ">
                <div className="row flex-column ">
                  <div className="col ">
                    <div className="boxFacilities p-3 m-2">
                      <div className="row logoProcessFa text-center">
                        <span>
                          <MdEmergencyShare
                            fontSize={30}
                            color="rgb(31,87,162)"
                            className="logoSizeFac"
                          />
                        </span>
                      </div>
                      <div className=" row title FacilitiesTitle sessionColor">
                        <h5>Online Session</h5>
                      </div>
                      <div className="row description FacilitiesDescription">
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          nulla tempore soluta
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col ">
                    <div className="boxFacilities p-3 m-2">
                      <div className="row logoProcessFa text-center">
                        <span>
                          <MdEmergencyShare
                            fontSize={30}
                            color="rgb(31,87,162)"
                            className="logoSizeFac"
                          />
                        </span>
                      </div>
                      <div className="sessionColor row title FacilitiesTitle">
                        <h5>Online Session</h5>
                      </div>
                      <div className="row description FacilitiesDescription">
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          nulla tempore soluta
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-6">
                <div className="row flex-column ">
                  <div className="col ">
                    <div className="boxFacilities  p-3 m-2">
                      <div className="row logoProcessFa text-center">
                        <span>
                          <MdEmergencyShare
                            fontSize={30}
                            color="rgb(31,87,162)"
                            className="logoSizeFac"
                          />
                        </span>
                      </div>
                      <div className="sessionColor row title FacilitiesTitle">
                        <h5>Online Session</h5>
                      </div>
                      <div className="row description FacilitiesDescription">
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          nulla tempore soluta
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col ">
                    <div className="boxFacilities p-3 m-2">
                      <div className="row logoProcessFa text-center">
                        <span>
                          <MdEmergencyShare
                            fontSize={30}
                            color="rgb(31,87,162)"
                            className="logoSizeFac"
                          />
                        </span>
                      </div>
                      <div className="sessionColor row title FacilitiesTitle">
                        <h5>Online Session</h5>
                      </div>
                      <div className="row description FacilitiesDescription">
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          nulla tempore soluta
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
