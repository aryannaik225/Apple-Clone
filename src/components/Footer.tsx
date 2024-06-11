import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop:{" "}
            <span className="underline text-blue cursor-pointer hover:text-sky-800">
              Find an Apple Store
            </span>{" "}
            or{" "}
            <span className="underline text-blue cursor-pointer hover:text-sky-800">
              other retailer
            </span>{" "}
            near you. Or call 123-456-7890
          </p>
          <div className="bg-neutral-700 my-5 h-[1px] w-full" />
          <div className="flex md:flex-row flex-col md:items-center justify-between">
            <p className="font-semibold text-gray text-xs">
              Copyright @ 2024 Apple Inc. All rights reserved.
            </p>
            <div className="flex">
              {footerLinks.map(
                (link: { name: string; url: string }, i: number) => (
                  <a
                    key={link.name}
                    href={link.url}
                    className="font-semibold text-gray text-xs hover:text-blue cursor-pointer"
                  >
                    {link.name}
                    {i !== footerLinks.length - 1 && (
                      <span className="mx-2"> | </span>
                    )}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
