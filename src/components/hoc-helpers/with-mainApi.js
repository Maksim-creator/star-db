import React from 'react';
import { Consumer } from '../context-api';

const withMainApi = (Wrapped, mapMethodsToProps) => {

  return (props) => {
      return (
        <Consumer>
          {
            (mainApi) => {
				console.log(mapMethodsToProps);
			  const serviceProps = mapMethodsToProps(mainApi);

              return (
                <Wrapped {...props} {...serviceProps} />
              );
            }
          }
        </Consumer>
      );
  }
};

export default withMainApi;
