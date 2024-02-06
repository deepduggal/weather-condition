/**
 * General conditions of weather. Can be inherited from for conditions for any day
 */
class Weather {
  constructor(temperature, precipitation, description) {
    this.temperature = temperature;
    this.precipitation = precipitation;
    this.description = description;

    this.displayConditions = this.displayConditions.bind(this);
  }

  /**
   * Displays general weather conditions
   */
  displayConditions() {
    console.log(`Description: ${this.description}`);
    console.log(`Temperature: ${this.temperature}`);
    console.log(`Precipitation: ${this.precipitation}`);
  }
}

/**
 * The weather for a specific day
 */
class DayWeather extends Weather {
  constructor(temperature, precipitation, description, dayOfWeek, alerts = []) {
    super(temperature, precipitation, description);
    this.dayOfWeek = dayOfWeek;
    this.alerts = alerts;
  }

  displayConditions() {
    console.log(`Day of Week: ${this.dayOfWeek}`);
    if (this.alerts.length) console.log(`Alerts: ${this.alerts}`);
    super.displayConditions();
  }
}

new Weather('75F', 'rainy', 'Hot and rainy.').displayConditions();
new DayWeather('45F', 'cloudy', 'Cool and cloudy.', 'Sunday', ['The world is on fire.']).displayConditions();