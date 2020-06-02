import React, { Component } from "react";
import Button from "./button";
import actors from "../data/imdb.json";

class Card extends Component {
  constructor(props) {
    super(props);

    this.handleDeleteActor = this.handleDeleteActor.bind(this);
    this.generateActor = this.generateActor.bind(this);
    this.nameSort = this.nameSort.bind(this);
    this.popSort = this.popSort.bind(this);
    this.state = {
      rows: [actors[0], actors[1], actors[2], actors[3], actors[4]],
    };
  }

  handleDeleteActor(e) {
    this.setState({
      rows: this.state.rows.filter((elem) => elem.name !== e.target.value),
    });
  }

  generateTableContent() {
    return this.state.rows.map((actor) => (
      <tr key={actor.name}>
        <td key={`${actor.name}PicBox`}>
          <img
            key={`${actor.name}Pic`}
            src={actor.pictureUrl}
            alt={actor.name}
          ></img>
        </td>
        <td key={`${actor.name}Name`}>{actor.name}</td>
        <td key={`${actor.name}Pop`}>{actor.popularity}</td>
        <td key={`${actor.name}Btn`}>
          <Button
            btnText="Delete"
            reference={actor.name}
            isClicked={this.handleDeleteActor}
          />
        </td>
      </tr>
    ));
  }
  generateActor() {
    let actorNotFound = true;
    while (actorNotFound) {
      let random = Math.floor(Math.random() * actors.length);

      if (!this.state.rows.includes(actors[random])) {
        this.state.rows.push(actors[random]);
        actorNotFound = false;
      }
    }
    this.setState({
      rows: this.state.rows,
    });
  }
  
  nameSort() {
    this.setState({
      rows: this.state.rows.sort((a, b) => a.name.localeCompare(b.name)),
    });
  }

  popSort() {
    this.setState({
      rows: this.state.rows.sort((a, b) =>
        a.popularity > b.popularity ? 1 : b.popularity > a.popularity ? -1 : 0
      ),
    });
  }

  render() {
    return (
      <div>
        <div>
          <Button
            btnText="Generate random actor"
            isClicked={this.generateActor}
          />
          <Button btnText="Sort by name" isClicked={this.nameSort} />
          <Button btnText="Sort by popularity" isClicked={this.popSort} />
        </div>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
          {this.generateTableContent()}
        </table>
      </div>
    );
  }
}

export default Card;
