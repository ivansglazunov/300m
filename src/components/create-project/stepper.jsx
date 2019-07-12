import React from "react";

import {
  makeStyles,
  Stepper,
  Step,
  Button,
  StepLabel,
  Container
} from "@material-ui/core";

import { Area } from "../slice-area";
import ProjectCreate from "../project-editable";
import CreateStage from "../stages/stages-item";

import { useTranslation } from "react-i18next";

const useStyles = makeStyles(theme => ({
  root: {
    width: "90%"
  },
  button: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  connectorActive: {
    "& $connectorLine": {
      borderColor: theme.palette.secondary.main
    }
  },
  connectorCompleted: {
    "& $connectorLine": {
      borderColor: theme.palette.primary.main
    }
  },
  connectorDisabled: {
    "& $connectorLine": {
      borderColor: theme.palette.grey[100]
    }
  },
  connectorLine: {
    transition: theme.transitions.create("border-color")
  }
}));

export default ({
  step,
  next,
  onCancel,
  onNext,
  onBack,
  onAdd,
  onFinish,
  onEdit,
  stage
}) => {
  // const connector = (
  //   <StepConnector
  //     classes={{
  //       active: classes.connectorActive,
  //       completed: classes.connectorCompleted,
  //       disabled: classes.connectorDisabled,
  //       line: classes.connectorLine,
  //     }}
  //   />
  // );
  const { t } = useTranslation();

  return (
    <Area
      top={
        <Stepper step={step}>
          <Step active={step === 1} completed={step > 1}>
            <StepLabel />
          </Step>
          <Step active={step === 2} completed={step > 2}>
            <StepLabel />
          </Step>
        </Stepper>
      }
      content={
        step === 1 ? (
          <ProjectCreate
            onCancel={onCancel}
            onSave={onNext}
            step={step}
            saveContent={next}
          />
        ) : step === 2 ? (
          <Area
            content={
              <Container>
                <CreateStage step={step} stage={stage} onEdit={onEdit} />
              </Container>
            }
            bottom={
              <>
                <Button onClick={onBack}>{t("Back")}</Button>
                <Button color="primary" onClick={onAdd}>
                  {t("Add stage")}
                </Button>
                <Button color="secondary" onClick={onFinish}>
                  {t("Finish")}
                </Button>
              </>
            }
          />
        ) : null
      }
    />
  );
};
