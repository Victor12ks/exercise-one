import { useCallback, useEffect, useState } from "react";
import { Button, Col, Divider, Flex, Modal, Result, Row, Select } from "antd";
import { Content } from "antd/es/layout/layout";
import CardGame from "../CardGame";
import { Team } from "../../Services/Team";
import Countdown from "antd/es/statistic/Countdown";
import "./styles.css";
import { SmileOutlined } from "@ant-design/icons";
import { EStepGame } from "../../Utils/Enums";
import { getAllTeams } from "../../Utils/Utils";
interface GameProps {
  teams?: Team[];
}

const Game = ({ teams }: GameProps) => {
  const [hitCards, setHitCards] = useState<string[]>([]);

  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [difficulty, setDifficulty] = useState("");
  const [deadline, setDeadline] = useState(0);
  const [points, setPoints] = useState(0);
  const [stepGame, setStepGame] = useState<EStepGame>(EStepGame.Not_Started);
  const [teamsGame, setTeamsGame] = useState<Team[]>([]);

  const verifyTeams = (lastTeam: Team) => {
    return (
      teamsGame?.find((team) => team.id == selectedCards[0])?.name ===
      teamsGame?.find((team) => team.id == lastTeam.id)?.name
    );
  };

  const selectCard = useCallback(
    (team?: Team) => {
      if (team) {
        if (selectedCards.length <= 1) {
          setSelectedCards([...selectedCards, team.id]);
        }

        if (selectedCards.length == 1) {
          if (verifyTeams(team)) {
            var audio = new Audio(
              "https://www.myinstants.com/media/sounds/super-mario-coin-sound_rp53n4m.mp3"
            );
            audio.play();
            setPoints(points + 10);
            setHitCards([...hitCards, team?.name]);
            setSelectedCards([]);
          } else {
            var audio = new Audio(
              "https://www.myinstants.com/media/sounds/sm64-mario-pain.mp3"
            );
            audio.play();
            if (points >= 5) setPoints(points - 5);
            setTimeout(() => {
              setSelectedCards([]);
            }, 500);
          }
        }
      }
    },
    [selectedCards]
  );

  useEffect(() => {
    if (hitCards?.length > 0 && teamsGame?.length / 2 === hitCards?.length) {
      var audio = new Audio(
        "https://www.myinstants.com/media/sounds/street-fighter-ii-you-win-perfect.mp3"
      );
      audio.play();
      setStepGame(EStepGame.Finished);
    }
  }, [hitCards]);

  const menuStyle: React.CSSProperties = {
    backgroundColor: "#b5c4d8",
    color: "white",
    marginTop: "20px",
    height: "60px",
    borderRadius: "20px",
  };

  const boxStyle: React.CSSProperties = {
    width: "100%",
    height: 120,
    borderRadius: 6,
  };

  const onChange = (value: string) => {
    setDifficulty(value);
    if (teams) {
      let countTeams = 0;
      if (value === "easy") {
        countTeams = 12;
      } else if (value === "normal") {
        countTeams = 16;
      } else if (value === "crazy") {
        countTeams = 20;
      }
      const teamsRandon = teams.slice(0, countTeams);
      const final = getAllTeams().filter((x) =>
        teamsRandon.find((y) => y.name === x.name)
      );

      setTeamsGame(teamsRandon.concat(final));
    }
  };

  const startGame = () => {
    setPoints(0);
    let timeDeadLine = 0;
    if (difficulty === "easy") {
      timeDeadLine = Date.now() + 83.2 * 60 * 15;
    } else if (difficulty === "normal") {
      timeDeadLine = Date.now() + 166.6 * 60 * 15;
    } else if (difficulty === "crazy") {
      timeDeadLine = Date.now() + 250 * 60 * 15;
    }
    setStepGame(EStepGame.Starting);
    var audio = new Audio(
      "https://www.myinstants.com/media/sounds/top-gear-01.mp3"
    );
    audio.play();
    setTimeout(() => {
      setStepGame(EStepGame.Playing);
      setDeadline(timeDeadLine);
    }, 16000);
  };

  const stopGame = () => {
    setStepGame(EStepGame.GameOver);
    var audio = new Audio(
      "https://www.myinstants.com/media/sounds/super-mario-death-sound-sound-effect.mp3"
    );
    audio.play();
  };

  return (
    <>
      <Content>
        <Flex style={menuStyle} gap="middle" align="start" vertical>
          <Flex style={boxStyle} justify={"space-around"} align={"center"}>
            <Select
              placeholder="Select Difficulty"
              optionFilterProp="children"
              onChange={onChange}
              disabled={stepGame !== EStepGame.Not_Started}
              options={[
                {
                  value: "easy",
                  label: "Easy Peasy",
                },
                {
                  value: "normal",
                  label: "Normal",
                },
                {
                  value: "crazy",
                  label: "Very Crazy",
                },
              ]}
            />
            {deadline == 0 ? (
              <Button onClick={startGame} type="default">
                Start
              </Button>
            ) : (
              <Button onClick={stopGame} type="dashed">
                Stop
              </Button>
            )}
            <Countdown onFinish={stopGame} value={deadline} format="mm:ss" />
            <div id="Mletra10">{points}</div>
          </Flex>
        </Flex>
        <Divider dashed />
        {stepGame !== EStepGame.Not_Started ? (
          <Row gutter={[8, 8]}>
            {teamsGame?.map((team) => (
              <Col key={team.id} span={3}>
                <CardGame
                  team={team}
                  click={() => {
                    if (stepGame === EStepGame.Playing) selectCard(team);
                  }}
                  isActive={
                    selectedCards.includes(team.id) ||
                    hitCards.includes(team.name) ||
                    stepGame === EStepGame.Starting
                  }
                ></CardGame>
              </Col>
            ))}
          </Row>
        ) : (
          <Result
            status="404"
            title="Please select a difficult level and start the game"
          />
        )}
      </Content>
      <Modal
        title={"Game Over"}
        open={
          stepGame === EStepGame.GameOver || stepGame === EStepGame.Finished
        }
        onOk={() => setStepGame(EStepGame.Not_Started)}
        onCancel={() => setStepGame(EStepGame.Not_Started)}
        footer=""
        width={1000}
        centered
      >
        <Result
          icon={<SmileOutlined />}
          title={`Parabéns, você conseguiu fazer ${points}!`}
          extra={
            <Button
              type="primary"
              onClick={() => {
                setStepGame(EStepGame.Not_Started);
                setDeadline(0);
              }}
            >
              Fechar
            </Button>
          }
        />
      </Modal>
    </>
  );
};

export default Game;
