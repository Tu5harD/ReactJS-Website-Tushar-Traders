import React from "react";
import "./HeroContact.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
export default function HeroContact(props) {
  return (
    <>
      <section class="page-top page-header-1">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="breadcrumbs-wrap">
                <ul class="breadcrumb">
                  <li
                    itemscope=""
                    itemtype="http://data-vocabulary.org/Breadcrumb"
                  >
                    <Link className="contact-link" to='/'>
                      <span itemprop="title">Home</span>
                    </Link>
                    <i class="delimiter"></i>
                    <span>{props.title}</span>
                  </li>
                 
                </ul>{" "}
              </div>
              <div class="">
                <h1 class="page-title">{props.subtitle}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
