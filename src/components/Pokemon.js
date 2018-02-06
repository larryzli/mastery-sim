import React from "react";
// import axios from "axios";
// import './Pokemon.css';

const Pokemon = props => {
    return (
        <div>
            <div>
                {props.name}{" "}
                {!props.caught ? (
                    <button onClick={e => props.catch(props.name, props.url)}>
                        CATCH
                    </button>
                ) : (
                    " - Caught!"
                )}
                <br />
                <br />
            </div>
        </div>
    );
};

export default Pokemon;
