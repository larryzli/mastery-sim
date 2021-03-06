import React, { Component } from "react";

class OwnedPokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nicknameInput: "",
            namePreface: ""
        };
    }
    changeHandler(event) {
        this.setState({
            nicknameInput: event.target.value
        });
    }
    componentWillReceiveProps(nextProps) {
        console.log("nextProps: ", nextProps);
        if (nextProps.pokemon.nickname === this.state.nicknameInput) {
            this.setState({
                namePreface: "UPDATED NICKNAME: "
            });
        }
    }
    render() {
        return (
            <div>
                {this.state.namePreface}
                {this.props.pokemon.nickname || this.props.pokemon.name}{" "}
                <button
                    onClick={e =>
                        this.props.release(
                            this.props.pokemon.id,
                            this.props.pokemon.nickname ||
                                this.props.pokemon.name
                        )
                    }
                >
                    RELEASE
                </button>
                <br />
                <form
                    onSubmit={e =>
                        this.props.nickname(
                            e,
                            this.state.nicknameInput,
                            this.props.pokemon.id
                        )
                    }
                >
                    <input
                        type="text"
                        onChange={e => this.changeHandler(e)}
                        placeholder={`Nickname ${this.props.pokemon.name}`}
                    />
                    <input type="submit" value="NICKNAME" />
                </form>
                <br />
            </div>
        );
    }
}
export default OwnedPokemon;
