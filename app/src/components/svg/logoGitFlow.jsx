function GitFlowIcon({ className, currentColor }) {
  return (
    <svg
      width="266"
      height="267"
      viewBox="0 0 266 267"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M133 5V107.4"
        stroke={currentColor || "#1554FF"}
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M133 159V261.4"
        stroke={currentColor || "#1554FF"}
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M235.4 56.2C235.4 76.5686 227.309 96.103 212.906 110.506C198.503 124.909 178.969 133 158.6 133"
        stroke={currentColor || "#F2994A"}
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.6 209.8C30.6 189.431 38.6914 169.897 53.0942 155.494C67.497 141.091 87.0314 133 107.4 133"
        stroke={currentColor || "#EF4444"}
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M235.4 56.2C249.538 56.2 261 44.7385 261 30.6C261 16.4615 249.538 5 235.4 5C221.262 5 209.8 16.4615 209.8 30.6C209.8 44.7385 221.262 56.2 235.4 56.2Z"
        stroke={currentColor || "#F2994A"}
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.6 261C44.7385 261 56.2 249.538 56.2 235.4C56.2 221.261 44.7385 209.8 30.6 209.8C16.4615 209.8 5 221.261 5 235.4C5 249.538 16.4615 261 30.6 261Z"
        stroke={currentColor || "#EF4444"}
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M133 158.6C147.138 158.6 158.6 147.138 158.6 133C158.6 118.862 147.138 107.4 133 107.4C118.862 107.4 107.4 118.862 107.4 133C107.4 147.138 118.862 158.6 133 158.6Z"
        stroke={currentColor || "#1554FF"}
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export default GitFlowIcon;
