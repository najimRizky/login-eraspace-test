type Props = {
    className?: string;
  };
  
  function GoogleIcon(props: Props) {
    const { className = "" } = props;
  
    return (
      <svg
        className={className}
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.6666 7.15465C13.6666 6.67189 13.6233 6.20771 13.5428 5.76208H7.13086V8.39558H10.7949C10.637 9.24659 10.1574 9.96763 9.43633 10.4504V12.1586H11.6366C12.9239 10.9734 13.6666 9.22802 13.6666 7.15465Z"
          fill="#4285F4"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.13083 13.8081C8.96902 13.8081 10.5101 13.1984 11.6366 12.1587L9.4363 10.4504C8.82667 10.8589 8.04683 11.1003 7.13083 11.1003C5.35764 11.1003 3.85676 9.9027 3.3214 8.29352H1.04688V10.0574C2.16712 12.2824 4.46949 13.8081 7.13083 13.8081Z"
          fill="#34A853"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.32092 8.29337C3.18476 7.88489 3.10739 7.44855 3.10739 6.99983C3.10739 6.55112 3.18476 6.11478 3.32092 5.7063V3.94238H1.0464C0.585305 4.86148 0.322266 5.90126 0.322266 6.99983C0.322266 8.09841 0.585305 9.13819 1.0464 10.0573L3.32092 8.29337Z"
          fill="#FBBC05"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.13083 2.89972C8.13038 2.89972 9.02781 3.24322 9.73338 3.91784L11.6861 1.96515C10.507 0.866576 8.96592 0.191956 7.13083 0.191956C4.46949 0.191956 2.16712 1.71759 1.04688 3.9426L3.3214 5.70651C3.85676 4.09732 5.35763 2.89972 7.13083 2.89972Z"
          fill="#EA4335"
        />
      </svg>
    );
  }
  
  export default GoogleIcon;
  