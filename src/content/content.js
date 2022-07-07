import React from "react";
import { ReactComponent as ArrowDownIcon } from "../images/icon-arrow-down.svg";
import { ReactComponent as TodoIcon } from "../images/icon-todo.svg";
import { ReactComponent as CalendarIcon } from "../images/icon-calendar.svg";
import { ReactComponent as RemindersIcon } from "../images/icon-reminders.svg";
import { ReactComponent as PlanningIcon } from "../images/icon-planning.svg";
import Paragraph from "../components/Paragraph";

export const navContent = [
  {
    text: `Features`,
    arrow: <ArrowDownIcon style={{ marginLeft: "8px" }} />,
    childrens: [
      <Paragraph>
        <TodoIcon style={{ marginBottom: "5px", marginRight:"8px" }} /> Todo List
      </Paragraph>,
      <Paragraph>
        <CalendarIcon style={{ marginBottom: "5px", marginRight:"8px" }} /> Calendar
      </Paragraph>,
      <Paragraph>
        <RemindersIcon style={{ marginBottom: "5px", marginRight:"8px" }} /> Reminders
      </Paragraph>,
      <Paragraph>
        <PlanningIcon style={{ marginBottom: "5px", marginRight:"8px" }} /> Planning
      </Paragraph>,
    ],
  },
  {
    text: `Company`,
    arrow: <ArrowDownIcon style={{ marginLeft: "8px" }} />,
    childrens: [<Paragraph>History</Paragraph>, <Paragraph>Our Team</Paragraph>, <Paragraph>Blog</Paragraph>],
  },
  { text: "Careers" },
  { text: "About" },
];

export const navButtons = {
  login: "Login",
  register: "Register",
};

export const mainContent = {
  h1: "Make remote work",
  desc: "Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.",
  btn: "Learn more",
};
