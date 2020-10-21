import React from 'react';
import './assets/styles/styles.css';
import defaultDataset from './dataset';



class App extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      answer: [],  //回答コンポーネントに表示するデータ
      chats: [], //チャットコンポーネントに表示するデータ
      currentId: "init", //現在の質問ID
      dataset: defaultDataset, //質問と回答のデータセット
      open:false //問い合わせフィーム用モーダルの開閉を管理
    }
  }

  render() {
    return (
      <section className="c-section" >
        <div className="c-box">
          hello chatbot
        </div>
      </section>
    )
  }
}

export default App;
