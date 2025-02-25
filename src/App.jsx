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
import MovieDetails from "./pages/Details/MovieDetails";

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
        "İt Adam, yarı it, yarı insan, qorumağa və xidmət etməyə and içib, pişik supercinayətkar Piti Pişiyi inadla izləyir. Dog Man, öz həyatını daima başqalarına kömək edərək keçirməyə çalışır, amma bir gün Piti Pişiyi onu aldadaraq tələ qurar. Bu, bir cəsur qəhrəmanın izini sürərkən qarşılaşdığı çətinlikləri və mübarizələri göstərir.",
      poster:
        "https://cinemastercard.az/site/assets/files/0/35/01/656/dogman-700x1000.350x0.jpg",
    },
    {
      id: 2,
      title: "Paddinngton",
      category: "adventure",
      about:
        "Braun ailəsinin tamhüquqlu üzvü və Britaniya vətəndaşı olan Paddinngton uzaq vətəninə - Peruya Lüsi xalanın yanına gedir. Lakin yol boyunca qarşısına çox sayda çətinlik çıxır, bu səyahət isə bir çox əyləncəli və dramatik hadisələrlə doludur. Paddinngton yola çıxarkən nəhayət, tapdığı ailəsini və evini tapmağı ümid edir, amma digər tərəfdən Britaniyada da çox maraqlı hadisələr baş verir.",
      poster:
        "https://cinemastercard.az/site/assets/files/0/32/47/457/paddington-3_700x1000.350x0.jpg",
    },
    {
      id: 3,
      title: "Panda əməliyyatı",
      category: "adventure",
      about:
        "Kinoulduzu Ceki Çan, bir pandasını qorumaq üçün komandası ilə birgə çox çətin və təhlikəli bir əməliyyat həyata keçirir. Pandalar banditlər tərəfindən qaçırılır və Ceki Çan, bənzərsiz döyüş bacarıqları ilə bu heyvanı təhlükədən xilas etmək üçün səyahətə çıxır. Bu aksiyon-komediya filmi güclü döyüş səhnələri və gülməli anlarla doludur.",
      poster:
        "https://cinemastercard.az/site/assets/files/0/35/16/400/panda-700x1000.350x0.jpg",
    },
    {
      id: 4,
      title: "Karantina",
      category: "drama",
      about:
        "Beyza Alkoçun eyniadlı əsərinə əsaslanan film, Zeynəp və Onurun bir-birinin ilk sevgisi olmasını cinayət təhqiqatı fonunda izah edir. Zeynəp yeni başladığı məktəbdə artıq ilk günündə epidemiyadan qaynaqlanan bir karantində, cinayət təhqiqatında və Onura qarşı gözləmədiyi bir sevgi üçbucağında özünü tapır. Film, bir tərəfdən gənc sevginin ruhunu, digər tərəfdən sosial məsələləri və psixoloji dramı təcəssüm etdirir.",
      poster:
        "https://cinemastercard.az/site/assets/files/0/34/79/266/karantina_700x1000.350x0.jpg",
    },
    {
      id: 5,
      title: "Spinozanın tanrısı",
      category: "drama",
      about:
        "Bərq, gənc və istedadlı fotoqrafdır. Günlərin birində qəribə bir yuxu görür və bu yuxu onun həyatını dəyişir. Yuxuda gördüyü obraz ona təzyiq və narahatlıq yaratsa da, Bərq bu yuxunun əsl mənasını tapmağa qərar verir. Bu, onun həyatında bir dönüş nöqtəsidir, çünki həyatına yeni insanlar və sirli hadisələr daxil olur. Bərq, fotoqrafiya və yuxular arasında səyahət edərək özünü kəşf edir.",
      poster:
        "https://cinemastercard.az/site/assets/files/0/35/47/077/spinozanintanrisi-700x1000.350x0.jpg",
    },
    {
      id: 6,
      title: "Sadece bir an",
      category: "drama",
      about:
        "Barda işləyən Rüzgar, təsadüfən Hayal ilə tanış olur və aşiq olur. Lakin, Hayalın keçmişindəki gizli sirrlər və münasibətləri, onların arasında məsafə yaradır. Lakin, Rüzgarın Hayala olan sevgisi və keçmişi unudaraq gələcəyə doğru hərəkət etməyə çalışması filmi maraqlı edir. Bu film, keçmişin çəkisi ilə mübarizə edən bir cütlüyün hikayəsini izah edir.",
      poster:
        "https://cinemastercard.az/site/assets/files/0/35/47/104/sadecebiran-700x1000.350x0.jpg",
    },
    {
      id: 7,
      title: "Kapitan Amerika: Yeni Dünya",
      category: "action",
      about:
        "ABŞ prezidenti Kapitan Amerikanı rəsmi vəzifəyə təyin etmək istəyir, lakin siyasi çəkişmələr və sui-qəsd planı baş qaldırır. Kapitan Amerika və dostları yeni bir dünya qurmağa çalışır, amma hər biri siyasi güclərlə mübarizə apararkən qlobal bir təhlükə ilə üzləşir. Filmdə siyasi mübarizələr, müasir döyüş texnikaları və qəhrəmanlıq təcəssüm etdirilir.",
      poster:
        "https://cinemastercard.az/site/assets/files/0/35/09/931/captain-700x1000.350x0.jpg",
    },
    {
      id: 8,
      title: "Apatıya-2",
      category: "action",
      about:
        "Anasını tapmaq üçün uşaqlar evindən qaçan Akif, həyatın çətinlikləri ilə üzləşir və dramatik hadisələr yaşayır. Akifin həyatı, onu müəyyən bir məqsədə doğru aparır. Bu yol, yalnız bir uşağın deyil, həm də cəmiyyətin təzyiqləri ilə mübarizə edən hər kəsin həyatını təmsil edir. Filmdə dram və aksiyon elementləri birləşdirilir.",
      poster:
        "https://cinemastercard.az/site/assets/files/0/34/80/647/apati_ya-2-700x1000.350x0.jpg",
    },
    {
      id: 9,
      title: "Bricit Cons",
      category: "action",
      about:
        "Bricit həyat yoldaşını itirdikdən sonra yeni tanışlıqlar qurmağa çalışır və həyatına yeni bir insan daxil olur. Lakin, keçmişin kölgəsi ilə mübarizə etmək və yeni münasibətə başlamaq onun üçün asan deyil. Bricit həyatında bir çox çətinliklərlə qarşılaşır, amma sonradan yeni insanlarla əlaqələr quraraq həyatına yön verir.",
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
          <Route
            path="/movie/:id"
            element={<MovieDetails movies={movies} />}
          ></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
