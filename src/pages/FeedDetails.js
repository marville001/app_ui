import React, { useEffect } from "react";
import Button from "@material-ui/core/button";
import { useDispatch, useSelector } from "react-redux";
import { fetchFeed } from "../_actions/feedsActions";
import { Link } from "react-router-dom";

export default function FeedDetails(props) {
  const id = props.match.params.id;

  const { feed, feedloading } = useSelector((state) => state.feeds);
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFeed(id));
    return () => {};
  }, []);

  useEffect(() => {
    if (!user.id) {
      props.history.push("/auth/login");
    }
  }, [user]);

  if (feedloading) {
    return (
      <div
        style={{
          display: "flex",
          height: "90vh",
          width: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Loading....</h2>
      </div>
    );
  }

  if (feed.id === undefined) {
    return (
      <div
        style={{
          display: "flex",
          height: "90vh",
          width: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>
          No Feed found with the id{" "}
          <u style={{ color: "#f00" }}>{props.match.params.id}</u>
        </h2>
        <Link to="/feeds">View Feeds</Link>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        margin: "auto",
        paddingTop: "10vh",
        height: "90vh",
      }}
    >
      <div
        style={{
          width: "50%",
          "@media (maxWidth: 768px)": {
            height: "50%",
            width: "100%",
          },
        }}
      >
        <img
          src={feed.image}
          alt="here"
          style={{
            width: "80%",
            height: "70%",
            margin: "10% 15%",
            "@media (maxWidth: 768px)": {
              height: "30%",
            },
          }}
        />
      </div>
      <div
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          "@media (maxWidth: 768px)": {
            height: "50%",
            width: "100%",
          },
        }}
      >
        <div style={{ width: "85%", marginLeft: "15%", height: "auto" }}>
          <h1 style={{ fontSize: "30px", color: "#9A9292", marginTop: "10%" }}>
            {feed.title}
          </h1>
          <h2>
            Target: <span style={{ color: "#9A9292" }}>Ksh {feed.amount}</span>
          </h2>
          <hr style={{ width: "70%", marginTop: "30px", marginRight: "30%" }} />
          <p style={{ width: "55%", color: "#9A9292", fontSize: "20px" }}>
            {feed.description}
          </p>
          <Button
            style={{
              fontFamily: "Syne",
              background: "#EE3D0F",
              color: "white",
              fontWeight: "500",
            }}
            variant="contained"
            disabled
          >
            Donate to:
          </Button>
          <h1
            style={{
              fontSize: "15px",
              color: "#9A9292",
              marginTop: "2%",
              fontWeight: "400",
            }}
          >
            {feed.phone}
          </h1>
        </div>
      </div>
    </div>
  );
}
