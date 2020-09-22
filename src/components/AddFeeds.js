import React from "react";
import Modal from "react-modal";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

import NumberFormat from "react-number-format";
import PropTypes from "prop-types";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import { useDispatch } from "react-redux";
import { addFeed } from "../_actions/feedsActions";

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

Modal.setAppElement("#root");

export default function AddFeeds() {
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
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
        addFeed({ ...values, image: "http://localhost:3001/picture.svg" })
      );
    } else {
      alert("Ensure all fields have a minimum of 5 chars");
    }
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(211,211,211, 0.9)",
          },
          content: {
            position: "absolute",
            top: "15%",
            left: "20%",
            right: "20%",
            bottom: "15%",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "10px",
            outline: "none",
            padding: "40px",
          },
        }}
      >
        <form validate="true">
          <div
            style={{
              width: "100%",
              display: "flex",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
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
            </div>
            <div
              style={{
                margin: "8px 16px 0",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
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
                </Grid>
                <Grid item xs={12}>
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
                </Grid>
                <Grid item xs={12}>
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
                </Grid>
                <Grid item xs={12}>
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
                </Grid>
              </Grid>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{
                  margin: "16px 280px 0",
                  marginRight: 0,
                }}
                onClick={handleAddFeed}
              >
                Post
              </Button>
            </div>
          </div>
        </form>
      </Modal>
      <div
        style={{
          position: "fixed",
          top: "87%",
          left: "92%",
        }}
      >
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => setModalIsOpen(true)}
        >
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
}
