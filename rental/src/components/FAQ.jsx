import React, { Component } from "react";

class FAQ extends Component {
  render() {
    return (
      <div className="faq">
        <h2>How much is delivery</h2>
        <p>Free</p>
        <h2>How do I return an item</h2>
        <p>We provide a shipping label for free return</p>
        <h2>What happens if I damage or loose a watch</h2>
        <p>You are responsible for the item while in your possession</p>
        <h2>How many watches can I rent</h2>
        <p>Currently 1 per customer</p>
        <h2>Do you discount for longer periods</h2>
        <p>Yes, discounts are shown in the checkout process</p>
        <h2>How can I pay</h2>
        <p>
          Following application, you will be sent a payment link to pay by card
        </p>
      </div>
    );
  }
}

export default FAQ;
