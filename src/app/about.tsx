export default function AboutPage() {
  return (
    <>
      <h1>Siokonbu</h1>
      <img className="icon" src="siokonbu02_icon.jpg" />
      <h2>About</h2>
      <p>
        簡単な自己紹介やアピール。
        <br />
        どんなことができる、したいのか。
      </p>
      <h3>Profile</h3>
      <ul>
        <li>名前: Siokonbu</li>
        <li>所在地: 奈良県</li>
        <li>得意領域: まだない</li>
      </ul>
      <h3>Skills</h3>
      <table>
        <tbody>
          <tr>
            <th>OS</th>
            <td>Windows, Ubuntu, MacOS</td>
          </tr>
          <tr>
            <th>Engine, Frameworks</th>
            <td>Node.js, Express など</td>
          </tr>
          <tr>
            <th>Tool, MiddleWare</th>
            <td>Git, PostgreSQL など</td>
          </tr>
          <tr>
            <th>資格・免許</th>
            <td>ITパスポート</td>
          </tr>
        </tbody>
      </table>
      <h3>Works</h3>
      <p>アピールできる活動内容を書きましょう。</p>
      <ul>
        <li>
          <a href="https://github.com/">GitHub</a>
        </li>
        <li>
          <a href="https://qiita.com/Siokonbu">Qiita</a>
        </li>
        <li>
          <a href="https://zenn.dev/">Zenn</a>
        </li>
        <li>
          作った作品
          <ul>
            <li>
              <a href="https://example.com/">作品 1</a>
            </li>
            <li>
              <a href="https://example.com/">作品 2</a>
            </li>
          </ul>
        </li>
      </ul>
      <h3>Contact</h3>
      <p>連絡先や SNS のアカウントを書きましょう。</p>
      <ul>
        <li>
          <a href="mailto:name@example.com">Mail</a>
        </li>
        <li>
          <a href="https://x.com/Siokonbu966">X</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/">LinkedIn</a>
        </li>
      </ul>
      <h3>History</h3>
      <p>学歴、職歴、アルバイト、インターン経験など。</p>
      <table>
        <thead>
          <tr>
            <th>2019 年</th>
            <td>
              <a href="https://dwango.co.jp/">株式会社ドワンゴ</a> 入社
            </td>
            <th>2018 年</th>
            <td>
              学校法人角川ドワンゴ学園{" "}
              <a href="https://nnn.ed.jp/">N高等学校</a> 卒業
            </td>
            <th>20XX 年</th>
            <td>表彰、受賞歴、メディア掲載記事などあれば</td>
          </tr>
        </thead>
      </table>
      <h3>好きな動画</h3>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/jVnBk3p7T-Q?si=WGi19NYVwdu0R3XX"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <h3>Open Processing</h3>
      <iframe
        src="https://openprocessing.org/sketch/2474545/embed/"
        width="400"
        height="400"
      ></iframe>
    </>
  );
}
