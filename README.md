# 熱中症対策アプリ

このアプリは、ユーザーの現在地から気温・湿度を取得し、熱中症対策の指針を表示するWebアプリです。

## 使い方

1. OpenWeatherMap（https://openweathermap.org/api）でAPIキーを取得してください。
2. `index.html` の `OPEN_WEATHER_API_KEY` に取得したAPIキーを入力してください。
3. `index.html` をWebサーバーやパソコンで開くと利用できます。

## デプロイ例（Netlify）
1. このフォルダをGitHub等にアップロード
2. Netlify（https://www.netlify.com/）で新規サイトとしてデプロイ

## 注意事項
- WBGT（暑さ指数）は目安であり、実際の値は気象庁等の公式情報も参考にしてください。
- APIキーは他人に知られないようご注意ください。

## ライセンス
MIT
