import"./App.scss"
export default function Home() {
  return (
    <div className="all_logo_frame">
      <a className="logo_flex">
        <div className="img"></div>
        <div>
          <p className="logo_title">billbox</p>
        </div>
      </a>
      <div className="contents">
        <a className="content">特徴</a>
        <a className="content">料金プラン</a>
        <a className="content">Pricing</a>
        <a className="content">About</a>
      </div>
      <div className="login_sinki">
        <div className="login_frame">
          <a className="login">ログイン</a>
        </div>
        <div className="sinki_frame">
          <a className="sinki">新規登録</a>
        </div>
      </div>
    </div>
  );
}
