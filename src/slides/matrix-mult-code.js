import React from 'react';
import CodeSlide from '../components/code-slide';

const code = `function multiplyMatrix(A,B){
    const rowsA = A.length, colsA = A[0].length,
        	rowsB = B.length, colsB = B[0].length,
        	C = [];

    if (colsA != rowsB) return false;

    for (var i = 0; i < rowsA; i++) C[ i ] = [];
    for (var k = 0; k < colsB; k++){
         for (var i = 0; i < rowsA; i++){
            var t = 0;

            for (var j = 0; j < rowsB; j++) t += A[ i ][j]*B[j][k];

            C[ i ][k] = t;
        }
     }

    return C;
}`;


const highlightSettings = {
	0: { lines: [2,3,4], subTitle:  () => 'Находим количество столбцов и строк матриц' },
	1: { lines: [6], subTitle:  () =>'Проверяем можно ли умножить матрицы'},
	2: { lines: [8], subTitle: () => 'Создаем строки результирующей матрицы' },
	3: { lines: [9, 10, 11, 12, 13, 14, 15], subTitle: () => 'Умножение строк на столбцы' },
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
