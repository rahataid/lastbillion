import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Divide Research - LastBillion',
  description:
    "Explore LastBillion's research on digital inclusion, focusing on challenges and solutions for connecting the last billion people to the digital world.",
  keywords:
    'digital divide research, digital inclusion studies, connectivity challenges, underserved populations, technology access research',
};

export default function ResearchPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">
          Digital Divide Research for the Last Billion
        </h1>
        <p className="text-xl mb-8">
          Our research focuses on understanding the challenges faced by the last
          billion people to be digitally connected and developing innovative
          solutions to bridge this gap.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Current Digital Inclusion Research Areas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Digital Literacy in Underserved Communities</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Investigating effective methods to improve digital literacy
                among underserved populations and reduce the digital divide.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Connectivity Infrastructure Challenges</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Analyzing barriers to digital infrastructure development in
                remote and rural areas to enhance global connectivity.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Cultural Barriers to Digital Adoption</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Examining cultural factors that may hinder digital adoption and
                developing strategies to address them for inclusive access.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Economic Impact of Digital Inclusion</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Assessing the economic benefits of digital inclusion for
                individuals and communities in underserved regions.
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-semibold mb-4">
          Contribute to Digital Divide Research
        </h2>
        <p className="mb-6">
          We welcome researchers, academics, and organizations to contribute to
          our ongoing digital inclusion studies or propose new research
          initiatives focused on bridging the digital divide.
        </p>
      </main>
      <Footer />
    </div>
  );
}
