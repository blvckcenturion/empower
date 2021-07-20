import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { servicesObjOne } from './Data';

function Services() {
  return (
    <>
      <Pricing />
      <InfoSection {...servicesObjOne} />
    </>
  );
}

export default Services;
