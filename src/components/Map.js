import React, { Component } from 'react'

import ReactMapGL, { Marker } from 'react-map-gl'

import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import * as ModalActions from '../store/actions/modal'

class Map extends Component {
  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: -16.0338,
      longitude: -51.9952,
      zoom: 3.3
    }
  }

  componentWillMount () {
    window.addEventListener('resize', this.viewportResize)
    this.viewportResize()
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.viewportResize)
  }

  viewportResize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: `${window.innerWidth}px`,
        height: `${window.innerHeight}px`
      }
    })
  }

  handleMapClick = e => {
    const [long, lat] = e.lngLat
    console.log(long, lat)
    this.props.openModal(e.lngLat)
  }

  render () {
    const { markers } = this.props
    return (
      <div className="h-screen absolute">
        <ReactMapGL
          {...this.state.viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          onViewportChange={viewport => this.setState({ viewport })}
          onClick={this.handleMapClick}
        >
          {markers &&
            markers.map(marker => (
              <Marker
                key={marker.id}
                latitude={marker.position.lat}
                longitude={marker.position.long}
                captureClick={true}
              >
                <img
                  className="rounded-full h-12 w-12"
                  alt={marker.login || marker.name}
                  src={marker.avatar_url}
                />
              </Marker>
            ))}
        </ReactMapGL>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  markers: state.devs.list
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(ModalActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)
