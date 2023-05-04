import PropTypes from "prop-types";

export default function Score({ score }) {
  return (
    <div className="flex w-fit min-w-[210px] items-center justify-between gap-x-3 rounded-full border-2 border-secondary-lightest px-8 py-2 ">
      <div className="img-wrapper">
        <svg
          width="52"
          height="51"
          viewBox="0 0 52 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-[34px]"
        >
          <path
            d="M26.0118 33.8823V48"
            stroke="#DFC89B"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M34.4824 48H17.5412"
            stroke="#DFC89B"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M39.785 2.86274H12.2388L14.3299 23.4669C14.8196 26.398 16.1665 28.1402 17.9732 29.2423C19.9205 30.4302 22.6555 31.0196 26.0118 31.0196C29.3682 31.0196 32.1031 30.4302 34.0504 29.2423C35.857 28.1402 37.2039 26.398 37.6935 23.4669L39.785 2.86274Z"
            stroke="#DFC89B"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <mask id="path-4-inside-1_83_1538" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.07064 8.47058H2.14028C1.28955 8.47058 0.600046 9.16012 0.600046 10.0107V14.1176C0.600046 20.3551 5.65671 25.4118 11.8942 25.4118"
            />
          </mask>
          <path
            d="M9.07064 2.7451C12.2327 2.7451 14.7961 5.30848 14.7961 8.47058C14.7961 11.6327 12.2327 14.1961 9.07064 14.1961V2.7451ZM11.8942 19.6863C15.0563 19.6863 17.6197 22.2497 17.6197 25.4118C17.6197 28.5739 15.0563 31.1372 11.8942 31.1372V19.6863ZM9.07064 14.1961H2.14028V2.7451H9.07064V14.1961ZM2.14028 14.1961C4.45138 14.1961 6.32553 12.3225 6.32553 10.0107H-5.12544C-5.12544 5.99775 -1.87228 2.7451 2.14028 2.7451V14.1961ZM6.32553 10.0107V14.1176H-5.12544V10.0107H6.32553ZM6.32553 14.1176C6.32553 17.193 8.8188 19.6863 11.8942 19.6863V31.1372C2.49461 31.1372 -5.12544 23.5172 -5.12544 14.1176H6.32553Z"
            fill="#DFC89B"
            mask="url(#path-4-inside-1_83_1538)"
          />
          <mask id="path-6-inside-2_83_1538" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M42.9529 8.47058H49.8834C50.734 8.47058 51.4235 9.16012 51.4235 10.0107V14.1176C51.4235 20.3551 46.367 25.4118 40.1294 25.4118"
            />
          </mask>
          <path
            d="M42.9529 14.1961C39.7908 14.1961 37.2274 11.6327 37.2274 8.47058C37.2274 5.30848 39.7908 2.7451 42.9529 2.7451V14.1961ZM40.1294 31.1372C36.9673 31.1372 34.4039 28.5739 34.4039 25.4118C34.4039 22.2497 36.9673 19.6863 40.1294 19.6863V31.1372ZM42.9529 2.7451H49.8834V14.1961H42.9529V2.7451ZM49.8834 2.7451C53.8961 2.7451 57.149 5.99802 57.149 10.0107H45.698C45.698 12.3222 47.5719 14.1961 49.8834 14.1961V2.7451ZM57.149 10.0107V14.1176H45.698V10.0107H57.149ZM57.149 14.1176C57.149 23.5172 49.5291 31.1372 40.1294 31.1372V19.6863C43.2048 19.6863 45.698 17.193 45.698 14.1176H57.149Z"
            fill="#DFC89B"
            mask="url(#path-6-inside-2_83_1538)"
          />
        </svg>
      </div>

      <span className="font-ibarra text-lg text-secondary-lightest">
        {score} pts
      </span>
    </div>
  );
}

Score.propTypes = {
  score: PropTypes.number.isRequired,
};
