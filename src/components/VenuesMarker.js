import React, { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps';
export default class VenueMarker extends Component {
    state={
        showInfo:false
    }
    
    handleMouseOver = () => {
        this.setState({
            showInfo : true
        });
    }

    handleMouseOut = () => {
        this.setState({
            showInfo:false
        });
    }

    render(){
        const Information = () => {
            return <React.Fragment> <h4>{this.props.name}</h4><h6>{this.props.address}</h6> </React.Fragment>;
        };
        return(
            <Marker
                position={this.props.location}
                onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} >
                {(this.props.selectedVenue || this.state.showInfo) && 
                (<InfoWindow>{Information()}</InfoWindow>)
                }
            </Marker>
        );
    }
}