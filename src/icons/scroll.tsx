
const IconMouse = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em" {...props}>
      <path
        fill="currentColor"
        d="M12 5a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 8a8 8 0 1116 0v8a8 8 0 11-16 0V8zm14 0v8a6 6 0 01-12 0V8a6 6 0 1112 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconMouse;
