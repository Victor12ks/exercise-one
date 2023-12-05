import "./styles.css";
import { Team } from "../../Services/Team";
import { getImage } from "../../Utils/Utils";

interface CardGamelProps {
  team?: Team;
  isActive: boolean;
  click: (team?: Team) => void;
}

const CardGame = ({ click, team, isActive }: CardGamelProps) => {
  return (
    <>
      <div className="card-game active" onClick={() => click(team)}>
        <img
          src={
            isActive
              ? getImage(team as Team)
              : "https://loodibee.com/wp-content/uploads/nfl-league-logo-300x300.png"
          }
        ></img>
      </div>
    </>
  );
};

export default CardGame;
