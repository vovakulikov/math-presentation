import React from 'react';
import { Presentation, Slide } from "presa";
import { H3, H1, H2, H4, Code } from "presa/blocks";

import { baseTextColor, primaryColor } from "./color";
import PlainSlide from './components/plain-slide';
import Numbered from "./components/numbered";
import List from "./components/list";

import IntroSlide from './slides/intro';
import AboutGantt from './slides/about-gantt';
import WrikeLogo from "./slides/wrike-slide";
import DartSlide from './slides/build-with-dart';
import Agenda from './slides/agenda';
import WhoAmI from './slides/who-am-i';
import SystemCoordinates from './slides/system-coordinates';
import CertesianSystem from './slides/cartesian-system';
import RectFactoryDemo from './slides/rect-factory-demo';
import MathMorth from './slides/math-morph';
import PolarSystem from './slides/polar-system';
import PolarCodeDemoSlide from './slides/polar-system-code';
import RafLoopSlide from './slides/raf-loop';
import AffineTransform from './slides/affine-transform';
import AffineTransformBig from './slides/affine-transformation-demo';
import AffineMatrix from './slides/affine-matrix';
import AffineComplexDemo from './slides/affine-complex-demo';
import AffineComplexDemoCode from './slides/affine-transformation-demo/code-demo';
import MatrixMult from './slides/matrix-mult';
import MatrixMultCode from './slides/matrix-mult-code';
import VelocityDemo from './slides/velocity-demo';
import LerpCode from './slides/lerp-code';
import Vector from './slides/vector';
import BallsGravityDemo from './slides/balls-gravity-demo';
import BallsGravityDemoCode from './slides/balls-gravity-demo/balls-demo-code';
import BublesWind from './slides/bubles-demo/bubles-wind';
import SecondLaw from './slides/second-law-newton';
import BubleWindCode from './slides/buble-wind-code-slide';
import Links from './slides/links';

const PitchDeck = () => (
	<Presentation
		name="Tips and Tricks from school"
		tableOfContents
		useFullscreenAPI
		theme={{ textColor: baseTextColor }}
	>

		<IntroSlide name='Intro'/>

		<PlainSlide name="Example animation (Particles)" background="white">
			<img src="./images/gifs/particles.gif" style={{height: "100%"}} alt="heart"/>
		</PlainSlide>

		<PlainSlide name="Example animation (Particles)" background="black">
			<img src="./images/gifs/circle.gif" style={{height: "100%"}} alt="heart"/>
		</PlainSlide>

		<PlainSlide name="Example animation (Heart)" background="black">
			<img src="./images/gifs/heart.gif" alt="heart"/>
		</PlainSlide>

		<PlainSlide name="Example animation (Rainbow)" background="black">
			<img src="./images/gifs/rainbow.gif" alt="heart"/>
		</PlainSlide>

		<WhoAmI name="Who am i?" centered/>

		<Slide name="Wrike" centered>
			<WrikeLogo src="./images/wrike-logo.svg"/>
		</Slide>

		<PlainSlide name="Gantt" background="#1a1110">
			<img src="./images/gantt-man.jpg" style={{ height: '100%' }} alt="gantt"/>
		</PlainSlide>

		<Slide name="Gantt name reveal" centered>
			<H2>Генри Лоуренс Гантт</H2>
			<H4>1861 - 1919</H4>
		</Slide>

		<AboutGantt name="Gantt Chart" background="./images/gantt-background.png" />

		<DartSlide name="Dart and love" />

		<PlainSlide name="Inertion scroll Gantt">
			<img src="./images/gifs/gantt-scroll.gif" style={{ width: '100%' }} alt="gantt-scroll"/>
		</PlainSlide>

		<Agenda name="Agenda" centered />

		<Slide name="Chapter One (Coordinates)">
			<Numbered number={1} primaryColor={primaryColor}>
				<H1>Системы координат</H1>

				<H3>
					Совокупность чисел, определяющих положение конкретной точки
					называется координатами этой точки
				</H3>

				<List>
					<li>Афинная</li>
					<li>Декартова</li>
					<li>Полярная</li>
				</List>
			</Numbered>
		</Slide>

		<CertesianSystem name="Certasian system" />

		<SystemCoordinates name="System coordinates"/>

		<RectFactoryDemo name="Rect factory demo"/>

		<RafLoopSlide name="requestAnimationFrame game loop" centered />

		<PlainSlide name="Polar Rose">
			<img src="./images/polar-rose.png" style={{ height: '100%' }} alt="polar-rose"/>
		</PlainSlide>

		<PolarSystem name='Polar system'/>

		<PlainSlide name="Polygon">
			<img src="./images/polygon.png" style={{ height: '100%' }} alt="heart"/>
		</PlainSlide>

		<PlainSlide name="Polar sytem image">
			<img src="./images/polar-system.png" style={{ height: '100%' }} alt="heart"/>
		</PlainSlide>

		<MathMorth name="Math morphing" />

		<PlainSlide name="polar to cartesian">
			<img src="./images/polar-to-cartesian.png" style={{ height: '100%' }} alt="heart"/>
		</PlainSlide>

		<PolarCodeDemoSlide name="Code demo polar shape"/>

		<AffineTransform name="Аффинные преобразования"></AffineTransform>

		<AffineTransformBig name="Крупный план аффиного поворота"/>

		<AffineMatrix name="Аффинные матрицы"/>

		<AffineComplexDemo name="Аффинный поворот демо"/>

		<AffineComplexDemoCode name="Демо"/>

		<MatrixMult name="Умножение матриц"/>

		<MatrixMultCode name="Умножение матрицы алгоритм"/>

		<Slide name="Chapter Two (Движение)">
			<Numbered number={2} primaryColor={primaryColor}>
				<H1>Движение</H1>

				<H3>
					Каждый фрейм обновляем каким то образом координаты (то что мы делали до этого уже кучу раз)
				</H3>

			</Numbered>
		</Slide>


		<VelocityDemo name="Линейная интерполяция"/>

		<LerpCode name="Lerp code"/>

		<Vector name="Вектор"/>

		<Slide name={"Vector Code"} centered>
			<Code>
				{`const vector => (x, y) => [x, y]`}
			</Code>
		</Slide>

		<Slide name="Summa of vectors" centered>
			<img src="./images/vector-sum.png" style={{ width: '800px', marginBottom: '40px' }} alt="summa of vectors"/>
			<Code>{`const add = (...vx) => 
  vx.reduce((a, v) => [a[0] + v[0], a[1] + v[1]], [0,0]);`}
			</Code>
		</Slide>

		<Slide name="Sub of vectors" centered>
			<img src="./images/vector-sub.png" style={{ width: '800px', marginBottom: '40px' }} alt="summa of vectors"/>
			<Code>{`const sub = (...vx) =>
   vx.reduce((a, v) => [a[0] - v[0], a[1] - v[1]]);`}
			</Code>
		</Slide>

		<Slide name="Mug of vectors" centered>
			<img src="./images/vector-mag.png" style={{ width: '800px', marginBottom: '40px' }} alt="summa of vectors"/>
			<Code>{`const mag = ([x,y]) => Math.sqrt(x*x + y*y);`}</Code>
		</Slide>

		<BallsGravityDemo name="Balls gravity demo"/>

		<BallsGravityDemoCode name="Gravity Code" />

		<PlainSlide background="#dedede" name="Newton">
			<img src="./images/newton.jpg" style={{ height: '100%' }} alt="gantt-scroll"/>
		</PlainSlide>

		<SecondLaw name="Second Law"/>

		<Slide name="About velocity and accel" centered>
			<H2>Ускорение действует на скорость, а скорость меняет позицию</H2>
		</Slide>

		<BublesWind name="Bubles Wind Demo"/>

		<BubleWindCode name="Code Wind"/>

		<Links name="Links"/>

	</Presentation>
);



export default PitchDeck;
