import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import News from './components/News';
import Agenda from './components/Agenda';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <Home />
        <News />
        <Agenda />
      </main>
      <Footer />
    </div>
  );
}

export default App;
