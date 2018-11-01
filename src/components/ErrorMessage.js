import React from 'react';
import Labels from '../utility/labels';

const ErrorMessage = (props) => {
    let errorMessage = <React.Fragment></React.Fragment>;
    if(props.venues.length === 0 && props.loading ){
        errorMessage =  <div className='venue-search__error'>
            <h4>{Labels.EMPTY_SEARCH_BOX}</h4>
        </div> ;
    }else if(props.venues.length === 0 && !props.loading){
        errorMessage =  <div className='venue-search__error'>
            <h4>{Labels.NO_RESULTS}</h4>
        </div> ;
    }
    return(
        <React.Fragment>
            {errorMessage}
        </React.Fragment>

    );
};

export default ErrorMessage;