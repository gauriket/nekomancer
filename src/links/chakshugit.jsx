import './link.css';

const Chakshugit = () => {
    const figmaUrl = 'https://github.com/gauriket/chakshu';

    return (
      <a className="figma-link" href={figmaUrl} target="_blank" rel="noopener noreferrer">
        Click here to view GitHub Repository
      </a>
    );
}

export default Chakshugit;
