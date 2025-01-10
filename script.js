fetch("test.txt")
  .then((data) => data.text())
  .then((res) => console.log(res));
// 「テキストデータです」と出力される


console.log("読み込みテスト_下に書く");
