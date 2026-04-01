export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-center items-center">
      <p className="text-sm texted-muted-foreground">
        &copy; {new Date().getFullYear()} Vidhan Pansara • All rights reserved
      </p>
    </footer>
  );
};
