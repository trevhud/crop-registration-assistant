import MainPage from '../components/mainPage'
import Head from 'next/head';

export const metadata = {
    title: 'Whisper API Sample App',
    description: 'A sample webapp for transcribing speech using OpenAI Speech to Text API based on Whisper',
    viewport: 'maximum-scale=1.0, minimum-scale=1.0, initial-scale=1.0, width=device-width, user-scalable=0',
    icons: {
        icon: '/logo192.png',
        shortcut: '/logo192.png',
        apple: '/logo192.png',
        other: {
            rel: 'apple-touch-icon-precomposed',
            url: '/logo192.png',
        }
    }
}

export default function Page(props) {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="viewport" content={metadata.viewport} />
                <link rel="icon" href={metadata.icons.icon} />
                <link rel="shortcut icon" href={metadata.icons.shortcut} />
                <link rel="apple-touch-icon" href={metadata.icons.apple} />
                <link rel={metadata.icons.other.rel} href={metadata.icons.other.url} />
            </Head>
            <MainPage {...props} />
        </>
    );
}