import React from 'react';
// Receive the success state as a prop

/**
 * @function
 * @param { object } props
 * @returns {JSX.Element}
 */

export default (props) => {
    if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">Congratulations! You guess the word!
        </span>
      </div>
      )
    } else {
      return (
        <div data-test="component-congrats" />
      );
    }
}
