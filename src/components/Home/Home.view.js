import React, { Component } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

import { Intro } from "./components/IntroMessage";
import { TopBar } from "./components/TopBar";
import { AboutMeView } from "./components/AboutMe";
import { SkillsList } from "./components/Skills";
import StudyTimeLine from "./components/StudyTimeLine";
import { FileZipOutlined } from "@ant-design/icons";
import { Icon } from "antd";

const NewIcon = ({
  iconType,
  iconTitle,
  twoToneColor,
  value,
  custom = false,
  onClick = () => {},
}: string) => (
  <div className="flex flex-row items-center items-start" onClick={onClick}>
    {custom ? (
      custom
    ) : (
      <Icon
        type={iconType}
        theme="twoTone"
        twoToneColor={twoToneColor}
        style={{ fontSize: "34px" }}
      />
    )}
    <h1 className="pl-3 font-sans text-lg text-grey-darkest">
      {`${iconTitle}: `}
    </h1>
    <p className="pl-3 font-sans text-lg text-grey-darkest">{value}</p>
  </div>
);

export default class DemoApp extends Component {
  constructor(props) {
    super(props);
    this.focusAboutMe = React.createRef();
    this.focusMySkills = React.createRef();
  }

  onNavigate = (divName: string) => {
    if (this[divName].current) {
      this[divName].current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  render() {
    return (
      <div>
        <div className="parallaxLinearGradient p-3 flex flex-col">
          <TopBar navigateTo={this.onNavigate} />
          <Intro
            message="Hey there!! Welcome"
            name="I`m a Front End Developer mainly focusing on crafting a clean and readable code"
          />
          <div className="flex flex-col items-center">
            <FaAngleDoubleDown style={{ color: "#FFB6C1", fontSize: 40 }} />
            <p className="text-white">Scroll</p>
          </div>
        </div>
        <div className="py-10 px-4" ref={this.focusAboutMe}>
          <AboutMeView />
        </div>
        <div className="pb-24 pt-4">
          <StudyTimeLine />
        </div>
        <div className="py-10 pt-4">
          <div className="flex flex-col items-center">
            <div className="border w-3/4 border-red" />
            <div className="w-1/2 justify-start pb-5 aboutMeFont">
              <div className="flex py-10 pb-5 items-center">
                <p>Npm Packages :</p>
              </div>
              <div className="flex pb-5 flex-col pt-5 pl-32">
                <div className="justify-start pb-5">
                  <NewIcon
                    custom={
                      <FileZipOutlined
                        theme="twoTone"
                        twoToneColor="#12c2e9"
                        style={{ fontSize: "34px" }}
                      />
                    }
                    iconTitle="Drop Area"
                    twoToneColor="#12c2e9"
                    value="direct-drop-area"
                    onClick={() =>
                      window.open(
                        "https://www.npmjs.com/package/direct-drop-area",
                        "_blank"
                      )
                    }
                  />
                </div>
                <div className="justify-start pb-5">
                  <NewIcon
                    custom={
                      <FileZipOutlined
                        theme="twoTone"
                        twoToneColor="#12c2e9"
                        style={{ fontSize: "34px" }}
                      />
                    }
                    iconTitle="Location"
                    twoToneColor="#12c2e9"
                    value="get-detailed-location"
                    onClick={() =>
                      window.open(
                        "https://www.npmjs.com/package/get-detailed-location",
                        "_blank"
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div ref={this.focusMySkills}>
          <SkillsList />
        </div>
      </div>
    );
  }
}
