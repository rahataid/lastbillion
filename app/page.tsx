import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import CoverImage from './lastbillion.webp';

export const metadata: Metadata = {
  title: 'LastBillion - Connecting the Digitally Disconnected',
  description:
    "LastBillion is dedicated to bridging the digital divide through research, collaboration, and innovative technology for the world's underserved populations.",
  keywords:
    'digital inclusion, last billion, digital divide, connectivity, underserved populations, technology access',
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-50 py-20 px-8">
          <div className="container flex flex-col-reverse md:flex-row items-center justify-between">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-5xl">
                Connecting the Last Billion
              </h1>
              <p className="text-xl text-gray-600">
                Empowering the digitally disconnected through research,
                collaboration, and innovative technology solutions.
              </p>
              <Button size="lg" className="mt-4">
                Learn More About Digital Inclusion
              </Button>
            </div>
            <div className="md:w-1/22 mt-10 md:mt-0">
              <Image
                src={CoverImage}
                alt="Last Billion Illustration"
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="flex justify-center py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Digital Inclusion Focus Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Digital Divide Research</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Conduct and share studies on digital inclusion challenges
                    and innovative solutions for underserved communities.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Global Collaboration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Connect humanitarian organizations to pool resources and
                    knowledge for bridging the digital divide.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Inclusive Technology</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Develop and showcase tools designed for the last billion
                    users to improve digital access and literacy.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">
              Join the Digital Inclusion Movement
            </h2>
            <p className="text-xl mb-8">
              Whether you&apos;re a researcher, organization, or technologist,
              your contribution can make a difference in bridging the digital
              divide.
            </p>
            <div className="flex justify-center space-x-4">
              <Button variant="secondary">
                For Digital Inclusion Researchers
              </Button>
              <Button variant="secondary">
                For Humanitarian Organizations
              </Button>
              <Button variant="secondary">For Tech Innovators</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
