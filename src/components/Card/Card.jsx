import React from "react";
import { NavLink } from "react-router-dom";

import { Button, Size } from "@lumx/react";

import ManAvatar from "../../assets/images/avatar-man.png";
import WomanAvatar from "../../assets/images/avatar-woman.png";

export const Card = ({ search }) => {
  return (
    <article className="Card">
      <div className="card-image">
        <img
          src={
            search.image
              ? search.image
              : search.gender === "female"
              ? WomanAvatar
              : ManAvatar
          }
          alt="harry potter character"
        />
      </div>
      <div className="card-info-container">
        <NavLink
          to={`profile/${search?.name}`}
          aria-label={`${search?.name} profile page`}
        >
          <h2>{search.name}</h2>
        </NavLink>
        <p>
          {search.name} is {search.wizard ? "a wizard" : "not a wizard"}{" "}
          {search.hogwartsStudent
            ? ", a student in Hogwarts"
            : search.hogwartsStaff
            ? ", a staff member in Hogwarts"
            : "not from Hogwarts"}{" "}
          and belongs to {search.house} house
        </p>
        <NavLink
          className="link-button"
          to={`profile/${search?.name}`}
          aria-label={`${search?.name} profile page`}
        >
          <Button size={Size.m}>See details</Button>
        </NavLink>
      </div>
    </article>
  );
};
