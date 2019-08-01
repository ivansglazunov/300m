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
import Stage from "../stage/stage";
import Members from "../members-search/search";
import CreatedStage from "../stage/created-stage";
import Check from "../project-steps/check";
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

// так ты объявляешь функцию возвращающую что-то а не компонент
// function getStepContent(step, onSelectStages) {
// что бы это было компонентом он долежн принимать один аргумент пропс:
function GetStepContent({ step, onSelectStages }) {
  // то что используется switch никак не мешает ему быть компонентом
  // он же возвращает элементы и принимает пропсы, а значит он компонент
  switch (step) {
    case 0:
      return <Project />;
    case 1:
      return (
        <>
          <SimpleStage />
          {/* <CreatedStage /> */}
          {/* <Stage />  */}
        </>
      );
    case 2:
      return <Members onSelectStages={onSelectStages} />;
    case 3:
      return <Check />;
    default:
      return "Unknown step";
  }
}

export default ({ onProjectOwner, onAddStage, onSelectStages }) => {
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
              {/* функция изанчально принимала два аргумента, здесь принимается только один */}
              {/* {getStepContent(index)} */}
              {/* правильно так: */}
              {/* {getStepContent(index, onSelectStages)} */}
              {/* так как я переделал это в компонент, лучше компонентом */}
              <GetStepContent step={index} onSelectStages={onSelectStages} />
              {/* компоненты отображаются в дереве реакт дебагера, а просто вызов функции нет */}
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
