import React from 'react';
import { Slide } from "presa";
import { Code } from "presa/blocks";

export default (props) => (
    <Slide {...props} centered>
        <Code>
            {`let v = vector(0, 10);
let position = [0, 0];
const accel = [0, 2];

function draw() { 
 requestAnimationFrame(draw);

 v = add(v, accel);
 position = add(position, v);

 // Draw something by new position each frame
}
`}
        </Code>
    </Slide>
);
