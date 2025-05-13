import React from 'react';
import {Icon} from 'antd';
import {
    LinkedinOutlined,
    GithubOutlined
} from '@ant-design/icons';
import moment from 'moment';

import aboutMe from '../../../../../assets/doodles/all-about-me.png';

const calculateAge = (dateOfBirth: string) => {
    const currentYear = moment();
    const yearOfbirthMoment = moment(dateOfBirth, 'DD MM YYYY');
    return currentYear.diff(yearOfbirthMoment, 'years');
};

const lineOne = `Having over ${calculateAge('1/11/2014')} years of experience in software development, I have worked for companies in the web Marketplace, online auction, E-commerce, Educational and Automobile Industries.`;
const lineTwo = 'I bring to the table a robust skill set encompassing cutting-edge technologies including React(JS/Native), Redux, Saga, Thunk, XState, and Hooks. My expertise extends to backend technologies like Ruby Sinatra, Python Flask, and Java, and I have experience working with distributed systems such as Kafka. I\'m proficient in containerization with Docker, experienced in orchestrating applications with Kubernetes, and well-versed in setting up CI/CD pipelines using Jenkins. I\'m enthusiastic about delivering top-notch solutions and exploring innovative ways to leverage technology for business excellence.';
const lineThree = 'My interests outside of work include watching movies, listening to music.';

const AboutMeImage = ({imageSource}: string) => (
    <div className="w-4/5">
        <img
            src={imageSource}
            alt="About Me"
        />
    </div>
);

const AboutMe = () => (
    <div className="pl-4">
        <p className="aboutMeFont">
            {lineOne}
            <br/>
            {lineTwo}
            <br/>
            {lineThree}
        </p>
    </div>
);

const NewIcon = ({
                     iconType, iconTitle, twoToneColor, value, custom = false, onClick = () => {
    }
                 }: string) => (
    <div className="flex flex-row items-center items-start" onClick={onClick}>
        {custom ? custom :
            <Icon type={iconType} theme="twoTone" twoToneColor={twoToneColor} style={{fontSize: '34px'}}/>}
        <h1 className="pl-3 font-sans text-lg text-grey-darkest">
            {`${iconTitle}: `}
        </h1>
        <p className="pl-3 font-sans text-lg text-grey-darkest">{value}</p>
    </div>
);

export const AboutMeView = () => (
    <div className="flex flex-col items-center">
        <div className="flex pb-5 items-center">
            <AboutMeImage imageSource={aboutMe}/>
            <AboutMe/>
        </div>
        <div className="border w-3/4 border-red"/>
        <div className="flex flex-row pt-5 w-3/4 pl-32">
            <div className="w-1/2 justify-start">
                <NewIcon
                    iconType="environment"
                    iconTitle="Location"
                    twoToneColor="#12c2e9"
                    value="Dallas, Texas"
                />
            </div>
            <div className="w-1/2 justify-start">
                <NewIcon
                    iconType="heart"
                    iconTitle="Age"
                    twoToneColor="#eb2f96"
                    value={calculateAge('06/10/1994')}
                />
            </div>
        </div>
        <div className="flex flex-row pt-5 w-3/4 pl-32">
            <div className="w-1/2 justify-start">
                <NewIcon
                    iconType="phone"
                    iconTitle="Phone"
                    twoToneColor="#c471ed"
                    value="+1 9452726273"
                    onClick={() => window.open(
                        "tel:945-272-6273")}
                />
            </div>
            <div className="w-1/2 justify-start">
                <NewIcon
                    iconType="mail"
                    iconTitle="Mail"
                    twoToneColor="#12c2e9"
                    value="chakinalasreenath@gmail.com"
                    onClick={() => window.open(
                        "mailto:chakinalasreenath@gmail.com", "_blank")}
                />
            </div>
        </div>
        <div className="flex pb-5 flex-row pt-5 w-3/4 pl-32">
            <div className="w-1/2 justify-start">
                <NewIcon
                    custom={<LinkedinOutlined theme="twoTone" twoToneColor="#12c2e9" style={{fontSize: '34px'}}/>}
                    // iconType="linkedin"
                    iconTitle="LinkedIn"
                    twoToneColor="#12c2e9"
                    value="shreenath-chakinala"
                    onClick={() => window.open(
                        "https://www.linkedin.com/in/shreenath-chakinala/", "_blank")}
                />
            </div>
            <div className="w-1/2 justify-start">
                <NewIcon
                    iconType="git"
                    custom={<GithubOutlined theme="twoTone" twoToneColor="#eb2f96" style={{fontSize: '34px'}}/>}
                    iconTitle="Git"
                    twoToneColor="#eb2f96"
                    value="sreenathch"
                    onClick={() => window.open(
                        "https://github.com/sreenathch", "_blank")}
                />
            </div>
        </div>
    </div>
);
