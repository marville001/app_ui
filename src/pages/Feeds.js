import React, { useEffect, useState } from "react";

import Search from "../components/Search.js";

import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";

import NumberFormat from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import { deleteFeed, fetchFeeds } from "../_actions/feedsActions.js";
import { Link } from "react-router-dom";
import AddFeed from "../components/AddFeed.jsx";
import {
  Fab,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  IconButton,
} from "@material-ui/core";

export default function Feeds(props) {
  const { user } = useSelector((state) => state.users);
  const { feeds, feedsloading } = useSelector((state) => state.feeds);
  const dispatch = useDispatch();

  const [openPopup, setOpenPopup] = useState(false);

  useEffect(() => {
    dispatch(fetchFeeds());
    return () => {};
  }, []);

  useEffect(() => {
    if (!user.id) {
      props.history.push("/auth/login");
    }
  }, [user]);

  if (feedsloading) {
    return (
      <div
        style={{
          display: "flex",
          height: "90vh",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <h2>Loading....</h2>
      </div>
    );
  }

  return (
    <div style={{ marginTop: "70px", width: "100%" }}>
      {/* <AddFeeds /> */}

      <Search />
      <div
        style={{
          width: "500px",
          margin: "auto",
        }}
      >
        <List>
          {feeds.length > 0 &&
            feeds.map((feed, i) => (
              <div key={i}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Link
                      to={`/feeds/${feed.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      {/* <Avatar alt="Remy Sharp" src={"./picture.svg"} /> */}
                      <Avatar alt="Remy Sharp" src={feed.image} />
                    </Link>
                  </ListItemAvatar>
                  <Link
                    to={`/feeds/${feed.id}`}
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    <ListItemText
                      primary={feed.title}
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            color="textPrimary"
                            style={{
                              display: "inline",
                            }}
                          >
                            <span>
                              <NumberFormat
                                value={feed.amount}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"Ksh "}
                              />{" "}
                              -{" "}
                            </span>
                          </Typography>
                          {feed.description}
                        </React.Fragment>
                      }
                    />
                  </Link>
                  <IconButton
                    onClick={() => dispatch(deleteFeed(feed.id))}
                    aria-label="delete"
                    style={{
                      display: user.id === feed.authorId ? "block" : "none",
                    }}
                    // disabled={user.id === feed.authorId ? false : true}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItem>

                <Divider variant="inset" component="li" />
              </div>
            ))}
        </List>
      </div>
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          borderRadius: "50%",
        }}
      >
        <Fab
          onClick={() => setOpenPopup(true)}
          color="primary"
          aria-label="add"
        >
          <AddIcon />
        </Fab>
      </div>
      <AddFeed
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        title="Add Feed"
      />
    </div>
  );
}
