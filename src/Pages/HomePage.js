import React from 'react';
import './HomePage.css'

import VisualizationDaddy from '../Visualizations/VisualizationDaddy';
import VisualizationAge from '../Visualizations/VisualizationAge';
import VisualizationFamily from '../Visualizations/VisualizationFamily';

import {
  BiHeart,
  BiSun,
  BiSolidCameraMovie,
} from "react-icons/bi";
import {
  FaCrown,
  FaWineGlassAlt,
  FaWineGlass,
} from "react-icons/fa";
import { TbSparkles } from "react-icons/tb";
import { RiHandHeartLine } from "react-icons/ri";


const HomePage = () => {
  return (
    <div className="home-page">

      <div className="home-grid-container">

        <div className="viz-grid-container">

          <div className="daddy-grid">
            <div className="text-container">
              <h1 className="text-title"><TbSparkles /> What makes an actor “Daddy”? <TbSparkles /></h1>
              <p className="descript-text">
                This fabulous graph is your VIP ticket into the glittering world of
                Hollywood’s favorite daddies. Each sparkly heart{" "}
                <BiHeart /> represents an iconic actor, with their{" "}
                <em>IMDb ratings</em> on the <strong>X-axis</strong> and their{" "}
                <strong>Best Male Actor rankings</strong> on the <strong>Y-axis</strong>{" "}
                <FaCrown />). But wait, there’s more! The hearts’ colors are a{" "}
                <strong>Viridis gradient</strong> that shows each daddy's age—ranging from
                mysterious deep purples <FaWineGlassAlt /> to dazzling sunny yellows{" "}
                <BiSun />. Hover over a heart to see all the juicy details, including their
                ranking, age, and top movie ratings <BiSolidCameraMovie />. So grab a glass of rosé <FaWineGlass />, dive in, and find out which
                daddy’s energy sparkles the most! <TbSparkles /> <RiHandHeartLine />
              </p>
            </div>
            <VisualizationDaddy />

          </div>

          <div className="age-grid">
            <div className="text-container">
              <h1 className="text-title"><TbSparkles /> It’s the Vibe, Not the Years <TbSparkles /></h1>
              <p className="descript-text">How old is too old, or is “daddy” all about the vibe?</p>
            </div>

            <VisualizationAge />

          </div>

          <div className="family-grid">
            <div className="text-container">
              <h1 className="text-title"><TbSparkles /> Fam vs. Fame <TbSparkles /></h1>
              <p className="descript-text">Welcome to the Hollywood Daddies Dashboard! Dive into the data behind the 'daddy' persona and discover what makes Hollywood stars iconic.</p>
            </div>

            <VisualizationFamily />

          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;