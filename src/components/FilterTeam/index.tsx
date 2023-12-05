import { Button, Select, SelectProps, Space } from "antd";
import { useEffect, useState } from "react";
import { Team } from "../../Services/Team";
import { getConfOptions, getDivOptions } from "../../Utils/Filters";

interface FilterTeamProps {
  teams?: Team[];
  filterTeam: (team: Team[]) => void;
}
const filterStyle: React.CSSProperties = {
  marginTop: "20px",
};

const FilterTeam = ({ teams, filterTeam }: FilterTeamProps) => {
  const [selectedDiv, setSelectedDiv] = useState<string>();
  const [selectedConf, setSelectedConf] = useState<string>();

  const confOptions: SelectProps["options"] = getConfOptions();
  const divOptions: SelectProps["options"] = getDivOptions();

  const divHandleChange = (value: string) => {
    setSelectedDiv(value);
  };

  const confHandleChange = (value: string) => {
    setSelectedConf(value);
  };

  const clearFilter = () => {
    setSelectedDiv(undefined);
    setSelectedConf(undefined);
  };

  useEffect(() => {
    let filtrado = teams;
    if (selectedConf)
      filtrado = filtrado?.filter(
        (team) => selectedConf == team.conf
      ) as Team[];

    if (selectedDiv)
      filtrado = filtrado?.filter((team) => selectedDiv == team.div) as Team[];

    filterTeam(filtrado as Team[]);
  }, [selectedConf, selectedDiv]);

  return (
    <Space style={filterStyle}>
      Filter
      <Select
        optionFilterProp="children"
        style={{ width: "150px" }}
        placeholder="Conference"
        allowClear
        onChange={confHandleChange}
        options={confOptions}
        value={selectedConf}
      />{" "}
      <Select
        optionFilterProp="children"
        style={{ width: "150px" }}
        placeholder="Division"
        allowClear
        onChange={divHandleChange}
        options={divOptions}
        value={selectedDiv}
      />{" "}
      <Button onClick={clearFilter} type="dashed">
        Clear
      </Button>
    </Space>
  );
};

export default FilterTeam;
