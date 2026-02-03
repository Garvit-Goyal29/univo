import './Loader.css';
export default function Loader({ size = 18 }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        border: "3px solid #fff",
        borderTop: "3px solid transparent",
        borderRadius: "50%",
        animation: "spin 0.8s linear infinite",
      }}
    />
  );
}
