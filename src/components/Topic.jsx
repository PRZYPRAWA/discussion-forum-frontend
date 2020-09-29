import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import colors from "../utils/colors";

const StyledTopic = styled.li`
  background: ${colors.very_light_gray};
  flex-grow: 1;
  text-decoration: none;
  height: 50px;
  border-top 1px solid ${colors.dark};
  padding: 1% 2%;
  position: relative;
  transition: .2s ease;

  :hover {
    background: ${colors.light_gray};
  }
`;

const StyledA = styled.a`
  text-decoration: none;
  color: ${colors.dark};
`;

const Author = styled.div`
  margin-top: 0.5%;
  font-size: 0.8em;
`;

const LastResponse = styled.div`
  font-size: 0.8em;
  position: absolute;
  right: 10px;
  top: 5px;
`;

function formatDate(date) {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear(),
    hours = "" + d.getHours(),
    minutes = "" + d.getMinutes(),
    seconds = "" + d.getSeconds();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  if (hours.length < 2) hours = "0" + hours;
  if (minutes.length < 2) minutes = "0" + minutes;
  if (seconds.length < 2) seconds = "0" + seconds;

  return `${[year, month, day].join("-")} ${[hours, minutes, seconds].join(
    ":"
  )}`;
}

const Topic = ({ topic, created, createdBy, lastResponse }) => {
  return (
    <StyledTopic>
      <StyledA href="#">{topic}</StyledA>
      <Author>
        By {createdBy}, {formatDate(created)}
      </Author>
      <LastResponse>Last response: {formatDate(lastResponse)}</LastResponse>
    </StyledTopic>
  );
};

export default Topic;
