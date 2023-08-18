import './link.css';

const Chakshufig = () => {
    const figmaUrl = 'https://www.figma.com/file/D3gQWkuW7XeLP5L9TidvjJ/Untitled?type=design&mode=design&t=s93bDYxS9d3uEkoe-1';

    return (
      <a className="figma-link" href={figmaUrl} target="_blank" rel="noopener noreferrer">
        Click here to view in Figma
      </a>
    );
}

export default Chakshufig;
