import {  api_key_url, api_host_url_search, api_host_url_explore} from '../../utility/environmentConfig';

export const getVenuesbyLocation = (coords) => {
    const url = `${api_host_url_search}?ll=${coords}${api_key_url}`;
    return fetch(url, {
        method: 'GET'
    }).then(response => response.json());
};

export const getVenuesbyPlace = (place) => {
    const url = `${api_host_url_search}?near=${place}${api_key_url}`;
    return fetch(url, {
        method: 'GET'
    }).then(response => response.json());
};

export const getVenuesbyFilters = (place, section, openNowFilter, radius) => {
   
    let url = `${api_host_url_explore}?near=${place}${api_key_url}`;
    if(section && section !== 'All'){
        url = `${url}&section=${section}`;
    }
    if(openNowFilter){
        openNowFilter = openNowFilter ? 1 : 0; 
        url = `${url}&openNow=${openNowFilter}`;
    }
    if(radius && !radius.includes('Radius')){
        url = `${url}&radius=${radius}`;
    }
    return fetch(url, {
        method: 'GET'
    }).then(response => response.json());
};