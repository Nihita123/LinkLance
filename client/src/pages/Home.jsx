import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Rocket, Users, Star } from "lucide-react";

const Home = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="w-full bg-white py-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Connecting Freelancers & Clients Seamlessly
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            LinkLance empowers you to hire top talent or land your next big
            project with ease.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg">
              Explore Projects
            </Button>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-semibold mb-10 text-gray-800">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <Rocket className="text-primary mb-4 h-10 w-10 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Post a Project</h3>
                <p className="text-gray-600">
                  Describe your needs and publish your project in minutes.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Users className="text-primary mb-4 h-10 w-10 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Hire Freelancers</h3>
                <p className="text-gray-600">
                  Browse profiles, chat, and hire the best fit for your job.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <CheckCircle className="text-primary mb-4 h-10 w-10 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Complete & Pay</h3>
                <p className="text-gray-600">
                  Manage work, release payments, and get results securely.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-10 text-gray-800">
            Why Choose LinkLance?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Secure Payments",
              "Verified Freelancers",
              "Real-Time Chat",
              "Project Management Tools",
              "Flexible Hiring Models",
              "24/7 Support",
            ].map((feature, i) => (
              <Card key={i} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-primary">
                    {feature}
                  </h3>
                  <p className="text-gray-600">
                    Experience next-gen freelancing with cutting-edge tools and
                    trust.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-10 text-gray-800">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Aarav P.",
                quote:
                  "LinkLance helped me land consistent freelance gigs. Smooth process and great support!",
              },
              {
                name: "Meera S.",
                quote:
                  "As a startup, we hired skilled professionals in hours. Truly a game-changer.",
              },
              {
                name: "Karan M.",
                quote:
                  "User-friendly platform with all the features you need to grow your freelance business.",
              },
            ].map((testimonial, i) => (
              <Card key={i} className="border border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <Star className="text-yellow-500 mb-4 mx-auto h-6 w-6" />
                  <p className="italic text-gray-700 mb-2">
                    "{testimonial.quote}"
                  </p>
                  <p className="font-semibold text-gray-900 mt-2">
                    {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="text-xl font-bold mb-4 md:mb-0">LinkLance</div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <a href="#" className="hover:underline">
              Terms
            </a>
            <a href="#" className="hover:underline">
              Support
            </a>
          </div>
        </div>
        <p className="text-center text-sm text-gray-400 mt-4">
          &copy; {new Date().getFullYear()} LinkLance. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
