import React, {useState} from 'react';
import ShortenLinkCard from "./ShortenLinkCard";
import {useSelector} from "react-redux";
import {RootState} from "../redux";

const ShortenLinkShow = () => {
    const [whoCopied, setWhoCopied] = useState<number | null>(null);
    const link = useSelector((state: RootState) => state.shortenUrl);

    const handleWhoCopied = (id:number) => {
        setWhoCopied(id);
    }

    return (
        <div className="link-card-container">
            <ul>
                {
                    link.data.map(obj =>
                        <li key={obj.id}>
                            <ShortenLinkCard
                                id={obj.id}
                                longUrl={obj.longUrl}
                                shortUrl={obj.shortUrl}
                                whoCopied={whoCopied}
                                setWhoCopied={handleWhoCopied}
                            />
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default ShortenLinkShow;
