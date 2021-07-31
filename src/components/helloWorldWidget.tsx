import React from 'react';

const HelloWorldWidget = (props: { annotation: { bodies: any[]; }; onUpsertBody: (arg0: any, arg1: { value: any; purpose: string; }) => void; }) => {
    console.log('HelloWorldWidget', props);
  // We'll be using 'highlighting' as body purpose for
  // this type of widget
  const currentHighlight = props.annotation ?
    props.annotation.bodies.find(b => b.purpose === 'highlighting') : null;

  // This function handles body updates as the user presses buttons
  const setHighlightBody = (value: string) => () => {
    props.onUpsertBody(currentHighlight, { value, purpose: 'highlighting' });
  }

  return (
    <div>
      { [ 'red', 'green', 'blue' ].map(color =>
        <button
          key={color}
          className={currentHighlight?.value === color ? 'selected' : undefined}
          style={{ backgroundColor: color }}
          onClick={setHighlightBody(color)} />
      )}
    </div>
  )

}

export default HelloWorldWidget;