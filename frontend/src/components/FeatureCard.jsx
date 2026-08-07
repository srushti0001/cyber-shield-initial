import { Link } from "react-router-dom";

function FeatureCard({
  icon,
  title,
  description,
  link,
  color,
}) {
  return (
    <Link
      to={link}
      className="feature-link"
    >
      <div
        className="feature-card"
        style={{
          borderTop: `6px solid ${color}`,
        }}
      >
        <div
          className="feature-icon"
          style={{ color }}
        >
          {icon}
        </div>

        <h3>{title}</h3>

        <p>{description}</p>

        <button
          style={{
            background: color,
          }}
        >
          Open Module →
        </button>
      </div>
    </Link>
  );
}

export default FeatureCard;