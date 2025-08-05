import { Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/ivblog.png"; // ✅ Replace with your actual logo path

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">

        {/* Brand Logo & Tagline */}
        <div className="flex items-center space-x-3">
          <div className="rounded-lg bg-gradient-to-br from--400 to-pink-500 w-10 h-10 overflow-hidden">
            <img
              src={logo}// ✅ Replace with your actual logo path
              alt="Idea_Log Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-bold text-base">Idea_Log</h3>
            <p className="text-xs text-muted-foreground">For Future Founders</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-3">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://www.instagram.com/ivb_idea_log/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://www.linkedin.com/company/108129335/admin/dashboard/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </Button>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t mt-6 pt-4 text-center text-xs text-muted-foreground">
        © 2025 Idea_Log — Built for dreamers & doers.
      </div>
    </footer>
  );
};

export default Footer;
