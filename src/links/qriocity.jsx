import './link.css';

const FigmaLink = () => {
 const figmaUrl = 'https://www.figma.com/file/S7kNdiWVOKjmybX71bksH6/Qriocity-Gauri-Ket?type=design&node-id=0%3A1&mode=design&t=YLt2pe282Am5XXxF-1';

  return (
    <a className="figma-link" href={figmaUrl} target="_blank" rel="noopener noreferrer">
      Click here to view in Figma
    </a>
  );
};

export default FigmaLink;