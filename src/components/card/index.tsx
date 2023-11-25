import { Container } from './styles';
import './styles.css';

const Card = () => {
    const props = {
        id: 16,
        img: "kansas-city-chiefs",
        city: "Kansas City",
        name: "Chiefs",
        abr: "KC",
        conf: "AFC",
        div: "West",
        cPrim: "#E31837",
        cSecn: "#FFB81C",
        superBowlChamps:["1974", "1975", "1978", "1979", "2005", "2008"]
    };
    
    return (
       <Container $abr={props.abr} $primaryColor={props.cPrim} $secundaryColor={props.cSecn}>
            <div className="card">
                <div className="imgBx">
                    <img alt="f" src={`https://loodibee.com/wp-content/uploads/nfl-${props.img}-team-logo-2-350x350.png`} />
                </div>
                <div className="contentBx">
                    <h2>{`${props.city} ${props.name}`}</h2>
                    <div className="size">
                        <h3>Super Bowl:</h3>
                        {props?.superBowlChamps.map(year =>
                            <span key={year}>{year}</span>
                        )}
                    </div>
                    <a href="#">See More</a>
                </div>
            </div>
        </Container>
    );
};

export default Card;

