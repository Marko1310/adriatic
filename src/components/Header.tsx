function Header() {
  return (
    <div className="mb-4 flex h-24 items-center justify-between border p-4 shadow-md">
      <div className="flex items-center gap-4">
        <img
          className="h-10 w-10"
          src="/assets/beach-umbrella.svg"
          alt="logo"
        />
        <h1 className="text-2xl font-semibold tracking-wider">Adriatic.hr</h1>
      </div>
    </div>
  );
}
export default Header;
