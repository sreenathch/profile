import React, { Component } from "react";

const values = [
  {
    year: 2010,
    degree: "Schooling",
    name: "Seventh Day Adventist",
  },
  {
    year: 2012,
    degree: "Intermediate",
    name: "New Model High School",
  },
  {
    year: 2015,
    degree: "Bachlor's in Computer Application",
    name: "C.B.P.C.C",
    duration: "2003-2015",
  },
  {
    year: 2015,
    degree: "Jr.Software engineer",
    name: "Study Field Technologies",
  },
  {
    year: 2017,
    degree: "MSc. Information and Communication Technology",
    name: "VNSGU",
    duration: "2015-2017",
  },
  {
    year: 2017,
    degree: "Software engineer",
    name: "Copart",
  },
  {
    year: 2020,
    degree: "Senior Software engineer",
    name: "Copart Inc",
    duration: "2011-2023",
  },
  {
    year: 2023,
    degree: "Senior Software engineer",
    name: "Walmart",
    duration: "2024-Present",
  },
];

const Category = ({ categoryName }: string) => (
  <h3 className="fontColor">{categoryName}</h3>
);

export default class StudyTimeLine extends Component {
  render() {
    return (
      <div className="w-full flex flex-col pb-5 items-center flex-start">
        <div className="pb-10">
          <Category categoryName="My Education + Experience" />
        </div>
        <div className="flex border linearGradient rounded-full h-2 flex flex-row flex-item w-3/4">
          {values.map((value) => (
            <div className="flex flex-col items-center w-full justify-center">
              <div
                className={`flex w-4 h-4 rounded-full bg-white border border-red items-center justify-center ${
                  value.degree === "" ? "pt-2" : "pt-8"
                }`}
              >
                <div className="flex flex-col pt-20">
                  <p className="pt-3 text-xs">{value.year}</p>
                  {value.degree !== "" ? (
                    <p className="text-xs">
                      {`${value.degree}- ${value.name}`}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
