import MainPage from '../components/mainPage';

// Define your metadata
const metadata = {
    title: 'Whisper API Sample App',
    description: 'A sample webapp for transcribing speech using OpenAI Speech to Text API based on Whisper',
    icons: {
        icon: '/logo192.png',
        shortcut: '/logo192.png',
        apple: '/logo192.png',
        other: {
            rel: 'apple-touch-icon-precomposed',
            url: '/logo192.png',
        }
    }
};

// Export generateMetadata function for viewport configuration
export const generateMetadata = () => ({
    viewport: 'maximum-scale=1.0, minimum-scale=1.0, initial-scale=1.0, width=device-width, user-scalable=0',
    ...metadata,
});

export default function Page(props) {
    return (
        <>
            <MainPage {...props} />
        </>
    );
}