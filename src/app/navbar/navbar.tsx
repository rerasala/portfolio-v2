function NavBar() {
  return (
    <>
      <div className="flex flex-row items-center justify-center p-7 sticky top-0 z-50 bg-sky-950">
        <div className = "px-10 hover:underline font-mono">
          <a href="#about">About</a>
        </div>
        <div className = "px-10 hover:underline font-mono">
          <a href="#about">Projects</a>
        </div>
        <div className = "px-10 hover:underline font-mono">
          <a target = "_blank" href="/resume.pdf">Resume</a>
        </div>
      </div>
    </>
  );
}

export default NavBar;