import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Actions from "./pages/Actions/Actions";
import Services from "./pages/Servicess/Services";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";

const Layout = () => {
  const location = useLocation();
  const validRoutes = ["/", "/actions", "/services", "/about", "/contact"];
  const showLayout = validRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <>
      {showLayout && <Navbar />}
      <Outlet />
      {showLayout && <Footer />}
    </>
  );
};

const App = () => {
  const movies = [
    {
      id: 1,
      title: "Dog Man",
      category: "adventure",
      about:
        "İt Adam, yarı it, yarı insan, qorumağa və xidmət etməyə and içib, pişik supercinayətkar Piti Pişiyi inadla izləyir.",
      poster:
        "https://cinemastercard.az/site/assets/files/0/35/01/656/dogman-700x1000.350x0.jpg",
    },
    {
      id: 2,
      title: "Paddinngton",
      category: "adventure",
      about:
        "Braun ailəsinin tamhüquqlu üzvü və Britaniya vətəndaşı olan Paddinngton uzaq vətəninə - Peruya Lüsi xalanın yanına gedir.",
      poster:
        "https://cinemastercard.az/site/assets/files/0/32/47/457/paddington-3_700x1000.350x0.jpg",
    },
    {
      id: 3,
      title: "Panda əməliyyatı",
      category: "adventure",
      about:
        "Kinoulduzu, banditlərin təqib etdiyi pandanı xilas etməyə çalışır. Ceki Çanın öz rolunda oynadığı aksiyon-komediya.",
      poster:
        "https://cinemastercard.az/site/assets/files/0/35/16/400/panda-700x1000.350x0.jpg",
    },
    {
      id: 4,
      title: "Karantina",
      category: "drama",
      about:
        "Beyza Alkoçun eyniadlı əsərinə əsaslanan film, Zeynəp və Onurun bir-birinin ilk sevgisi olmasını cinayət təhqiqatı fonunda izah edir.",
      poster:
        "https://cinemastercard.az/site/assets/files/0/34/79/266/karantina_700x1000.350x0.jpg",
    },
    {
      id: 5,
      title: "Spinozanın tanrısı",
      category: "drama",
      about:
        "Bərq, gənc və istedadlı fotoqrafdır. Günlərin birində qəribə yuxu görür və bu yuxu onun həyatını dəyişir.",
      poster:
        "https://cinemastercard.az/site/assets/files/0/35/47/077/spinozanintanrisi-700x1000.350x0.jpg",
    },
    {
      id: 6,
      title: "Sadece bir an",
      category: "drama",
      about:
        "Barda işləyən Rüzgar təsadüfən Hayal ilə tanış olur və aşiq olur. Lakin onun keçmişi bu münasibətə mane olur.",
      poster:
        "https://cinemastercard.az/site/assets/files/0/35/47/104/sadecebiran-700x1000.350x0.jpg",
    },
    {
      id: 7,
      title: "Kapitan Amerika: Yeni Dünya",
      category: "action",
      about:
        "ABŞ prezidenti Kapitan Amerikanı rəsmi vəzifəyə təyin etmək istəyir, lakin siyasi çəkişmələr və sui-qəsd planı baş qaldırır.",
      poster:
        "https://cinemastercard.az/site/assets/files/0/35/09/931/captain-700x1000.350x0.jpg",
    },
    {
      id: 8,
      title: "Apatıya-2",
      category: "action",
      about:
        "Anasını tapmaq üçün uşaqlar evindən qaçan Akif, həyatın çətinlikləri ilə üzləşir və dramatik hadisələr yaşayır.",
      poster:
        "https://cinemastercard.az/site/assets/files/0/34/80/647/apati_ya-2-700x1000.350x0.jpg",
    },
    {
      id: 9,
      title: "Bricit Cons",
      category: "action",
      about:
        "Bricit həyat yoldaşını itirdikdən sonra yeni tanışlıqlar qurmağa çalışır və həyatına yeni bir insan daxil olur.",
      poster:
        "https://cinemastercard.az/site/assets/files/0/35/16/395/bridget-700x1000.350x0.jpg",
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home movies={movies} />} />
          <Route path="/actions" element={<Actions />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
