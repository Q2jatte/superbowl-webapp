function WeatherEmoji(description) {
    let emoji = "";
  if (description.includes("rain")) {
    emoji = "🌧️";
  } else if (description.includes("snow")) {
    emoji = "❄️";
  } else if (description.includes("thunder")) {
    emoji = "⛈️";
  } else if (description.includes("sleet")) {
    emoji = "🌨️";
  } else if (description.includes("fog")) {
    emoji = "🌫️";
  } else if (description.includes("drizzle")) {
    emoji = "🌦️";
  } else if (description.includes("cloudy")) {
    emoji = "☁️";
  } else if (description.includes("clear") || description.includes("sunny")) {
    emoji = "☀️";
  } else {
    emoji = "❓"; // Emoji par défaut si aucune correspondance n'est trouvée
  }

  return emoji;
}

export default WeatherEmoji;



