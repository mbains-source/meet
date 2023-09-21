import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberofEvents from "./NumberofEvents";
import EventGenre from "./EventGenre";
import { getEvents, extractLocations, checkToken, getAccessToken } from "./api";
import "./nprogress.css";
import WelcomeScreen from "./WelcomeScreen";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    warningText: "",
    showWelcomeScreen: undefined,
  };

  updateEvents = (location, eventCount) => {
    if (location) {
      this.setState({
        currentLocationlocation: location,
      });
    } else {
      location = this.state.currentLocation;
    }
    if (eventCount) {
      this.setState({
        numberOfEvents: eventCount,
      });
    } else {
      eventCount = this.state.numberOfEvents;
    }

    getEvents().then((events) => {
      let locationEvents =
        location
          ? events.filter((event) => event.location === location)
          : events;

      if (eventCount && eventCount < locationEvents.length) {
        locationEvents = locationEvents.slice(0, eventCount);
      }
      this.setState({
        events: locationEvents,
      });
    });

    if (!navigator.onLine) {
      this.setState({
        warningText: "You seem to be offline; events were pulled from cache.",
      });
    } else {
      this.setState({
        warningText: "",
      });
    }
  };

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter(
        (event) => event.location === location
      ).length;
      const city = location.split(", ").shift();
      return { city, number };
    });
    return data;
  };

  render() {
    const { events } = this.state;
    if (this.state.showWelcomeScreen === undefined)
      return <div className="App" />;

    return (
      <div className="App">
        <h1>Meet App</h1>
        <h4>Choose your nearest city</h4>
        <CitySearch
          locations={this.state.locations}
          updateEvents={(location) => {
            this.updateEvents(location);
          }}
        />
        <NumberofEvents
          numberOfEvents={this.state.numberOfEvents}
          updateEvents={(count) => {
            this.updateEvents(undefined, count);
          }}
        />

        <h4>Events in each city</h4>
        <div className="data-vis-wrapper">
          <EventGenre events={events} />
          <ResponsiveContainer height={400}>
            <ScatterChart
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="city" type="category" name="city" />
              <YAxis dataKey="number" type="number" name="number of events" />
              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
              <Scatter data={this.getData()} fill="#2364aa" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        <EventList events={this.state.events} />
        <WelcomeScreen
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => {
            getAccessToken();
          }}
        />
      </div>
    );
  }

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem("access_token");
    let isTokenValid;
    if (accessToken && !navigator.onLine) {
      isTokenValid = true;
    } else {
      isTokenValid = (await checkToken(accessToken)).error ? false : true;
    }
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        const filteredEvents = events.slice(0, this.state.numberOfEvents);
        this.setState({
          events: filteredEvents,
          locations: extractLocations(filteredEvents),
        });
      });
    }

    if (!navigator.onLine) {
      this.setState({
        warningText: "You seem to be offline; events were pulled from cache.",
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }
}

export default App;