import React from "react";
import { useTranslation } from "react-i18next";

import {
  List,
  ListItem,
  makeStyles,
  Badge,
  Typography,
  Card,
  ListItemText,
  Container,
  Divider
} from "@material-ui/core";

import { withStyles } from "@material-ui/styles";

import Invite from "../activity/invite";
import StartSoon from "../activity/start-soon";
import Late from "../activity/late";
import Underway from "../activity/underway-work";
import useGlobalStyles from "../styles";

const StyledBadge = withStyles(theme => ({
  badge: {
    top: "45%",
    right: 7,
    boxShadow: "0 0 2px 0 #DD2E34",
    backgroundColor: "#FFE20C",
    color: "#111f33"
  }
}))(Badge);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  textAlign: {
    position: "relative",
    top: 2
  }
}));

export default ({
  title,
  description,
  titleInvite,
  descriptionInvite,
  // timeInvite,
  onProjectInvite,
  titleStartSoon,
  descriptionStageStartSoon,
  descriptionWorkStartSoon,
  timeStartSoon,
  dayStartSoon,
  addressStartSoon,
  titleLate,
  descriptionStageLate,
  descriptionWorkLate,
  timePassedLate,
  timeLeftLate,
  leftLate,
  passedLate,
  addressLate,
  titleUnderway,
  descriptionStageUnderway,
  descriptionWorkUnderway,
  timePassedUnderway,
  timeLeftUnderway,
  leftUnderway,
  passedUnderway,
  addressUnderway
}) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const globalClasses = useGlobalStyles();

  return (
    <Container className={globalClasses.paddingForCard}>
      <Card className={globalClasses.shadowCard}>
        <Typography
          variant="h5"
          component="h1"
          align="center"
          className={globalClasses.paddingForCard}
        >
          {title}
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary={description} />
          </ListItem>
          <StyledBadge
            className={classes.margin}
            badgeContent={2}
            color="primary"
          >
            <ListItem button>{t("Profile Notification")}</ListItem>
          </StyledBadge>
        </List>
      </Card>
      <Invite
        titleInvite={titleInvite}
        descriptionInvite={descriptionInvite}
        // timeInvite={timeInvite}
        onProjectInvite={onProjectInvite}
      />
      <Divider />
      <StartSoon
        titleStartSoon={titleStartSoon}
        descriptionStageStartSoon={descriptionStageStartSoon}
        descriptionWorkStartSoon={descriptionWorkStartSoon}
        timeStartSoon={timeStartSoon}
        dayStartSoon={dayStartSoon}
        addressStartSoon={addressStartSoon}
      />
      <Divider />
      <Late
        titleLate={titleLate}
        descriptionStageLate={descriptionStageLate}
        descriptionWorkLate={descriptionWorkLate}
        timePassedLate={timePassedLate}
        timeLeftLate={timeLeftLate}
        leftLate={leftLate}
        passedLate={passedLate}
        addressLate={addressLate}
      />
      <Divider />
      <Underway
        titleUnderway={titleUnderway}
        descriptionStageUnderway={descriptionStageUnderway}
        descriptionWorkUnderway={descriptionWorkUnderway}
        timePassedUnderway={timePassedUnderway}
        timeLeftUnderway={timeLeftUnderway}
        leftUnderway={leftUnderway}
        passedUnderway={passedUnderway}
        addressUnderway={addressUnderway}
      />
    </Container>
  );
};
