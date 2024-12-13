import React from 'react';
import './HomePage.css'
import VisualizationDaddy from '../Visualizations/VisualizationDaddy';
import VisualizationAge from '../Visualizations/VisualizationAge';
import VisualizationFamily from '../Visualizations/VisualizationFamily';
import { TbSparkles } from "react-icons/tb";


const HomePage = () => {
  return (
    <div className="home-page">

      <div className="home-grid-container">

        <div className="viz-grid-container">

          <div className="daddy-grid">
            <div className="text-container">
              <h1 className="text-title"><TbSparkles /> What makes an actor “Daddy”? <TbSparkles /></h1>
              <p className="descript-text">
                This fabulous graph is your VIP ticket into the ✨glittering world of
                Hollywood’s favorite daddies. Each sparkly heart💖 represents an iconic actor, with their <em>IMDb ratings</em> on the <strong>X-axis</strong> and their <strong>👑 Best Male Actor rankings</strong> on the <strong>Y-axis</strong>.
                But wait, there’s more! The hearts’ colors are a{" "}
                <strong>Viridis gradient</strong> that shows each daddy's age—ranging from
                mysterious deep purples to dazzling sunny yellows 🌞. Hover over a heart to see all the juicy details, including their
                ranking, age, and top movie ratings 🎥. So grab a glass of rosé 🍷, dive in, and find out which
                daddy’s energy sparkles the most! ✨ 💅
              </p>
            </div>
            <VisualizationDaddy />

          </div>

          <div className="age-grid">
            <div className="text-container">
              <h1 className="text-title"><TbSparkles /> It’s the Vibe, Not the Years <TbSparkles /></h1>
              <p className="descript-text">
                💖 Have you noticed? As actors get older, so does the ✨popularity✨! It totally makes sense!
                It's giving <strong>strong, confident, ‘I’ve-seen-it-all-and-I’m-still-gorgeous’ vibes. 🕶️ </strong>
                Think silver fox energy, especially in those iconic 'seasoned veteran' roles we can’t get enough of. 😍
                It’s like a fine wine 🍷—they just get better with age. Plus, let's not forget the nostalgia factor!
                Seeing them reminds us of all the legendary movies we grew up watching. 🎥
                And let’s be real, the ‘daddy persona’ is sooo on-brand here.
                They radiate that classy, charismatic energy that screams ‘main character.’ 💃✨So yeah, the data doesn’t lie, besties! Popularity definitely follows the age and allure trajectory. 📈💖
              </p>

            </div>

            <VisualizationAge />

          </div>

          <div className="family-grid">
            <div className="text-container">
              <h1 className="text-title"><TbSparkles /> Fam vs. Fame <TbSparkles /></h1>
              <p className="descript-text">
                🍵 Okay, besties, here’s the tea: this chart totally spills that whether our fave actors are single, married, or have a whole soccer team of kids…
                it doesn’t really move the needle on their popularity. Like, fame is just fame, you know? ✨💁‍♀️
                The hearts are adorbs (duh), but they’re also showing us that being a daddy—literally or figuratively—doesn’t guarantee that extra boost in the popularity department.
                Married? Cool. Single? Fabulous. Kids? Aww! But guess what? The audience is vibing with their overall star power, not their relationship or family deets. 💖✨

                So basically, these actors are thriving no matter their status. It’s giving main character energy all around. 👑✨</p>
            </div>

            <VisualizationFamily />

          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;