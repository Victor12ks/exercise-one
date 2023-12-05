import { Descriptions, Modal } from "antd";
import { getDetailsTeam } from "../../Utils/Utils";
import { Team } from "../../Services/Team";

interface TeamModelProps {
  team?: Team;
  selectTeam: (team?: Team) => void;
}

const TeamModel = ({ team, selectTeam }: TeamModelProps) => {
  const modalStyles = {
    header: {
      borderLeft: `10px solid ${team?.cPrim}`,
      borderRadius: 0,
      paddingInlineStart: 5,
    },
    body: {
      boxShadow: `inset 0 0 20px ${team?.cSecn}`,
      borderRadius: 5,
      padding: "40px",
    },
    mask: {
      backdropFilter: "blur(10px)",
    },
    content: {
      boxShadow: "0 0 30px #999",
    },
  };
  const labelStyle: React.CSSProperties = {
    background: `${team?.cPrim}`,
    color: "white",
    fontWeight: "600",
    textShadow: "-1px 0 gray, 0 1px gray, 1px 0 gray, 0 -1px gray"
  };
  return (
    <Modal
      title={`${team?.abr} - ${team?.city} ${team?.name} `}
      open={team != undefined}
      onOk={() => selectTeam(undefined)}
      onCancel={() => selectTeam(undefined)}
      footer=""
      styles={modalStyles}
      width={1000}
      centered
    >
      <Descriptions
        bordered
        column={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
        labelStyle={labelStyle}
        items={getDetailsTeam(team)}
      />
    </Modal>
  );
};

export default TeamModel;
