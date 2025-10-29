import React from "react";
import { Bot, MapPin, Phone } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="bg-gradient-to-r from-background to-muted/20 border-t border-border py-16"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Club Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div
                className="w-10 h-10 min-w-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center"
                style={{}}
              >
                <img src="logo.png" className="w-full h-full" />
              </div>

              <span className="text-base sm:text-lg font-bold leading-snug">
                The Robotics Club <span className="text-primary">Pantnagar</span>
              </span>

            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Pioneering the future of robotics and automation at the College of
              Technology, Pantnagar. Join us in our mission to innovate and
              excel.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/team"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Team
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/event"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Event
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/certificate"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Certificate
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Activities */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Activities
            </h3>
            <ul className="space-y-2">
              <li>
                <span className="text-muted-foreground">
                  Robotics Competitions
                </span>
              </li>
              <li>
                <span className="text-muted-foreground">
                  Technical Workshops
                </span>
              </li>
              <li>
                <span className="text-muted-foreground">Research Projects</span>
              </li>
              <li>
                <span className="text-muted-foreground">
                  Industry Collaboration
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">
                  College of Technology
                  <br />
                  Pantnagar University
                  <br />
                  Uttarakhand, India
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">
                  +91 9012967937
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2025 The Robotics Club Pantnagar. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm mt-2 md:mt-0">
              College of Technology, Pantnagar
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
