import React from "react";
import Header from "../Components/Header";

const Spin = () => {
  class Menu extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: "coconut" };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
      alert("Votre parfum favori est : " + this.state.value);
      event.preventDefault();
    }

    render() {
      return (
        <>
          <Header />
          <form onSubmit={this.handleSubmit}>
            <label>
              Choisissez votre parfum favori :
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="grapefruit">Pamplemousse</option>
                <option value="lime">Citron vert</option>
                <option value="coconut">Noix de coco</option>
                <option value="mango">Mangue</option>
              </select>
            </label>
            <input type="submit" value="Envoyer" />
          </form>
        </>
      );
    }
  }
};

export default Spin;
