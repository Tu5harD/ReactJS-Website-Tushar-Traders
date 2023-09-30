import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Leader.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import AOS from "aos";
import "aos/dist/aos.css";
const Leader = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <>
      <section class="feed-your-cattle pt-3">
        <div class="container pt-5 pb-5" data-aos="fade-right">
          <div class="row">
            <div class="col-sm-12">
              <div class="feed-your-cattle_inner text-green text-center">
                <div >
                  <h5>Feed Your Cattle the Best</h5>

                  <h2>WE ARE LeaderS in Cattle Feed Suppliers</h2>

                  <p>
                    Every person who uses our feed only has positive things to
                    say about it
                  </p>
                </div>

                <Link to="/contact">
                  <Button
                    variant="contained"
                    className=" bg-black  p-2"
                  >
                    Contact Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Leader;
