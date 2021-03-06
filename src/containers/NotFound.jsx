import React from 'react';
import { Header } from '../components';
import '../assets/styles/NotFound.scss';

const NotFound = () => (
  <>
    <Header isNotFound='true' />
    <section className='container__not-found'>
      <h1 className='container__not-found--title'>404</h1>
      <h2 className='container__not-found--subtitle'>Page not found</h2>
    </section>
  </>
);

export default NotFound;
