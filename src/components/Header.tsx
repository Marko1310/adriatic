function Header() {
  return (
    <div className="flex items-center justify-between border p-4 shadow-lg">
      <div className="flex items-center gap-4">
        <img
          className="h-10 w-10"
          src="/assets/beach-umbrella.svg"
          alt="logo"
        />
        <h1 className="text-2xl font-semibold tracking-wider">Adriatic.hr</h1>
      </div>
      <button className="rounded-md border bg-blue-900 p-2 text-white">
        Login
      </button>
    </div>
  );
}
export default Header;
