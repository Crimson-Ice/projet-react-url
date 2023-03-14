
const ShortenLinkCard = (
    {id, longUrl, shortUrl, whoCopied, setWhoCopied}:
    {id:number, longUrl:string, shortUrl:string, whoCopied:number | null, setWhoCopied:Function}
) => {

    const handleClick = () => {
        console.log("test");
        navigator.clipboard.writeText(shortUrl).then(() => {
            console.log("Short URL copied to clipboard");
        });
        setWhoCopied(id);
    };

    return (
        <div className="link-card">
            <h3>{longUrl}</h3>
            <div className="wrapper">
                <h3>{shortUrl}</h3>
                <button className={whoCopied === id ? "button-black" : "button-cyan"} onClick={() => handleClick()}>{whoCopied === id ? "Copied!" : "Copy"}</button>
            </div>
        </div>
    );
};

export default ShortenLinkCard;
