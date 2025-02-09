const spinnerStyles = {
  "--uib-size": "70px",
  "--uib-color": "#6a7282",
  "--uib-speed": "0.9s",
  "--uib-stroke": "7px",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  alignSelf: "center",
  height: "var(--uib-size)",
  width: "var(--uib-size)",
  WebkitMask: "radial-gradient(circle calc(var(--uib-size) / 2 - var(--uib-stroke)), transparent 99%, #000 100%)",
  mask: "radial-gradient(circle calc(var(--uib-size) / 2 - var(--uib-stroke)), transparent 99%, #000 100%)",
  backgroundImage: "conic-gradient(transparent 25%, var(--uib-color))",
  animation: "spin var(--uib-speed) linear infinite",
  borderRadius: "50%",
};

const Loading = () => {
  return (
    <div style={spinnerStyles}></div>
  );
};

export default Loading;

const keyframes = `
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = keyframes;
document.head.appendChild(styleSheet);
