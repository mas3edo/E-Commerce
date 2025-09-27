import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <label className={"text-white"}>
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
        <Link className={" text-white p-1 rounded"} to="/">
          ShopNow
        </Link>
      </label>
      <style>{`
        header {
          
          z-index: 1000;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          font-family: Arial, sans-serif;
          background-color: #000;
          padding: 8px 0;
          text-align: center;
          font-size: 0.9rem;
          display: flex;
          justify-content: center;
          align-items: center;

          }
          label {
            margin: 0;
            font-weight: 500;
            color: #fff;
          }
          a {
            color: #fff;
          }
          

      `}</style>
    </header>
  );
}

export default Header;
