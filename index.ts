import './src/styles/app.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/solid.css';
import '@fortawesome/fontawesome-free/css/brands.css';
import * as AOS from 'aos';
import setupMobileNav from './src/scripts/mobile-nav';
import startCountdownTimer from './src/scripts/countdown-timer';

AOS.init({ duration: 800 });

setupMobileNav();

startCountdownTimer();
