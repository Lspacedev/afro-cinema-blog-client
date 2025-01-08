import Nav from "../components/Nav";
import Showcase from "../components/Showcase";
import Posts from "../components/Posts";
import HightlightSection from "../components/HighlightSection";
import MailSection from "../components/MailSection";
import Footer from "../components/Footer";
import { useParams, Outlet } from "react-router-dom";

function Home() {
  const { post_id } = useParams();
  console.log(post_id);
  return (
    <div className="Home">
      <Nav />
      {post_id !== "" && typeof post_id !== "undefined" ? (
        <Outlet />
      ) : (
        <>
          <Showcase />
          <Posts />
          <HightlightSection />
          <MailSection />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Home;
