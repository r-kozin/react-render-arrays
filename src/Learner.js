import Scores from "./Scores.js";
import { v4 as uuidv4 } from "uuid";

export default function Learner({ learner }) {
  return (
    <>
      <div className="learnerDiv">
        <>
          <h4 className="learnerName">{learner.name}</h4>
          <p className="learnerBio">{learner.bio}</p>
          <h5>Recent Grades:</h5>
          <div className="learnerGrades">
            {learner.scores.map((score) => (
              <Scores key={uuidv4()} score={score} />
            ))}
          </div>
        </>
      </div>
    </>
  );
}
