import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import "./field.css";
import { DrawContext } from "../../contexts/drawContext";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const AddFieldButton = () => {
  const classes = useStyles();
  const [drawField, setdrawField] = useContext(DrawContext);

  function toggleDraw() {
    setdrawField(!drawField);
  }

  return (
    <Fab
      size="small"
      color="secondary"
      aria-label="add"
      className={classes.margin}
      id="addFarmButton"
      onClick={toggleDraw}
    >
      <AddIcon />
    </Fab>
  );
};

export default AddFieldButton;
