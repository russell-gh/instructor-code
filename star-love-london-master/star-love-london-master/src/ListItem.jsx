import React from "react";

class ListItem extends React.Component {
  handleClick = () => {
    this.props.setProfile(this.props);
    this.props.setDisplay("viewProfile");
  };
  render() {
    return (
      <div onClick={this.handleClick} className="card bg-warning mb-3">
        <div className="row no-gutters">
          <div className="col-4">
            <img
              src={this.props.image}
              className="card-img"
              alt={this.props.name}
            />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title  text-dark">{this.props.name}</h5>
              <div className="card-text">
                <small className="text-muted">
                  Species: {this.props.species}
                </small>
              </div>
              <div className="card-text">
                <small className="text-muted">
                  Homeworld: {this.props.homeworld}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListItem;
