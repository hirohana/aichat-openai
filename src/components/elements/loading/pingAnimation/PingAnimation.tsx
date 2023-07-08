const PingAnimation = () => {
  return (
    <div className="flex justify-center">
      <span className="relative flex h-4 w-4 mr-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-sky-300"></span>
      </span>
    </div>
  );
};

export { PingAnimation };
