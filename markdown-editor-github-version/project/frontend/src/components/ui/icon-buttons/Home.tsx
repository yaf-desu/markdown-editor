import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router";
export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="wrapper" onClick={() => navigate("/home")}>
      <HomeIcon className="icon" fontSize="large" />
    </div>
  );
}
