'use strict';

const e = React.createElement; //创建React Element的一种简写形式

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
// const domContainer2 = document.querySelector('#like_button_container2');
// const domContainer3 = document.querySelector('#like_button_container3');
ReactDOM.render(e(LikeButton), domContainer);
// ReactDOM.render(e(LikeButton), domContainer2);
// ReactDOM.render(e(LikeButton), domContainer3);
