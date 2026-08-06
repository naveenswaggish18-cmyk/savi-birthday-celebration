import Hero from "../../components/Hero/Hero";
import "./Welcome.css";

function Welcome() {
  return (
    <div className="welcome-page">

      <div className="gradient-orb orb-1"></div>

      <div className="gradient-orb orb-2"></div>

      <div className="gradient-orb orb-3"></div>

      <Hero />

    </div>
  );
}

export default Welcome;