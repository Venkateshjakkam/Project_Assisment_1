import React from "react";
import './Payments.css';

const data = [
  {
    id: 1,
    name: "Domestic Payment",
    image:
      "https://razorpay.com/payment-button/pl_J6wjQIxfpSd5tL/view/?utm_source=payment_button&utm_medium=button&utm_campaign=payment_button",
  },
  {
    id: 2,
    name: "International Payment ",
    image:
      "https://razorpay.com/payment-button/pl_J6wjQIxfpSd5tL/view/?utm_source=payment_button&utm_medium=button&utm_campaign=payment_button",
  },
  {
    id: 3,
    name: "QR Code Payment",
    image: "https://downtowncoders.com/assets/images/DTC_QR_Code.jpg",
  },
];

function Payments() {
  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <div>
        <h1 style={{ textAlign: "center" }}>Payments</h1>
        <p style={{ textAlign: "center" }}>
          Please choose any one of the following options to proceed with the
          payment:
        </p>
      </div>

      <div>
        <div className="tablediv" style={{ textAlign: "center" }}>
          <table style={{ textAlign: "center" }}>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {data.map((value, key) => {
                return (
                  <tr key={key}>
                    <td>{value.id}</td>
                    <td>{value.name}</td>
                    <td>
                      <img src={value.image} style={{ width: "200px" }} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Payments;
