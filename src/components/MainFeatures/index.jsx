import React from "react";
import s from "../MainFeatures/index.module.css";

import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import { AiFillAndroid } from "react-icons/ai";

export default function MainFeatures() {
  return (
    <div className={s.MainFeatures}>
      <img src="https://images.unsplash.com/photo-1605170496448-dc99fd4c3872?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

      <div className={s.rightTextPartOuterWrapper}>
        <h2>Main Features</h2>

        <div className={s.rightTextPartInnerWrapper}>
          <div className={s.feature}>
            {" "}
            <TbTruckDelivery />{" "}
            <div>
              {" "}
              <h4>Quick Delivery</h4>{" "}
              <p>
                Food Delivery is a thriving business and there are many <br />{" "}
                opportunities for this Businesses as its Growing.
              </p>{" "}
            </div>{" "}
          </div>

          <div className={s.feature}>
            <MdOutlinePayment />{" "}
            <div>
              {" "}
              <h4>Fast Payment</h4>{" "}
              <p>
                Food Delivery is a thriving business and there are many <br />{" "}
                opportunities for this Businesses as its Growing.
              </p>{" "}
            </div>{" "}
          </div>

          <div className={s.feature}>
            <AiFillAndroid />{" "}
            <div>
              {" "}
              <h4>Get Reviews</h4>{" "}
              <p>
                Food Delivery is a thriving business and there are many <br />{" "}
                opportunities for this Businesses as its Growing.
              </p>{" "}
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
