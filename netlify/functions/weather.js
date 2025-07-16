const fetch = require('node-fetch');

// OpenWeatherMap APIキーをここに設定（絶対に公開しないでください）
const OPEN_WEATHER_API_KEY = "YOUR_OPENWEATHERMAP_API_KEY"; // ←ここに取得したAPIキーを入力

exports.handler = async function(event, context) {
  const lat = event.queryStringParameters.lat;
  const lon = event.queryStringParameters.lon;

  if (!lat || !lon) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: '緯度と経度が必要です。' })
    };
  }

  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=ja&appid=${OPEN_WEATHER_API_KEY}`;

  try {
    const response = await fetch(weatherApiUrl);
    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: 'OpenWeatherMap APIエラー', status: response.status })
      };
    }
    const data = await response.json();
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
