import Onboarding from "../onboarding/Onboarding";
import Matching from "../matching/Matching";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Conversations from "../messages/Conversations";

const Interface = () => {
  const screen = useSelector((state) => state.general.screen);
  const users = useSelector((state) => state.matching.users);
  console.log(users)
  return (
    <>
      {screen === 0 ? null : <Navbar />}

      {screen === 0 && <Onboarding />}

      {screen === 1 && users.length > 0 && <Matching />}

      {screen === 2 && <Conversations />}

      <Footer />
    </>
  );
};

export default Interface;
