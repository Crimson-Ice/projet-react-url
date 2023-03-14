import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {AppDispatch, getShortenLink} from "../redux";

const ShortenLinkModule = () => {
    const [urlInput, setUrlInput] = useState("");
    const [error, setError] = useState("");
    const dispatch: AppDispatch = useDispatch();


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(urlInput !== ""){
            const response = await dispatch(getShortenLink(urlInput))
            if(response.payload.ok === false){
                setError(response.payload.error);
            }
            else{
                setError("");
            }
        }else{
            setError("Please add link")
        }
        setUrlInput("");
    };

    return (
        <div className="shortenLink-content">
            <form onSubmit={handleSubmit}>
                <input className={error !== "" ? "input-error" : "input-not-error"} type="text" placeholder="Shorten a link here..." value={urlInput} onChange={(e) => setUrlInput(e.target.value)}/>
                <input type="submit" value="Shorten it!"/>
            </form>
            <div className="error">
                <span>{error}</span>
            </div>
        </div>
    );
};

export default ShortenLinkModule;
