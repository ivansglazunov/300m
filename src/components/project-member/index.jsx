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

import Invite from "../activity/invite";
import StartSoon from "../activity/start-soon";
import Late from "../activity/late";
import Underway from "../activity/underway-work";

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

  return (
    <Container>
      <Card>
        <Typography variant="h5" component="h1" align="center">
          {title}
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary={description} />
          </ListItem>
          <Badge className={classes.margin} badgeContent={2} color="primary">
            <ListItem button>{t("Profile Notification")}</ListItem>
          </Badge>
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
