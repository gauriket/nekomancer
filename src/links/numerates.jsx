import './link.css';

const Numerates = () => {
    const figmaUrl = 'https://www.figma.com/file/N2AU4U5Q8i35oNfam2Lyor/Numerates-website?type=design&mode=design&t=s93bDYxS9d3uEkoe-1';

    return (
      <a className="figma-link" href={figmaUrl} target="_blank" rel="noopener noreferrer">
        Click here to view in Figma
      </a>
    );
}

export default Numerates;
