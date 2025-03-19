import React from "react";
import moment from "moment";

const resume =
  "https://drive.google.com/file/d/1rCR3kqyeEZ4snGqiNZA413bBP5o6d5ld/view?usp=sharing";

const Tabs = ({
  title,
  handleOnClick,
}: {
  title: string,
  handleOnClick: Function,
}) => (
  <button type="button" className="text-white pr-4" onClick={handleOnClick}>
    {title}
  </button>
);

const DownloadResume = ({
  title,
  onButtonPress,
}: {
  title: string,
  onButtonPress: Function,
}) => (
  <a href={resume} download>
    <button type="button" onClick={onButtonPress} className="text-white">
      {title}
    </button>
  </a>
);

export const TopBar = ({ onDownloadResume, navigateTo }: Function) => (
  <div className="flex stickyHeader items-center justify-between">
    <div>
      <h2 className="text-white font-light">Shreenath Chakinala</h2>
    </div>
    {/*<div><h2 className="text-white font-light">{moment().format('DD/MM/YYYY').toString()}</h2></div>*/}
    <div>
      <Tabs title="Skills" handleOnClick={() => navigateTo("focusMySkills")} />
      <Tabs title="Contact" handleOnClick={() => navigateTo("focusAboutMe")} />
      <Tabs title="About Me" handleOnClick={() => navigateTo("focusAboutMe")} />
      <DownloadResume title="Resume" onButtonPress={onDownloadResume} />
    </div>
  </div>
);
