import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro
          name="Mohamed Abdul Basith"
          description="This is supposed to be a description . It should contain one Skill component
        for each web dev skill that you have,
        customized with props"
        />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <div>
      <img
        className="avatar"
        src="https://i.pinimg.com/736x/c0/9c/0d/c09c0de05f02d699a9b04fc03db3377a.jpg"
        alt="Profile pic"
      />
    </div>
  );
}

function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML + CSS" emoji="💪" color="blue" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
      <Skill skill="Web Design" emoji="💪" color="green" />
      <Skill skill="Git and GitHub" emoji="💪" color="red" />
      <Skill skill="React" emoji="💪" color="cyan" />
      <Skill skill="Svelte" emoji="💪" color="red" />
    </div>
  );
}

function Skill(props) {
  return (
    <div>
      <div className="skill" style={{ backgroundColor: props.color }}>
        <span>{props.skill}</span>
        <span>{props.emoji}</span>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
