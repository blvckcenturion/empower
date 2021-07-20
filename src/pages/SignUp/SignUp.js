import React from 'react';
import { InfoSection } from '../../components';
import { signObjOne, signObjThree } from './Data';

function SignUp() {
  return (
    <>
      <InfoSection {...signObjOne} />
      <InfoSection {...signObjThree} />
    </>
  );
}

export default SignUp;
