// api/weather.js (for Vercel)
export default async function handler(req, res) {
  const { lat, lon } = req.query;
  const apiKey = process.env.OPEN_WEATHER_API_KEY;

  if (!lat || !lon) {
    res.status(400).json({ error: '緯度と経度が必要です。' });
    return;
  }
  if (!apiKey) {
    res.status(500).json({ error: 'APIキーが設定されていません。' });
    return;
  }

  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=ja&appid=${apiKey}`;
  try {
    const response = await fetch(weatherApiUrl);
    if (!response.ok) {
      res.status(response.status).json({ error: 'OpenWeatherMap APIエラー', status: response.status });
      return;
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
