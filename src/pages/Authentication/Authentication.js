import AuthCard from "../../components/AuthCard/AuthCard";
import AuthCarousels from "../../components/AuthCarousels/AuthCarousels";

const Authentication = () => {
  return (
    <div
      style={{
        backgroundColor: "#9575CD",
        height: "92vh",
        display: "flex",
      }}
    >
      <AuthCard />
      <AuthCarousels />
    </div>
  );
};
export default Authentication;
