import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <div className="page-wrapper flex min-h-screen items-center justify-end bg-[url('../assets/img/background-404-screen.png')] bg-cover pr-20">
      {/* <Layout> */}
      <div className="content-wrapper flex flex-col gap-12 rounded bg-neutral-darkest/40 p-8 text-neutral-lightest backdrop-blur-md">
        <div className="content flex flex-col items-center gap-2">
          <h1 className="flex items-center justify-center gap-2 font-ibarra text-5xl">
            4
            <img
              src="../assets/img/404-error.png"
              alt="howgarts express railway sign"
              className="inline-block mix-blend-screen"
            />
            4
          </h1>
          <p className="font-ibarra text-xl">Sorry Muggle... Page Not Found</p>
        </div>
        <Link
          className="mx-auto flex w-fit rounded-full border-2 border-none bg-[#8E3C3A] px-12 py-3 font-ibarra text-lg"
          to="/"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
}
