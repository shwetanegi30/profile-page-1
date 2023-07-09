import * as React from "react";

export const PdImage = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={65}
    height={65}
    fill="none"
    style={{ marginTop: "19px", marginLeft: "18px" }}
    {...props}
  >
    <path fill="url(#a)" d="M0 0h65v65H0z" />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="scale(.0037)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="b"
        width={180}
        height={180}
      />
    </defs>
  </svg>
);

export const Home = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={38}
    fill="none"
    style={{ transform: "scale(0.8)" }}
    {...props}
  >
    <path
      fill="#FF4D01"
      d="m25 6.328 12.5 9.75V33h-5V20h-15v13h-5V16.078L25 6.328ZM25 .5 0 20h7.5v17.333h15v-13h5v13h15V20H50L25 .5Z"
    />
  </svg>
);

export const Notification = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={51}
    height={58}
    fill="none"
    style={{ transform: "scale(0.8)" }}
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#FF4D01"
        d="M25 58.125c2.337 0 4.25-2.175 4.25-4.833h-8.5c0 2.658 1.913 4.833 4.25 4.833Zm12.75-14.5V31.542c0-7.42-3.464-13.63-9.563-15.274v-1.643C28.188 12.619 26.764 11 25 11c-1.764 0-3.188 1.62-3.188 3.625v1.643c-6.077 1.644-9.562 7.83-9.562 15.274v12.083L8 48.458v2.417h34v-2.417l-4.25-4.833Zm-4.25 2.417h-17v-14.5c0-5.994 3.209-10.875 8.5-10.875s8.5 4.881 8.5 10.875v14.5Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h51v58H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const Trend = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={54}
    height={58}
    fill="none"
    style={{ transform: "scale(0.8)" }}
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#FF4D01"
        d="M44.55 33.09H42.3v-4.834h-4.5v4.834H15.3v-4.834h-4.5v4.834H8.55c-2.475 0-4.5 2.175-4.5 4.833V76.59c0 2.658 2.025 4.833 4.5 4.833h36c2.475 0 4.5-2.175 4.5-4.833V37.923c0-2.658-2.025-4.833-4.5-4.833Zm0 43.5h-36V50.006h36V76.59Zm0-31.417h-36v-7.25h36v7.25Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h54v58H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const TrendLine = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={49}
    height={51}
    fill="none"
    style={{ transform: "scale(0.8)" }}
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#FF4D01"
        d="m7.146 39.291 12.25-12.771 8.166 8.5 17.355-20.315-2.88-2.996-14.474 16.936-8.167-8.5L4.083 36.104l3.063 3.187Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h49v51H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const User = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={52}
    height={56}
    fill="none"
    style={{ transform: "scale(0.8)" }}
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#FF4D01"
        d="M26 14c2.383 0 4.333 2.1 4.333 4.667 0 2.566-1.95 4.666-4.333 4.666s-4.333-2.1-4.333-4.666C21.667 16.1 23.617 14 26 14Zm0 23.333c5.85 0 12.567 3.01 13 4.667H13c.498-1.68 7.172-4.667 13-4.667Zm0-28c-4.788 0-8.667 4.177-8.667 9.334C17.333 23.823 21.212 28 26 28s8.667-4.177 8.667-9.333c0-5.157-3.879-9.334-8.667-9.334Zm0 23.334c-5.785 0-17.333 3.126-17.333 9.333v4.667h34.666V42c0-6.207-11.548-9.333-17.333-9.333Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h52v56H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const Setting = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={81}
    height={81}
    fill="none"
    style={{ transform: "scale(0.6)", marginTop: "226px" }}
    {...props}
  >
    <circle cx={40.5} cy={40.5} r={40.5} fill="#FF7008" />
    <g clipPath="url(#a)">
      <path
        fill="#fff"
        d="M54.28 41.88c.08-.6.12-1.22.12-1.88 0-.64-.04-1.28-.14-1.88l4.06-3.16c.36-.28.46-.82.24-1.22l-3.84-6.64c-.24-.44-.74-.58-1.18-.44l-4.78 1.92c-1-.76-2.06-1.4-3.24-1.88l-.72-5.08a.968.968 0 0 0-.96-.82h-7.68c-.48 0-.86.34-.94.82l-.72 5.08c-1.18.48-2.26 1.14-3.24 1.88l-4.78-1.92c-.44-.16-.94 0-1.18.44l-3.82 6.64c-.24.42-.16.94.24 1.22l4.06 3.16c-.1.6-.18 1.26-.18 1.88 0 .62.04 1.28.14 1.88l-4.06 3.16c-.36.28-.46.82-.24 1.22l3.84 6.64c.24.44.74.58 1.18.44l4.78-1.92c1 .76 2.06 1.4 3.24 1.88l.72 5.08c.1.48.48.82.96.82h7.68c.48 0 .88-.34.94-.82l.72-5.08c1.18-.48 2.26-1.12 3.24-1.88l4.78 1.92c.44.16.94 0 1.18-.44l3.84-6.64c.24-.44.14-.94-.24-1.22l-4.02-3.16ZM40 47.2c-3.96 0-7.2-3.24-7.2-7.2s3.24-7.2 7.2-7.2 7.2 3.24 7.2 7.2-3.24 7.2-7.2 7.2Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M16 16h48v48H16z" />
      </clipPath>
    </defs>
  </svg>
);

// setting-box

export const Arrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    style={{ transform: "scale(0.7)" }}
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#000"
        d="M30.82 30.18 21.66 21l9.16-9.18L28 9 16 21l12 12 2.82-2.82Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const Pencile = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={45}
    height={45}
    fill="none"
    style={{ transform: "scale(0.7)" }}
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#1C1C1C"
        d="m26.363 16.913 1.724 1.724L11.1 35.626H9.375V33.9l16.988-16.987Zm6.75-11.288c-.47 0-.957.188-1.313.544L28.369 9.6l7.031 7.031 3.431-3.431a1.867 1.867 0 0 0 0-2.644L34.444 6.17a1.841 1.841 0 0 0-1.332-.544Zm-6.75 5.981L5.625 32.344v7.031h7.031l20.738-20.738-7.031-7.03Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h45v45H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const SmallNotification = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    style={{ transform: "scale(0.7)" }}
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#858585"
        d="M20 36.667c1.833 0 3.333-1.5 3.333-3.334h-6.666c0 1.834 1.5 3.334 3.333 3.334Zm10-10v-8.334c0-5.116-2.717-9.4-7.5-10.533V6.667c0-1.384-1.117-2.5-2.5-2.5a2.497 2.497 0 0 0-2.5 2.5V7.8C12.733 8.933 10 13.2 10 18.333v8.334L6.667 30v1.667h26.666V30L30 26.667Zm-3.333 1.666H13.333v-10c0-4.133 2.517-7.5 6.667-7.5s6.667 3.367 6.667 7.5v10Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const Security = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    style={{ transform: "scale(0.7)" }}
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#858585"
        d="M30 13.333h-1.667V10c0-4.6-3.733-8.333-8.333-8.333A8.336 8.336 0 0 0 11.667 10v3.333H10a3.343 3.343 0 0 0-3.333 3.334v16.666c0 1.834 1.5 3.334 3.333 3.334h20c1.833 0 3.333-1.5 3.333-3.334V16.667c0-1.834-1.5-3.334-3.333-3.334ZM15 10c0-2.767 2.233-5 5-5s5 2.233 5 5v3.333H15V10Zm15 23.333H10V16.667h20v16.666Zm-10-5c1.833 0 3.333-1.5 3.333-3.333 0-1.833-1.5-3.333-3.333-3.333A3.343 3.343 0 0 0 16.667 25c0 1.833 1.5 3.333 3.333 3.333Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const SmallSetting = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    style={{ transform: "scale(0.7)" }}
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#858585"
        d="M32.383 21.633A12.98 12.98 0 0 0 32.5 20c0-.567-.05-1.1-.117-1.633l3.517-2.75c.317-.25.4-.7.2-1.067l-3.333-5.767a.832.832 0 0 0-.734-.416c-.1 0-.2.016-.283.05l-4.15 1.666a12.178 12.178 0 0 0-2.817-1.633l-.633-4.417c-.05-.4-.4-.7-.817-.7h-6.666c-.417 0-.767.3-.817.7l-.633 4.417c-1.017.417-1.95.983-2.817 1.633L8.25 8.417a.944.944 0 0 0-.3-.05.825.825 0 0 0-.717.416L3.9 14.55a.822.822 0 0 0 .2 1.067l3.517 2.75A13.218 13.218 0 0 0 7.5 20c0 .55.05 1.1.117 1.633L4.1 24.383a.84.84 0 0 0-.2 1.067l3.333 5.767c.15.266.434.416.734.416.1 0 .2-.016.283-.05l4.15-1.666a12.18 12.18 0 0 0 2.817 1.633l.633 4.417c.05.4.4.7.817.7h6.666c.417 0 .767-.3.817-.7l.633-4.417c1.017-.417 1.95-.983 2.817-1.633l4.15 1.666c.1.034.2.05.3.05.283 0 .567-.15.717-.416L36.1 25.45a.841.841 0 0 0-.2-1.067l-3.517-2.75Zm-3.3-2.85A8.9 8.9 0 0 1 29.167 20c0 .35-.034.717-.084 1.217L28.85 23.1l1.483 1.167 1.8 1.4-1.166 2.016-2.117-.85-1.733-.7-1.5 1.134c-.717.533-1.4.933-2.084 1.216l-1.766.717-.267 1.883-.333 2.25h-2.334l-.316-2.25-.267-1.883-1.767-.717a9.456 9.456 0 0 1-2.05-1.183l-1.516-1.167-1.767.717-2.117.85-1.166-2.017 1.8-1.4 1.483-1.166-.233-1.884c-.05-.516-.084-.9-.084-1.233 0-.333.034-.717.084-1.217l.233-1.883-1.483-1.167-1.8-1.4 1.166-2.016 2.117.85 1.733.7 1.5-1.134c.717-.533 1.4-.933 2.084-1.216l1.766-.717.267-1.883.333-2.25h2.317l.317 2.25.266 1.883 1.767.717c.717.3 1.383.683 2.05 1.183l1.517 1.167 1.766-.717 2.117-.85 1.167 2.017-1.784 1.416L28.85 16.9l.233 1.883ZM20 13.333A6.665 6.665 0 0 0 13.333 20 6.665 6.665 0 0 0 20 26.667 6.665 6.665 0 0 0 26.667 20 6.665 6.665 0 0 0 20 13.333Zm0 10A3.343 3.343 0 0 1 16.667 20c0-1.833 1.5-3.333 3.333-3.333 1.833 0 3.333 1.5 3.333 3.333 0 1.833-1.5 3.333-3.333 3.333Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const Query = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    style={{ transform: "scale(0.7)" }}
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#858585"
        d="M18.333 30h3.334v-3.333h-3.334V30ZM20 3.333C10.8 3.333 3.333 10.8 3.333 20c0 9.2 7.467 16.667 16.667 16.667 9.2 0 16.667-7.467 16.667-16.667C36.667 10.8 29.2 3.333 20 3.333Zm0 30C12.65 33.333 6.667 27.35 6.667 20 6.667 12.65 12.65 6.667 20 6.667c7.35 0 13.333 5.983 13.333 13.333 0 7.35-5.983 13.333-13.333 13.333ZM20 10a6.665 6.665 0 0 0-6.667 6.667h3.334c0-1.834 1.5-3.334 3.333-3.334 1.833 0 3.333 1.5 3.333 3.334 0 3.333-5 2.916-5 8.333h3.334c0-3.75 5-4.167 5-8.333A6.665 6.665 0 0 0 20 10Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
);

//header

export const BellIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    style={{ transform: "scale(0.8)" }}
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#1C1C1C"
        d="M15 27.5c1.375 0 2.5-1.125 2.5-2.5h-5c0 1.375 1.125 2.5 2.5 2.5Zm7.5-7.5v-6.25c0-3.838-2.038-7.05-5.625-7.9V5A1.872 1.872 0 0 0 15 3.125 1.872 1.872 0 0 0 13.125 5v.85C9.55 6.7 7.5 9.9 7.5 13.75V20L5 22.5v1.25h20V22.5L22.5 20ZM20 21.25H10v-7.5c0-3.1 1.887-5.625 5-5.625s5 2.525 5 5.625v7.5Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h30v30H0z" />
      </clipPath>
    </defs>
  </svg>
);

//content

export const Checkbox = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 37 36"
    {...props}
  >
    <rect
      width={29.524}
      height={29.694}
      x={0.803}
      y={5.939}
      fill="#23B000"
      rx={5}
    />
    <path
      fill="#fff"
      d="m12.069 25.076-4.55-4.617-1.549 1.56 6.099 6.19 13.092-13.286-1.538-1.56-11.554 11.713Z"
    />
  </svg>
);

export const Eye = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={3} stroke="#33363F" strokeWidth={2} />
    <path
      stroke="#33363F"
      strokeWidth={2}
      d="M20.188 10.934c.388.472.582.707.582 1.066 0 .359-.194.594-.582 1.066C18.768 14.79 15.636 18 12 18c-3.636 0-6.768-3.21-8.188-4.934-.388-.472-.582-.707-.582-1.066 0-.359.194-.594.582-1.066C5.232 9.21 8.364 6 12 6c3.636 0 6.768 3.21 8.188 4.934Z"
    />
  </svg>
);

export const Calender = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 49 48"
    {...props}
  >
    <g clipPath="url(#a)">
      <rect
        width={18}
        height={15}
        x={16}
        y={18}
        stroke="#33363F"
        strokeWidth={2}
        rx={2}
      />
      <path
        fill="#33363F"
        d="M16 22c0-1.886 0-2.828.586-3.414C17.172 18 18.114 18 20 18h10c1.886 0 2.828 0 3.414.586C34 19.172 34 20.114 34 22H16Z"
      />
      <path
        stroke="#33363F"
        strokeLinecap="round"
        strokeWidth={2}
        d="M20 15v3M30 15v3"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.222 0h48.593v48H.222z" />
      </clipPath>
    </defs>
  </svg>
);

export const Folder = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#222"
      d="M3 8h13.2c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 10.28 21 11.12 21 12.8v1.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 19 17.88 19 16.2 19H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 16.72 3 15.88 3 14.2V8ZM3 8c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C4.602 5 5.068 5 6 5h2.343c.818 0 1.226 0 1.594.152.368.152.657.442 1.235 1.02L13 8H3Z"
    />
  </svg>
);
