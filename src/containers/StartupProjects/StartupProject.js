import React from "react";
import "./StartupProjects.css";
import AchivementCard from "../../components/achievementCard/AchivementCard";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";

export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
      <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1 className="heading achievement-heading">{bigProjects.title}</h1>
            <p className="subTitle achievement-subtitle">{bigProjects.subtitle}</p>
          </div>
          <div className="achievement-cards-div">
            {bigProjects.achivementsCards.map(card => {
              return (
                <AchivementCard
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    image: card.image,
                    footer: card.footerLink
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
      </Fade>
    );
  }