import React, { useState } from "react";
import "./Form.scss";

const Form = () => {
    const [data, setData] = useState({ name: "" });
    const [buttonText, setButtonText] = useState("");


    const onSubmitHandle = (event) => {
        event.preventDefault();
        const { name } = event.target;
        setData({ name: name.value });
    };

    const changeText = (text) => setButtonText(text);

    return (
        <main>
            <div >
                <form className = "form-url" onSubmit = {(e) => onSubmitHandle(e) } >
                    <label className = "label-name" htmlFor = "name" >  URL:  </label>
                    <input type = "text" name = "name" placeholder = "https://localhost:3000" className = "input-form" />
                    <input type = "submit" className = "input-submit" / >
                </form>
                    <div className = "method-button" >
                        <button className = "get-method" onClick = {() => changeText("Get :") } > GET  </button>
                        <button className = "post-method" onClick = {() => changeText("Post :") } > POST  </button>
                        <button className = "put-method" onClick = {() => changeText("Put :") } > PUT  </button>
                        <button className = "delete-method" onClick = {() => changeText("Delete :") } > DELETE  </button>
                    </div>
                <div>
                <p className = "text-line" >  { buttonText } { data.name }  </p>
                </div>
            </div> 
        </main>
    );
};

export default Form;