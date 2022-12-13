import Document, {DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript} from "next/document";


export default class MyDocument extends Document {
    static async getInitialPrors(context: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(context);
        return {...initialProps};
    }

    render(): JSX.Element {
        return (
            <Html lang="ru">
                <Head><title>Some</title></Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}