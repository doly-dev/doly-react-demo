import React, { Component } from "react";

import styles from "./style.less";

export default class ExamplePage extends Component {
  state = {
    loading: false,
    notices: []
  };

  getNotices = () => {
    const { loading } = this.state;
    if (loading) {
      return;
    }

    this.setState({
      loading: true
    });

    services
      .getNotices()
      .then(res => {
        this.setState({
          notices: res.data
        });
      })
      .finally(() => {
        this.setState({
          loading: false
        });
      });
  };

  clearNotices = () => {
    this.setState({
      notices: []
    });
  };

  render() {
    return (
      <div>
        <h2>Example Page</h2>
        <h3>CSS</h3>
        <p>
          默认使用
          <a
            href="https://github.com/webpack-contrib/css-loader#modules"
            target="_blank"
            rel="noopener noreferrer"
          >
            css module
          </a>
          <br />
          <br />
          <em>每个独立组件和页面，单独放一个样式文件</em>
        </p>
        <span className={styles.bgColors}>
          <span className={styles.red}>赤</span>
          <span className={styles.orange}>橙</span>
          <span className={styles.yellow}>黄</span>
          <span className={styles.green}>绿</span>
          <span className={styles.cyan}>青</span>
          <span className={styles.blue}>蓝</span>
          <span className={styles.purple}>紫</span>
        </span>
      </div>
    );
  }
}
