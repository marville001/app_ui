import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";

import NumberFormat from "react-number-format";
import PropTypes from "prop-types";

import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../_actions/feedsActions";
import { PhotoCamera } from "@material-ui/icons";

const NumberFormatCustom = (props) => {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="Ksh "
    />
  );
};

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  addFeed: PropTypes.func.isRequired,
};

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    position: "absolute",
    top: theme.spacing(5),
  },
  dialogTitle: { paddingRight: "0px" },
  "MuiFormControl-root": {
    backgroundColor: "red",
    margin: "10px",
  },
  form: {
    "& .MuiFormControl-root": {
      marginBottom: "10px",
      maxWidth: "400px",
    },
  },
}));

export default function AddFeed(props) {
  const { title, openPopup, setOpenPopup } = props;
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const classes = useStyles();

  const [values, setValues] = React.useState({
    image: "",
    title: "",
    amount: "",
    phone: "",
    description: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddFeed = (e) => {
    e.preventDefault();
    if (
      values.title.length > 5 ||
      values.amount.length > 5 ||
      values.phone.length > 5 ||
      values.description.length > 5
    ) {
      dispatch(
        addFeed({
          ...values,
          image: "http://localhost:3001/picture.svg",
          authorId: user.id,
        })
      );
      setOpenPopup(false);
    } else {
      alert("Ensure all fields have a minimum of 5 chars");
    }
  };

  return (
    <Dialog
      open={openPopup}
      maxWidth="md"
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle className={classes.dialogTitle}>
        <div style={{ display: "flex" }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => setOpenPopup(false)}
          >
            X
          </Button>
        </div>
      </DialogTitle>
      <DialogContent dividers>
        <form className={classes.form} validate="true">
          <Grid container>
            <Grid item xs={12} md={6}>
              <img
                name="image"
                value={values.image}
                src="/picture.svg"
                alt="pic here"
              />
              <div>
                <label htmlFor="icon-button-file">
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    style={{ marginTop: "10px" }}
                  >
                    <PhotoCamera />
                  </IconButton>
                </label>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                autoComplete="title"
                name="title"
                variant="outlined"
                required
                fullWidth
                id="title"
                label="title"
                size="small"
                autoFocus
                value={values.title}
                onChange={handleChange}
              />
              <TextField
                variant="outlined"
                label="Amount"
                required
                fullWidth
                onChange={handleChange}
                name="amount"
                value={values.amount}
                id="formatted-numberformat-input"
                InputProps={{
                  inputComponent: NumberFormatCustom,
                }}
                size="small"
              />
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phonenumber"
                label="Phone number"
                size="small"
                name="phone"
                value={values.phone}
                autoComplete="phonenumber"
                onChange={handleChange}
              />
              <TextField
                id="description"
                label="Description"
                multiline
                fullWidth
                rows={4}
                variant="outlined"
                name="description"
                value={values.description}
                onChange={handleChange}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{
                  margin: "16px 280px 0",
                  marginRight: 0,
                  display: "block",
                }}
                onClick={handleAddFeed}
              >
                Post
              </Button>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
    </Dialog>
  );
}
