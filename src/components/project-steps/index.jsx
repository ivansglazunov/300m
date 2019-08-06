import React, { useState } from "react";
import {
  Container,
  makeStyles,
  Stepper,
  Step,
  Button,
  StepLabel,
  StepContent
} from "@material-ui/core";

import Project from "../project-editable/project";
import Members from "../members-search/search";
import Check from "./check";
import SimpleStage from "../stage/simple-stage";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    border: "none",
    paddingLeft: 0,
    paddingRight: 0,
    marginLeft: 0
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  actionsContainer: {
    marginBottom: theme.spacing(2)
  },
  resetContainer: {
    padding: theme.spacing(3)
  }
}));

function getSteps() {
  return [
    "Create project",
    "Create stage",
    "Members",
    "Проверка введенных данных"
  ];
}

function GetStepContent({
  step,
  onSelectStages,
  projectStages,
  stageTitle,
  projectTitle,
  projectDescription,
  duration,
  stageDescription,
  stageAddress,
  members,
  usersList
}) {
  switch (step) {
    case 0:
      return <Project />;
    case 1:
      return (
        <>
          <SimpleStage />
        </>
      );
    case 2:
      return <Members onSelectStages={onSelectStages} />;
    case 3:
      return (
        <Check
          projectStages={projectStages}
          stageTitle={stageTitle}
          projectTitle={projectTitle}
          projectDescription={projectDescription}
          duration={duration}
          stageDescription={stageDescription}
          stageAddress={stageAddress}
          members={members}
          usersList={usersList}
        />
      );
    default:
      return "Unknown step";
  }
}

export default ({
  onProjectOwner,
  onAddStage,
  onSelectStages,
  projectStages,
  stageTitle,
  projectTitle,
  projectDescription,
  duration,
  stageDescription,
  stageAddress,
  members,
  usersList
}) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  return (
    <Container>
      <Stepper activeStep={activeStep} orientation="vertical" connector={<></>}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent classes={{ root: classes.root }}>
              <GetStepContent
                step={index}
                onSelectStages={onSelectStages}
                projectStages={projectStages}
                stageTitle={stageTitle}
                projectTitle={projectTitle}
                projectDescription={projectDescription}
                duration={duration}
                stageDescription={stageDescription}
                stageAddress={stageAddress}
                members={members}
                usersList={usersList}
              />
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  {activeStep === 1 ? (
                    <Button onClick={onAddStage} className={classes.button}>
                      Add
                    </Button>
                  ) : null}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={
                      activeStep === steps.length - 1
                        ? onProjectOwner
                        : handleNext
                    }
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {/* {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )} */}
    </Container>
  );
};
