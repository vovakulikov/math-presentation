import React from 'react';
import { Presentation, Slide } from "presa";
import { H3, H1, H2, H4 } from "presa/blocks";

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

const PitchDeck = () => (
	<Presentation
		name="Tips and Tricks from school"
		tableOfContents
		useFullscreenAPI
		theme={{ textColor: baseTextColor }}
	>

		<IntroSlide name='Intro'/>

		<PlainSlide name="Example animation (Heart)" background="black">
			<img src="./images/gifs/heart.gif" alt="heart"/>
		</PlainSlide>

		<PlainSlide name="Example animation (Rainbow)" background="black">
			<img src="./images/gifs/rainbow.gif" alt="heart"/>
		</PlainSlide>

		<Slide name="Wrike" centered>
			<WrikeLogo src="./images/wrike-logo.svg"/>
		</Slide>

		<DartSlide name="Dart and love" />

		<AboutGantt name="Gantt Chart" background="./images/gantt-background.png" />

		<Agenda name="Agenda" centered />

		<WhoAmI name="Who am i?" centered/>

		<PlainSlide name="Inertion scroll Gantt">
			<img src="./images/gifs/gantt-scroll.gif" style={{ width: '100%' }} alt="gantt-scroll"/>
		</PlainSlide>

		<PlainSlide name="Gantt" background="#1a1110">
			<img src="./images/gantt-man.jpg" style={{ height: '100%' }} alt="gantt"/>
		</PlainSlide>

		<Slide name="Gantt name reveal" centered>
			<H2>Генри Лоуренс Гантт</H2>
			<H4>1861 - 1919</H4>
		</Slide>

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

		<SystemCoordinates name="System coordinates"/>

		<CertesianSystem name="Certasian system" />

		<PlainSlide name="Polar Rose">
			<img src="./images/polar-rose.png" style={{ height: '100%' }} alt="polar-rose"/>
		</PlainSlide>

	</Presentation>
);


export default PitchDeck;
