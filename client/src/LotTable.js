import { Component } from "react";
import axios from "axios";

let endpoint = "http://localhost:8080";

class LotTable extends Component {
  constructor(pops) {
    super(pops);
    this.state = {
      students: [],
      //   students: [
      //     { id: 1, name: "Wasif", age: 21, email: "wasif@email.com" },
      //     { id: 2, name: "Ali", age: 19, email: "ali@email.com" },
      //     { id: 3, name: "Saad", age: 16, email: "saad@email.com" },
      //     { id: 4, name: "Asad", age: 25, email: "asad@email.com" },
      //   ],
    };
  }

  componentDidMount() {
    this.getTask();
  }

  getTask = () => {
    axios.get(endpoint + "/api/tabletask").then((res) => {
      if (res.data) {
        this.setState({
          students: res.data,
        });
        console.log(this.state.students);
      } else {
        this.setState({
          students: "",
        });
      }
    });
  };

  renderTableHeader() {
    let header = Object.keys(this.state.students);
    // Object.keys(this.state.students.keys);

    console.log(header);
    // return header.map((key, index) => {
    //   return <th key={index}>{key.toUpperCase()}</th>;
    // });
  }

  renderTableData() {
    return this.state.students.map((student, index) => {
      const { lot_id, eqp_id, foup_id, reticle_id, reticlepod_id } = student;
      return (
        <tr key={lot_id}>
          <td>{lot_id}</td>
          <td>{eqp_id}</td>
          <td>{foup_id}</td>
          <td>{reticle_id}</td>
          <td>{reticlepod_id}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <h1 id="title">Dynamic Table</h1>
        <table id="students">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default LotTable;
