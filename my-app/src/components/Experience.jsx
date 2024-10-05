import React, { useState } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Experience = () => {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isResumeButtonHovered, setIsResumeButtonHovered] = useState(false);

  const isTabletScreens = useMediaQuery("(max-width: 992px)");
  return (
    <>
      <Box
        onMouseEnter={() => setIsCardHovered(true)}
        onMouseLeave={() => setIsCardHovered(false)}
        sx={{
          mt: "9rem",
          display: "flex",
          gap: "1rem",
          borderRadius: "6px",
          p: isTabletScreens ? "1.2rem 0" : "1.2rem",
          cursor: "pointer",
          backgroundColor: isCardHovered && "rgba(94, 234, 212, 3%)",
          borderTop: isCardHovered && "1px solid rgba(148, 163, 184, 10%)",
        }}
      >
        <Box sx={{ width: "25%" }}>
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "12px",
              color: "rgb(148, 163, 184)",
              fontFamily: "inherit",
            }}
          >
            FEB 2024 - PRESENT
          </Typography>
        </Box>
        <Box sx={{ width: "calc(75% - 1rem)" }}>
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: "600",
              fontFamily: "inherit",
              mb: "0.3rem",
              color: isCardHovered ? "rgb(94, 234, 212)" : "white",
            }}
          >
            Zeitview (formely dronebase)
          </Typography>
          <Typography
            sx={{
              mb: "1.2rem",
              fontSize: "0.9rem",
              fontFamily: "inherit",
              color: "rgb(148, 163, 184)",
            }}
          >
            Internship
          </Typography>
          <Typography
            sx={{
              color: "rgb(148, 163, 184)",
              fontSize: "0.9rem",
              lineHeight: "1.625rem",
              mt: "0.5rem",
              fontFamily: "inherit",
              textAlign: isTabletScreens ? "justify" : "",
            }}
          >
            Took complete ownership in developing dynamic and responsive web
            applications using ReactJs and TypeScript, significantly improving
            user experience, code maintainability, and application performance.
            Led the implementation of state management using React Tanstack
            Query and Context API, resulting in improved data handling,
            application stability, and performance, while reducing redundant API
            calls. Spearheaded the design and development of UI components,
            including user forms with integrated validation, using Mantine UI to
            create a consistent, visually appealing, and accessible user
            interface across platforms. Collaborated closely with backend
            developers to integrate APIs, ensuring seamless data flow and
            synchronisation between frontend and backend services.Independently
            developed and maintained complex data tables using React Tanstack
            Table for efficient data visual- isation and enhanced user
            interaction.Led efforts to improve test coverage by writing and
            executing comprehensive end-to-end tests with Playwright, reducing
            bug reports and mitigating regression issues.
          </Typography>
        </Box>
      </Box>
      <Box
        onMouseEnter={() => setIsResumeButtonHovered(true)}
        onMouseLeave={() => setIsResumeButtonHovered(false)}
        onClick={() =>
          (window.location.href =
            "https://drive.google.com/drive/folders/1xAy9EBldS_eu8VSe0SboSPgPYKlsTDmV?usp=share_link")
        }
        sx={{
          display: "flex",
          alignItems: "center",
          fontFamily: "inherit",
          mt: "1rem",
          ml: isTabletScreens ? "" : "1.5rem",
          gap: "0.3rem",
          cursor: "pointer",
        }}
      >
        <Link
          style={{
            textDecoration: "none",
            color: isResumeButtonHovered ? "white" : "rgb(94, 234, 212)",
            fontSize: "13px",
            fontFamily: "inherit",
          }}
        >
          View Full Resume
        </Link>
        <ArrowForwardIcon
          style={{
            fontSize: "1rem",
            color: isResumeButtonHovered ? "white" : "rgb(94, 234, 212)",
            translate: isResumeButtonHovered && "5px 0px",
          }}
        />
      </Box>
    </>
  );
};

export default Experience;
