import { Logo } from "@/components/sections/logo";
import { siteConfig } from "@/config/site";

const columnTitle = "font-heading text-base font-extrabold uppercase";
const smallText = "font-sans text-xs font-bold md:text-sm";

export function Footer() {
  const { contact, hours, social } = siteConfig.footer;

  return (
    <footer className="flex min-h-[28rem] flex-col justify-between gap-16 border-t border-border bg-secondary px-5 py-6 md:min-h-[30rem] md:px-6">
      {/* Logo row: mark left, wordmark right on md+, stacked on mobile */}
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <Logo variant="footer" />
        <p className="font-heading text-[3rem] font-bold md:text-[3.5rem] lg:text-[4rem] leading-none tracking-tighter">
          {siteConfig.name}
        </p>
      </div>

      {/* Info columns: stacked on mobile, 3 across on md+ */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1fr_auto] md:gap-6 lg:grid-cols-3">
        <div className="flex flex-col gap-4">
          <h2 className={columnTitle}>{contact.heading}</h2>
          <address className={`${smallText} not-italic`}>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
          </address>
        </div>

        <div className="flex flex-col gap-4 lg:justify-self-start">
          <h2 className={columnTitle}>{hours.heading}</h2>
          <dl className={`${smallText} grid grid-cols-[8rem_auto] justify-start gap-y-0.5 uppercase md:grid-cols-[9rem_auto]`}>
            {hours.items.map((item) => (
              <div key={item.day} className="contents">
                <dt>{item.day}</dt>
                <dd>{item.time}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex flex-col gap-4 lg:items-end">
          <h2 className={columnTitle}>{social.heading}</h2>
          <ul className={`${smallText} flex flex-col lg:items-start`}>
            {social.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
