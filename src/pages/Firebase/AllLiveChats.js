import React, { Component } from "react";

import Comment from "./Comment";
import base, { auth, providers, databased } from "../../utils/FirebaseSettings";
import OneLiveChat from "./OneLiveChat";
class AllLiveChats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: "Loading",
    };
  }

  componentDidMount() {
    var starCountRef = databased.ref(this.props.slug);
    starCountRef.on("value", (snapshot) => {
      let a = snapshot.numChildren();
      this.setState({ counter: a });
      console.log(a);
    });
  }

  renderComment(key, comment, slug, id, user, name, currentUser) {
    return (
      <OneLiveChat
        key={key}
        comment={comment}
        slug={slug}
        id={key}
        user={user}
        name={name}
        currentUser={currentUser}
      />
    );
  }

  render() {
    return (
      <div>
        <div>
          {/* {this.state.counter==="loading" &&(
          <div className='p-3 text-center'>
            <h5>Comments Loading.....</h5>
          </div>
        )} */}
          {this.state.counter === 0 && (
            <div className="p-3 text-center">
              <h5>Be First to start a live chat</h5>
            </div>
          )}
         
          {Object.keys(this.props.comments)
            .map((key) =>
              this.renderComment(
                key,
                this.props.comments[key],
                this.props.slug,
                Object.keys(this.props.comments[key]),
                this.props.user,
                this.props.name,
                this.props.currentUser
              )
            )}
          {/* {JSON.stringify(Object.keys(this.props.comments))} */}
        </div>
      </div>
    );
  }
}

export default AllLiveChats;
