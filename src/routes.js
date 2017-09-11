
//lazyloaded components to route
const Home = () => import('./components/Home.vue');
const Portfolio = () => import('./components/portfolio/Portfolio.vue');
const StocksDisplay = () => import('./components/stocks/StocksDisplay.vue');
const SignUp = () => import('./components/SignUp.vue');


export const routes = [
    { path: '/', component: Home, },
    { path: '/portfolio', component: Portfolio },
    { path: '/stocks', component: StocksDisplay },
    { path: '/signup', component: SignUp }
]