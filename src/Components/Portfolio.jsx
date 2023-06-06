/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Student Study Portal System🎉",
    description:
      "Online study platform where students from across the world can learn and clearify their doubts. I contains features such as ; Notes,HomeWorks, Todo, Assignments, Wikipedia, Youtube, Calculator and lots of other funtionalities",
    url: "https://github.com/NyuydineBill",
  },
  {
    title: "Transport management System",
    description:
      "A ticket reservation system where travellers can book bus tickets and seat positions specified.",
    url: "https://github.com/NyuydineBill",
  },
  {
    title: "RealTime Chat Application",
    description:
      "An application that permits one to one or one to many or many to many realtime interations ",
    url: "https://github.com/NyuydineBill",
  },
{
    title: "Social Media Site",
    description:
      "A simple social media site with features more like that of facebook and instagram ",
    url: "https://github.com/NyuydineBill",
  },
  {
    title: "My Resume Site",
    description:
      "A platform where users can create their digital resumes and use for job applications.",
    url: "https://github.com/NyuydineBill",
  },
  {
    title: "Weather Detector App",
    description:
      "An application which gives the user his/her current weather details, including the current city,temperature,humidity and so many other details.",
    url: "https://github.com/NyuydineBill",
  },
  {
    title: "URL Shortener",
    description:
      "A site which gets long URL's from the user and makes it shorter but still referencing it to the intended address.",
    url: "https://github.com/NyuydineBill",
  },
  {
    title: "Health Ease application",
    description:
      "Collaborated with Flutter developers to realise a health application which has features such as ; Online consultaion, First Aid, Healtj Survey, Tips and a community Forum.",
    url: "https://github.com/NyuydineBill",
  },

];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
