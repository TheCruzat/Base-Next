import Document from 'next/document'
import { Fragment } from 'react'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const isProduction = process.env.NODE_ENV === 'production';
      const initialProps = await Document.getInitialProps(ctx);

      const setGoogleTags = () => {
        return {
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-9118117-22');
      `
        };
      }

      return {
        ...initialProps,
        isProduction,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
            {isProduction && (
                <Fragment>
                  <script
                      async
                      src="https://www.googletagmanager.com/gtag/js?id=UA-9118117-22"
                  />
                  {/* We call the function above to inject the contents of the script tag */}
                  <script dangerouslySetInnerHTML={setGoogleTags()} />
                </Fragment>
            )}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}
