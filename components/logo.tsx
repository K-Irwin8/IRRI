export function Logo() {
  return (
    <svg
      width="200"
      height="50"
      viewBox="0 0 200 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-auto h-8 sm:h-10"
    >
      <path
        d="M10 25C10 16.7157 16.7157 10 25 10H40C48.2843 10 55 16.7157 55 25C55 33.2843 48.2843 40 40 40H25C16.7157 40 10 33.2843 10 25Z"
        fill="#2563EB"
      />
      <text
        x="70"
        y="32"
        className="text-xl font-bold"
        style={{ fill: '#1F2937', fontFamily: 'system-ui' }}
      >
        IR Translation
      </text>
      <text
        x="155"
        y="32"
        className="text-xl font-bold"
        style={{ fill: '#2563EB', fontFamily: 'system-ui' }}
      >
        Experts
      </text>
    </svg>
  )
}

