// URLを定義しておく
const ENDPOINT = 'http://ec2-13-114-230-148.ap-northeast-1.compute.amazonaws.com:3001';

// `GET /todos` をリクエストする関数を用意する
export const index = () =>
  fetch(`${ENDPOINT}/todos`) // テンプレートリテラルで BASE_URL を展開
    .then(response => response.json()) // レスポンスを JSON として読み込む