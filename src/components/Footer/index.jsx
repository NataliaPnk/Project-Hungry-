import React from "react";
import s from "../Footer/index.module.css";

export default function Footer() {
  return (
    <div className={s.footerOuterContainer}>
      <div className={s.footerInnerContainer}>
        <div className={s.leftPart}>
          <h3>Hungry.</h3>
          <p>
            Food Delivery is a thriving business and <br /> there are many
            opportunities for this <br />
            Businesses as its Growing.
          </p>
        </div>

        <div className={s.centrePart}>
          <div className={s.colon}>
            <h4>Support</h4>
            <p>Privacy & Policy</p>
            <p>Terms & Condition</p>
            <p>Guidelines</p>
            <p>Help</p>
          </div>
          <div className={s.colon}>
            <h4>Useful Links</h4>
            <p>Privacy & Policy</p>
            <p>Terms & Condition</p>
            <p>Guidelines</p>
            <p>Help</p>
          </div>
          <div className={s.colon}>
            <h4>News Letter</h4>
            <div className={s.subscribeInput}>
              <input type="email" placeholder="Email" />
              <button>Subscribe</button>
            </div>
            <p>Guidelines</p>
            <p>Help</p>
          </div>
        </div>
      </div>
    </div>
  );
}
