console.log("読み込みテスト");

fetch("test.txt")
  .then((data) => data.text())
  .then((res) => console.log(res));
// 「テキストデータです」と出力される