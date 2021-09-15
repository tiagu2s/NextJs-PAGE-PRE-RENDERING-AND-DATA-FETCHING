import Document, { Html, Head, Main, NextScript } from "next/document";

class MyComponent extends Document {
  render() {
    return (
      <Html lang="en">
        {/* Extra html elements outside components */}
        <div id="overlays"></div>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyComponent;
