import '../styles/index.scss'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

// Google Analytics script
const script = document.createElement('script');
script.async = true;
script.src = 'https://www.googletagmanager.com/gtag/js?id=G-G6V47G0V0D';
script.onload = () => {
    window.dataLayer = window.dataLayer || [];

    function gtag(...args: any[]) {
        window.dataLayer.push(...args);
    }

    gtag('js', new Date());
    gtag('config', 'G-G6V47G0V0D');
};
document.head.appendChild(script);

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default MyApp