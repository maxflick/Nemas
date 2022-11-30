import React from "react";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material/";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import scrollTo from "gatsby-plugin-smoothscroll";

export default function StyledAccordion({ data }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded, index) => {
    setExpanded(isExpanded ? panel : false);
    scrollTo("#" + index);
  };

  return (
    <div>
      {data.map((accordion, index) => {
        const { heading, details } = accordion;
        return (
          <Accordion
            disableGutters
            expanded={expanded === index}
            key={index}
            onChange={handleChange(index)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={index}
              id={index}
            >
              <Typography variant="h6" component="h2">
                {heading}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body"
                dangerouslySetInnerHTML={{ __html: details }}
              />
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
