import React from 'react';
import LayoutHeader from '../components/LayoutHeader';
import LayoutContent from '../components/LayoutContent';
import HeaderContent from '../components/HeaderContent';
import ComponentLocation from '../components/ComponentLocation';
import ComponentSchedule from '../components/ComponentSchedule';
import ComponentOther from '../components/ComponentOther';
import Separator from '../components/ComponentSeparator';

const IndexPage = () => (
    <>
      <LayoutHeader>
    <div id="bg">
      <Separator/>
    </div>
        <div id="overlay" />
        <div id="main">
          <HeaderContent/>
        </div>
      </LayoutHeader>
      <LayoutContent>
        <ComponentLocation/>
        <ComponentSchedule/>
        <ComponentOther/>
      </LayoutContent>
      <div id="blackcat"></div>
    </>
);

export default IndexPage;
