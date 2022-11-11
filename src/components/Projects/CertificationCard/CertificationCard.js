import React from "react";
import { CertificationList } from "../../../data/ProjectData";
import {
  Card,
  CardLeft,
  CardRight,
  Stack,
  BtnGroup,
} from "./CertificationCardElements";
function CertificationCard() {
  return (
    <>
      {CertificationList.map((list, index) => (
        <Card key={index}>
          <CardLeft>
            <img src={list.img} alt={list.name} />
          </CardLeft>
          <CardRight>
            <h4>{list.title}</h4>
            <h5>{list.description}</h5>
            <p>{list.details}</p>
            <Stack>
              <span className="stackTitle">Issuing organization  -</span>

              <span className="tags">{list.tech_stack}</span>
            </Stack>
            <BtnGroup>
              <a
                className="btn btn2 SecondarBtn"
                href={list.github_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
              
            </BtnGroup>
          </CardRight>
        </Card>
      ))}
    </>
  );
}

export default CertificationCard;
