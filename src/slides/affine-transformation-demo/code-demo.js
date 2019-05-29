import React from 'react';
import CodeSlide from '../../components/code-slide';

const code = `const angle = 0.01;
function draw(time) {
   requestAnimationFrame(draw);

   for (let i = 0; i < points.length;i++) {
    const point = points[i];

    const x = point.x;
    const y = point.y;

    point.x = x * Math.cos(angle) - y * Math.sin(angle);
    point.y = x * Math.sin(angle) + y * Math.cos(angle);

    ctx.lineTo(point.x + state.offsetX ,point.y + state.offsetY);
   }
   
   drawShape(points);
  }

requestAnimationFrame(draw);`;


const highlightSettings = {
	0: { lines: [1], subTitle:  () => 'Значение угла на которое мы поворачиваем угол (в радианах)' },
	1: { lines: [5,6,7,8,9,10,11,12,13,14,15], subTitle:  () =>'Обходим все наши точки по которым отрисовывается фигура'},
	2: { lines: [11, 12], subTitle: () => 'Умножение матрицы поворота на координаты точки' },
	3: { lines: [17], subTitle: () => 'Отрисовываем фигуру по точкам' },
};

export default (props) => {
	return (
		<CodeSlide
			{...props}
			code={code}
			lightMap={highlightSettings}
		/>
	);
};
