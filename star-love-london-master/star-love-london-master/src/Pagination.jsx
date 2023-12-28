import React from "react";
import "./App.css";

class Pagination extends React.Component {
  state = {
    btnArray: []
  };

  componentDidMount() {
    this.createPagination();
  }

  createPagination = () => {
    const {
      totalRecords,
      recordsPerPage,
      buttonsBeforeAfter,
      currentPage
    } = this.props;

    const numberOfPages = Math.ceil(totalRecords / recordsPerPage);
    let btnArray = [];

    if (currentPage - 2 > 0) {
      btnArray.push({ pageText: "<<", command: -2 });
    }
    if (currentPage - 1 > 0) {
      btnArray.push({ pageText: "<", command: -1 });
    }

    let i = 0;
    if (currentPage - buttonsBeforeAfter < 1) {
      i = 0;
    } else {
      i = currentPage - buttonsBeforeAfter - 1;
    }

    let maxPages;
    if (currentPage + buttonsBeforeAfter < numberOfPages) {
      maxPages = currentPage + buttonsBeforeAfter;
    } else {
      maxPages = numberOfPages;
    }

    for (i; i < maxPages; i++) {
      let obj = { id: i, pageText: i + 1, command: 0 };
      if (i + 1 === currentPage) {
        obj.active = true;
      }
      btnArray.push(obj);
    }

    if (currentPage + 1 <= numberOfPages) {
      btnArray.push({ pageText: ">", command: 1 });
    }
    if (currentPage + 2 <= numberOfPages) {
      btnArray.push({ pageText: ">>", command: 2 });
    }

    return btnArray;
  };

  handleCommand(btn) {
    if (btn.command === 0) {
      this.props.handleClick(btn.id + 1);
    } else {
      const newPage = this.props.currentPage + btn.command;
      const numberOfPages = Math.ceil(
        this.props.totalRecords / this.props.recordsPerPage
      );
      if (newPage > 0 && newPage <= numberOfPages) {
        this.props.handleClick(newPage);
      }
    }
  }

  render() {
    return (
      <div className="pagination">
        {this.createPagination().map(btn => {
          return (
            <button
              className={btn.active && "btn btn-warning"}
              onClick={() => this.handleCommand(btn)}
              key={btn.id}
            >
              {btn.pageText}
            </button>
          );
        })}
      </div>
    );
  }
}

export default Pagination;
