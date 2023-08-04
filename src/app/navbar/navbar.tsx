function NavBar() {
  return (
    <>
      <div className="flex flex-row items-center justify-center p-7 sticky top-0 z-50 bg-sky-950">
        <a className = "px-10 hover:underline font-mono" href="#about">About</a>
        <a className = "px-10 hover:underline font-mono" href="#projects">Projects</a>
        <a className = "px-10 hover:underline font-mono" href="">Resume</a>
      </div>
    </>
  );
}

export default NavBar;