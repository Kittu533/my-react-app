import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex gap-16 justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-4 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome,please enter your details
        </p>
        {children}
        {/* <Navigation type={type} /> */}

        {/* Jika kondisi hanya 2 faktor gunakan ternary operator
            Jika lebih dari 2 bisa gunakan yang AND atau bisa menggunakan yang IF
            JIka menggunkan AND kita merender 1 per 1
            kalau menggunakan IF kita merender semua  */}
        {/* Ternary operator  */}
        <p className="text-sm mt-5 text-center">
          {type === "login"
            ? " Dont have an account ? "
            : "Already have an account ? "}

          {type === "login" && (
            <Link className="font-bold text-blue-500" to="/register">
              Register
            </Link>
          )}
          {type === "register" && (
            <Link className="font-bold text-blue-500" to="/login">
              login
            </Link>
          )}
        </p>

        {/* menggunakan operator AND */}
      </div>
    </div>
  );
};
// const Navigation = ({ type }) => {
//   if (type === "login") {
//     return (
//       <p className="text-sm mt-5 text-center">
//         Dont have an account?{"  "}
//         <Link className="font-bold text-blue-500" to="/register">
//           Register
//         </Link>

//       </p>
//     );
//   } else {
//     return (
//       <p className="text-sm mt-5 text-center">
//         Already have an account?{"  "}
//         <Link className="font-bold text-blue-500" to="/login">
//           Login
//         </Link>
//       </p>
//     );
//   }
// };

export default AuthLayout;
