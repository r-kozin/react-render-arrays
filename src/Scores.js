export default function Scores({ score }) {
    return (
    <>
      <div>
        <>
          <p>
            {score.date}: {score.score}%
          </p>
        </>
      </div>
    </>
  );
}
