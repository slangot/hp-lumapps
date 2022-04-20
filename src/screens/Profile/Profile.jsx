import React from "react";
import { useParams, NavLink } from "react-router-dom";

import { List, ListItem, Size, Icon } from "@lumx/react";
import { mdiRuler, mdiWrench, mdiAutoFix, mdiArrowLeft } from "@lumx/icons";

import useData from "../../store/DataContext";

import housesData from "../../utils/housesData";

export const Profile = () => {
  const { data } = useData();

  const { characterName } = useParams();
  const searchData = data.filter((element) => element.name === characterName);

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  // constants creation for easy use of each data

  const name = searchData[0]?.name;
  const actor = searchData[0]?.actor;
  const image = searchData[0]?.image;
  const gender = searchData[0]?.gender === "male" ? "He" : "She";
  const genderOwn = searchData[0]?.gender === "male" ? "His" : "Her";
  const wizard = searchData[0]?.wizard ? "a wizard" : "not a wizard";
  const house = searchData[0]?.house;
  const position = searchData[0]?.hogwartsStudent
    ? "a student at Hogwarts"
    : searchData[0]?.hogwartsStaff
    ? "a staff member at Hogwarts"
    : "not at Hogwarts";
  const ancestry = searchData[0]?.ancestry
    ? `${searchData[0]?.ancestry}`
    : `unknown`;
  const eyes = searchData[0]?.eyeColour && `${searchData[0]?.eyeColour} eyes`;
  const hair = searchData[0]?.hairColour && `${searchData[0]?.hairColour} hair`;
  const alive = searchData[0]?.alive ? `is alive` : `is not alive`;
  const patronus = searchData[0]?.patronus;
  const species = searchData[0]?.species
    ? `a ${searchData[0]?.species}`
    : `probably a human`;
  const wand = searchData[0]?.wand;
  const yearOfBirth = searchData[0]?.yearOfBirth;

  // get specific house data

  const getHouse = (houseName) => {
    const resultHouse = housesData.filter((e) => e.name === houseName);
    return resultHouse[0].link;
  };

  return (
    <main className="Profile">
      <section>
        <NavLink to="/" className="back-button" aria-label="Result page return">
          <span className="arrow-back">
            <Icon icon={mdiArrowLeft} size={Size.tiny} />
          </span>{" "}
          Go back
        </NavLink>
        <h1>{name}</h1>
        <article className="profile-description">
          <p>
            {gender} is {species && species + " and"} {wizard}. {gender} is{" "}
            {position}.
          </p>
          <p>
            {ancestry &&
              name +
                ` comes from ${
                  ancestry === "unknown" ? `an` : `a`
                } ${ancestry} family.`}
          </p>
          <p>{eyes && hair && `${gender} has ${eyes} and ${hair}.`}</p>
          <p>{patronus && `${genderOwn} patronus is a ${patronus}.`}</p>
        </article>
        <figure className="profile-history">
          <h3>Brief history of Harry Potter</h3>
          <blockquote>
            <p>
              Harry Potter is a series of seven fantasy novels written by
              British author J. K. Rowling. The novels chronicle the lives of a
              young wizard, Harry Potter, and his friends Hermione Granger and
              Ron Weasley, all of whom are students at Hogwarts School of
              Witchcraft and Wizardry. The main story arc concerns Harry's
              struggle against Lord Voldemort, a dark wizard who intends to
              become immortal, overthrow the wizard governing body known as the
              Ministry of Magic and subjugate all wizards and Muggles
              (non-magical people).
            </p>
            <p>
              The series was originally published in English by Bloomsbury in
              the United Kingdom and Scholastic Press in the United States. All
              versions around the world are printed by Grafica Veneta in Italy.
              A series of many genres, including fantasy, drama, coming of age,
              and the British school story (which includes elements of mystery,
              thriller, adventure, horror, and romance), the world of Harry
              Potter explores numerous themes and includes many cultural
              meanings and references. According to Rowling, the main theme is
              death. Other major themes in the series include prejudice,
              corruption, and madness.
            </p>
            <p>
              Since the release of the first novel, Harry Potter and the
              Philosopher's Stone, on 26 June 1997, the books have found immense
              popularity, positive reviews, and commercial success worldwide.
              They have attracted a wide adult audience as well as younger
              readers and are often considered cornerstones of modern young
              adult literature. As of February 2018, the books have sold more
              than 500 million copies worldwide, making them the best-selling
              book series in history, and have been translated into eighty
              languages. The last four books consecutively set records as the
              fastest-selling books in history, with the final instalment
              selling roughly 2.7 million copies in the United Kingdom and 8.3
              million copies in the United States within twenty-four hours of
              its release.
            </p>
          </blockquote>
          <figcaption>
            History source{" "}
            <cite>
              <a
                href="https://en.wikipedia.org/wiki/Harry_Potter"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Harry Potter Wikipedia Page"
              >
                Harry Potter Wikipedia
              </a>
            </cite>
          </figcaption>
        </figure>
      </section>
      <aside>
        <div className="details-image-container">
          <img src={image} alt={`profile of ${name} from Harry Potter`} />
        </div>
        <div className="details-info-container">
          <h2>
            <span className="detail-info-category detail-info-house">
              House :
            </span>{" "}
            {house ? house : `doesn't belong to a house`}
          </h2>
          <div className="details-info-house-image">
            {house && (
              <img
                src={getHouse(house)}
                alt="hogwarts house from harry potter"
              />
            )}
          </div>
          <List>
            <ListItem size={Size.tiny}>
              <span className="detail-info-category">Status:</span> {wizard}
            </ListItem>
            <ListItem size={Size.tiny}>
              {gender} {alive}
            </ListItem>
            {yearOfBirth && (
              <ListItem size={Size.tiny}>
                <span className="detail-info-category">Age :</span>{" "}
                {currentYear - yearOfBirth}
              </ListItem>
            )}
            {ancestry && (
              <ListItem size={Size.tiny}>
                <span className="detail-info-category">Family ancestry :</span>{" "}
                {ancestry}
              </ListItem>
            )}
            {species && (
              <ListItem size={Size.tiny}>
                <span className="detail-info-category">Species :</span>{" "}
                {species}
              </ListItem>
            )}
            <ListItem size={Size.tiny}>
              {gender} is {position}
            </ListItem>
            {patronus && (
              <ListItem size={Size.tiny}>
                <span className="detail-info-category">Patronus :</span>{" "}
                {patronus}
              </ListItem>
            )}
            {wand?.wood && (
              <ListItem size={Size.tiny}>
                <span className="detail-info-category">Wand:</span>
                <List>
                  {wand.wood && (
                    <ListItem
                      size={Size.tiny}
                      before={<Icon icon={mdiAutoFix} size={Size.xs} />}
                    >
                      Wood: {wand.wood}
                    </ListItem>
                  )}
                  {wand.core && (
                    <ListItem
                      size={Size.tiny}
                      before={<Icon icon={mdiWrench} size={Size.xs} />}
                    >
                      Core: {wand.core}
                    </ListItem>
                  )}
                  {wand.length && (
                    <ListItem
                      size={Size.tiny}
                      before={<Icon icon={mdiRuler} size={Size.xs} />}
                    >
                      Length: {wand.length} cm
                    </ListItem>
                  )}
                </List>
              </ListItem>
            )}
            {actor && (
              <ListItem size={Size.tiny}>
                <span className="detail-info-category">Played by :</span>{" "}
                {actor}
              </ListItem>
            )}
          </List>
        </div>
      </aside>
    </main>
  );
};
