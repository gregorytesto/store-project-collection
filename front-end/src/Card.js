import CallMadeIcon from "@mui/icons-material/CallMade";
import GitHubIcon from "@mui/icons-material/GitHub";

const { REACT_APP_API_URL } = process.env;

const Card = ({ project }) => {
  return (
    <div className="card">
      <a
        href={
          project.netlifyLink.includes("http://") ||
          project.netlifyLink.includes("https://")
            ? project.netlifyLink
            : "http://" + project.netlifyLink
        }
        target="_blank"
        rel="noreferrer"
      >
        <div className="screenshot-container">
          <div
            className="screenshot"
            style={{
              backgroundImage: `url(${REACT_APP_API_URL}/${project.screenshot_url})`,
            }}
          />
          <div className="overlay">
            <div className="overlay-text">
              visit site <CallMadeIcon />
            </div>
          </div>
        </div>
      </a>
      <div className="card-bottom">
        <h3>{project.name}</h3>
        <h4>
          <span style={{ fontWeight: "lighter" }}>BY</span>: {project.author}
        </h4>
        {project.gitHubLink ? (
          <a
            href={
              project.gitHubLink.includes("http://") ||
              project.gitHubLink.includes("https://")
                ? project.gitHubLink
                : "http://" + project.gitHubLink
            }
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className="icon" /> <h4>GitHub</h4>
          </a>
        ) : null}
        {project.extraFeatures.length ? (
          <p>
            <span style={{ fontStyle: "italic", fontWeight: 500 }}>
              extra features
            </span>
            <span>: </span>
            {project.extraFeatures}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
