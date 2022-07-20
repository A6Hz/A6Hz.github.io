import Grid from "@mui/material/Grid";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import Typography from "@mui/material/Typography";

export function History(props: {
  companies: {
    logo: string;
    name: string;
    description: string;
    years: string;
    roles: string[];
  }[];
}) {
  const { companies } = props;
  return (
    <>
      <Grid
        container
        style={{ marginTop: 50, overflow: "hidden" }}
        justifyContent="center"
      >
        <Grid item xs={12} sm={8} maxWidth="md">
          <Typography
            variant="h2"
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: "#505050",
            }}
          >
            History
          </Typography>

          <VerticalTimeline lineColor="#e5e5e5">
            {companies.map((company, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date="2011 - present"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<WorkIcon />}
                dateClassName="rvtl-date"
              >
                <img
                  src={company.logo}
                  alt=""
                  style={{ width: "100%", borderRadius: 10 }}
                />
                <h3 className="vertical-timeline-element-title">
                  {company.name}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {company.roles.join(", ")}
                </h4>

                <p>
                  Creative Direction, User Experience, Visual Design, Project
                  Management, Team Leading
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </Grid>
      </Grid>
    </>
  );
}
