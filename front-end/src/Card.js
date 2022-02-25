const { REACT_APP_API_URL } = process.env;

const Card = ({ project }) => {
  return (
    <div className="card">
      <div className="card-top">
        <h3>Project Name: {project.name}</h3>
        <div
          className="screenshot"
          style={{
            backgroundImage: `url(${REACT_APP_API_URL}/${project.screenshot_url})`,
          }}
        >
          {/* <img
            src={REACT_APP_API_URL + "/" + project.screenshot_url}
            alt={project.name}
          /> */}
        </div>
        <h4>Author: {project.author}</h4>
      </div>
      <a
        href={"http://" + project.netlifyLink}
        target="_blank"
        rel="noreferrer"
      >
        deployed link
      </a>
      <a href={"http://" + project.gitHubLink} target="_blank" rel="noreferrer">
        github link
      </a>
      <p>extra features: {project.extraFeatures}</p>
    </div>
  );
};

export default Card;
