import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";

export const metadata = {
  title: "Promptopia",
  description: "Discover and share AI props",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <header className="main">
            <div className="gradient" />
          </header>
          <main className="app">
            <Nav />
            {children}
          </main>
          <footer>Create by: Angelo Carlotto at 28, march of 2024. Toronto, Canada</footer>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
