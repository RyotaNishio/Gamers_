import {AppProps} from "next/app";
import { Layout } from "./components/layout";
import "tailwindcss/tailwind.css";

const Myapp = ({Component, pageProps}: AppProps) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default Myapp