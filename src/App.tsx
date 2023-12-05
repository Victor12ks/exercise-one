import React, { useEffect, useState } from "react";
import { Col, Divider, Layout, Menu, Row } from "antd";
import Card from "./components/Card";
import { Content, Header } from "antd/es/layout/layout";
import Link from "antd/es/typography/Link";
import TeamModel from "./components/TeamModel";
import FilterTeam from "./components/FilterTeam";
import Game from "./components/Game";
import { ECurrentPage } from "./Utils/Enums";
import { Team } from "./Services/Team";
import { getAllTeams } from "./Utils/Utils";

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#0b3b7f",
};

const menuStyle: React.CSSProperties = {
  backgroundColor: "#0b3b7f",
  color: "white",
};

const App = () => {
  const [selectedTeam, setSelectedTeam] = useState<Team>();
  const [filteredTeams, setFilteredTeams] = useState<Team[]>();
  const [currentPage, setCurrentPage] = useState<ECurrentPage>(
    ECurrentPage.Home
  );

  const selectTeam = (team?: Team) => {
    setSelectedTeam(team);
  };

  const filterTeam = (teams?: Team[]) => {
    setFilteredTeams(teams);
  };

  useEffect(() => {
    setFilteredTeams(getAllTeams());
  }, []);

  return (
    <Layout className="layout">
      <Header style={headerStyle}>
        <div className="logo" />
        <Menu mode="horizontal" style={menuStyle}>
          <Menu.Item key="home">
            <Link onClick={() => setCurrentPage(ECurrentPage.Home)}>Home</Link>
          </Menu.Item>
          <Menu.Item key="game">
            <Link onClick={() => setCurrentPage(ECurrentPage.Game)}>
              Let's Play a Game?
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
      {currentPage === ECurrentPage.Home ? (
        <Content style={{ padding: "0 10px" }}>
          <FilterTeam teams={getAllTeams()} filterTeam={filterTeam} />
          <Divider dashed />
          <Row gutter={[8, 8]}>
            {filteredTeams?.map((team) => (
              <Col key={team.id} span={6}>
                <Card team={team} selectTeam={selectTeam} />
              </Col>
            ))}
          </Row>
        </Content>
      ) : (
        <Game teams={filteredTeams}></Game>
      )}
      <TeamModel team={selectedTeam} selectTeam={selectTeam} />
    </Layout>
  );
};

export default App;
