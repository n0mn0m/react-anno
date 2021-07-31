// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import { Annotorious } from '@recogito/annotorious';
import HelloWorldWidget from './helloWorldWidget';


const AnnotoriousLoader = () => {

  // Ref to the image DOM element
  const imgEl = useRef();
  const [ anno, setAnno ] = useState();
  const [ tool, setTool ] = useState('rect');

  // Init Annotorious when the component
  // mounts, and keep the current 'anno'
  // instance in the application state
  useEffect(() => {

    let annotorious = null;

    if (imgEl.current) {
      // Init
      annotorious = new Annotorious({
        image: imgEl.current,
        widgets: [
            'COMMENT',
            'TAG',
            HelloWorldWidget,
          ]
      });

      // Attach event handlers here
      annotorious.on('createAnnotation', annotation => {
        console.log('created', annotation);
      });

      annotorious.on('updateAnnotation', (annotation, previous) => {
        console.log('updated', annotation, previous);
      });

      annotorious.on('deleteAnnotation', annotation => {
        console.log('deleted', annotation);
      });
    }

    // Keep current Annotorious instance in state
    setAnno(annotorious);

    return () => annotorious.destroy();
  }, []);

  const toggleTool = () => {
    if (tool === 'rect') {
      setTool('polygon');
      anno.setDrawingTool('polygon');
    } else {
      setTool('rect');
      anno.setDrawingTool('rect');
    }
  }

  return (
    <div>
      <div>
        <button
          onClick={toggleTool}>
            { tool === 'rect' ? 'RECTANGLE' : 'POLYGON' }
        </button>
      </div>

      <img
        ref={imgEl}
        id="hallstatt"
        src="640px-Hallstatt.jpg"
        alt="Hallstatt Town Square" />
    </div>
  );
}

export default AnnotoriousLoader;