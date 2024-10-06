import React, { Component } from "react";
import '../../css/SeatDisplay.css';
import '../../css/form.css';
import SeatPicker from "react-seat-picker";
import 'bootstrap';
export default class PESeatDisplay extends Component {
  state = {
    loading: false
  };

  addSeatCallback = ({ row, number, id }, addCb) => {
    this.setState(
      {
        loading: true
      },
      async () => {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log(`Added seat ${number}, row ${row}, id ${id}`);
        // const newTooltip = `tooltip for id-${id} added by callback`;
        addCb(row, number, id);
        this.setState({ loading: false });
      }
    );
  };

  removeSeatCallback = ({ row, number, id }, removeCb) => {
    this.setState(
      {
        loading: true
      },
      async () => {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log(`Removed seat ${number}, row ${row}, id ${id}`);
        // A value of null will reset the tooltip to the original while '' will hide the tooltip
        const newTooltip = ["A", "B", "C"].includes(row) ? null : "";
        removeCb(row, number, newTooltip);
        this.setState({ loading: false });
      }
    );
  };

  render() {
    const rows = [
      [
        { id: 1, number: 1, isSelected: this.state.props, isReserved: true },
        { id: 2, number: 2, isSelected: this.state.props, isReserved: true },
        null,
        {
          id: 3,
          number: 3,
          isSelected: this.state.props,
          isReserved: true
        },
        { id: 4, number: 4, isSelected: this.state.props, isReserved: true },

        { id: 5, number: 5, isSelected: this.state.props, isReserved: true }
      ],
      [
        {
          id: 6,
          number: 6,
          isSelected: this.state.props,
          isReserved: true
        },
        { id: 7, number: 7, isSelected: this.state.props, isReserved: true },
        null,
        { id: 8, number: 8, isSelected: this.state.props, isReserved: true },
        { id: 9, number: 9, isSelected: this.state.props, isReserved: true },

        { id: 10, number: 10, isSelected: this.state.props, isReserved: true }
      ],
      [
        { id: 11, number: 11, isSelected: this.state.props, isReserved: false },
        { id: 12, number: 12, isSelected: this.state.props, isReserved: false },
        null,
        { id: 13, number: 13, isSelected: this.state.props, isReserved: false },
        { id: 14, number: 14, isSelected: this.state.props, isReserved: false },

        { id: 15, number: 15, isSelected: this.state.props, isReserved: false }
      ],
      [
        { id: 16, number: 16, isSelected: this.state.props, isReserved: false },
        { id: 17, number: 17, isSelected: this.state.props, isReserved: false },
        null,
        { id: 18, number: 18, isSelected: this.state.props, isReserved: false },
        { id: 19, number: 19, isSelected: this.state.props, isReserved: false },

        { id: 20, number: 20, isSelected: this.state.props, isReserved: false }
      ],
      [
        { id: 21, number: 21, isSelected: this.state.props, isReserved: true },
        { id: 22, number: 22, isSelected: this.state.props, isReserved: true },
        null,
        { id: 23, number: 23, isSelected: this.state.props, isReserved: true },
        { id: 24, number: 24, isSelected: this.state.props, isReserved: true },

        { id: 25, number: 25, isSelected: this.state.props, isReserved: true }
      ],
      [
        { id: 26, number: 26, isSelected: this.state.props, isReserved: true },
        { id: 27, number: 27, isSelected: this.state.props, isReserved: true },
        null,
        { id: 28, number: 28, isSelected: this.state.props, isReserved: true },
        { id: 29, number: 29, isSelected: this.state.props, isReserved: true },

        { id: 30, number: 30, isSelected: this.state.props, isReserved: true }
      ],
    ];
    const { loading } = this.state;
    return (
      <div className="container">
          <div className={'row'}>
          <div className={'card col-7'} id={'formbody'}>
          <h1>Premium Economy</h1>
        <div>
          <SeatPicker
            addSeatCallback={this.addSeatCallback}
            removeSeatCallback={this.removeSeatCallback}
            rows={rows}
            maxReservableSeats={3}
            alpha
            visible
            selectedByDefault
            loading={loading}
            tooltipProps={{ multiline: true }}
          />
        </div>
          </div>
          </div>
      </div>
    );
  }
}
