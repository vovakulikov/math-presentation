import React from 'react';
import styled from 'styled-components';
import { Slide } from 'presa';

const AboutGantt = (props) => (
	<SlideContent {...props}>
		<MetricNumber>~42k LOC</MetricNumber>
		<MetricLabel>Порт с андройда 🤦‍♀️</MetricLabel>

		<MetricNumber>~10k задач</MetricNumber>
		<MetricLabel>На канвасе и в DOM tree</MetricLabel>

		<MetricNumber>Online</MetricNumber>
		<MetricLabel>Коллаборативный доступ</MetricLabel>
	</SlideContent>
);

const SlideContent	= styled(Slide)`
	padding-top: 40px;
`;

const MetricNumber = styled.div`
  font-size: 34px;
  font-weight: 700;
`;

const MetricLabel = styled.div`
  font-size: 17px;
  color: #a0a0a0;
  letter-spacing: 0.5px;
  margin-bottom: 20px;
`;

export default AboutGantt;
