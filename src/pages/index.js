import React, { Component } from "react"
import { HomeHeader, Banner, SearchBar } from '../utils';
import homeBcg from '../images/bcg/homeBcg.jpg';
import Layout from "../components/layout"
import Artist from '../components/HomePageComponents/Artist';
import { connect } from "react-redux"
import { searchField, findArtist, getEvents } from '../state/actions/actions';

class IndexPage extends Component {

  onSearchFieldChange = (event) => {
    this.props.onSearchFieldChange(event.target.value);
  }

  onSearchFieldSubmit = (event) => {
    event.preventDefault();

    if (this.props.searchField.length === 0) {
      document.querySelector('.input-error-message').setAttribute('style', 'display: block');
    } else {
      document.querySelector('.input-error-message').setAttribute('style', 'display: none');
      this.props.onFindArtist(this.props.searchField);
      this.props.onGetEvents(this.props.searchField);
    }
  }

  render() {
    const { isPendingArtist, artist, errorArtist, isPendingEvents, events, errorEvents, searchField } = this.props;
    return (
      <Layout >
        <HomeHeader img={homeBcg}>
          <Banner title='face reality artists library' subtitle='your ultimate guide to artists and events' />
        </HomeHeader>
        <SearchBar searchField={searchField} searchFieldChange={this.onSearchFieldChange} searchFieldSubmit={this.onSearchFieldSubmit}/>
        <Artist
          artistData={artist}
          artistDataError={errorArtist}
          artistDataPending={isPendingArtist}
          eventData={events}
          eventDataError={errorEvents}
          eventDataPending={isPendingEvents}
        />
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  searchField: state.searchField.searchField,
  isPendingArtist: state.findArtist.isPendingArtist,
  artist: state.findArtist.artist,
  errorArtist: state.findArtist.errorArtist,
  isPendingEvents: state.getEvents.isPendingEvents,
  events: state.getEvents.events,
  errorEvents: state.getEvents.errorEvents
});

const mapDispatchToProps = dispatch => ({
  onFindArtist(artist) { dispatch(findArtist(artist)) },
  onGetEvents(artist) { dispatch(getEvents(artist)) },
  onSearchFieldChange(text) { dispatch(searchField(text)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
