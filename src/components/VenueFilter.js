import React, { Component } from 'react';
import { DropdownButton,MenuItem } from 'react-bootstrap';
import { PLACETYPES, RADIUS, FILTERBTNENABLEDCOLOR, FILTERBTNDISABLEDCOLOR } from '../utility/constants';
import Labels from '../utility/labels';
import * as bs from 'bootstrap/dist/css/bootstrap.min.css';

export default class VenueFilter extends Component {
    state = {
        selectedTypeFilter: Labels.PLACE_TYPE_FILTER,
        selectedRadiusFilter: Labels.PLACE_RADIUS_FILTER,
        openNowBtnColor: FILTERBTNDISABLEDCOLOR,
        openNowFilter: false
    }
    
    changePlaceTypeFilter = (type) => {
        this.setState({
            selectedTypeFilter : type
        });
        this.props.handlePlaceTypeFilter(type, this.state.openNowFilter, this.state.selectedRadiusFilter);
    }

    changePlaceRadiusFilter = (radius) => {
        this.setState({
            selectedRadiusFilter : radius
        });
        this.props.handlePlaceTypeFilter(this.state.selectedTypeFilter, this.state.openNowFilter, radius);
    }

    changeTimeFilter = () =>{
        const openNowBtnColor = this.state.openNowFilter ? FILTERBTNDISABLEDCOLOR : FILTERBTNENABLEDCOLOR;
        this.setState({
            openNowFilter : !this.state.openNowFilter,
            openNowBtnColor: openNowBtnColor
        },() => this.props.handlePlaceTypeFilter(this.state.selectedTypeFilter,this.state.openNowFilter, this.state.selectedRadiusFilter));     
    }

    getPlaceMenuItems = () => {
        return PLACETYPES.map((type,i) => {
            return  <MenuItem eventKey={i} key={i} onClick={() => this.changePlaceTypeFilter(type)}>{type}</MenuItem>;
        });
    }

    getRadiusOptions = () => {
        return RADIUS.map((radius,i) => {
            return  <MenuItem eventKey={i} key={i} onClick={() => this.changePlaceRadiusFilter(radius)}>{radius}</MenuItem>;
        });
    }

    render(){
        return(
            <div className='venue-search__location-filters'>
                <DropdownButton title={ this.state.selectedTypeFilter } bsStyle='default' id='placeType' key='1' >
                    {this.getPlaceMenuItems()}
                </DropdownButton>
                <DropdownButton title={this.state.selectedRadiusFilter} bsStyle='default' id='radius' key='2' >
                    {this.getRadiusOptions()}
                </DropdownButton>
                <div>
                    <button style={{backgroundColor:this.state.openNowBtnColor}} className='venue-search__filter_button' onClick={() => this.changeTimeFilter()}>{Labels.OPENNOW_FILTER}</button>
                </div>
            </div>
        );
    }
}