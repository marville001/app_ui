import React, { useEffect } from "react";

import Search from "../components/Search.js";
import AddFeeds from "../components/AddFeeds.js";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

import NumberFormat from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import { deleteFeed, fetchFeeds } from "../_actions/feedsActions.js";
import { Link } from "react-router-dom";

export default function Feeds(props) {
  const { user } = useSelector((state) => state.users);
  const { feeds, feedsloading } = useSelector((state) => state.feeds);
  const dispatch = useDispatch();

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
        }}
      >
        <h2>Loading....</h2>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: "10vh" }}>
      <AddFeeds />
      <Search />
      <div
        style={{
          marginLeft: "25%",
          width: "50%",
          marginTop: "60px",
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
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItem>

                <Divider variant="inset" component="li" />
              </div>
            ))}
        </List>
      </div>
    </div>
  );
}
