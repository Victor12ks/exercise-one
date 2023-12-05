import { SelectProps } from "antd";

export const getDivOptions = () => {
  const divOptions: SelectProps["options"] = [];
  const divs = ["East", "West", "North", "South"];

  divs?.forEach((div) => {
    divOptions.push({
      value: div,
      label: div,
    });
  });
  return divOptions;
};

export const getConfOptions = () => {
  const confOptions: SelectProps["options"] = [];
  const confs = ["AFC", "NFC"];

  confs?.forEach((div) => {
    confOptions.push({
      value: div,
      label: div,
    });
  });
  return confOptions;
};
