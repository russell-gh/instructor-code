import React, { Component } from "react";
import products from "../data.json";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

class Rent extends Component {
  state = { input: { weeks: 1 }, formValid: false };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onSelect = (e) => {
    this.setState({ weeks: e.target.value });
  };

  onChange = (e) => {
    //handle checkbox deselect
    if (e.target.id === "terms" && e.target.checked === false) {
      this.setState({
        formValid: false,
        input: { ...this.state.input, terms: false },
      });
      return;
    }

    this.setState(
      {
        ...this.state,
        input: { ...this.state.input, [e.target.id]: e.target.value },
      },
      () => {
        if (
          Object.keys(this.state.input).length >= 7 &&
          this.state.input.terms
        ) {
          this.setState({ formValid: true });
        }
      }
    );
  };

  render() {
    console.log(this.state);
    const product = products.find((product) => {
      return product.id === this.props.selectedRentId;
    });

    const discount =
      this.state.input.weeks > 1 ? 2 * this.state.input.weeks : 0;
    const price =
      this.state.input.weeks * product.prices.weekly * (1 - discount / 100);

    return (
      <div className="rent">
        <div className="rentHeader">
          <div onClick={() => this.props.onSelectedClick(undefined)}>
            <IoMdArrowRoundBack />
          </div>
          <h2>
            Apply to rent {product.name} @ &pound;{product.prices.weekly}
          </h2>
        </div>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          onChange={this.onChange}
        >
          <div className="weeksRequired">
            <select id="weeks" name="weeks">
              {new Array(6).fill(undefined).map((item, index) => {
                return (
                  <option key={index} value={index + 1}>
                    {index + 1}
                  </option>
                );
              })}
            </select>
            <p>Total: &pound;{price.toFixed(2)}</p>
            <label htmlFor="startDate">Start date</label>
            <input type="date" id="startDate" name="start_date" />
          </div>
          <p>
            All applications are on a subject to approval basis. Please complete
            all fields accurately.
          </p>

          <input
            type="hidden"
            name="access_key"
            value="46785e41-cd11-457f-8ded-1c0dae07f90c"
          />

          <div className="personal">
            <div>
              <label htmlFor="full_name">Full name</label>
              <input type="text" id="full_name" name="full_name" />
            </div>
            <div>
              <label htmlFor="dob">Date of birth</label>
              <input type="date" id="dob" name="dob" />
            </div>
            <div>
              <label htmlFor="post_code">Post code</label>
              <input type="text" id="post_code" name="post_code" />
            </div>
            <div>
              <label htmlFor="address_line_1">Address 1</label>
              <input type="text" id="address_line_1" name="address_line_1" />
            </div>
            <div>
              <label htmlFor="address_line_1">Address 2</label>
              <input type="text" id="address_line_1" name="address_line_1" />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" name="phone" />
            </div>
            <div>
              <label htmlFor="terms">
                I have read the <Link to="/terms">terms</Link>
              </label>
              <input type="checkbox" id="terms" name="terms" />
            </div>
            <div className="apply">
              <button disabled={!this.state.formValid}>Apply</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Rent;
