import './link.css';

const Hackcommerce = () => {
    const figmaUrl = 'https://github.com/gauriket/Hack-Commerce';

    return (
      <a className="figma-link" href={figmaUrl} target="_blank" rel="noopener noreferrer">
        Click here to view GitHub Repository
      </a>
    );
}

export default Hackcommerce;
