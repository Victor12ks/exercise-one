import { Team } from "../../Services/Team";
import { getImage } from "../../Utils/Utils";
import { Container } from "./styles";

interface CardProsp {
  team: Team;
  selectTeam: (team: Team) => void;
}

const Card = ({ team, selectTeam }: CardProsp) => {
  return (
    <Container
      $abr={team.abr}
      $primaryColor={team.cPrim}
      $secundaryColor={team.cSecn}
    >
      <div className="card">
        <div className="imgBx">
          <img alt="f" src={`${getImage(team)}`} />
        </div>
        <div className="contentBx">
          <h2>{`${team.city} ${team.name}`}</h2>
          {team?.superBowlChamps?.length > 0 && (
            <div className="size">
              <h3>Super Bowl:</h3>
              {team?.superBowlChamps.map((year) => (
                <span key={year}>{year}</span>
              ))}
            </div>
          )}
          <a href="#" onClick={() => selectTeam(team)}>
            See More
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Card;
