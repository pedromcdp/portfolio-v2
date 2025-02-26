"use client";

const Footer = () => {
  return (
    <footer className="w-full text-center my-4 font-medium">
      <p>
        Pedro Miguel Pereira{" "}
        <span className="text-primary">&copy; {new Date().getFullYear()}</span>
      </p>
    </footer>
  );
};

export { Footer };
